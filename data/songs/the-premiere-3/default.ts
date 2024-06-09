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
  },
  'bee': {
    id: 'bee',
    name: 'Bee',
    artist: 'BanYa',
    bpm: 160,
    type: 'arcade',
    category: 'original',
    steps: {
      single: [
        {
          'the-premiere-3::default': 5,
          'exceed::default': 3,
          'nxa::default': 4,
          'phoenix::v1.00.0': 0
        },
        { 'fiesta-ex::v1.50': 7 },
        { 'fiesta-ex::v1.50': 10 },
        {
          'the-premiere-3::default': 8,
          'exceed::default': 6,
          'zero::default': 9,
          'nx::default': 8,
          'nxa::default': 11,
          'xx::v1.00.1': 12
        },
        {
          'the-premiere-3::default': 9,
          'exceed::default': 12,
          'exceed-2::default': 13,
          'nx::default': 15,
          'xx::v1.00.1': 16,
          'phoenix::v1.00.0': 17
        },
        { 'nx::default': 18, 'nxa::default': 19 }
      ],
      double: [
        {
          'the-premiere-3::default': 9,
          'nx::default': 11,
          'xx::v1.00.1': 12,
          'phoenix::v1.00.0': 15
        },
        { 'fiesta-ex::v1.20': 19, 'xx::v1.00.1': 20 },
        {
          'exceed::default': 18,
          'exceed-2::default': 20,
          'nx::default': 21,
          'xx::v1.00.1': 22,
          'phoenix::v1.00.0': 23
        },
        { 'nx::default': 23, 'xx::v1.00.1': 24 }
      ]
    }
  },
  'd-gang': {
    id: 'd-gang',
    name: 'D Gang',
    artist: 'BanYa',
    bpm: 150,
    type: 'arcade',
    category: 'original',
    steps: {
      single: [
        {
          'the-premiere-3::default': 6,
          'exceed::default': 3,
          'exceed-2::default': 4,
          'zero::default': 0,
          'fiesta::v1.01': 4,
          'fiesta::v1.20': 0,
          ...onlyInfinityPattern('infinity::v1.10', 4)
        },
        {
          'fiesta::v1.10': 4,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 4,
          'phoenix::v1.00.0': 5
        },
        {
          'the-premiere-3::default': 7,
          'exceed::default': 5,
          'exceed-2::default': 6,
          'zero::default': 0,
          'fiesta::v1.01': 6,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 6
        },
        {
          'the-premiere-3::default': 8,
          'exceed::default': 9,
          'zero::default': 0,
          'fiesta::v1.01': 9,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 9,
          'xx::v1.00.1': 11
        },
        { 'fiesta::v1.01': 18, 'prime::v1.00.0': 0, 'prime-2::v1.00.0': 18 }
      ],
      double: [
        {
          'the-premiere-3::default': 6,
          'exceed::default': 8,
          'exceed-2::default': 7,
          'zero::default': 0,
          'fiesta::v1.01': 7,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 7,
          'phoenix::v1.00.0': 9
        },
        { 'fiesta::v1.01': 15, 'prime::v1.00.0': 0, 'prime-2::v1.00.0': 15 },
        onlyInfinityPattern('infinity::v1.10', 16),
        { 'prime-2::v2.00.0': 17, 'phoenix::v1.00.0': 18 }
      ]
    }
  }
}

export default songsMap
