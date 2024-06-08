import { redirect } from 'next/navigation'
import editions from '@/data/editions'

export default function Home() {
  const versionIds = Object.values(editions).flatMap(({ versionIds }) => versionIds)
  const lastVersionId = versionIds[versionIds.length - 1] ?? 'NOT_A_VERSION'
  redirect(`/randomizer/${lastVersionId}/form`)
}
