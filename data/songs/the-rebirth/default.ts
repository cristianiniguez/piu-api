import { onlyInfinityPattern } from '@/data/patterns'

const songsMap: Record<string, SongWithStepsHistories> = {
  'csikos-post': {
    id: 'csikos-post',
    name: 'Csikos Post',
    artist: 'BanYa',
    bpm: 180,
    type: 'arcade',
    category: 'original',
    steps: {
      single: [
        { 'fiesta::v1.01': 3, 'xx::v1.00.1': 4 },
        {
          'the-rebirth::default': 6,
          'exceed::default': 3,
          'nx::default': 4,
          'nx2::default': 0,
          ...onlyInfinityPattern('infinity::v1.09', 4)
        },
        { 'xx::v1.00.1': 7 },
        {
          'the-rebirth::default': 8,
          'exceed::default': 6,
          'nx::default': 7,
          'nx2::default': 0,
          'fiesta::v1.01': 7,
          'xx::v1.00.1': 8
        },
        { 'fiesta::v1.01': 10, 'xx::v1.00.1': 11, 'phoenix::v1.00.0': 12 },
        {
          'the-rebirth::default': 9,
          'exceed::default': 13,
          'exceed-2::default': 12,
          'nx::default': 13,
          'nx2::default': 0,
          'fiesta::v1.01': 13,
          'phoenix::v1.00.0': 15
        }
      ],
      double: [
        {
          'the-rebirth::default': 8,
          'exceed::default': 6,
          'exceed-2::default': 7,
          'nx::default': 8,
          'nx2::default': 0,
          'fiesta::v1.01': 8,
          'phoenix::v1.00.0': 12
        },
        {
          'exceed::default': 15,
          'exceed-2::default': 14,
          'nx::default': 15,
          'nx2::default': 0,
          ...onlyInfinityPattern('infinity::v1.09', 15)
        },
        { 'fiesta::v1.01': 18, 'fiesta::v1.05': 16 },
        {
          'nx::default': 17,
          'nx2::default': 0,
          ...onlyInfinityPattern('infinity::v1.09', 17)
        },
        { 'prime::v1.12.0': 21, 'xx::v1.00.1': 22 }
      ],
      coop: [{ 'xx::v2.02.0': 2 }]
    }
  },
  'dance-with-me': {
    id: 'dance-with-me',
    name: 'Dance with me',
    artist: 'BanYa',
    bpm: 122,
    type: 'arcade',
    category: 'original',
    steps: {
      'single': [
        { 'fiesta-ex::v1.50': 2 },
        { 'the-rebirth::default': 3, 'the-premiere-3::default': 0 },
        { 'fiesta-ex::v1.50': 4 },
        { 'the-rebirth::default': 4, 'the-premiere-3::default': 0 },
        { 'fiesta-ex::v1.50': 6 },
        {
          'the-rebirth::default': 5,
          'the-premiere-3::default': 0,
          'fiesta-ex::v1.00': 12,
          'phoenix::v1.00.0': 0
        },
        { 'fiesta-ex::v1.30': 14, 'phoenix::v1.00.0': 15 }
      ],
      'double': [
        { 'the-rebirth::default': 5, 'the-premiere-3::default': 0 },
        { 'fiesta-ex::v1.30': 15 },
        { 'xx::v2.06.0': 18 }
      ],
      'single-p': [{ 'fiesta::v1.01': 4, 'phoenix::v1.00.0': 0 }],
      'double-p': [
        { 'fiesta-ex::v1.10': 4, 'phoenix::v1.00.0': 0 },
        { 'fiesta::v1.01': 6, 'phoenix::v1.00.0': 0 }
      ]
    }
  },
  'dr-m': {
    id: 'dr-m',
    name: 'Dr. M',
    artist: 'BanYa',
    bpm: 145,
    type: 'arcade',
    category: 'original',
    steps: {
      single: [
        { 'fiesta::v1.01': 3 },
        {
          'the-rebirth::default': 3,
          'exceed::default': 2,
          'nx::default': 3,
          'nxa::default': 4,
          'fiesta::v1.01': 0,
          ...onlyInfinityPattern('infinity::v1.09', 4)
        },
        { 'xx::v1.00.1': 6 },
        {
          'the-rebirth::default': 5,
          'exceed-2::default': 6,
          'nx::default': 7,
          'xx::v1.00.1': 8,
          'phoenix::v1.00.0': 9
        },
        { 'fiesta-ex::v1.50': 9, 'phoenix::v1.00.0': 10 },
        {
          'the-rebirth::default': 7,
          'exceed::default': 12,
          'nx::default': 11,
          'nxa::default': 12,
          'phoenix::v1.00.0': 14
        },
        { 'nx::default': 15, 'nx2::default': 16 }
      ],
      double: [
        {
          'the-rebirth::default': 7,
          'exceed::default': 6,
          'exceed-2::default': 8,
          'nx::default': 9,
          'nxa::default': 11,
          'phoenix::v1.00.0': 14
        },
        { 'exceed::default': 16, 'xx::v1.00.1': 18 }
      ]
    }
  },
  'emperor': {
    id: 'emperor',
    name: 'Emperor',
    artist: 'BanYa',
    bpm: 150,
    type: 'arcade',
    category: 'original',
    steps: {
      'single': [
        { 'fiesta-ex::v1.50': 2 },
        {
          'the-rebirth::default': 3,
          'the-premiere-3::default': 0,
          ...onlyInfinityPattern('infinity::v1.09', 3)
        },
        {
          'the-rebirth::default': 5,
          'the-premiere-3::default': 0,
          'fiesta::v1.01': 5,
          'phoenix::v1.00.0': 0
        },
        { 'fiesta-ex::v1.50': 8 },
        {
          'the-rebirth::default': 6,
          'the-premiere-3::default': 0,
          'fiesta::v1.01': 11,
          'xx::v1.00.1': 12
        },
        { 'fiesta::v1.01': 16 }
      ],
      'double': [
        {
          'the-rebirth::default': 6,
          'the-premiere-3::default': 0
        },
        { 'fiesta::v1.01': 17 }
      ],
      'single-p': [{ 'fiesta-ex::v1.20': 3, 'phoenix::v1.00.0': 0 }],
      'double-p': [
        { 'fiesta-ex::v1.20': 3, 'phoenix::v1.00.0': 0 },
        onlyInfinityPattern('infinity::v1.09', 8)
      ],
      'coop': [{ 'xx::v2.06.0': 2 }]
    }
  },
  'get-your-groove-on': {
    id: 'get-your-groove-on',
    name: 'Get Your Groove On',
    artist: 'BanYa',
    bpm: 96,
    type: 'arcade',
    category: 'original',
    steps: {
      single: [
        {
          'the-rebirth::default': 2,
          'exceed::default': 1,
          'zero::default': 0,
          'fiesta-ex::v1.00': 4,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 4
        },
        {
          'the-rebirth::default': 3,
          'exceed::default': 4,
          'exceed-2::default': 5,
          'zero::default': 0,
          'fiesta-ex::v1.00': 6,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 6,
          'phoenix::v1.00.0': 7
        },
        {
          'the-rebirth::default': 7,
          'exceed::default': 8,
          'exceed-2::default': 7,
          'zero::default': 0,
          'fiesta-ex::v1.00': 13,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 13,
          'xx::v1.00.1': 12
        }
      ],
      double: [
        {
          'the-rebirth::default': 4,
          'exceed::default': 5,
          'exceed-2::default': 8,
          'zero::default': 0,
          'fiesta-ex::v1.00': 9,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 9,
          'phoenix::v1.00.0': 10
        },
        { 'prime-2::v1.10.0': 21, 'xx::v1.00.1': 22 }
      ]
    }
  },
  'love-is-a-danger-zone': {
    id: 'love-is-a-danger-zone',
    name: 'Love is a Danger Zone',
    artist: 'BanYa',
    bpm: 140,
    type: 'arcade',
    category: 'original',
    steps: {
      single: [
        {
          'the-rebirth::default': 3,
          'exceed::default': 2,
          'nx::default': 3,
          'nxa::default': 4,
          'fiesta::v1.01': 3,
          'fiesta::v1.20': 0,
          ...onlyInfinityPattern('infinity::v1.09', 4)
        },
        { 'fiesta::v1.10': 3, 'phoenix::v1.00.0': 4 },
        {
          'the-rebirth::default': 8,
          'exceed::default': 6,
          'nx2::default': 5,
          'nxa::default': 7,
          'phoenix::v1.00.0': 8
        },
        { 'fiesta-ex::v1.50': 10, 'phoenix::v1.00.0': 11 },
        { 'nx::default': 16, 'fiesta::v1.01': 15, 'xx::v1.00.1': 17 },
        { 'exceed-2::default': 18, 'zero::default': 19 }
      ],
      double: [
        { 'nx::default': 8, 'nxa::default': 0 },
        {
          'the-rebirth::default': 6,
          'exceed::default': 5,
          'exceed-2::default': 6,
          'phoenix::v1.00.0': 11
        },
        { 'nxa::default': 7, 'fiesta::v1.01': 15, 'xx::v1.00.1': 17 },
        { 'exceed-2::default': 20, 'xx::v1.00.1': 21 }
      ],
      coop: [{ 'prime::v1.06.0': 2 }]
    }
  },
  'maria': {
    id: 'maria',
    name: 'Maria',
    artist: 'BanYa',
    bpm: 136,
    type: 'arcade',
    category: 'original',
    steps: {
      'single': [
        { 'the-rebirth::default': 3, 'exceed::default': 2, 'zero::default': 0 },
        {
          'the-rebirth::default': 6,
          'exceed::default': 5,
          'zero::default': 0,
          'fiesta::v1.01': 6,
          'phoenix::v1.00.0': 7
        },
        {
          'the-rebirth::default': 6,
          'exceed::default': 8,
          'zero::default': 0,
          'fiesta::v1.01': 11,
          'phoenix::v1.00.0': 12
        },
        { 'fiesta::v1.01': 15, 'phoenix::v1.00.0': 16 },
        { 'prime::v1.12.0': 18 }
      ],
      'double': [
        {
          'the-rebirth::default': 6,
          'exceed::default': 5,
          'exceed-2::default': 6,
          'zero::default': 0
        },
        { 'fiesta::v1.01': 15, 'phoenix::v1.00.0': 16 },
        { 'prime-2::v1.09.0': 19, 'xx::v1.00.1': 20, 'phoenix::v1.00.0': 21 }
      ],
      'double-p': [{ 'fiesta::v1.01': 6, 'phoenix::v1.00.0': 0 }]
    }
  },
  'miss-s-story': {
    id: 'miss-s-story',
    name: "Miss S' story",
    artist: 'BanYa',
    bpm: 111,
    type: 'arcade',
    category: 'original',
    steps: (() => {
      const rebirthToNXAPattern: StepHistoryPattern = level => ({
        'the-rebirth::default': level,
        'the-premiere-3::default': 0,
        'nx2::default': level,
        'nxa::default': 0
      })

      const fiestaToPrime2Pattern: StepHistoryPattern = level => ({
        'fiesta::v1.01': level,
        'prime::v1.00.0': 0,
        'prime-2::v1.00.0': level
      })

      return {
        'single': [
          rebirthToNXAPattern(3),
          {
            ...rebirthToNXAPattern(5),
            ...fiestaToPrime2Pattern(5),
            'phoenix::v1.00.0': 7
          },
          {
            'the-rebirth::default': 3,
            'the-premiere-3::default': 0,
            'nx2::default': 12,
            'nxa::default': 0,
            ...onlyInfinityPattern('infinity::v1.09', 12)
          },
          { ...fiestaToPrime2Pattern(18), 'xx::v1.00.1': 19 }
        ],
        'double': [rebirthToNXAPattern(3), fiestaToPrime2Pattern(19)],
        'single-p': [{ ...fiestaToPrime2Pattern(3), 'phoenix::v1.00.0': 0 }],
        'double-p': [{ ...fiestaToPrime2Pattern(5), 'phoenix::v1.00.0': 0 }]
      }
    })()
  },
  'mission-possible': {
    id: 'mission-possible',
    name: 'Mission Possible',
    artist: 'BanYa',
    bpm: 124,
    type: 'arcade',
    category: 'original',
    steps: (() => {
      const fiestaEXToPrime2Pattern: StepHistoryPattern = level => ({
        'fiesta-ex::v1.00': level,
        'prime::v1.00.0': 0,
        'prime-2::v1.00.0': level
      })

      return {
        single: [
          {
            'the-rebirth::default': 2,
            'the-premiere-3::default': 0,
            ...fiestaEXToPrime2Pattern(5)
          },
          {
            'the-rebirth::default': 4,
            'the-premiere-3::default': 0,
            ...fiestaEXToPrime2Pattern(7)
          },
          {
            'the-rebirth::default': 4,
            'the-premiere-3::default': 0,
            ...fiestaEXToPrime2Pattern(13),
            'phoenix::v1.00.0': 0
          },
          {
            'fiesta-ex::v1.20': 19,
            'prime::v1.00.0': 0,
            'prime-2::v1.00.0': 19
          }
        ],
        double: [
          {
            'the-rebirth::default': 6,
            'the-premiere-3::default': 0,
            ...fiestaEXToPrime2Pattern(8),
            'phoenix::v1.00.0': 0
          }
        ]
      }
    })()
  },
  'my-way': {
    id: 'my-way',
    name: 'My Way',
    artist: 'BanYa',
    bpm: 118,
    type: 'arcade',
    category: 'original',
    steps: {
      'single': [
        {
          'the-rebirth::default': 2,
          'the-prex-3::default': 0,
          'exceed-2::default': 2,
          'nx::default': 0
        },
        { 'fiesta-ex::v1.50': 3, 'phoenix::v1.00.0': 4 },
        {
          'the-rebirth::default': 4,
          'the-prex-3::default': 0,
          'exceed-2::default': 5,
          'nx::default': 0,
          'fiesta::v1.01': 5,
          'phoenix::v1.00.0': 6
        },
        { 'fiesta-ex::v1.50': 8 },
        {
          'the-rebirth::default': 8,
          'the-prex-3::default': 0,
          'exceed-2::default': 12,
          'nx::default': 0,
          'fiesta::v1.01': 12,
          'xx::v1.00.1': 14,
          'phoenix::v1.00.0': 15
        },
        onlyInfinityPattern('infinity::v1.09', 15)
      ],
      'double': [
        {
          'the-rebirth::default': 4,
          'the-prex-3::default': 0,
          'exceed-2::default': 6,
          'nx::default': 0
        },
        {
          'exceed-2::default': 15,
          'nx::default': 0,
          'fiesta::v1.01': 15,
          'phoenix::v1.00.0': 16
        },
        { 'prime-2::v1.09.0': 18 }
      ],
      'single-p': [{ 'fiesta::v1.01': 2, 'phoenix::v1.00.0': 0 }],
      'double-p': [
        { 'fiesta-ex::v1.20': 4, 'phoenix::v1.00.0': 0 },
        { 'fiesta::v1.01': 6, 'phoenix::v1.00.0': 0 }
      ]
    }
  },
  'oy-oy-oy': {
    id: 'oy-oy-oy',
    name: 'Oy Oy Oy',
    artist: 'BanYa',
    bpm: 148,
    type: 'arcade',
    category: 'original',
    steps: {
      'single': [
        {
          'the-rebirth::default': 4,
          'exceed::default': 3,
          'zero::default': 0,
          ...onlyInfinityPattern('infinity::v1.09', 3)
        },
        { 'fiesta-ex::v1.50': 4 },
        {
          'the-rebirth::default': 7,
          'exceed::default': 6,
          'zero::default': 0,
          'fiesta::v1.01': 6,
          'phoenix::v1.00.0': 8
        },
        {
          'the-rebirth::default': 3,
          'exceed::default': 8,
          'zero::default': 0,
          'fiesta::v1.01': 8,
          'phoenix::v1.00.0': 9
        },
        { 'fiesta-ex::v1.30': 13, 'phoenix::v1.00.0': 14 },
        onlyInfinityPattern('infinity::v1.10', 16)
      ],
      'double': [
        {
          'the-rebirth::default': 7,
          'exceed::default': 6,
          'exceed-2::default': 7,
          'zero::default': 0
        },
        { 'fiesta-ex::v1.30': 13 },
        onlyInfinityPattern('infinity::v1.10', 18)
      ],
      'single-p': [{ 'fiesta-ex::v1.20': 2, 'phoenix::v1.00.0': 0 }],
      'double-p': [
        { 'fiesta-ex::v1.20': 3, 'phoenix::v1.00.0': 0 },
        { 'fiesta::v1.01': 7 }
      ]
    }
  },
  'point-break': {
    id: 'point-break',
    name: 'Point Break',
    artist: 'BanYa',
    bpm: 92,
    type: 'arcade',
    category: 'original',
    steps: {
      'single': [
        {
          'the-rebirth::default': 1,
          'the-premiere-3::default': 0,
          'exceed-2::default': 1,
          'nx::default': 3,
          'fiesta::v1.01': 0
        },
        { 'xx::v2.02.0': 3 },
        {
          'the-rebirth::default': 3,
          'the-premiere-3::default': 0,
          'exceed-2::default': 4,
          'nx::default': 6
        },
        { 'xx::v2.02.0': 9, 'phoenix::v1.00.0': 8 },
        {
          'the-rebirth::default': 4,
          'the-premiere-3::default': 0,
          'exceed-2::default': 8,
          'nx::default': 9,
          'fiesta::v1.01': 0,
          ...onlyInfinityPattern('infinity::v1.09', 9)
        },
        { 'xx::v2.02.0': 13 }
      ],
      'double': [
        {
          'the-rebirth::default': 5,
          'the-premiere-3::default': 0,
          'exceed-2::default': 5,
          'nx::default': 6,
          'fiesta::v1.01': 0
        },
        { 'xx::v2.02.0': 9, 'phoenix::v1.00.0': 7 },
        {
          'nx2::default': 13,
          'fiesta::v1.01': 0,
          ...onlyInfinityPattern('infinity::v1.09', 13)
        },
        { 'fiesta::v1.01': 14 }
      ],
      'single-p': [{ 'fiesta::v1.01': 3, 'phoenix::v1.00.0': 0 }],
      'double-p': [{ 'fiesta::v1.01': 6, 'phoenix::v1.00.0': 0 }]
    }
  },
  'set-me-up': {
    id: 'set-me-up',
    name: 'Set me up',
    artist: 'BanYa',
    bpm: 120,
    type: 'arcade',
    category: 'original',
    steps: {
      'single': [
        { 'the-rebirth::default': 2, 'the-premiere-3::default': 0 },
        { 'fiesta-ex::v1.50': 2 },
        { 'fiesta-ex::v1.50': 4 },
        { 'the-rebirth::default': 4, 'the-premiere-3::default': 0 },
        { 'fiesta-ex::v1.50': 6 },
        {
          'the-rebirth::default': 7,
          'the-premiere-3::default': 0,
          'fiesta-ex::v1.00': 9,
          'phoenix::v1.00.0': 10
        },
        { 'fiesta-ex::v1.30': 13, 'phoenix::v1.00.0': 14 }
      ],
      'double': [
        { 'the-rebirth::default': 6, 'the-premiere-3::default': 0 },
        onlyInfinityPattern('infinity::v1.09', 13),
        { 'xx::v2.01.0': 16, 'phoenix::v1.00.0': 17 }
      ],
      'single-p': [{ 'fiesta::v1.01': 4, 'phoenix::v1.00.0': 0 }],
      'double-p': [
        { 'fiesta-ex::v1.10': 4, 'phoenix::v1.00.0': 0 },
        { 'fiesta::v1.01': 7, 'phoenix::v1.00.0': 0 }
      ]
    }
  },
  'street-show-down': {
    id: 'street-show-down',
    name: 'Street show down',
    artist: 'BanYa',
    bpm: 124,
    type: 'arcade',
    category: 'original',
    steps: {
      'single': [
        {
          'the-rebirth::default': 3,
          'the-premiere-3::default': 0,
          'exceed-2::default': 4,
          'nx::default': 0,
          'nx2::default': 4,
          'nxa::default': 0
        },
        {
          'the-rebirth::default': 5,
          'the-premiere-3::default': 0,
          'exceed-2::default': 7,
          'nx::default': 0,
          'nx2::default': 7,
          'nxa::default': 0,
          'fiesta::v1.01': 7,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 7,
          'phoenix::v1.00.0': 8
        },
        { 'xx::v2.07.0': 11 },
        {
          'the-rebirth::default': 4,
          'the-premiere-3::default': 0,
          'exceed-2::default': 8,
          'nx::default': 0,
          'nx2::default': 8,
          'nxa::default': 0,
          'fiesta::v1.01': 12
        },
        {
          'fiesta::v1.01': 15,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 15,
          'phoenix::v1.00.0': 16
        }
      ],
      'double': [
        {
          'the-rebirth::default': 2,
          'the-premiere-3::default': 0,
          'exceed-2::default': 6,
          'nx::default': 0,
          'nx2::default': 6,
          'nxa::default': 0
        },
        {
          'exceed-2::default': 14,
          'zero::default': 13,
          'nx::default': 0,
          'nx2::default': 13,
          'nxa::default': 0,
          'fiesta::v1.01': 13,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 13,
          'phoenix::v1.00.0': 16
        },
        { 'xx::v1.02.0': 18, 'phoenix::v1.00.0': 19 }
      ],
      'single-p': [
        {
          'fiesta::v1.01': 4,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 4,
          'phoenix::v1.00.0': 0
        }
      ],
      'double-p': [
        {
          'fiesta::v1.01': 6,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 6,
          'phoenix::v1.00.0': 0
        }
      ]
    }
  },
  'till-the-end-of-time': {
    id: 'till-the-end-of-time',
    name: 'Till the end of time',
    artist: 'BanYa',
    bpm: 140,
    type: 'arcade',
    category: 'original',
    steps: {
      'single': [
        { 'the-rebirth::default': 1, 'the-premiere-3::default': 0 },
        { 'fiesta::v1.01': 2, 'phoenix::v1.00.0': 3 },
        {
          'the-rebirth::default': 2,
          'the-premiere-3::default': 0,
          'fiesta::v1.01': 3
        },
        { 'fiesta::v1.01': 4 },
        {
          'the-rebirth::default': 4,
          'the-premiere-3::default': 0,
          'fiesta::v1.01': 8
        },
        { 'fiesta::v1.01': 9, 'phoenix::v1.00.0': 11 },
        { 'prime::v1.17.0': 13 },
        { 'prime::v1.17.0': 17 }
      ],
      'double': [
        { 'the-rebirth::default': 5, 'the-premiere-3::default': 0 },
        { 'prime::v1.17.0': 8, 'phoenix::v1.00.0': 10 },
        onlyInfinityPattern('infinity::v1.09', 13),
        { 'prime::v1.17.0': 13 },
        { 'prime::v1.17.0': 16 }
      ],
      'single-p': [{ 'fiesta::v1.01': 2 }],
      'double-p': [
        { 'fiesta-ex::v1.10': 3, 'phoenix::v1.00.0': 0 },
        { 'fiesta::v1.01': 6 }
      ]
    }
  },
  'top-city': {
    id: 'top-city',
    name: 'Top City',
    artist: 'BanYa',
    bpm: 110.8,
    type: 'arcade',
    category: 'original',
    steps: {
      single: [
        {
          'the-rebirth::default': 2,
          'the-premiere-3::default': 0,
          'fiesta-ex::v1.00': 4,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 4
        },
        {
          'the-rebirth::default': 5,
          'the-premiere-3::default': 0,
          'fiesta-ex::v1.00': 6,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 6
        },
        {
          'the-rebirth::default': 5,
          'the-premiere-3::default': 0,
          'fiesta-ex::v1.00': 12,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 12,
          'phoenix::v1.00.0': 13
        },
        { 'xx::v2.06.0': 20 }
      ],
      double: [
        {
          'the-rebirth::default': 5,
          'the-premiere-3::default': 0,
          'fiesta-ex::v1.00': 7,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 7,
          'phoenix::v1.00.0': 9
        },
        { 'fiesta-ex::v1.00': 12, 'prime::v1.00.0': 0 },
        { 'xx::v2.06.0': 20, 'phoenix::v1.00.0': 21 }
      ]
    }
  },
  'vook': {
    id: 'vook',
    name: 'Vook',
    artist: 'BanYa',
    bpm: 184,
    type: 'arcade',
    category: 'original',
    steps: {
      single: [
        { 'fiesta-ex::v1.50': 4, 'phoenix::v1.00.0': 3 },
        {
          'the-rebirth::default': 6,
          'exceed::default': 4,
          'nxa::default': 5,
          'fiesta::v1.01': 0,
          ...onlyInfinityPattern('infinity::v1.09', 5)
        },
        { 'fiesta-ex::v1.50': 7 },
        {
          'the-rebirth::default': 8,
          'exceed::default': 7,
          'nx::default': 8,
          'nxa::default': 9,
          'phoenix::v1.00.0': 10
        },
        {
          'the-rebirth::default': 10,
          'exceed::default': 14,
          'nxa::default': 15,
          'phoenix::v1.00.0': 16
        },
        { 'nx2::default': 16, 'nxa::default': 17, 'phoenix::v1.00.0': 18 },
        { 'nx2::default': 18, 'nxa::default': 20 }
      ],
      double: [
        {
          'nx::default': 11,
          'nx2::default': 12,
          'xx::v1.00.1': 13,
          'phoenix::v1.00.0': 15
        },
        {
          'the-rebirth::default': 12,
          'exceed::default': 7,
          'exceed-2::default': 15,
          'nx::default': 16,
          'nxa::default': 17,
          'xx::v1.00.1': 0
        },
        { 'nx::default': 19, 'xx::v1.00.1': 20 },
        {
          'exceed::default': 18,
          'exceed-2::default': 17,
          'zero::default': 18,
          'xx::v1.00.1': 19,
          'phoenix::v1.00.0': 21
        }
      ]
    }
  },
  'we-will-meet-again': {
    id: 'we-will-meet-again',
    name: 'We will meet again',
    artist: 'BanYa',
    bpm: 118,
    type: 'arcade',
    category: 'original',
    steps: {
      single: [
        {
          'the-rebirth::default': 4,
          'the-premiere-3::default': 0,
          'fiesta-ex::v1.00': 3,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 3,
          'xx::v1.00.1': 4
        },
        {
          'the-rebirth::default': 5,
          'the-premiere-3::default': 0,
          'fiesta-ex::v1.00': 8,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 8,
          'phoenix::v1.00.0': 9
        },
        {
          'fiesta-ex::v1.30': 14,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 14,
          'xx::v1.00.1': 13
        },
        {
          'the-rebirth::default': 3,
          'the-premiere-3::default': 0,
          'fiesta-ex::v1.00': 13,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 13,
          'xx::v1.00.1': 14,
          'phoenix::v1.00.0': 0
        }
      ],
      double: [
        {
          'the-rebirth::default': 4,
          'the-premiere-3::default': 0,
          'fiesta-ex::v1.00': 8,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 8,
          'phoenix::v1.00.0': 11
        }
      ]
    }
  },
  'will-o-the-wisp': {
    id: 'will-o-the-wisp',
    name: 'Will-O-The-Wisp',
    artist: 'BanYa',
    bpm: 210,
    type: 'arcade',
    category: 'original',
    steps: {
      single: [
        { 'fiesta-ex::v1.50': 3, 'xx::v1.00.1': 2 },
        { 'the-rebirth::default': 6, 'exceed::default': 4, 'nx::default': 5 },
        {
          'the-rebirth::default': 9,
          'exceed::default': 7,
          'exceed-2::default': 8,
          'nx::default': 10,
          'xx::v1.00.1': 11,
          'phoenix::v1.00.0': 13
        },
        {
          'the-rebirth::default': 9,
          'exceed::default': 12,
          'exceed-2::default': 13,
          'xx::v1.00.1': 14,
          'phoenix::v1.00.0': 16
        },
        { 'nxa::default': 19 }
      ],
      double: [
        { 'fiesta::v1.01': 10, 'xx::v1.00.1': 13, 'phoenix::v1.00.0': 14 },
        {
          'the-rebirth::default': 10,
          'exceed::default': 7,
          'exceed-2::default': 10,
          'nx::default': 13,
          'xx::v1.00.1': 14,
          'phoenix::v1.00.0': 16
        },
        { 'exceed::default': 20, 'exceed-2::default': 19, 'xx::v1.00.1': 20 },
        { 'nxa::default': 21 },
        { 'xx::v2.01.0': 25 }
      ]
    }
  },
  'winter': {
    id: 'winter',
    name: 'Winter',
    artist: 'BanYa',
    bpm: 168,
    type: 'arcade',
    category: 'original',
    steps: {
      single: [
        { 'fiesta::v1.01': 4 },
        {
          'the-rebirth::default': 5,
          'exceed::default': 3,
          'nx::default': 4,
          'fiesta::v1.01': 0,
          ...onlyInfinityPattern('infinity::v1.09', 5)
        },
        { 'fiesta::v1.01': 6, 'xx::v1.00.1': 7 },
        {
          'the-rebirth::default': 8,
          'exceed::default': 7,
          'exceed-2::default': 8,
          'nx::default': 9,
          'nxa::default': 8,
          'xx::v1.00.1': 10,
          'phoenix::v1.00.0': 12
        },
        {
          'the-rebirth::default': 10,
          'exceed::default': 14,
          'nxa::default': 15,
          'xx::v1.00.1': 16
        },
        onlyInfinityPattern('infinity::v1.05', 20),
        { 'prime-2::v1.07.0': 19, 'phoenix::v1.00.0': 20 }
      ],
      double: [
        {
          'the-rebirth::default': 8,
          'exceed::default': 7,
          'exceed-2::default': 9,
          'nx::default': 10,
          'nxa::default': 11,
          'xx::v1.00.1': 12,
          'phoenix::v1.00.0': 14
        },
        { 'fiesta-ex::v1.30': 17 },
        {
          'exceed::default': 18,
          'zero::default': 19,
          'xx::v1.00.1': 20,
          'phoenix::v1.00.0': 21
        }
      ]
    }
  }
}

export default songsMap
