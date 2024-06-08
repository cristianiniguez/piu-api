import { onlyInfinityPattern } from '@/data/patterns'

const obgToPremiere2Pattern: StepHistoryPattern = level => ({
  'the-obg-season-evolution::default': level,
  'the-rebirth::default': 0,
  'the-premiere-2::default': level
})

const songsMap: Record<string, Song> = {
  'betrayer': {
    id: 'betrayer',
    name: 'Betrayer',
    artist: 'BanYa',
    bpm: 92,
    type: 'arcade',
    category: 'original',
    steps: {
      'single': [
        { 'fiesta-ex::v1.50': 1, 'prime::v1.00.0': 0, 'prime::v1.11.0': 1 },
        {
          ...obgToPremiere2Pattern(4),
          'exceed::default': 2,
          'exceed-2::default': 0
        },
        {
          ...obgToPremiere2Pattern(4),
          'exceed::default': 5,
          'exceed-2::default': 0,
          'fiesta::v1.01': 5,
          'prime::v1.00.0': 0,
          'prime::v1.11.0': 5
        },
        {
          ...obgToPremiere2Pattern(6),
          'exceed::default': 8,
          'exceed-2::default': 0,
          'fiesta::v1.01': 8,
          'prime::v1.00.0': 0,
          'prime::v1.11.0': 8,
          'phoenix::v1.00.0': 9
        },
        { 'fiesta-ex::v1.50': 13, 'prime::v1.00.0': 0, 'prime::v1.11.0': 13 },
        { 'prime::v1.11.0': 16 }
      ],
      'double': [
        {
          ...obgToPremiere2Pattern(6),
          'exceed-2::default': 0,
          'fiesta::v1.01': 8,
          'prime::v1.00.0': 0,
          'prime::v1.11.0': 8,
          'xx::v1.00.1': 11,
          'phoenix::v1.00.0': 0
        },
        { 'fiesta::v1.01': 13, 'prime::v1.00.0': 0, 'prime::v1.11.0': 13 },
        { 'prime::v1.11.0': 17 }
      ],
      'single-p': [
        {
          'fiesta::v1.01': 2,
          'prime::v1.00.0': 0,
          'prime::v1.11.0': 2,
          'phoenix::v1.00.0': 0
        }
      ]
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
      'single': [
        {
          ...obgToPremiere2Pattern(4),
          'exceed::default': 1,
          'zero::default': 0
        },
        {
          ...obgToPremiere2Pattern(3),
          'exceed::default': 4,
          'zero::default': 0,
          'fiesta::v1.01': 4,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 4,
          'phoenix::v1.00.0': 6
        },
        {
          ...obgToPremiere2Pattern(8),
          'exceed::default': 9,
          'zero::default': 0,
          'fiesta::v1.01': 9,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 9,
          'xx::v1.00.1': 10,
          'phoenix::v1.00.0': 12
        }
      ],
      'double': [
        {
          ...obgToPremiere2Pattern(4),
          'exceed::default': 3,
          'exceed-2::default': 4,
          'zero::default': 0
        },
        {
          'fiesta::v1.01': 14,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 14,
          'phoenix::v1.00.0': 15
        }
      ],
      'single-p': [
        {
          'fiesta::v1.01': 1,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 1,
          'phoenix::v1.00.0': 0
        }
      ],
      'double-p': [
        {
          'fiesta::v1.01': 4,
          'prime::v1.00.0': 0,
          'prime-2::v1.00.0': 4,
          'phoenix::v1.00.0': 0
        }
      ]
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
        { ...obgToPremiere2Pattern(4), 'nxa::default': 5 },
        {
          ...obgToPremiere2Pattern(10),
          'exceed::default': 7,
          'exceed-2::default': 9,
          'nx::default': 10,
          'nx2::default': 11,
          'xx::v1.00.1': 12,
          'phoenix::v1.00.0': 13
        },
        {
          ...obgToPremiere2Pattern(10),
          'exceed::default': 12,
          'exceed-2::default': 13,
          'nx::default': 14,
          'phoenix::v1.00.0': 15
        },
        { 'fiesta::v1.01': 20 },
        { 'nx::default': 21, 'nxa::default': 22 }
      ],
      double: [
        {
          ...obgToPremiere2Pattern(10),
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
        { 'nx::default': 21, 'nx2::default': 23 },
        {
          'nx::default': 23,
          'nx2::default': 25,
          'fiesta::v1.01': 0,
          ...onlyInfinityPattern('infinity::v1.09', 25)
        }
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
    steps: (() => {
      const obgToPremiere3Pattern: StepHistoryPattern = level => ({
        'the-obg-season-evolution::default': level,
        'extra::default': 0,
        'the-premiere::default': level,
        'the-rebirth::default': 0,
        'the-premiere-2::default': level,
        'the-prex-2::default': 0,
        'the-premiere-3::default': level
      })

      return {
        single: [
          {
            ...obgToPremiere3Pattern(4),
            'exceed::default': 3,
            'zero::default': 0
          },
          {
            ...obgToPremiere3Pattern(6),
            'exceed::default': 5,
            'exceed-2::default': 6,
            'zero::default': 0
          },
          {
            'fiesta::v1.01': 7,
            'prime::v1.00.0': 0,
            'prime-2::v1.00.0': 7,
            'xx::v1.00.1': 8,
            'phoenix::v1.00.0': 9
          },
          {
            'fiesta::v1.01': 13,
            'prime::v1.00.0': 0,
            'prime-2::v1.00.0': 13,
            'phoenix::v1.00.0': 14
          }
        ],
        double: [
          {
            ...obgToPremiere3Pattern(7),
            'exceed::default': 6,
            'exceed-2::default': 7,
            'zero::default': 0,
            'fiesta::v1.01': 7,
            'prime::v1.00.0': 0,
            'prime-2::v1.00.0': 7,
            'phoenix::v1.00.0': 11
          }
        ],
        coop: [{ 'prime-2::v1.04.0': 2 }]
      }
    })()
  },
  'run': {
    id: 'run',
    name: 'RUN!',
    artist: 'Novasonic',
    bpm: 140,
    type: 'arcade',
    category: 'k-pop',
    steps: (() => {
      const obgToPremiere3Pattern: StepHistoryPattern = level => ({
        'the-obg-season-evolution::default': level,
        'extra::default': 0,
        'the-premiere::default': level,
        'the-rebirth::default': 0,
        'the-premiere-2::default': level,
        'the-prex-2::default': 0,
        'the-premiere-3::default': level
      })

      const nxToPrimePattern: StepHistoryPattern = level => ({
        'nx::default': level,
        'nx2::default': 0,
        'fiesta::v1.01': level,
        'prime::v1.00.0': 0
      })

      return {
        single: [
          {
            ...obgToPremiere3Pattern(4),
            'exceed::default': 2,
            ...nxToPrimePattern(4)
          },
          {
            ...obgToPremiere3Pattern(7),
            'exceed::default': 5,
            ...nxToPrimePattern(8)
          },
          {
            ...obgToPremiere3Pattern(8),
            'exceed::default': 10,
            'exceed-2::default': 0
          },
          {
            'exceed-2::default': 15,
            'nx2::default': 0,
            'fiesta::v1.01': 15,
            'prime::v1.00.0': 0
          }
        ],
        double: [
          {
            ...obgToPremiere3Pattern(7),
            'exceed::default': 6,
            ...nxToPrimePattern(8)
          },
          {
            'exceed-2::default': 16,
            'nx2::default': 0,
            'fiesta::v1.01': 17,
            'prime::v1.00.0': 0
          }
        ]
      }
    })()
  },
  'run-to-you': {
    id: 'run-to-you',
    name: 'Run to you',
    artist: 'DJ DOC',
    bpm: 132,
    type: 'arcade',
    category: 'k-pop',
    steps: (() => {
      const fiestaEX120ToPrime2Pattern: StepHistoryPattern = level => ({
        'fiesta-ex::v1.20': level,
        'prime-2::v1.00.0': 0
      })

      const fiestaEX150ToPrime2Pattern: StepHistoryPattern = level => ({
        'fiesta-ex::v1.50': level,
        'prime-2::v1.00.0': 0
      })

      const obgToPrex3Pattern: StepHistoryPattern = level => ({
        'the-obg-season-evolution::default': level,
        'the-rebirth::default': 0,
        'the-premiere-2::default': level,
        'the-premiere-3::default': 0,
        'the-prex-3::default': level
      })

      return {
        single: [
          fiestaEX150ToPrime2Pattern(2),
          {
            ...obgToPrex3Pattern(4),
            'exceed::default': 2,
            'exceed-2::default': 0,
            'fiesta-ex::v1.00': 4,
            'prime-2::v1.00.0': 0
          },
          {
            ...obgToPrex3Pattern(3),
            'exceed::default': 5,
            'exceed-2::default': 0,
            'fiesta-ex::v1.00': 5,
            'prime-2::v1.00.0': 0
          },
          fiestaEX150ToPrime2Pattern(7),
          {
            ...obgToPrex3Pattern(4),
            'exceed::default': 9,
            'exceed-2::default': 0,
            'fiesta-ex::v1.00': 10,
            'prime-2::v1.00.0': 0
          },
          fiestaEX120ToPrime2Pattern(13)
        ],
        double: [
          {
            ...obgToPrex3Pattern(4),
            'exceed::default': 3,
            'exceed-2::default': 0,
            'fiesta-ex::v1.00': 6,
            'prime-2::v1.00.0': 0
          },
          fiestaEX120ToPrime2Pattern(14)
        ]
      }
    })()
  },
  'solitary': {
    id: 'solitary',
    name: 'Solitary',
    artist: 'BanYa',
    bpm: 136,
    type: 'arcade',
    category: 'original',
    steps: {
      'single': [
        { 'fiesta-ex::v1.50': 2 },
        {
          ...obgToPremiere2Pattern(4),
          'exceed::default': 3,
          'fiesta::v1.01': 0
        },
        { 'fiesta-ex::v1.50': 4 },
        {
          ...obgToPremiere2Pattern(7),
          'exceed::default': 5,
          'nxa::default': 6
        },
        { 'fiesta-ex::v1.50': 8 },
        {
          ...obgToPremiere2Pattern(6),
          'exceed::default': 9,
          'exceed-2::default': 8,
          'nx::default': 9,
          'phoenix::v1.00.0': 11
        },
        { 'fiesta::v1.01': 16, 'xx::v1.00.1': 18, 'phoenix::v1.00.0': 17 },
        { 'nx2::default': 17, 'phoenix::v1.00.0': 18 }
      ],
      'double': [
        {
          ...obgToPremiere2Pattern(8),
          'exceed::default': 6,
          'nx::default': 7,
          'xx::v1.00.1': 10
        },
        {
          'exceed-2::default': 15,
          'nx::default': 16,
          'phoenix::v1.00.0': 17
        },
        {
          'nx2::default': 19,
          'nxa::default': 18,
          'fiesta::v1.01': 0,
          ...onlyInfinityPattern('infinity::v1.09', 18)
        }
      ],
      'single-p': [{ 'fiesta::v1.01': 3, 'phoenix::v1.00.0': 0 }],
      'double-p': [{ 'fiesta-ex::v1.30': 5, 'phoenix::v1.00.0': 0 }]
    }
  }
}

export default songsMap
