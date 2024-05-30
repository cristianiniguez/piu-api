type EditionPayload<K extends string, V extends string> = {
  id: K
  name: string
  versions: V[]
}

const getVersionIds = <K extends string, V extends string>(
  edition: EditionPayload<K, V>
) => edition.versions.map(v => `${edition.id}::${v}` as const)

const newEdition = <K extends string, V extends string>(
  payload: EditionPayload<K, V>
) => ({
  ...payload,
  versionIds: getVersionIds(payload)
})

const editions = {
  'the-1st-dance-floor': newEdition({
    id: 'the-1st-dance-floor',
    name: 'The 1st Dance Floor',
    versions: ['default']
  }),
  '2nd-ultimate-remix': newEdition({
    id: '2nd-ultimate-remix',
    name: '2nd Ultimate Remix',
    versions: ['default']
  }),
  '3rd-obg': newEdition({
    id: '3rd-obg',
    name: '3rd O.B.G.',
    versions: ['default']
  }),
  'the-obg-season-evolution': newEdition({
    id: 'the-obg-season-evolution',
    name: 'The O.B.G / Season Evolution',
    versions: ['default']
  }),
  'the-collection': newEdition({
    id: 'the-collection',
    name: 'The Collection',
    versions: ['default']
  }),
  'the-perfect-collection': newEdition({
    id: 'the-perfect-collection',
    name: 'The Perfect Collection',
    versions: ['default']
  }),
  'extra': newEdition({
    id: 'extra',
    name: 'Extra',
    versions: ['default']
  }),
  'the-premiere': newEdition({
    id: 'the-premiere',
    name: 'The Premiere',
    versions: ['default']
  }),
  'the-prex': newEdition({
    id: 'the-prex',
    name: 'The Prex',
    versions: ['default']
  }),
  'the-rebirth': newEdition({
    id: 'the-rebirth',
    name: 'The Rebirth',
    versions: ['default']
  }),
  'the-premiere-2': newEdition({
    id: 'the-premiere-2',
    name: 'The Premiere 2',
    versions: ['default']
  }),
  'the-prex-2': newEdition({
    id: 'the-prex-2',
    name: 'The Prex 2',
    versions: ['default']
  }),
  'the-premiere-3': newEdition({
    id: 'the-premiere-3',
    name: 'The Premiere 3',
    versions: ['default']
  }),
  'the-prex-3': newEdition({
    id: 'the-prex-3',
    name: 'The Prex 3',
    versions: ['default']
  }),
  'exceed': newEdition({
    id: 'exceed',
    name: 'Exceed',
    versions: ['default']
  }),
  'exceed-2': newEdition({
    id: 'exceed-2',
    name: 'Exceed 2',
    versions: ['default']
  }),
  'zero': newEdition({
    id: 'zero',
    name: 'Zero',
    versions: ['default']
  }),
  'nx': newEdition({
    id: 'nx',
    name: 'NX / New Xenesis',
    versions: ['default', '1.08']
  }),
  'pro': newEdition({
    id: 'pro',
    name: 'Pro',
    versions: ['r5', 'initial', 'encore']
  }),
  'nx2': newEdition({
    id: 'nx2',
    name: 'NX2 / Next Xenesis',
    versions: ['default']
  }),
  'nxa': newEdition({
    id: 'nxa',
    name: 'NX Absolute',
    versions: ['default']
  }),
  'fiesta': newEdition({
    id: 'fiesta',
    name: 'Fiesta',
    versions: [
      'v1.01',
      'v1.02',
      'v1.03',
      'v1.04',
      'v1.05',
      'v1.06',
      'v1.07',
      'v1.10',
      'v1.20'
    ]
  }),
  'pro-2': newEdition({
    id: 'pro-2',
    name: 'Pro 2',
    versions: ['r6', 'r14', 'r12']
  }),
  'fiesta-ex': newEdition({
    id: 'fiesta-ex',
    name: 'Fiesta EX',
    versions: ['v1.00', 'v1.10', 'v1.20', 'v1.30', 'v1.40', 'v1.50', 'v1.51']
  }),
  'fiesta-2': newEdition({
    id: 'fiesta-2',
    name: 'Fiesta 2',
    versions: [
      'v1.00',
      'v1.01',
      'v1.10',
      'v1.20',
      'v1.30',
      'v1.40',
      'v1.50',
      'v1.51',
      'v1.60',
      'v1.61'
    ]
  }),
  'infinity': newEdition({
    id: 'infinity',
    name: 'Infinity',
    versions: ['v1.03', 'v1.05', 'v1.06', 'v1.07', 'v1.09', 'v1.10']
  }),
  'prime': newEdition({
    id: 'prime',
    name: 'Prime',
    versions: [
      'v1.00.0',
      'v1.01.0',
      'v1.02.0',
      'v1.03.0',
      'v1.04.0',
      'v1.05.0',
      'v1.06.0',
      'v1.07.0',
      'v1.08.0',
      'v1.09.0',
      'v1.10.0',
      'v1.11.0',
      'v1.12.0',
      'v1.13.0',
      'v1.14.0',
      'v1.15.0',
      'v1.16.0',
      'v1.17.0',
      'v1.18.0',
      'v1.19.0',
      'v1.20.0',
      'v1.21.0'
    ]
  }),
  'prime-je': newEdition({
    id: 'prime-je',
    name: 'Prime JE',
    versions: [
      'v1.01.0',
      'v1.02.0',
      'v1.03.0',
      'v1.04.0',
      'v1.05.0',
      'v1.06.0',
      'v1.07.0',
      'v1.08.0',
      'v1.09.0',
      'v1.10.0',
      'v1.11.0',
      'v1.12.0',
      'v1.13.0',
      'v1.14.0',
      'v1.15.0',
      'v1.16.0',
      'v1.17.0'
    ]
  }),
  'prime-2': newEdition({
    id: 'prime-2',
    name: 'Prime 2',
    versions: [
      'v1.00.0',
      'v1.01.0',
      'v1.02.0',
      'v1.03.0',
      'v1.04.0',
      'v1.05.0',
      'v1.06.0',
      'v1.07.0',
      'v1.08.0',
      'v1.09.0',
      'v1.10.0',
      'v2.00.0',
      'v2.01.0',
      'v2.02.0',
      'v2.03.0',
      'v2.04.0',
      'v2.05.0'
    ]
  }),
  'xx': newEdition({
    id: 'xx',
    name: 'XX',
    versions: [
      'v1.00.1',
      'v1.01.0',
      'v1.02.0',
      'v1.03.0',
      'v1.03.1',
      'v1.04.0',
      'v1.05.0',
      'v2.00.0',
      'v2.01.0',
      'v2.02.0',
      'v2.03.0',
      'v2.03.1',
      'v2.04.0',
      'v2.05.0',
      'v2.06.0',
      'v2.07.0',
      'v2.08.0'
    ]
  }),
  'phoenix': newEdition({
    id: 'phoenix',
    name: 'Phoenix',
    versions: ['v1.00.0', 'v1.01.0']
  })
}

export const ALL_VERSION_IDS = Object.values(editions).map(({ versionIds }) => versionIds).flat()

declare global {
  type Version = (typeof ALL_VERSION_IDS)[number]
}

export default editions
