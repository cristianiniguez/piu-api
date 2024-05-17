import defaultVersion from './default.json'
import { validateMapVersionToSongsList } from 'utils/validation'

const mapVersionToSongs = validateMapVersionToSongsList({
  default: defaultVersion
})

export default mapVersionToSongs
