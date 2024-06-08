'use client'

import { useEffect } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Form, Formik, FormikConfig } from 'formik'
import * as Yup from 'yup'
import { Button, VStack } from '@chakra-ui/react'
import RadioGroupInput, {
  RadioGroupInputOptionProps
} from '@/components/inputs/RadioGroupInput'
import IntegerInput from '@/components/inputs/IntegerInput'
import { getSearchParamsFromValues, getValuesFromSearchParams } from '@/utils'
import { MAX_LEVEL, MIN_LEVEL } from '@/constants'

const STEP_TYPES_OPTIONS: RadioGroupInputOptionProps[] = [
  { label: 'Single', value: 'single' },
  { label: 'Double', value: 'double' },
  { label: 'Single Performance', value: 'single-p' },
  { label: 'Double Performance', value: 'double-p' },
  { label: 'CO-OP', value: 'coop' }
]

const SONG_TYPES_OPTIONS: RadioGroupInputOptionProps[] = [
  { label: 'Arcade', value: 'arcade' },
  { label: 'Full Song', value: 'fullsong' },
  { label: 'Remix', value: 'remix' },
  { label: 'Shortcut', value: 'shortcut' }
]

type FormValues = RandomSongParams
type FormConfig = FormikConfig<FormValues>

const FormPageComponent: FormConfig['component'] = ({
  isSubmitting,
  values
}) => {
  const router = useRouter()
  const pathname = usePathname()

  const setSearchParams = (searchParams: URLSearchParams) => {
    router.replace(`${pathname}?${searchParams.toString()}`)
  }

  useEffect(() => {
    setSearchParams(getSearchParamsFromValues(values))
  }, [values, setSearchParams])

  const search = () => router.push(`./song?${getSearchParamsFromValues(values).toString()}`)

  return (
    <Form>
      <VStack alignItems='stretch' spacing={4}>
        <RadioGroupInput
          label='Step Types'
          name='stepType'
          options={STEP_TYPES_OPTIONS}
        />

        <RadioGroupInput
          label='Song Types'
          name='songType'
          options={SONG_TYPES_OPTIONS}
        />

        <IntegerInput
          label='Min Level'
          min={MIN_LEVEL}
          max={MAX_LEVEL}
          name='minLevel'
        />

        <IntegerInput
          label='Max Level'
          min={MIN_LEVEL}
          max={MAX_LEVEL}
          name='maxLevel'
        />

        <Button colorScheme='blue' isLoading={isSubmitting} type='button' onClick={search}>
          Search
        </Button>
      </VStack>
    </Form>
  )
}

const RandomizerForm = () => {
  const searchParams = useSearchParams()

  const getValidationSchema = () => {
    const minLevelError = `Use a level equal or greater than ${MIN_LEVEL}`
    const maxLevelError = `Use a level equal or less than ${MAX_LEVEL}`

    return Yup.object({
      stepType: Yup.string().required('Select one'),
      songType: Yup.string().required('Select one'),
      minLevel: Yup.number()
        .min(MIN_LEVEL, minLevelError)
        .required(minLevelError),
      maxLevel: Yup.number()
        .max(MAX_LEVEL, maxLevelError)
        .required(maxLevelError)
    })
  }

  return (
    <Formik
      component={FormPageComponent}
      initialValues={getValuesFromSearchParams(searchParams)}
      onSubmit={() => {}}
      validationSchema={getValidationSchema()}
    />
  )
}

export default RandomizerForm
