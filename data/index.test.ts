import { test, expect } from 'bun:test'
import songs from './songs'
import { ALL_VERSION_IDS } from './editions'

const isListOfNumbers = (list: unknown): list is number[] => Array.isArray(list) && list.every(Number.isInteger)

expect.extend({
  toBeSorted(list) {
    if (!isListOfNumbers(list)) throw new TypeError('These must be of type number[]!');

    let sorted = true

    for (let index = 0; index < list.length; index++) {
      const prevElement = list[index - 1]
      const element = list[index]
      if (!prevElement || !element) continue
      if (element < prevElement) {
        sorted = false
        break
      }
    }

    return {
      message: () =>
        sorted
          ? `expected ${this.utils.printReceived(list)} not to be sorted`
          : `expected ${this.utils.printReceived(list)} to be sorted`,
      pass: sorted
    }
  }
})

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
            // @ts-ignore -- toBeSorted is a custom matcher
            expect(versionIdxs).toBeSorted()
          })
        })
      })
    })
  })
})
