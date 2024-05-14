import editions from './editions.json'
import { getVersionId, getVersionName } from '../utils'

export const getVersions = () => editions.map(({ id, name, versions }) => versions.map(v => ({
  id: getVersionId(id, v),
  name: getVersionName(name, v),
  editionId: id
}))).flat()
