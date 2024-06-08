'use client'

import { Link } from '@chakra-ui/next-js'
import { Flex, FlexProps } from '@chakra-ui/react'

interface SidebarMenuItemProps extends FlexProps {
  version: {
    id: string
    label: string
  }
}

const SidebarMenuItem = ({ version, ...rest }: SidebarMenuItemProps) => {
  return (
    <Link
      href={`/randomizer/${version.id}/form`}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align='center'
        p={2}
        borderRadius='lg'
        role='group'
        cursor='pointer'
        _hover={{
          bg: 'blue.500',
          color: 'white'
        }}
        {...rest}
      >
        {version.label}
      </Flex>
    </Link>
  )
}

export default SidebarMenuItem
