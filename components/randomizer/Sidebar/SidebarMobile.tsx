'use client'

import { FC } from 'react'
import {
  Drawer,
  DrawerContent,
  Flex,
  IconButton,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import SidebarMenu from './SidebarMenu'

type SidebarMobileProps = {
  editions: GetEditionsApiResponse
}

const SidebarMobile: FC<SidebarMobileProps> = ({ editions }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        onClose={onClose}
        onOverlayClick={onClose}
        placement='left'
        returnFocusOnClose={false}
        size='full'
      >
        <DrawerContent color='gray.50'>
          <SidebarMenu editions={editions} onClose={onClose} />
        </DrawerContent>
      </Drawer>

      {/* mobilenav */}
      <Flex
        alignItems='center'
        borderBottomColor='gray.50'
        borderBottomWidth='1px'
        display={{ base: 'flex', md: 'none' }}
        height='20'
        justifyContent='flex-start'
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 24 }}
      >
        <IconButton
          aria-label='open menu'
          color='gray.50'
          icon={<FiMenu />}
          onClick={onOpen}
          variant='outline'
        />

        <Text fontSize='lg' fontWeight='bold' ml='8'>
          PIU Randomizer
        </Text>
      </Flex>
    </>
  )
}

export default SidebarMobile
