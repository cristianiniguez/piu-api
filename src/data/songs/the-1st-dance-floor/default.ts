import { onlyInfinityPattern } from 'data/patterns'

const firstToPremiere2Pattern: StepHistoryPattern = level => ({
  'the-1st-dance-floor::default': level,
  '3rd-obg::default': 0,
  'the-collection::default': level,
  'the-rebirth::default': 0,
  'the-premiere-2::default': level
})

const firstToPrex2Pattern: StepHistoryPattern = level => ({
  'the-1st-dance-floor::default': level,
  '2nd-ultimate-remix::default': 0,
  'the-collection::default': level,
  'extra::default': 0,
  'the-premiere::default': level,
  'the-rebirth::default': 0,
  'the-premiere-2::default': level,
  'the-prex-2::default': 0
})

const firstToPrex3Pattern: StepHistoryPattern = level => ({
  'the-1st-dance-floor::default': level,
  '3rd-obg::default': 0,
  'the-collection::default': level,
  'extra::default': 0,
  'the-prex-3::default': level
})

const songsMap: Record<string, Song> = {
  'another-truth': {
    id: 'another-truth',
    name: 'Another Truth',
    artist: 'Novasonic',
    bpm: 136,
    type: 'arcade',
    category: 'k-pop',
    steps: {
      single: [
        onlyInfinityPattern('infinity::v1.09', 1),
        {
          ...firstToPremiere2Pattern(3),
          'nxa::default': 4,
          'fiesta::v1.01': 3,
          'phoenix::v1.00.0': 4
        },
        {
          ...firstToPremiere2Pattern(5),
          'phoenix::v1.00.0': 6
        },
        { 'fiesta-ex::v1.50': 8 },
        { 'zero::default': 16, 'nx::default': 15, 'xx::v1.00.1': 16 }
      ],
      double: [
        {
          ...firstToPremiere2Pattern(7),
          'exceed::default': 5,
          'exceed-2::default': 6,
          'xx::v1.00.1': 7,
          'phoenix::v1.00.0': 9
        },
        {
          'exceed::default': 18,
          'exceed-2::default': 16,
          'xx::v1.00.1': 17,
          'phoenix::v1.00.0': 18
        },
        {
          'nx::default': 18,
          'nxa::default': 17,
          'xx::v1.00.1': 18,
          'phoenix::v1.00.0': 19
        },
        {
          'nx::default': 22,
          'nx2::default': 21,
          'nxa::default': 22,
          'xx::v1.00.1': 21
        }
      ],
      coop: [{ 'xx::v2.07.0': 2 }]
    }
  },
  'funky-tonight': {
    id: 'funky-tonight',
    name: 'Funky Tonight',
    artist: 'CLON',
    bpm: 105,
    type: 'arcade',
    category: 'k-pop',
    steps: {
      single: [
        { 'fiesta::v1.01': 2, 'xx::v1.00.1': 0 },
        {
          ...firstToPremiere2Pattern(4),
          'xx::v1.00.1': 0
        },
        { 'fiesta::v1.01': 5, 'xx::v1.00.1': 0 },
        { 'zero::default': 11, 'nx::default': 12, 'xx::v1.00.1': 0 }
      ],
      double: [
        {
          ...firstToPremiere2Pattern(4),
          'xx::v1.00.1': 0
        },
        { 'fiesta-2::v1.00': 14, 'xx::v1.00.1': 0 }
      ]
    }
  },
  'hatred': {
    id: 'hatred',
    name: 'Hatred',
    artist: 'Novasonic',
    bpm: 136.03,
    type: 'arcade',
    category: 'k-pop',
    steps: {
      'single': [
        { 'exceed-2::default': 2, 'nx::default': 0 },
        {
          ...firstToPrex2Pattern(7),
          'exceed-2::default': 7,
          'nx::default': 0,
          'fiesta::v1.01': 6,
          'prime::v1.00.0': 0
        },
        {
          'exceed-2::default': 13,
          'nx::default': 0,
          'fiesta::v1.01': 13,
          'prime::v1.00.0': 0
        }
      ],
      'double': [
        {
          ...firstToPrex2Pattern(7),
          'fiesta::v1.01': 7,
          'prime::v1.00.0': 0
        },
        { 'exceed-2::default': 7, 'nx::default': 0 },
        {
          'exceed-2::default': 16,
          'nx::default': 0,
          'fiesta::v1.01': 16,
          'prime::v1.00.0': 0
        }
      ],
      'double-p': [{ 'fiesta::v1.01': 7, 'prime::v1.00.0': 0 }]
    }
  },
  'hypnosis': {
    id: 'hypnosis',
    name: 'Hypnosis',
    artist: 'BanYa',
    bpm: 180.2,
    type: 'arcade',
    category: 'original',
    steps: {
      single: [
        onlyInfinityPattern('infinity::v1.09', 1),
        onlyInfinityPattern('infinity::v1.09', 4),
        {
          ...firstToPrex3Pattern(7),
          'exceed::default': 6,
          'zero::default': 0,
          'prime::v1.01.0': 7,
          'xx::v1.00.1': 0
        },
        {
          'the-prex-3::default': 9,
          'exceed::default': 12,
          'zero::default': 0,
          ...onlyInfinityPattern('infinity::v1.09', 15),
          'prime::v1.01.0': 15,
          'xx::v1.00.1': 0
        },
        {
          ...onlyInfinityPattern('infinity::v1.09', 18),
          'prime::v1.08.0': 18,
          'xx::v1.00.1': 0
        }
      ],
      double: [
        {
          ...firstToPrex3Pattern(7),
          'exceed::default': 6,
          'exceed-2::default': 7,
          'zero::default': 0,
          ...onlyInfinityPattern('infinity::v1.09', 7),
          'prime::v1.01.0': 8,
          'xx::v1.00.1': 0
        },
        {
          'exceed::default': 16,
          'exceed-2::default': 15,
          'zero::default': 0,
          ...onlyInfinityPattern('infinity::v1.09', 15),
          'prime::v1.01.0': 15,
          'xx::v1.00.1': 0
        },
        {
          "infinity::v1.05": 15,
          "infinity::v1.09": 16,
          "prime::v1.00.0": 0
        },
        { 'prime::v1.08.0': 18, 'xx::v1.00.1': 0 }
      ]
    }
  },
  'ignition-starts': {
    id: 'ignition-starts',
    name: 'Ignition Starts',
    artist: 'BanYa',
    bpm: 146.05,
    type: 'arcade',
    category: 'original',
    steps: {
      single: [
        onlyInfinityPattern('infinity::v1.10', 2),
        onlyInfinityPattern('infinity::v1.10', 3),
        {
          ...firstToPrex3Pattern(7),
          'exceed::default': 6,
          'zero::default': 0,
          ...onlyInfinityPattern('infinity::v1.10', 6),
          'prime::v1.01.0': 8,
          'xx::v1.00.1': 0
        },
        {
          'the-prex-3::default': 8,
          'exceed::default': 12,
          'zero::default': 0,
          ...onlyInfinityPattern('infinity::v1.10', 12),
          'prime::v1.01.0': 15,
          'xx::v1.00.1': 0
        },
        onlyInfinityPattern('infinity::v1.10', 17),
        {
          'prime::v1.19.0': 18,
          'xx::v1.00.1': 0
        }
      ],
      double: [
        {
          ...firstToPrex3Pattern(7),
          'exceed::default': 6,
          'exceed-2::default': 7,
          'zero::default': 0,
          ...onlyInfinityPattern('infinity::v1.10', 7),
          'prime::v1.01.0': 10,
          'xx::v1.00.1': 0
        },
        onlyInfinityPattern('infinity::v1.10', 16),
        {
          ...onlyInfinityPattern('infinity::v1.10', 17),
          'prime::v1.19.0': 17,
          'xx::v1.00.1': 0
        }
      ]
    }
  }
}

export default songsMap
