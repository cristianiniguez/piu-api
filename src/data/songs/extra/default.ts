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
  }
}

export default songsMap
