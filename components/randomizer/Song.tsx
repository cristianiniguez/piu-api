'use client'

import { FC, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Box, Flex, IconButton, Image, Spinner, Text } from '@chakra-ui/react'
import { FiArrowLeft, FiRefreshCw } from 'react-icons/fi'
import {
  getRandomSong,
  getSearchParamsFromValues,
  getValuesFromSearchParams
} from '@/utils'

const formatBpm = (bpm: Song['bpm']) =>
  Array.isArray(bpm) ? `${bpm[0]} - ${bpm[1]}` : bpm

const RandomizerSong: FC<{ chart: EditionsMap }> = ({ chart }) => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [song, setSong] = useState<MatchingStep | undefined>(undefined)

  const searchParams = useSearchParams()
  const values = getValuesFromSearchParams(searchParams)

  const searchSong = () => {
    setLoading(true)
    const randomSong = getRandomSong(chart, values)
    setSong(randomSong)
    setLoading(false)
  }

  const goBack = () => {
    router.push(`./form?${getSearchParamsFromValues(values).toString()}`)
  }
  useEffect(() => {
    searchSong()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const renderContent = () => {
    if (loading) return <Spinner />

    if (!song) return <Text fontSize='xl'>No songs for these parameters</Text>

    return (
      <>
        <Flex alignItems='center' direction='column' gap={2}>
          <Image
            alt={song.name}
            maxW={250}
            src={`/images/songs/${song.id}.png`}
            w='full'
          />
          <Text fontSize='xl' textTransform='uppercase'>
            {song.name}
          </Text>
          <Text fontSize='lg'>{song.artist}</Text>
          <Text fontSize='md'>{formatBpm(song.bpm)} BPM</Text>
          <Text fontSize='md' textTransform='uppercase'>
            {song.type}
          </Text>
          <Text fontSize='md' textTransform='uppercase'>
            {song.stepType} {song.stepLevel.toString().padStart(2, '0')}
          </Text>
          <IconButton
            aria-label='Search another song'
            colorScheme='blue'
            icon={<FiRefreshCw />}
            onClick={searchSong}
            w='full'
          />
          <IconButton
            aria-label='Go back'
            colorScheme='blue'
            icon={<FiArrowLeft />}
            onClick={goBack}
            variant='outline'
            w='full'
          />
        </Flex>
      </>
    )
  }

  return <Box textAlign='center'>{renderContent()}</Box>
}

export default RandomizerSong
