const songsMap: Record<string, Song> = {
  'an-interesting-view': {
    id: 'an-interesting-view',
    name: 'An Interesting View',
    artist: 'BanYa',
    bpm: 160,
    type: 'arcade',
    category: 'original',
    steps: {
      single: [
        {
          '3rd-obg::default': 6,
          'extra::default': 0,
          'the-premiere::default': 6,
          'the-rebirth::default': 0,
          'the-premiere-2::default': 6,
          'the-prex-2::default': 0,
          'xx::v1.00.1': 6
        },
        { 'xx::v1.00.1': 13 }
      ]
    }
  },
  'banya-hiphop-remix': {
    id: 'banya-hiphop-remix',
    name: 'BANYA HIPHOP REMIX',
    artist: 'BanYa',
    bpm: 99,
    type: 'remix',
    category: 'original',
    steps: {
      'single': [
        {
          '3rd-obg::default': 5,
          'extra::default': 0,
          'exceed-2::default': 6,
          'nx::default': 7,
          'nxa::default': 3,
          'fiesta::v1.01': 6
        },
        {
          'exceed-2::default': 7,
          'nx::default': 8,
          'nxa::default': 9,
          'fiesta::v1.01': 7,
          'phoenix::v1.00.0': 8
        }
      ],
      'double': [
        {
          '3rd-obg::default': 5,
          'extra::default': 0,
          'exceed-2::default': 6,
          'nx::default': 7,
          'fiesta::v1.01': 0
        },
        { 'prime-2::v2.04.0': 20, 'phoenix::v1.00.0': 21 }
      ],
      'double-p': [{ 'fiesta::v1.01': 6, 'phoenix::v1.00.0': 0 }]
    }
  },
  'close-your-eye': {
    id: 'close-your-eye',
    name: 'Close Your Eye',
    artist: 'BanYa',
    bpm: 105,
    type: 'arcade',
    category: 'original',
    steps: {
      'single': [
        {
          '3rd-obg::default': 2,
          'extra::default': 0,
          'the-premiere::default': 2,
          'the-rebirth::default': 0,
          'the-premiere-2::default': 2,
          'the-prex-2::default': 0
        },
        { '3rd-obg::default': 3, 'fiesta::v1.01': 4, 'phoenix::v1.00.0': 6 }
      ],
      'double': [
        {
          '3rd-obg::default': 4,
          'extra::default': 0,
          'the-premiere::default': 4,
          'the-rebirth::default': 0,
          'the-premiere-2::default': 4,
          'the-prex-2::default': 0
        }
      ],
      'single-p': [
        {
          'fiesta::v1.01': 2,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 2,
          'phoenix::v1.00.0': 0
        }
      ],
      'double-p': [
        {
          'fiesta::v1.01': 3,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 3,
          'phoenix::v1.00.0': 0
        }
      ]
    }
  },
  'final-audition-2': {
    id: 'final-audition-2',
    name: 'Final Audition 2',
    artist: 'BanYa',
    bpm: 130,
    type: 'arcade',
    category: 'original',
    steps: {
      'single': [
        { 'fiesta-ex::v1.50': 4 },
        { 'fiesta-ex::v1.50': 7 },
        {
          '3rd-obg::default': 6,
          'extra::default': 0,
          'the-premiere::default': 6,
          'the-rebirth::default': 0,
          'the-premiere-2::default': 6,
          'the-prex-2::default': 0,
          'the-premiere-3::default': 6,
          'exceed-2::default': 7,
          'nx::default': 8,
          'xx::v1.00.1': 9,
          'phoenix::v1.00.0': 10
        },
        {
          '3rd-obg::default': 6,
          'extra::default': 0,
          'the-premiere::default': 6,
          'the-rebirth::default': 0,
          'the-premiere-2::default': 6,
          'the-prex-2::default': 0,
          'the-premiere-3::default': 6,
          'exceed::default': 10,
          'exceed-2::default': 9,
          'nx::default': 10,
          'phoenix::v1.00.0': 12
        },
        {
          'nx::default': 15,
          'nx2::default': 16,
          'xx::v1.00.1': 17,
          'phoenix::v1.00.0': 18
        }
      ],
      'double': [
        {
          '3rd-obg::default': 6,
          'extra::default': 0,
          'the-premiere::default': 6,
          'the-rebirth::default': 0,
          'the-premiere-2::default': 6,
          'the-prex-2::default': 0,
          'the-premiere-3::default': 6,
          'exceed-2::default': 7,
          'nx::default': 8,
          'xx::v1.00.1': 11,
          'phoenix::v1.00.0': 12
        },
        {
          'exceed::default': 17,
          'zero::default': 16,
          'nx::default': 17,
          'xx::v1.00.1': 18
        },
        { 'nx::default': 18, 'nx2::default': 19, 'xx::v1.00.1': 20 }
      ],
      'double-p': [{ 'fiesta-ex::v1.20': 3, 'phoenix::v1.00.0': 0 }]
    }
  },
  'free-style': {
    id: 'free-style',
    name: 'Free Style',
    artist: 'BanYa',
    bpm: 99,
    type: 'arcade',
    category: 'original',
    steps: {
      'single': [
        {
          '3rd-obg::default': 2,
          'the-rebirth::default': 0,
          'the-premiere-2::default': 2,
          'the-premiere-3::default': 0,
          'zero::default': 1,
          'nx::default': 0
        },
        { 'xx::v2.07.0': 5 },
        { 'xx::v2.07.0': 9 },
        { 'fiesta-ex::v1.50': 13, 'prime::v1.00.0': 0, 'prime-2::v1.00.0': 13 }
      ],
      'double': [
        { 'fiesta::v1.01': 15, 'prime::v1.00.0': 0, 'prime-2::v1.00.0': 15 }
      ],
      'single-p': [
        {
          'fiesta::v1.01': 1,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 1,
          'phoenix::v1.00.0': 0
        }
      ]
    }
  },
  'midnight-blue': {
    id: 'midnight-blue',
    name: 'Midnight Blue',
    artist: 'BanYa',
    bpm: 80,
    type: 'arcade',
    category: 'original',
    steps: {
      'single': [
        {
          '3rd-obg::default': 4,
          'extra::default': 0,
          'the-premiere::default': 4,
          'the-rebirth::default': 0,
          'the-premiere-2::default': 4,
          'the-prex-2::default': 0
        },
        { 'fiesta::v1.10': 12, 'xx::v1.00.1': 11, 'phoenix::v1.00.0': 12 }
      ],
      'double': [
        {
          '3rd-obg::default': 4,
          'extra::default': 0,
          'the-premiere::default': 4,
          'the-rebirth::default': 0,
          'the-premiere-2::default': 4,
          'the-prex-2::default': 0
        },
        { 'fiesta::v1.10': 13, 'xx::v1.00.1': 12, 'phoenix::v1.00.0': 13 }
      ],
      'single-p': [{ 'fiesta::v1.01': 4, 'phoenix::v1.00.0': 0 }],
      'double-p': [{ 'fiesta::v1.01': 5, 'phoenix::v1.00.0': 0 }]
    }
  },
  'naissance': {
    id: 'naissance',
    name: 'Naissance',
    artist: 'BanYa',
    bpm: 136,
    type: 'arcade',
    category: 'original',
    steps: {
      single: [
        { 'fiesta-ex::v1.50': 4, 'phoenix::v1.00.0': 5 },
        {
          '3rd-obg::default': 6,
          'the-rebirth::default': 0,
          'the-premiere-2::default': 6,
          'the-premiere-3::default': 0,
          'the-prex-3::default': 6,
          'exceed-2::default': 7
        },
        { 'fiesta-ex::v1.50': 8 },
        {
          '3rd-obg::default': 6,
          'the-rebirth::default': 0,
          'the-premiere-2::default': 6,
          'the-premiere-3::default': 0,
          'the-prex-3::default': 6,
          'exceed::default': 9,
          'nx::default': 11,
          'nxa::default': 10,
          'phoenix::v1.00.0': 12
        },
        { 'prime-2::v2.02.0': 16, 'phoenix::v1.00.0': 0 },
        { 'nxa::default': 20 }
      ],
      double: [
        {
          '3rd-obg::default': 6,
          'the-rebirth::default': 0,
          'the-premiere-2::default': 6,
          'the-premiere-3::default': 0,
          'the-prex-3::default': 6,
          'exceed-2::default': 7,
          'phoenix::v1.00.0': 12
        },
        { 'zero::default': 14, 'nxa::default': 15, 'phoenix::v1.00.0': 16 }
      ]
    }
  },
  'a-nightmare': {
    id: 'a-nightmare',
    name: 'A nightmare',
    artist: 'BanYa',
    bpm: 120,
    type: 'arcade',
    category: 'original',
    steps: {
      'single': [
        {
          '3rd-obg::default': 1,
          'extra::default': 0,
          'the-premiere::default': 1,
          'the-rebirth::default': 0,
          'the-premiere-2::default': 1,
          'the-prex-2::default': 0,
          'the-prex-3::default': 1,
          'zero::default': 0,
          'fiesta::v1.01': 1,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 1,
          'xx::v1.00.1': 2,
          'phoenix::v1.00.0': 3
        },
        {
          '3rd-obg::default': 4,
          'extra::default': 0,
          'the-premiere::default': 4,
          'the-rebirth::default': 0,
          'the-premiere-2::default': 4,
          'the-prex-2::default': 0,
          'the-prex-3::default': 4,
          'exceed::default': 5,
          'exceed-2::default': 4,
          'zero::default': 0,
          'fiesta::v1.01': 4,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 4,
          'phoenix::v1.00.0': 6
        }
      ],
      'double': [
        {
          '3rd-obg::default': 3,
          'extra::default': 0,
          'the-premiere::default': 3,
          'the-rebirth::default': 0,
          'the-premiere-2::default': 3,
          'the-prex-2::default': 0,
          'the-prex-3::default': 3,
          'exceed::default': 4,
          'exceed-2::default': 5,
          'zero::default': 0
        },
        {
          'fiesta-ex::v1.30': 13,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 13,
          'phoenix::v1.00.0': 14
        }
      ],
      'double-p': [
        {
          'fiesta::v1.01': 5,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 5,
          'phoenix::v1.00.0': 0
        }
      ]
    }
  },
  'pumping-up': {
    id: 'pumping-up',
    name: 'Pumping Up',
    artist: 'BanYa',
    bpm: 135,
    type: 'arcade',
    category: 'original',
    steps: {
      single: [
        {
          '3rd-obg::default': 4,
          'extra::default': 0,
          'the-premiere::default': 4,
          'the-rebirth::default': 0,
          'the-premiere-2::default': 4,
          'the-prex-2::default': 0,
          'the-prex-3::default': 4,
          'nx::default': 0
        },
        { 'fiesta::v1.01': 4, 'prime::v1.00.0': 0, 'phoenix::v1.00.0': 5 },
        { 'xx::v2.07.0': 9, 'phoenix::v1.00.0': 10 },
        { 'fiesta-ex::v1.30': 12, 'prime::v1.00.0': 0, 'phoenix::v1.00.0': 13 }
      ],
      double: [{ 'prime-2::v1.06.0': 15 }]
    }
  },
  'she-likes-pizza': {
    id: 'she-likes-pizza',
    name: 'She Likes Pizza',
    artist: 'BanYa',
    bpm: 230,
    type: 'arcade',
    category: 'original',
    steps: {
      single: [
        {
          '3rd-obg::default': 8,
          'extra::default': 0,
          'the-premiere::default': 8,
          'the-rebirth::default': 0,
          'the-premiere-2::default': 8,
          'the-prex-2::default': 0,
          'the-prex-3::default': 8,
          'exceed::default': 7,
          'nxa::default': 8,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 8,
          'phoenix::v1.00.0': 9
        },
        {
          '3rd-obg::default': 8,
          'extra::default': 0,
          'the-premiere::default': 8,
          'the-rebirth::default': 0,
          'the-premiere-2::default': 8,
          'the-prex-2::default': 0,
          'the-prex-3::default': 8,
          'exceed::default': 10,
          'exceed-2::default': 9,
          'nx::default': 11,
          'nxa::default': 9,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 8,
          'phoenix::v1.00.0': 10
        },
        { 'prime-2::v1.05.0': 21 }
      ],
      double: [
        {
          '3rd-obg::default': 8,
          'extra::default': 0,
          'the-premiere::default': 8,
          'the-rebirth::default': 0,
          'the-premiere-2::default': 8,
          'the-prex-2::default': 0,
          'the-prex-3::default': 8,
          'exceed::default': 9,
          'exceed-2::default': 8,
          'nxa::default': 9,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 9,
          'phoenix::v1.00.0': 11
        },
        {
          'exceed::default': 18,
          'zero::default': 16,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 16,
          'phoenix::v1.00.0': 18
        },
        { 'prime-2::v1.05.0': 23 }
      ]
    }
  },
  'turkey-march': {
    id: 'turkey-march',
    name: 'Turkey March',
    artist: 'BanYa',
    bpm: 150,
    type: 'arcade',
    category: 'original',
    steps: {
      single: [
        { 'fiesta-ex::v1.50': 3 },
        {
          '3rd-obg::default': 7,
          'the-rebirth::default': 0,
          'the-premiere-2::default': 7,
          'the-premiere-3::default': 0,
          'the-prex-3::default': 7,
          'exceed::default': 6,
          'exceed-2::default': 7
        },
        {
          '3rd-obg::default': 7,
          'the-rebirth::default': 0,
          'the-premiere-2::default': 7,
          'the-premiere-3::default': 0,
          'the-prex-3::default': 7,
          'exceed::default': 11,
          'exceed-2::default': 12
        },
        {
          'nx2::default': 15,
          'nxa::default': 0,
          'fiesta::v1.01': 15,
          'xx::v1.00.1': 16,
          'phoenix::v1.00.0': 17
        },
        { 'prime-je::v1.08.0': 18, 'phoenix::v1.00.0': 19 }
      ],
      double: [
        {
          '3rd-obg::default': 7,
          'the-rebirth::default': 0,
          'the-premiere-2::default': 7,
          'the-premiere-3::default': 0,
          'the-prex-3::default': 7,
          'exceed::default': 8,
          'nx::default': 9,
          'phoenix::v1.00.0': 13
        },
        { 'prime-je::v1.08.0': 17, 'phoenix::v1.00.0': 18 },
        {
          'exceed::default': 16,
          'exceed-2::default': 18,
          'zero::default': 19,
          'nx::default': 18,
          'nxa::default': 19,
          'xx::v1.00.1': 20,
          'phoenix::v1.00.0': 21
        }
      ],
      coop: [{ 'prime-je::v1.08.0': 2 }]
    }
  },
  'with-my-lover': {
    id: 'with-my-lover',
    name: 'With My Lover',
    artist: 'BanYa',
    bpm: 124,
    type: 'arcade',
    category: 'original',
    steps: {
      single: [
        {
          '3rd-obg::default': 3,
          'extra::default': 0,
          'the-premiere::default': 3,
          'the-rebirth::default': 0,
          'the-premiere-2::default': 3,
          'the-prex-2::default': 0,
          'zero::default': 3,
          'nx2::default': 0,
          'xx::v1.00.1': 5
        },
        { 'zero::default': 10, 'nx2::default': 0, 'xx::v1.00.1': 12 }
      ],
      double: [
        { 'zero::default': 11, 'nx2::default': 0, 'xx::v1.00.1': 14 },
        { 'xx::v1.02.0': 19, 'phoenix::v1.00.0': 18 }
      ]
    }
  }
}

export default songsMap
