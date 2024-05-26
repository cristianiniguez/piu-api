import { onlyInfinityPattern } from 'data/patterns'

const songsMap: Record<string, Song> = {
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
          'nx2::default': 0,
          'exceed::default': 3,
          'nx::default': 4
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
  }
}

export default songsMap
