const songsMap: Record<string, SongWithStepsHistories> = {
  blazing: {
    id: 'blazing',
    name: 'Blazing',
    artist: 'BanYa',
    bpm: 158,
    type: 'arcade',
    category: 'original',
    steps: {
      single: [
        {
          'exceed::default': 3,
          'nx2::default': 0,
          'fiesta::v1.01': 3,
          'xx::v1.00.1': 4
        },
        {
          'exceed::default': 6,
          'nx2::default': 0,
          'fiesta::v1.01': 6,
          'phoenix::v1.00.0': 7
        },
        { 'fiesta-ex::v1.50': 9 },
        {
          'exceed::default': 14,
          'zero::default': 15,
          'nx2::default': 0,
          'fiesta::v1.01': 15,
          'xx::v1.00.1': 17
        },
        { 'prime-2::v2.04.0': 19, 'phoenix::v1.00.0': 20 }
      ],
      double: [
        { 'exceed::default': 5, 'exceed-2::default': 6, 'nx2::default': 0 },
        {
          'exceed::default': 17,
          'exceed-2::default': 19,
          'nx2::default': 0,
          'fiesta::v1.01': 19,
          'xx::v1.00.1': 20,
          'phoenix::v1.00.0': 21
        }
      ]
    }
  }
}

export default songsMap
