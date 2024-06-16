import { onlyInfinityPattern } from '@/data/patterns'

const songsMap: Record<string, SongWithStepsHistories> = {
  'come-to-me': {
    id: 'come-to-me',
    name: 'Come to Me',
    artist: 'BanYa',
    bpm: [100, 107],
    type: 'arcade',
    category: 'original',
    steps: {
      'single': [
        {
          'the-prex-3::default': 1,
          'exceed-2::default': 3,
          'fiesta::v1.01': 0
        },
        { 'fiesta-ex::v1.50': 4 },
        { 'zero::default': 5, 'nx::default': 6 },
        {
          'the-prex-3::default': 3,
          'exceed::default': 7,
          'exceed-2::default': 8
        },
        {
          'the-prex-3::default': 6,
          'exceed::default': 10,
          'nx::default': 11
        },
        {
          'nx2::default': 12,
          'nxa::default': 0,
          'fiesta::v1.01': 12,
          'xx::v1.00.1': 13
        },
        {
          'nx2::default': 17,
          'nxa::default': 0,
          'fiesta::v1.01': 15,
          'xx::v1.00.1': 17
        }
      ],
      'double': [
        { 'the-prex-3::default': 3, 'exceed::default': 6, 'fiesta::v1.01': 0 },
        { 'exceed::default': 12, 'nx::default': 13, 'phoenix::v1.00.0': 14 },
        {
          'nx2::default': 14,
          'nxa::default': 0,
          'fiesta::v1.01': 14,
          'phoenix::v1.00.0': 15
        }
      ],
      'single-p': [{ 'fiesta::v1.01': 3, 'phoenix::v1.00.0': 0 }],
      'double-p': [{ 'fiesta::v1.01': 6, 'phoenix::v1.00.0': 0 }]
    }
  }
}

export default songsMap
