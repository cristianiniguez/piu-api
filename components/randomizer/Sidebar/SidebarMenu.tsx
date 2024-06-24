import { FC } from 'react'
import { Box, BoxProps, CloseButton, Flex, Grid, Text } from '@chakra-ui/react'
import SidebarMenuItem from './SidebarMenuItem'

interface SidebarMenuProps extends BoxProps {
  editions: GetEditionsApiResponse
  onClose?: () => void
}

const SidebarMenu: FC<SidebarMenuProps> = ({ editions, onClose, ...rest }) => {
  const versions = Object.values(editions)
    .flatMap(({ id, name, versions }) =>
      versions.map(version => ({
        label: `${name} - ${version}`,
        id: `${id}::${version}`
      }))
    )
    .reverse()

  return (
    <Grid
      bg='blue.900'
      borderRight='1px'
      borderRightColor='gray.50'
      gap={4}
      gridTemplateRows='auto 1fr'
      h='full'
      p={6}
      pos='fixed'
      w={{ base: 'full', md: 96 }}
      {...rest}
    >
      <Flex alignItems='center' justifyContent='space-between'>
        <Text fontSize='lg' fontWeight='bold' px={2}>
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
