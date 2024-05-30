import { Router } from 'express'
import { getVersions } from './data'
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

export default api
