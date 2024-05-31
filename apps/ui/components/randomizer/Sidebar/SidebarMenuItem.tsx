import { ReactNode } from 'react'
import { Flex, FlexProps, Link } from '@chakra-ui/react'

interface SidebarMenuItemProps extends FlexProps {
  children: ReactNode
}

const SidebarMenuItem = ({ children, ...rest }: SidebarMenuItemProps) => {
  return (
    <Link
      href='#'
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align='center'
        p='4'
        mx='4'
        borderRadius='lg'
        role='group'
        cursor='pointer'
        _hover={{
          bg: 'cyan.400',
          color: 'white'
        }}
        {...rest}
      >
        {children}
      </Flex>
    </Link>
  )
}

export default SidebarMenuItem
