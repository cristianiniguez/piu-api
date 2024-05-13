import { Router } from 'express'
import editions from './data/editions.json'

const api = Router()

api.get('/editions', async (req, res) => {
  res.status(200).json(editions)
})

export default api
