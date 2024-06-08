'use client'

import { FC, useEffect, useState } from 'react'
import { Box, Spinner, Text } from '@chakra-ui/react'
import { getRandomSong, getValuesFromSearchParams } from '@/utils'
import { useSearchParams } from 'next/navigation'

const RandomizerSong: FC<{ chart: EditionsMap }> = ({ chart }) => {
  console.log(Object.entries(chart))
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

  useEffect(() => {
    searchSong()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const renderContent = () => {
    if (loading) return <Spinner />

    if (!song) return <Text fontSize="xl">No songs for this parameters</Text>

    return (
      <>
        <Text fontSize="xl">{song.name}</Text>
        <Text fontSize="lg">{song.artist}</Text>
        <Text fontSize="md">{song.bpm} BPM</Text>
        <Text fontSize="md">{song.type}</Text>
        <Text fontSize="md">
          {song.stepType} - {song.stepLevel}
        </Text>
      </>
    )
  }

  return <Box textAlign="center">{renderContent()}</Box>
}

export default RandomizerSong
