import { HStack, Link as ChakraLink, Spacer } from '@chakra-ui/layout'
import { GithubIcon } from 'assets/icons'

import { ButtonToggleTheme } from '../ButtonToggleTheme'
import { MusicControls } from '../MusicControls'

export const Navbar = () => {
  return (
    <HStack pt="8" pb="16" px="4" spacing="10" as="nav" align="center">
      <ChakraLink>Home</ChakraLink>

      <ChakraLink>Works</ChakraLink>

      <ChakraLink>Posts</ChakraLink>

      <ChakraLink display="flex" alignItems="center">
        <GithubIcon boxSize="5" mr="2" /> Source
      </ChakraLink>

      <Spacer />

      <MusicControls />

      <ButtonToggleTheme />
    </HStack>
  )
}
