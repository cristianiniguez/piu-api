import { onlyInfinityPattern } from '@/data/patterns'

const songsMap: Record<string, SongWithStepsHistories> = {
  blazing: {
    id: 'blazing',
    name: 'Blazing',
    artist: 'BanYa',
    bpm: 158,
    type: 'arcade',
    category: 'original',
    steps: {
      single: [
        {
          'exceed::default': 3,
          'nx2::default': 0,
          'fiesta::v1.01': 3,
          'xx::v1.00.1': 4
        },
        {
          'exceed::default': 6,
          'nx2::default': 0,
          'fiesta::v1.01': 6,
          'phoenix::v1.00.0': 7
        },
        { 'fiesta-ex::v1.50': 9 },
        {
          'exceed::default': 14,
          'zero::default': 15,
          'nx2::default': 0,
          'fiesta::v1.01': 15,
          'xx::v1.00.1': 17
        },
        { 'prime-2::v2.04.0': 19, 'phoenix::v1.00.0': 20 }
      ],
      double: [
        { 'exceed::default': 5, 'exceed-2::default': 6, 'nx2::default': 0 },
        {
          'exceed::default': 17,
          'exceed-2::default': 19,
          'nx2::default': 0,
          'fiesta::v1.01': 19,
          'xx::v1.00.1': 20,
          'phoenix::v1.00.0': 21
        }
      ]
    }
  },
  dignity: {
    id: 'dignity',
    name: 'Dignity',
    artist: 'Crash',
    bpm: 195,
    type: 'arcade',
    category: 'k-pop',
    steps: {
      single: [
        {
          'fiesta::v1.10': 3,
          'prime-2::v1.00.0': 0,
          'xx::v1.04.0': 3,
          'phoenix::v1.00.0': 4
        },
        {
          'exceed::default': 5,
          'nx::default': 4,
          'nxa::default': 5,
          'prime-2::v1.00.0': 0,
          'xx::v1.04.0': 5,
          'phoenix::v1.00.0': 6
        },
        {
          'exceed::default': 8,
          'exceed-2::default': 9,
          'nx::default': 12,
          'nx2::default': 11,
          'nxa::default': 12,
          'prime-2::v1.00.0': 0,
          'xx::v1.04.0': 14,
          'phoenix::v1.00.0': 15
        },
        { 'nxa::default': 16, 'prime-2::v1.00.0': 0, 'xx::v1.04.0': 17 },
        {
          'exceed::default': 15,
          'exceed-2::default': 20,
          'prime-2::v1.00.0': 0,
          'xx::v1.04.0': 20,
          'phoenix::v1.00.0': 21
        },
        { 'fiesta-2::v1.60': 22, 'prime-2::v1.00.0': 0, 'xx::v1.04.0': 22 }
      ],
      double: [
        {
          'exceed::default': 12,
          'nx::default': 15,
          'nxa::default': 13,
          'prime-2::v1.00.0': 0,
          'xx::v1.04.0': 17
        },
        {
          'fiesta-ex::v1.30': 18,
          'prime-2::v1.00.0': 0,
          'xx::v1.04.0': 19,
          'phoenix::v1.00.0': 20
        },
        {
          'exceed::default': 20,
          'exceed-2::default': 22,
          'nx::default': 23,
          'prime-2::v1.00.0': 0,
          'xx::v1.04.0': 24
        },
        onlyInfinityPattern('infinity::v1.10', 26),
        { 'xx::v1.04.0': 26 }
      ]
    }
  }
}

export default songsMap
