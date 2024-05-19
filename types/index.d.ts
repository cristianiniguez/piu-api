type SongType = 'arcade' | 'remix' | 'fullsong' | 'shortcut'

type SongCategory = 'original' | 'k-pop'

type StepType = 'single' | 'double' | 'single-p' | 'double-p' | 'coop'

type Song = {
  id: string
  name: string
  artist: string
  bpm: number
  type: SongType
  category: SongCategory
  steps: Partial<Record<StepType, Record<string, number>[]>>
}
