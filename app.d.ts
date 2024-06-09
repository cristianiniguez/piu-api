// --- api ---

type SongType = 'arcade' | 'remix' | 'fullsong' | 'shortcut'

type SongCategory = 'original' | 'k-pop'

type StepType = 'single' | 'double' | 'single-p' | 'double-p' | 'coop'

type StepHistory = Partial<Record<Version, number>>

type StepHistoryPattern = (level: number) => Partial<Record<Version, number>>

type MapStepTypeToStepHistory = Partial<Record<StepType, StepHistory[]>>

type Song = {
  id: string
  name: string
  artist: string
  bpm: number | [number, number]
  type: SongType
  category: SongCategory
}

type SongWithStepsHistories = Song & { steps: MapStepTypeToStepHistory }

// -- ui --

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
