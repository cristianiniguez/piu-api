type SongType = 'arcade' | 'remix' | 'fullsong' | 'shortcut'

type SongCategory = 'original' | 'k-pop'

type StepType = 'single' | 'double' | 'single-p' | 'double-p' | 'coop'

type StepHistory = Partial<Record<Version, number>>

type MapStepTypeToStepHistory = Partial<Record<StepType, StepHistory[]>>

type Song = {
  id: string
  name: string
  artist: string
  bpm: number
  type: SongType
  category: SongCategory
  steps: MapStepTypeToStepHistory
}
