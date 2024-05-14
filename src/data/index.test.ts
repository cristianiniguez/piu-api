import { test, expect } from 'bun:test'
import songs from './songs'
import { getVersions } from '.'

const ALL_VERSION_IDS = getVersions().map(({ id }) => id)

test('All steps have valid version ids', () => {
  Object.values(songs).forEach(mapVersionToSongs => {
    Object.values(mapVersionToSongs).forEach(songs => {
      songs.forEach(song => {
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
