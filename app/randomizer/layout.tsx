import { FC, PropsWithChildren } from 'react'
import { Box, Grid } from '@chakra-ui/react'
import Sidebar from '@/components/randomizer/Sidebar/Sidebar'
import editions from '@/data/editions'

const RandomizerLayout: FC<PropsWithChildren> = ({ children }) => {
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
