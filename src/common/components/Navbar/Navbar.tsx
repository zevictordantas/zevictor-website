import { HStack, Link as ChakraLink, Stack } from '@chakra-ui/layout'
import { GithubIcon } from 'assets/icons'
import { links, paths } from 'common/const'
import Link from 'next/link'

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
        <Link href={paths.homepage}>
          <ChakraLink>Home</ChakraLink>
        </Link>

        <Link href={paths.works}>
          <ChakraLink>Works</ChakraLink>
        </Link>

        <Link href={paths.posts}>
          <ChakraLink>Posts</ChakraLink>
        </Link>

        <ChakraLink
          href={links.projects.websiteRepo}
          isExternal
          display="flex"
          alignItems="center"
        >
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
