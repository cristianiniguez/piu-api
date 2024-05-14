import { Router } from 'express'
import editions from './data/editions.json'
import { getVersionId, getVersionName } from './utils'

const api = Router()

api.get('/editions', (req, res) => {
  res.status(200).json(editions)
})

api.get('/versions', (req, res) => {
  const versions = editions.map(({ id, name, versions }) => versions.map(v => ({
    id: getVersionId(id, v),
    name: getVersionName(name, v),
    editionId: id
  }))).flat()

  res.status(200).json(versions)
})

export default api
