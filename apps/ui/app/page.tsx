import { redirect } from 'next/navigation'
import API from '@/api'

export default async function Home() {
  const editions = await API.getEditions()
  const versionIds = Object.values(editions).flatMap(({ versionIds }) => versionIds)
  const lastVersionId = versionIds[versionIds.length - 1] ?? 'NOT_A_VERSION'
  redirect(`/randomizer/${lastVersionId}/form`)
}
