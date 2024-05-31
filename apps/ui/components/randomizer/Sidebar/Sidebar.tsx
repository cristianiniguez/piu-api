import { FC, ReactNode } from 'react'
import { Box } from '@chakra-ui/react'
import SidebarMenu from './SidebarMenu'
import SidebarMobile from './SidebarMobile'

type SidebarProps = {
  editions: object
  children: ReactNode
}

const SimpleSidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <Box bg='blue.900' color='gray.50' minH='100vh'>
      <SidebarMenu
        display={{ base: 'none', md: 'block' }}
      />
      <SidebarMobile />
      <Box ml={{ base: 0, md: 60 }}>{children}</Box>
    </Box>
  )
}

export default SimpleSidebar
