export const getVersionId = (editionId: string, version: string) => `${editionId}::${version}`

export const getVersionName = (editionName: string, version: string) => `${editionName} - ${version}`
