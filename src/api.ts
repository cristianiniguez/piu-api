import { Router } from 'express'
import { getVersions } from './data'
import editions from './data/editions.ts'

const api = Router()

api.get('/editions', (req, res) => {
  res.status(200).json(editions)
})

api.get('/versions', (req, res) => {
  res.status(200).json(getVersions())
})

export default api
