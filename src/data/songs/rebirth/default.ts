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
  }
}

export default songsMap
