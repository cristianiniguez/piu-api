type Song = {
  name: string
  artist: string
  bpm: number | number[]
  type: string
  tags: string[]
}

type Step = Song & {
  stepType: string
  stepLevel: number
}

type RandomSongParams = {
  gameEdition: string
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
