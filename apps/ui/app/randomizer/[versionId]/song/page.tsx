'use client'

import { useEffect, useState } from 'react'
import { Box, Spinner, Text } from '@chakra-ui/react'
import { getRandomSong, getValuesFromSearchParams } from '@/utils'
import { useSearchParams } from 'next/navigation'

const SongPage = () => {
  const [loading, setLoading] = useState(true)
  const [song, setSong] = useState<Step | undefined>(undefined)

  const searchParams = useSearchParams()
  const values = getValuesFromSearchParams(searchParams)

  const searchSong = () => {
    setLoading(true)
    const randomSong = getRandomSong(values)
    setSong(randomSong)
    setLoading(false)
  }

  useEffect(() => {
    searchSong()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const renderBpm = (bpm: Step['bpm']) =>
    Array.isArray(bpm) ? bpm.join(' - ') : bpm

  const renderContent = () => {
    if (loading) return <Spinner />

    if (!song) return <Text fontSize="xl">No songs for this parameters</Text>

    return (
      <>
        <Text fontSize="xl">{song.name}</Text>
        <Text fontSize="lg">{song.artist}</Text>
        <Text fontSize="md">BPM: {renderBpm(song.bpm)}</Text>
        <Text fontSize="md">{song.type}</Text>
        <Text fontSize="md">
          {song.stepType} - {song.stepLevel}
        </Text>
      </>
    )
  }

  return <Box textAlign="center">{renderContent()}</Box>
}

export default SongPage
