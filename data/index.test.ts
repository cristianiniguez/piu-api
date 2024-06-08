import { test, expect } from 'bun:test'
import songs from './songs'
import { ALL_VERSION_IDS } from './editions'

test('All steps have valid version ids', () => {
  Object.values(songs).forEach(mapVersionToSongs => {
    Object.values(mapVersionToSongs).forEach(songs => {
      Object.values(songs).forEach(song => {
        Object.values(song.steps).forEach(stepsList => {
          stepsList.forEach(stepHistory => {
            Object.keys(stepHistory).forEach(versionId => {
              expect(ALL_VERSION_IDS).toContain(versionId)
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
            const versionIdxs = Object.keys(stepHistory).map(versionId =>
              ALL_VERSION_IDS.findIndex(v => v === versionId)
            )
            expect(versionIdxs).not.toContain(-1)
            versionIdxs.forEach((index, i, idxs) => {
              const prevIndex = idxs[i - 1]
              if (!prevIndex) return
              expect(index).toBeGreaterThan(prevIndex)
            })
          })
        })
      })
    })
  })
})
