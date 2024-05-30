import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:4000/api'
})

class API {
  static async getEditions () {
    const response = await api.get('/editions')
    return response.data
  }

  static async getChart(versionId: string) {
    const response = await api.get(`/chart/${versionId}`)
    return response.data
  }
}

export default API
