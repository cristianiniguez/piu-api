'use client'

import { FC, useEffect } from 'react'
import { Form, Formik, type FormikProps } from 'formik'
import * as Yup from 'yup'
import { Button, VStack } from '@chakra-ui/react'
import SelectInput, {
  SelectInputOptionProps
} from '@/components/inputs/SelectInput'
import RadioGroupInput, {
  RadioGroupInputOptionProps
} from '@/components/inputs/RadioGroupInput'
import IntegerInput from '@/components/inputs/IntegerInput'
import { getSearchParamsFromValues, getValuesFromSearchParams } from '@/utils'
import { MAX_LEVEL, MIN_LEVEL } from '@/constants'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const GAME_EDITION_OPTIONS: SelectInputOptionProps[] = [
  { label: 'PIU Phoenix', value: 'piu-phoenix' }
]

const STEP_TYPES_OPTIONS: RadioGroupInputOptionProps[] = [
  { label: 'Single', value: 'single' },
  { label: 'Double', value: 'double' },
  { label: 'CO-OP', value: 'coop' }
]

const SONG_TYPES_OPTIONS: RadioGroupInputOptionProps[] = [
  { label: 'Arcade', value: 'arcade' },
  { label: 'Full Song', value: 'fullsong' },
  { label: 'Remix', value: 'remix' },
  { label: 'Shortcut', value: 'shortcut' }
]

type FormValues = RandomSongParams

const FormPageComponent = ({
  isSubmitting,
  values
}: FormikProps<FormValues>) => {
  const router = useRouter()
  const pathname = usePathname()

  const setSearchParams = (searchParams: URLSearchParams) => {
    router.replace(`${pathname}?${searchParams.toString()}`)
  }

  useEffect(() => {
    setSearchParams(getSearchParamsFromValues(values))
  }, [values, setSearchParams])

  return (
    <Form>
      <VStack alignItems="stretch" spacing={4}>
        <SelectInput
          label="Game Edition"
          name="gameEdition"
          options={GAME_EDITION_OPTIONS}
        />

        <RadioGroupInput
          label="Step Types"
          name="stepType"
          options={STEP_TYPES_OPTIONS}
        />

        <RadioGroupInput
          label="Song Types"
          name="songType"
          options={SONG_TYPES_OPTIONS}
        />

        <IntegerInput
          label="Min Level"
          min={MIN_LEVEL}
          max={MAX_LEVEL}
          name="minLevel"
        />

        <IntegerInput
          label="Max Level"
          min={MIN_LEVEL}
          max={MAX_LEVEL}
          name="maxLevel"
        />

        <Button colorScheme="blue" isLoading={isSubmitting} type="submit">
          Search
        </Button>
      </VStack>
    </Form>
  )
}

const RandomizerForm: FC<{ chart: object }> = ({ chart }) => {
  console.log(Object.values(chart))
  const router = useRouter()
  const searchParams = useSearchParams()

  const handelSubmit = async (values: FormValues) => {
    const route = `./song?${getSearchParamsFromValues(values).toString()}`
    console.log(route)
    router.push(route)
  }

  const getValidationSchema = () => {
    const minLevelError = `Use a level equal or greater than ${MIN_LEVEL}`
    const maxLevelError = `Use a level equal or less than ${MAX_LEVEL}`

    return Yup.object({
      gameEdition: Yup.string().required('Select one'),
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
      onSubmit={handelSubmit}
      validationSchema={getValidationSchema()}
    />
  )
}

export default RandomizerForm
