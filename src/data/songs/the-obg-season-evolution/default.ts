const songsMap: Record<string, Song> = {
  'betrayer': {
    id: 'betrayer',
    name: 'Betrayer',
    artist: 'BanYa',
    bpm: 92,
    type: 'arcade',
    category: 'original',
    steps: {
      single: [
        { 'fiesta-ex::v1.50': 1 },
        { 'the-obg-season-evolution::default': 4, 'exceed::default': 5 },
        {
          'the-obg-season-evolution::default': 6,
          'exceed::default': 8,
          'phoenix::v1.00.0': 9
        },
        { 'fiesta-ex::v1.50': 13 },
        { 'prime-je::v1.07.0': 16 }
      ],
      double: [{ 'fiesta::v1.01': 13 }, { 'prime-je::v1.07.0': 17 }]
    }
  },
  'first-love': {
    id: 'first-love',
    name: 'First Love',
    artist: 'BanYa',
    bpm: 104,
    type: 'arcade',
    category: 'original',
    steps: {
      single: [
        {
          'the-obg-season-evolution::default': 3,
          'exceed::default': 4,
          'phoenix::v1.00.0': 6
        },
        {
          'the-obg-season-evolution::default': 8,
          'exceed::default': 9,
          'xx::v1.00.1': 10,
          'phoenix::v1.00.0': 12
        }
      ],
      double: [{ 'fiesta::v1.01': 14, 'phoenix::v1.00.0': 15 }]
    }
  },
  'mr-larpus': {
    id: 'mr-larpus',
    name: 'Mr. Larpus',
    artist: 'BanYa',
    bpm: 190,
    type: 'arcade',
    category: 'original',
    steps: {
      single: [
        { 'fiesta-ex::v1.50': 3 },
        { 'the-obg-season-evolution::default': 4, 'nxa::default': 5 },
        {
          'the-obg-season-evolution::default': 10,
          'exceed::default': 7,
          'exceed-2::default': 9,
          'nx::default': 10,
          'nx2::default': 11,
          'xx::v1.00.1': 12,
          'phoenix::v1.00.0': 13
        },
        {
          'the-obg-season-evolution::default': 10,
          'exceed::default': 12,
          'exceed-2::default': 13,
          'nx::default': 14,
          'phoenix::v1.00.0': 15
        },
        { 'fiesta::v1.01': 20 },
        { 'nx::default': 21, 'prime-je::v1.01.0': 22 }
      ],
      double: [
        {
          'the-obg-season-evolution::default': 10,
          'nx::default': 14,
          'xx::v1.00.1': 16
        },
        {
          'exceed::default': 19,
          'exceed-2::default': 18,
          'nx::default': 17,
          'phoenix::v1.00.0': 18
        },
        { 'xx::v2.07.0': 22 },
        { 'nx::default': 21, 'nx2::default': 23 }
      ]
    }
  },
  'oh-rosa': {
    id: 'oh-rosa',
    name: 'Oh! Rosa',
    artist: 'BanYa',
    bpm: 148,
    type: 'arcade',
    category: 'original',
    steps: {
      single: [
        { 'fiesta::v1.01': 7, 'xx::v1.00.1': 8, 'phoenix::v1.00.0': 9 },
        { 'fiesta::v1.01': 13, 'phoenix::v1.00.0': 14 }
      ],
      double: [
        {
          'the-obg-season-evolution::default': 7,
          'exceed::default': 6,
          'exceed-2::default': 7,
          'phoenix::v1.00.0': 11
        }
      ],
      coop: [{ 'prime-2::v1.04.0': 2 }]
    }
  },
  'solitary': {
    id: 'solitary',
    name: 'Solitary',
    artist: 'BanYa',
    bpm: 136,
    type: 'arcade',
    category: 'original',
    steps: {
      single: [
        { 'fiesta-ex::v1.50': 2 },
        { 'fiesta-ex::v1.50': 4 },
        {
          'the-obg-season-evolution::default': 7,
          'exceed::default': 5,
          'nxa::default': 6
        },
        { 'fiesta-ex::v1.50': 8 },
        {
          'the-obg-season-evolution::default': 6,
          'exceed::default': 9,
          'exceed-2::default': 8,
          'nx::default': 9,
          'phoenix::v1.00.0': 11
        },
        { 'fiesta::v1.01': 16, 'xx::v1.00.1': 18, 'phoenix::v1.00.0': 17 },
        { 'nx2::default': 17, 'phoenix::v1.00.0': 18 }
      ],
      double: [
        {
          'the-obg-season-evolution::default': 8,
          'exceed::default': 6,
          'nx::default': 7,
          'xx::v1.00.1': 10
        },
        { 'exceed-2::default': 15, 'nx::default': 16, 'phoenix::v1.00.0': 17 }
      ]
    }
  }
}

export default songsMap
