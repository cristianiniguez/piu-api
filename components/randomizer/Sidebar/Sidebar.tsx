import { FC, ReactNode } from 'react'
import { Box } from '@chakra-ui/react'
import SidebarMenu from './SidebarMenu'
import SidebarMobile from './SidebarMobile'

type SidebarProps = {
  editions: GetEditionsApiResponse
  children: ReactNode
}

const SimpleSidebar: FC<SidebarProps> = ({ children, editions }) => (
  <Box bg='blue.900' color='gray.50' minH='100vh'>
    <SidebarMenu display={{ base: 'none', md: 'grid' }} editions={editions} />
    <SidebarMobile editions={editions} />
    <Box ml={{ base: 0, md: 96 }}>{children}</Box>
  </Box>
)

export default SimpleSidebar
