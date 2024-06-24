import { FC, PropsWithChildren } from 'react'
import { Box, Grid } from '@chakra-ui/react'
import Sidebar from '@/components/randomizer/Sidebar/Sidebar'
import editions from '@/data/editions'

const RandomizerLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Sidebar editions={editions}>
      <Grid bg='blue.900' color='gray.50' p={4} placeItems='stretch'>
        <Box borderColor='gray.600' borderRadius='lg' borderWidth={2} p={4}>
          {children}
        </Box>
      </Grid>
    </Sidebar>
  )
}

export default RandomizerLayout
