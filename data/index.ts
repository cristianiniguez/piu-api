import editions, { ALL_VERSION_IDS } from './editions'
import mapEditionToSongs from './songs'
import { getVersionId, getVersionName } from '../utils'

const isObjectEmpty = (obj: object) => Object.values(obj).length === 0

export const getVersions = () =>
  Object.values(editions)
    .map(({ id, name, versions }) =>
      versions.map(v => ({
        id: getVersionId(id, v),
        name: getVersionName(name, v),
        editionId: id
      }))
    )
    .flat()

export const getVersionIdIdx = (versionId: Version) =>
  ALL_VERSION_IDS.findIndex(id => id === versionId)

export const isValidVersionId = (versionId: string): versionId is Version =>
  (ALL_VERSION_IDS as string[]).includes(versionId)

export const isVersionIncluded = (version1: Version, version2: Version) => {
  const version1Index = getVersionIdIdx(version1)
  const version2Index = getVersionIdIdx(version2)
  return version1Index <= version2Index
}

const getStepLevelForVersionId = (
  stepHistory: StepHistory,
  versionId: string
) => {
  if (!isValidVersionId(versionId)) return 0
  return Object.entries(stepHistory).reduce(
    (currentLevel, [historyVersionId, level]) => {
      return isValidVersionId(historyVersionId) &&
        isVersionIncluded(historyVersionId, versionId)
        ? level
        : currentLevel
    },
    0
  )
}

export const getChart = (comingVersionId: Version) => {
  const getLevels = (steps: StepHistory[]) =>
    steps.reduce<number[]>((levels, history) => {
      const level = getStepLevelForVersionId(history, comingVersionId)
      return level > 0 ? [...levels, level] : levels
    }, [])

  const getStepsForSong = (song: SongWithStepsHistories) =>
    Object.entries(song.steps).reduce((stepsMap, [stepType, steps]) => {
      const levelsForStepType = getLevels(steps)
      if (levelsForStepType.length === 0) return stepsMap
      return { ...stepsMap, [stepType]: levelsForStepType }
    }, {})

  const getSongsForVersion = (songsMap: Record<string, SongWithStepsHistories>) =>
    Object.entries(songsMap).reduce((map, [songId, song]) => {
      const stepsForSong = getStepsForSong(song)
      if (isObjectEmpty(stepsForSong)) return map
      const songParsed = { ...song, steps: stepsForSong }
      return { ...map, [songId]: songParsed }
    }, {})

  const getVersionsForEdition = (
    mapVersionToSongs: Record<string, Record<string, SongWithStepsHistories>>
  ) =>
    Object.entries(mapVersionToSongs).reduce(
      (songsByVersion, [versionId, songsMap]) => {
        const songsForVersion = getSongsForVersion(songsMap)
        if (isObjectEmpty(songsForVersion)) return songsByVersion
        return { ...songsByVersion, [versionId]: songsForVersion }
      },
      {}
    )

  return Object.entries(mapEditionToSongs).reduce(
    (songsByEdition, [editionId, mapVersionToSongs]) => {
      const versionsForEdition = getVersionsForEdition(mapVersionToSongs)
      return { ...songsByEdition, [editionId]: versionsForEdition }
    },
    {}
  )
}
