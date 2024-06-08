import { DEFAULT_FORM_VALUES, MAX_LEVEL, MIN_LEVEL } from '@/constants'

const isLevelBetweenMinAndMax = (level: number, min: number, max: number) =>
  level >= min && level <= max

export const getRandomSong = (chart: EditionsMap, params: RandomSongParams) => {
  const matchingSteps: MatchingStep[] = []

  Object.entries(chart).forEach(([edition, versionsMap]) => {
    Object.entries(versionsMap).forEach(([version, songsMap]) => {
      Object.values(songsMap).forEach(({ steps, ...song }) => {
        if (song.type !== params.songType) return

        const stepsMatching =
          steps[params.stepType]?.filter(stepLevel =>
            isLevelBetweenMinAndMax(stepLevel, params.minLevel, params.maxLevel)
          ) ?? []

        stepsMatching.forEach(stepLevel => {
          matchingSteps.push({
            ...song,
            edition,
            stepType: params.stepType,
            stepLevel,
            version
          })
        })
      })
    })
  })

  console.table(matchingSteps)

  return matchingSteps[Math.floor(Math.random() * matchingSteps.length)]
}

export const getValuesFromSearchParams = (
  searchParams: URLSearchParams
): RandomSongParams => {
  const minLevel = +(searchParams.get('minLevel') ?? MIN_LEVEL)
  const maxLevel = +(searchParams.get('maxLevel') ?? MAX_LEVEL)
  return {
    songType: searchParams.get('songType') ?? DEFAULT_FORM_VALUES.songType,
    stepType: searchParams.get('stepType') ?? DEFAULT_FORM_VALUES.stepType,
    minLevel: isNaN(minLevel) ? MIN_LEVEL : minLevel,
    maxLevel: isNaN(maxLevel) ? MAX_LEVEL : maxLevel
  }
}

export const getSearchParamsFromValues = (values: RandomSongParams) =>
  new URLSearchParams({
    ...values,
    minLevel: String(values.minLevel),
    maxLevel: String(values.maxLevel)
  })
