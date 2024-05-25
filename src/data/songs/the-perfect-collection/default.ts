const songsMap: Record<string, Song> = {
  'all-i-want-for-x-mas': {
    id: 'all-i-want-for-x-mas',
    name: 'All I Want For X-mas',
    artist: 'BanYa',
    bpm: 130,
    type: 'arcade',
    category: 'original',
    steps: (() => {
      const perfectToPrex3Pattern: StepHistoryPattern = level => ({
        'the-perfect-collection::default': level,
        'extra::default': 0,
        'the-premiere::default': level,
        'the-rebirth::default': 0,
        'the-premiere-2::default': level,
        'the-prex-2::default': 0,
        'the-prex-3::default': level
      })

      return {
        single: [
          {
            ...perfectToPrex3Pattern(2),
            'zero::default': 0,
            'fiesta-ex::v1.00': 3
          },
          {
            ...perfectToPrex3Pattern(3),
            'exceed::default': 5,
            'zero::default': 0,
            'fiesta-ex::v1.00': 6,
            'phoenix::v1.00.0': 5
          },
          {
            ...perfectToPrex3Pattern(3),
            'exceed::default': 8,
            'exceed-2::default': 7,
            'zero::default': 0,
            'fiesta-ex::v1.00': 11,
            'prime-je::v1.01.0': 11,
            'xx::v1.00.1': 9
          }
        ],
        double: [
          {
            ...perfectToPrex3Pattern(3),
            'exceed::default': 4,
            'zero::default': 0,
            'prime-je::v1.01.0': 7,
            'phoenix::v1.00.0': 8
          }
        ]
      }
    })()
  },
  'beethoven-virus': {
    id: 'beethoven-virus',
    name: 'Beethoven Virus',
    artist: 'BanYa',
    bpm: 162,
    type: 'arcade',
    category: 'original',
    steps: {
      single: [
        {
          'the-perfect-collection::default': 5,
          'exceed::default': 4,
          'exceed-2::default': 3,
          'nxa::default': 4
        },
        { 'fiesta::v1.01': 8, 'xx::v1.00.1': 6 },
        { 'the-perfect-collection::default': 6, 'nx::default': 7 },
        { 'fiesta::v1.01': 13, 'xx::v1.00.1': 11, 'phoenix::v1.00.0': 12 },
        { 'fiesta::v1.01': 16 },
        { 'nx::default': 16, 'nx2::default': 17 },
        { 'xx::v2.08.0': 21 }
      ],
      double: [
        {
          'the-perfect-collection::default': 9,
          'exceed::default': 6,
          'exceed-2::default': 8,
          'xx::v1.00.1': 11,
          'phoenix::v1.00.0': 13
        },
        { 'fiesta::v1.01': 18 },
        { 'exceed::default': 17, 'exceed-2::default': 20, 'xx::v1.00.1': 21 },
        { 'xx::v2.08.0': 23, 'phoenix::v1.00.0': 24 }
      ],
      coop: [{ 'xx::v2.01.0': 2 }]
    }
  },
  'n': {
    id: 'n',
    name: 'N',
    artist: 'BanYa',
    bpm: 106,
    type: 'arcade',
    category: 'original',
    steps: {
      single: [
        { 'the-perfect-collection::default': 4, 'nx::default': 5 },
        { 'zero::default': 14, 'nx::default': 16 }
      ],
      double: [{ 'fiesta-ex::v1.50': 16 }]
    }
  },
  'pump-jump': {
    id: 'pump-jump',
    name: 'Pump Jump',
    artist: 'BanYa',
    bpm: 106,
    type: 'arcade',
    category: 'original',
    steps: {
      single: [
        { 'the-perfect-collection::default': 4, 'phoenix::v1.00.0': 5 },
        { 'fiesta::v1.01': 15 }
      ],
      double: [{ 'fiesta::v1.01': 17, 'phoenix::v1.00.0': 18 }]
    }
  },
  'rolling-christmas': {
    id: 'rolling-christmas',
    name: 'Rolling Christmas',
    artist: 'BanYa',
    bpm: 142,
    type: 'arcade',
    category: 'original',
    steps: {
      single: [
        { 'fiesta::v1.10': 3 },
        { 'fiesta-2::v1.00': 5 },
        { 'fiesta::v1.10': 8 },
        { 'fiesta::v1.01': 13, 'xx::v1.00.1': 12 },
        { 'xx::v2.06.0': 17 }
      ],
      double: [
        { 'zero::default': 4, 'prime-je::v1.07.0': 5 },
        { 'zero::default': 12, 'nx::default': 13 },
        { 'prime-je::v1.08.0': 17, 'xx::v1.00.1': 16 },
        { 'xx::v2.05.0': 22 }
      ],
      coop: [{ 'prime::v1.11.0': 2 }]
    }
  },
  'slam': {
    id: 'slam',
    name: 'Slam',
    artist: 'Novasonic',
    bpm: 131.99,
    type: 'arcade',
    category: 'k-pop',
    steps: {
      single: [
        {
          'the-perfect-collection::default': 4,
          'exceed::default': 3,
          'phoenix::v1.00.0': 5
        },
        {
          'the-perfect-collection::default': 6,
          'exceed::default': 5,
          'nx::default': 6,
          'phoenix::v1.00.0': 7
        },
        { 'fiesta-ex::v1.50': 9 },
        {
          'extra::default': 4,
          'the-premiere::default': 9,
          'exceed::default': 12,
          'exceed-2::default': 15,
          'nx::default': 16,
          'nx2::default': 18,
          'nxa::default': 17,
          'xx::v1.00.1': 18
        },
        { 'nxa::default': 18, 'xx::v1.00.1': 19, 'phoenix::v1.00.0': 20 }
      ],
      double: [
        {
          'the-perfect-collection::default': 6,
          'exceed::default': 5,
          'exceed-2::default': 6,
          'phoenix::v1.00.0': 9
        },
        {
          'exceed::default': 17,
          'exceed-2::default': 19,
          'nx::default': 20,
          'xx::v1.00.1': 21,
          'phoenix::v1.00.0': 22
        },
        { 'prime-2::v1.04.0': 23, 'phoenix::v1.00.0': 24 }
      ]
    }
  }
}

export default songsMap
