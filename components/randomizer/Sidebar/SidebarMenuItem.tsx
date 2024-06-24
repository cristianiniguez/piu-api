'use client'

import { Link } from '@chakra-ui/next-js'
import { useParams } from 'next/navigation'
import { Flex, FlexProps, Text } from '@chakra-ui/react'
import { FiCheck } from 'react-icons/fi'

interface SidebarMenuItemProps extends FlexProps {
  version: {
    id: string
    label: string
  }
}

const SidebarMenuItem = ({ version, ...rest }: SidebarMenuItemProps) => {
  const params = useParams()
  const versionId =
    typeof params.versionId === 'string'
      ? decodeURIComponent(params.versionId)
      : ''
  const currentVersion = versionId === version.id

  return (
    <Link
      _focus={{ boxShadow: 'none' }}
      href={`/randomizer/${version.id}/form`}
      style={{
        textDecoration: 'none',
        fontWeight: currentVersion ? 'bold' : undefined
      }}
    >
      <Flex
        _hover={{
          bg: 'blue.500',
          color: 'white'
        }}
        align='center'
        borderRadius='lg'
        cursor='pointer'
        gap={2}
        p={2}
        role='group'
        {...rest}
      >
        <Text>{version.label}</Text>
        {currentVersion && <FiCheck />}
      </Flex>
    </Link>
  )
}

export default SidebarMenuItem
