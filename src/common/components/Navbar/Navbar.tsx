import { HStack, Link as ChakraLink, Stack } from '@chakra-ui/layout'
import { GithubIcon } from 'assets/icons'

import { ButtonToggleTheme } from '../ButtonToggleTheme'
import { MusicControls } from '../MusicControls'

export const Navbar = () => {
  return (
    <Stack
      direction={{ base: 'column', sm: 'row' }}
      pt="8"
      pb="16"
      px="4"
      as="nav"
      align="center"
      justifyContent="space-between"
      spacing="4"
    >
      <HStack
        align="center"
        spacing={{ base: '5', md: '10' }}
        sx={{ a: { color: 'current' } }}
      >
        <ChakraLink>Home</ChakraLink>

        <ChakraLink>Works</ChakraLink>

        <ChakraLink>Posts</ChakraLink>

        <ChakraLink display="flex" alignItems="center">
          <GithubIcon boxSize="5" mr="2" /> Source
        </ChakraLink>
      </HStack>

      <HStack align="center" spacing="2">
        <MusicControls />

        <ButtonToggleTheme />
      </HStack>
    </Stack>
  )
}
