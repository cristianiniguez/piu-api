import { onlyInfinityPattern } from '@/data/patterns'

const songsMap: Record<string, SongWithStepsHistories> = {
  'beat-of-the-war': {
    id: 'beat-of-the-war',
    name: 'Beat of The War',
    artist: 'BanYa',
    bpm: [140, 202],
    type: 'arcade',
    category: 'original',
    steps: {
      single: [
        { 'fiesta-ex::v1.50': 3 },
        {
          'the-premiere-3::default': 7,
          'exceed::default': 4,
          'exceed-2::default': 5,
          'zero::default': 3,
          'nx::default': 5,
          'nxa::default': 0,
          'fiesta::v1.01': 5,
          'phoenix::v1.00.0': 6
        },
        { 'fiesta-ex::v1.50': 9 },
        {
          'the-premiere-3::default': 9,
          'exceed::default': 7,
          'exceed-2::default': 9,
          'zero::default': 6,
          'nx::default': 10,
          'nxa::default': 0,
          'fiesta::v1.01': 10,
          'xx::v1.00.1': 11,
          'phoenix::v1.00.0': 0
        },
        {
          'the-premiere-3::default': 9,
          'exceed::default': 14,
          'exceed-2::default': 13,
          'nx::default': 15,
          'nxa::default': 0,
          'fiesta::v1.01': 15,
          'xx::v1.00.1': 16
        },
        { 'prime-2::v2.05.0': 18 },
        onlyInfinityPattern('infinity::v1.10', 19),
        { 'prime-2::v2.05.0': 21 }
      ],
      double: [
        {
          'the-premiere-3::default': 10,
          'exceed::default': 7,
          'exceed-2::default': 9,
          'nx::default': 12,
          'nxa::default': 0,
          'fiesta::v1.01': 12,
          'xx::v1.00.1': 13,
          'phoenix::v1.00.0': 0
        },
        {
          'exceed-2::default': 20,
          'zero::default': 19,
          'nxa::default': 0,
          'fiesta::v1.01': 19,
          'phoenix::v1.00.0': 20
        },
        { 'prime-2::v2.05.0': 23, 'phoenix::v1.00.0': 24 }
      ]
    }
  }
}

export default songsMap
