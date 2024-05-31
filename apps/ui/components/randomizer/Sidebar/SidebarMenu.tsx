import { FC } from 'react'
import { Box, BoxProps, CloseButton, Flex, Grid, Text } from '@chakra-ui/react'
import SidebarMenuItem from './SidebarMenuItem'

interface SidebarMenuProps extends BoxProps {
  editions: GetEditionsApiResponse
  onClose?: () => void
}

const SidebarMenu: FC<SidebarMenuProps> = ({ editions, onClose, ...rest }) => {
  const versions = Object.values(editions)
    .map(({ id, name, versions }) =>
      versions.map(version => ({
        label: `${name} - ${version}`,
        id: `${id}::${version}`
      }))
    )
    .flat()

  return (
    <Grid
      gridTemplateRows='auto 1fr'
      gap={4}
      bg='blue.900'
      borderRight='1px'
      borderRightColor='gray.50'
      w={{ base: 'full', md: 96 }}
      pos='fixed'
      h='full'
      p={6}
      {...rest}
    >
      <Flex alignItems='center' justifyContent='space-between'>
        <Text px={2} fontSize='lg' fontWeight='bold'>
          PIU Randomizer
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Box flexGrow={1} overflowY='auto'>
        {versions.map(version => (
          <SidebarMenuItem key={version.id} version={version} />
        ))}
      </Box>
    </Grid>
  )
}

export default SidebarMenu
