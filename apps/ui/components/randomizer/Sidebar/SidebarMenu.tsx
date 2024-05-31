import { FC } from 'react'
import { Box, BoxProps, CloseButton, Flex, Text } from '@chakra-ui/react'
import SidebarMenuItem from './SidebarMenuItem'

interface SidebarMenuProps extends BoxProps {
  onClose?: () => void
}

type SidebarMenuItemProps = {
  name: string
}

const SidebarMenu: FC<SidebarMenuProps> = ({ onClose, ...rest }) => {
  const menuItems: SidebarMenuItemProps[] = []

  return (
    <Box
      borderRight='1px'
      borderRightColor='gray.50'
      w={{ base: 'full', md: 60 }}
      pos='fixed'
      h='full'
      {...rest}
    >
      <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
        <Text fontSize='lg' fontWeight='bold'>
          PIU Randomizer
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {menuItems.map(link => (
        <SidebarMenuItem key={link.name}>
          {link.name}
        </SidebarMenuItem>
      ))}
    </Box>
  )
}

export default SidebarMenu
