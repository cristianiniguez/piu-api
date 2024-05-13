import express from 'express'
import api from './api'

const port = process.env.PORT ?? 3000
const app = express()

app.use('/api', api)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
