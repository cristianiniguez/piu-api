import API from '@/api'
import RandomizerSong from '@/components/randomizer/Song'

type SongPageProps = {
  params: { versionId: string }
}

const SongPage = async (props: SongPageProps) => {
  const chart = await API.getChart(props.params.versionId)
  return <RandomizerSong chart={chart} />
}

export default SongPage