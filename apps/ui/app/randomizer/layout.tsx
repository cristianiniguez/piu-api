import { PropsWithChildren, ReactNode } from 'react'
import { Box, Grid } from '@chakra-ui/react'
import API from '@/api'
import Sidebar from '@/components/randomizer/Sidebar/Sidebar'

const RandomizerLayout = async ({ children }: PropsWithChildren) => {
  const editions = await API.getEditions()

  return (
    <Sidebar editions={editions}>
      <Grid bg='blue.900' color='gray.50' placeItems='stretch' p={4}>
        <Box borderColor='gray.600' borderWidth={2} borderRadius='lg' p={4}>
          {children}
        </Box>
      </Grid>
    </Sidebar>
  )
}

export default RandomizerLayout
