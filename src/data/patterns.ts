
/** This is supossing infinity versions are removed on prime edition */
export const onlyInfinityPattern = (versionId: Version, level: number): StepHistory => ({
  [versionId]: level,
  'prime::v1.00.0': 0
})
