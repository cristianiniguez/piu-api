import { onlyInfinityPattern } from '@/data/patterns'

const songsMap: Record<string, SongWithStepsHistories> = {
  'blazing': {
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
  'dignity': {
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
  },
  'final-audition-3': {
    id: 'final-audition-3',
    name: 'Final Audition 3',
    artist: 'BanYa',
    bpm: 130.5,
    type: 'arcade',
    category: 'original',
    steps: {
      'single': [
        { 'fiesta-ex::v1.50': 2 },
        { 'exceed::default': 2, 'exceed-2::default': 3, 'fiesta::v1.01': 0 },
        { 'fiesta-ex::v1.50': 5 },
        { 'exceed::default': 5, 'nx::default': 6, 'xx::v1.00.1': 8 },
        { 'fiesta-ex::v1.50': 9 },
        { 'exceed::default': 13, 'nx::default': 14, 'xx::v1.00.1': 16 },
        { 'prime::v1.19.0': 17 }
      ],
      'double': [
        {
          'exceed::default': 5,
          'exceed-2::default': 4,
          'nx::default': 5,
          'fiesta::v1.01': 0
        },
        {
          'exceed::default': 17,
          'exceed-2::default': 15,
          'zero::default': 16,
          'nx::default': 17,
          'phoenix::v1.00.0': 18
        },
        { 'nx::default': 18, 'nxa::default': 19 }
      ],
      'single-p': [{ 'fiesta::v1.01': 3, 'phoenix::v1.00.0': 0 }],
      'double-p': [{ 'fiesta::v1.01': 5, 'phoenix::v1.00.0': 0 }]
    }
  },
  'get-up': {
    id: 'get-up',
    name: 'Get Up!',
    artist: 'BanYa',
    bpm: 180,
    type: 'arcade',
    category: 'original',
    steps: {
      single: [
        {
          'exceed::default': 5,
          'exceed-2::default': 4,
          'zero::default': 0,
          'nx2::default': 4,
          'nxa::default': 0,
          'fiesta::v1.01': 4,
          'phoenix::v1.00.0': 5
        },
        {
          'exceed::default': 7,
          'zero::default': 0,
          'nx2::default': 7,
          'nxa::default': 0,
          'fiesta::v1.01': 8,
          'phoenix::v1.00.0': 10
        },
        {
          'exceed::default': 12,
          'exceed-2::default': 13,
          'zero::default': 0,
          'nx2::default': 15,
          'nxa::default': 0,
          'fiesta::v1.01': 13,
          'xx::v1.00.1': 15
        },
        { 'xx::v2.07.0': 21 }
      ],
      double: [
        {
          'exceed::default': 7,
          'zero::default': 0,
          'nx2::default': 7,
          'nxa::default': 0,
          'fiesta::v1.01': 9,
          'xx::v1.00.1': 12,
          'phoenix::v1.00.0': 15
        },
        {
          'exceed::default': 18,
          'exceed-2::default': 16,
          'zero::default': 0,
          'nx2::default': 18,
          'nxa::default': 0,
          'fiesta::v1.01': 17,
          'xx::v1.00.1': 0
        },
        { 'fiesta::v1.01': 18, 'phoenix::v1.00.0': 19 },
        { 'xx::v2.07.0': 23 }
      ]
    }
  },
  'go': {
    id: 'go',
    name: 'Go',
    artist: 'U;NEE',
    bpm: 138,
    type: 'arcade',
    category: 'k-pop',
    steps: {
      'single': [
        { 'exceed::default': 2, 'nx::default': 3, 'prime::v1.00.0': 0 },
        {
          'exceed::default': 3,
          'exceed-2::default': 6,
          'nxa::default': 7,
          'prime::v1.00.0': 0
        },
        {
          'exceed::default': 9,
          'exceed-2::default': 11,
          'nx::default': 12,
          'prime::v1.00.0': 0
        }
      ],
      'double': [
        {
          'exceed::default': 4,
          'exceed-2::default': 3,
          'zero::default': 6,
          'nx::default': 3,
          'fiesta::v1.01': 0
        },
        { 'exceed::default': 12, 'exceed-2::default': 13, 'prime::v1.00.0': 0 }
      ],
      'double-p': [{ 'fiesta::v1.01': 3, 'prime::v1.00.0': 0 }]
    }
  },
  'monkey-fingers': {
    id: 'monkey-fingers',
    name: 'Monkey Fingers',
    artist: 'BanYa',
    bpm: 186,
    type: 'arcade',
    category: 'original',
    steps: {
      'single': [
        { 'fiesta-ex::v1.00': 3, 'xx::v1.00.1': 4 },
        {
          'exceed::default': 4,
          'nx::default': 3,
          'nxa::default': 5,
          'fiesta::v1.01': 0
        },
        { 'fiesta::v1.01': 5, 'phoenix::v1.00.0': 6 },
        {
          'exceed::default': 7,
          'nxa::default': 8,
          'xx::v1.00.1': 9,
          'phoenix::v1.00.0': 10
        },
        { 'exceed::default': 17, 'exceed-2::default': 15 }
      ],
      'double': [
        {
          'exceed::default': 6,
          'nx::default': 7,
          'fiesta::v1.01': 0
        },
        { 'exceed::default': 18, 'nx::default': 17 }
      ],
      'single-p': [{ 'fiesta::v1.01': 5, 'phoenix::v1.00.0': 0 }],
      'double-p': [{ 'fiesta::v1.01': 7 }]
    }
  }
}

export default songsMap
