import API from '@/api'
import RandomizerForm from '@/components/randomizer/Form'

type FormPageProps = {
  params: { versionId: string }
}

const FormPage = async (props: FormPageProps) => {
  const chart = await API.getChart(props.params.versionId)
  return <RandomizerForm chart={chart} />
}

export default FormPage