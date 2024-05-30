import { Router } from 'express'
import { getChart, getVersions, isValidVersionId } from './data'
import editions from './data/editions'
import songs from './data/songs'

const api = Router()

api.get('/editions', (req, res) => {
  res.status(200).json(editions)
})

api.get('/versions', (req, res) => {
  res.status(200).json(getVersions())
})

api.get('/songs/:id', (req, res) => {
  const songId = req.params.id
  const song = Object.values(songs)
    .flatMap(s => Object.values(s).flatMap(s2 => Object.values(s2)))
    .find(({ id }) => id === songId)
  if (!song) return res.status(404).send()
  res.status(200).json(song)
})

api.get('/chart/:versionId', (req, res) => {
  const { versionId } = req.params

  if (!isValidVersionId(versionId)) {
    res.status(400).json({ message: 'Invalid version id' })
    return
  }

  res.status(200).json(getChart(versionId))
})

export default api
