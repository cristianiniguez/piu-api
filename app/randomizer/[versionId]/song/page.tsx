import RandomizerSong from '@/components/randomizer/Song'
import { getChart, isValidVersionId } from '@/data'
import { redirect } from 'next/navigation'

type SongPageProps = {
  params: { versionId: string }
}

const SongPage = async (props: SongPageProps) => {
  const versionId = decodeURIComponent(props.params.versionId)
  if (!isValidVersionId(versionId)) redirect('/')
  const chart = getChart(versionId)
  return <RandomizerSong chart={chart} />
}

export default SongPage