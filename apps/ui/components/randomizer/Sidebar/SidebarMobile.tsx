'use client'

import {
  Box,
  Drawer,
  DrawerContent,
  Flex,
  IconButton,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import SidebarMenu from './SidebarMenu'
import { FiMenu } from 'react-icons/fi'

const SidebarMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size='full'
      >
        <DrawerContent>
          <SidebarMenu onClose={onClose} />
        </DrawerContent>
      </Drawer>

      {/* mobilenav */}
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 24 }}
        height='20'
        alignItems='center'
        borderBottomWidth='1px'
        borderBottomColor='gray.50'
        justifyContent='flex-start'
        display={{ base: 'flex', md: 'none' }}
      >
        <IconButton
          variant='outline'
          color='gray.50'
          onClick={onOpen}
          aria-label='open menu'
          icon={<FiMenu />}
        />

        <Box>
          <Text fontSize='lg' ml='8' fontWeight='bold'>
            PIU Randomizer
          </Text>
          <Text fontSize='lg' ml='8' fontWeight='bold'>
            TODO: put version name here
          </Text>
        </Box>
      </Flex>
    </>
  )
}

export default SidebarMobile
