type Song = {
  id: string
  name: string
  artist: string
  bpm: number
  type: string
  category: string
}

type RandomSongParams = {
  stepType: string
  songType: string
  minLevel: number
  maxLevel: number
}

type Edition = {
  id: string
  name: string
  versions: string[]
  versionIds: string[]
}

type GetEditionsApiResponse = Record<string, Edition>

type StepsMap = Record<string, number[]>
type SongsMap = Record<string, Song & { steps: StepsMap }>
type VersionsMap = Record<string, SongsMap>
type EditionsMap = Record<string, VersionsMap>

type GetChartApiResponse = EditionsMap

type MatchingStep = Song & {
  edition: string
  stepType: string
  stepLevel: number
  version: string
}
