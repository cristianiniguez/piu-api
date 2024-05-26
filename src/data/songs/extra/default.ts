const premiereToPremiere3Pattern: StepHistoryPattern = level => ({
  'the-premiere::default': 0,
  'the-prex::default': level,
  'the-rebirth::default': 0,
  'the-prex-2::default': level,
  'the-premiere-3::default': 0
})

const songsMap: Record<string, Song> = {
  'chicken-wing': {
    id: 'chicken-wing',
    name: 'Chicken Wing',
    artist: 'BanYa',
    bpm: 200,
    type: 'arcade',
    category: 'original',
    steps: {
      single: [
        { 'fiesta-ex::v1.50': 4 },
        { 'fiesta-ex::v1.50': 6 },
        { 'fiesta-ex::v1.50': 9 },
        {
          'extra::default': 3,
          'the-premiere::default': 0,
          'the-prex::default': 7,
          'the-rebirth::default': 0,
          'the-prex-2::default': 7,
          'exceed::default': 10,
          'zero::default': 0,
          'fiesta::v1.01': 10,
          'xx::v1.00.1': 11
        },
        { 'fiesta-2::v1.60': 17 },
        { 'fiesta::v1.01': 19, 'xx::v1.00.1': 20 },
        { 'prime::v1.17.0': 21 }
      ],
      double: [
        {
          'extra::default': 3,
          'the-premiere::default': 0,
          'the-prex::default': 7,
          'the-rebirth::default': 0,
          'the-prex-2::default': 7,
          'exceed::default': 6,
          'exceed-2::default': 11,
          'zero::default': 0,
          'fiesta::v1.01': 11,
          'xx::v1.00.1': 13,
          'phoenix::v1.00.0': 0
        },
        { 'fiesta-ex::v1.50': 17, 'phoenix::v1.00.0': 18 },
        { 'prime::v1.17.0': 23, 'xx::v1.00.1': 22 }
      ]
    }
  },
  'extra-banya-remix': {
    id: 'extra-banya-remix',
    name: 'EXTRA BanYa Remix',
    artist: 'BanYa',
    bpm: 200,
    type: 'remix',
    category: 'original',
    steps: {
      single: [
        {
          'extra::default': 9,
          'the-premiere::default': 0,
          'nx2::default': 10,
          'nxa::default': 8,
          'xx::v1.00.1': 11,
          'phoenix::v1.00.0': 12
        },
        { 'nxa::default': 21 }
      ],
      double: [
        {
          'extra::default': 9,
          'the-premiere::default': 0,
          'nx2::default': 11,
          'nxa::default': 13,
          'xx::v1.00.1': 14,
          'phoenix::v1.00.0': 15
        }
      ]
    }
  },
  'final-audition-ep-1': {
    id: 'final-audition-ep-1',
    name: 'Final Audition Ep. 1',
    artist: 'BanYa',
    bpm: 189,
    type: 'arcade',
    category: 'original',
    steps: {
      single: [
        { 'fiesta-ex::v1.50': 4 },
        { 'fiesta-ex::v1.50': 7, 'phoenix::v1.00.0': 8 },
        {
          'extra::default': 9,
          ...premiereToPremiere3Pattern(9),
          'the-prex-3::default': 9,
          'exceed::default': 6,
          'exceed-2::default': 7,
          'nx::default': 8,
          'phoenix::v1.00.0': 9
        },
        { 'nx::default': 9, 'nx2::default': 10, 'nxa::default': 13 },
        {
          'extra::default': 4,
          ...premiereToPremiere3Pattern(9),
          'the-prex-3::default': 7,
          'exceed::default': 14,
          'exceed-2::default': 15,
          'xx::v1.00.1': 16,
          'phoenix::v1.00.0': 17
        },
        { 'nx2::default': 19, 'xx::v1.00.1': 20, 'phoenix::v1.00.0': 21 }
      ],
      double: [
        {
          'extra::default': 4,
          ...premiereToPremiere3Pattern(10),
          'the-prex-3::default': 10,
          'exceed::default': 7,
          'exceed-2::default': 8,
          'nx::default': 11,
          'xx::v1.00.1': 13,
          'phoenix::v1.00.0': 15
        },
        { 'exceed::default': 19, 'exceed-2::default': 21, 'xx::v1.00.1': 22 },
        { 'nx::default': 22, 'nxa::default': 23 }
      ]
    }
  },
  'mistake': {
    id: 'mistake',
    name: 'Mistake',
    artist: 'U-Too',
    bpm: 110,
    type: 'arcade',
    category: 'k-pop',
    steps: (() => {
      const extraToPremiere3Pattern: StepHistoryPattern = level => ({
        'extra::default': level,
        'the-premiere::default': 0,
        'the-prex::default': level,
        'the-rebirth::default': 0,
        'the-prex-2::default': level,
        'the-premiere-3::default': 0
      })

      return {
        'single': [
          {
            ...extraToPremiere3Pattern(1),
            'nx2::default': 1,
            'fiesta::v1.01': 0
          },
          { 'fiesta::v1.01': 2, 'prime-2::v1.00.0': 0 },
          { 'fiesta::v1.01': 4, 'prime-2::v1.00.0': 0 },
          {
            ...extraToPremiere3Pattern(5),
            'nx::default': 6,
            'prime-2::v1.00.0': 0
          },
          { 'fiesta-ex::v1.30': 11, 'prime-2::v1.00.0': 0 }
        ],
        'double': [
          {
            ...extraToPremiere3Pattern(4),
            'nx::default': 6,
            'fiesta::v1.01': 0
          },
          { 'nx2::default': 13, 'nxa::default': 12, 'prime-2::v1.00.0': 0 }
        ],
        'single-p': [{ 'fiesta::v1.01': 1, 'prime-2::v1.00.0': 0 }],
        'double-p': [{ 'fiesta::v1.01': 6, 'prime-2::v1.00.0': 0 }]
      }
    })()
  },
  'radetzky-can-can': {
    id: 'radetzky-can-can',
    name: 'Radetzky Can Can',
    artist: 'BanYa',
    bpm: 197,
    type: 'arcade',
    category: 'original',
    steps: {
      single: [
        { 'xx::v2.05.0': 8, 'phoenix::v1.00.0': 7 },
        { 'xx::v2.05.0': 13, 'phoenix::v1.00.0': 12 },
        {
          'extra::default': 6,
          ...premiereToPremiere3Pattern(10),
          'the-prex-3::default': 8,
          'exceed::default': 12,
          'zero::default': 0,
          'xx::v1.00.1': 16
        },
        { 'xx::v1.00.1': 20 }
      ],
      double: [
        {
          'extra::default': 6,
          ...premiereToPremiere3Pattern(10),
          'the-prex-3::default': 7,
          'exceed::default': 15,
          'exceed-2::default': 14,
          'zero::default': 0,
          'xx::v1.00.1': 17,
          'phoenix::v1.00.0': 18
        },
        { 'xx::v1.00.1': 22 }
      ]
    }
  }
}

export default songsMap
