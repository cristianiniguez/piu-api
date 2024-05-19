const songsMap: Record<string, Song> = {
  'extravaganza': {
    id: 'extravaganza',
    name: 'Extravaganza',
    artist: 'BanYa',
    bpm: 195,
    type: 'arcade',
    category: 'original',
    steps: {
      single: [
        { 'fiesta-ex::v1.50': 4 },
        { 'fiesta::v1.10': 7, 'xx::v1.00.1': 8 },
        {
          '3rd-obg::default': 8,
          'the-obg-season-evolution::default': 0,
          'the-collection::default': 8,
          'the-rebirth::default': 0,
          'the-premiere-2::default': 8,
          'exceed::default': 6,
          'exceed-2::default': 7,
          'zero::default': 8,
          'nx::default': 10,
          'fiesta::v1.01': 9,
          'xx::v1.00.1': 10,
          'phoenix::v1.00.0': 11
        },
        {
          '3rd-obg::default': 5,
          'the-obg-season-evolution::default': 0,
          'the-collection::default': 5,
          'the-rebirth::default': 0,
          'the-premiere-2::default': 5,
          'exceed::default': 10,
          'exceed-2::default': 11,
          'nx::default': 12,
          'nxa::default': 11,
          'xx::v1.00.1': 12,
          'phoenix::v1.00.0': 13
        },
        { 'nxa::default': 16, 'xx::v1.00.1': 17, 'phoenix::v1.00.0': 19 },
        { 'nx::default': 21, 'phoenix::v1.00.0': 22 }
      ],
      double: [
        {
          '3rd-obg::default': 7,
          'the-obg-season-evolution::default': 0,
          'zero::default': 9,
          'nx::default': 13,
          'nxa::default': 12,
          'xx::v1.00.1': 13,
          'phoenix::v1.00.0': 15
        },
        {
          'exceed::default': 17,
          'exceed-2::default': 18,
          'zero::default': 17,
          'nx::default': 18,
          'nxa::default': 17,
          'xx::v1.00.1': 18
        },
        { 'nx::default': 19, 'xx::v1.00.1': 20, 'phoenix::v1.00.0': 21 }
      ]
    }
  },
  'final-audition': {
    id: 'final-audition',
    name: 'Final Audition',
    artist: 'BanYa',
    bpm: 130.5,
    type: 'arcade',
    category: 'original',
    steps: {
      'single': [
        { 'fiesta-ex::v1.50': 2 },
        {
          '2nd-ultimate-remix::default': 3,
          '3rd-obg::default': 0,
          'the-collection::default': 3,
          'extra::default': 0,
          'the-premiere::default': 3,
          'the-rebirth::default': 0,
          'the-premiere-2::default': 3,
          'the-prex-2::default': 0,
          'the-prex-3::default': 3,
          'exceed::default': 2,
          'nx::default': 3,
          'fiesta::v1.01': 0
        },
        {
          '2nd-ultimate-remix::default': 6,
          '3rd-obg::default': 0,
          'the-collection::default': 6,
          'extra::default': 0,
          'the-premiere::default': 6,
          'the-rebirth::default': 0,
          'the-premiere-2::default': 6,
          'the-prex-2::default': 0,
          'the-prex-3::default': 6,
          'exceed::default': 5,
          'exceed-2::default': 7,
          'phoenix::v1.00.0': 0
        },
        { 'fiesta-ex::v1.50': 6, 'phoenix::v1.00.0': 7 },
        { 'fiesta-ex::v1.50': 9, 'phoenix::v1.00.0': 10 },
        {
          'the-prex-3::default': 10,
          'exceed::default': 13,
          'exceed-2::default': 14,
          'zero::default': 15,
          'nxa::default': 17,
          'phoenix::v1.00.0': 18
        },
        {
          'nx::default': 16,
          'nx2::default': 17,
          'nxa::default': 15,
          'xx::v1.00.1': 18,
          'phoenix::v1.00.0': 19
        }
      ],
      'double': [
        {
          '2nd-ultimate-remix::default': 5,
          '3rd-obg::default': 0,
          'the-collection::default': 5,
          'extra::default': 0,
          'the-premiere::default': 5,
          'the-rebirth::default': 0,
          'the-premiere-2::default': 5,
          'the-prex-2::default': 0,
          'the-prex-3::default': 5,
          'exceed::default': 3,
          'fiesta::v1.01': 0
        },
        {
          'nx::default': 15,
          'nx2::default': 16,
          'fiesta::v1.01': 15,
          'phoenix::v1.00.0': 17
        },
        {
          'exceed::default': 18,
          'exceed-2::default': 17,
          'nx::default': 16,
          'nxa::default': 17,
          'xx::v1.00.1': 18,
          'phoenix::v1.00.0': 19
        }
      ],
      'single-p': [{ 'fiesta::v1.01': 3, 'phoenix::v1.00.0': 0 }]
    }
  },
  'repeatorment-remix': {
    id: 'repeatorment-remix',
    name: 'Repeatorment Remix',
    artist: 'BanYa',
    bpm: 150,
    type: 'remix',
    category: 'original',
    steps: {
      single: [
        {
          '2nd-ultimate-remix::default': 6,
          '3rd-obg::default': 0,
          'the-collection::default': 6,
          'the-premiere::default': 0,
          'fiesta-ex::v1.00': 7,
          'phoenix::v1.00.0': 0
        },
        { 'fiesta-ex::v1.50': 19, 'xx::v1.00.1': 18 }
      ],
      double: [
        {
          '2nd-ultimate-remix::default': 6,
          '3rd-obg::default': 0,
          'the-collection::default': 6,
          'the-premiere::default': 0,
          'fiesta-ex::v1.00': 8,
          'phoenix::v1.00.0': 0
        },
        { 'xx::v2.07.0': 22 }
      ]
    }
  }
}

export default songsMap
