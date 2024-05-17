import { test, expect } from 'bun:test'
import songs from './songs'
import { getVersions } from '.'

const ALL_VERSION_IDS = getVersions().map(({ id }) => id)

test('All steps have valid version ids', () => {
  Object.values(songs).forEach(mapVersionToSongs => {
    Object.values(mapVersionToSongs).forEach(songs => {
      Object.values(songs).forEach(song => {
        Object.values(song.steps).forEach(stepsList => {
          stepsList.forEach(stepHistory => {
            stepHistory.forEach(stepChange => {
              expect(ALL_VERSION_IDS).toContain(stepChange.versionId)
            })
          })
        })
      })
    })
  })
})

test('All step histories are ordered correctly', () => {
  Object.values(songs).forEach(mapVersionToSongs => {
    Object.values(mapVersionToSongs).forEach(songs => {
      Object.values(songs).forEach(song => {
        Object.values(song.steps).forEach(stepsList => {
          stepsList.forEach(stepHistory => {
            const versionIdxs = stepHistory.map(({ versionId }) => ALL_VERSION_IDS.findIndex(v => v === versionId))
            expect(versionIdxs).not.toContain(-1)
            versionIdxs.forEach((index, i, idxs) => {
              if (i === 0) return
              expect(index).toBeGreaterThan(idxs[i - 1])
            });
          })
        })
      })
    })
  })
})
