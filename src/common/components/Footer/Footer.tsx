import { useColorModeValue } from '@chakra-ui/color-mode'
import { Link as ChakraLink, SimpleGrid, Text, VStack } from '@chakra-ui/layout'
import { EmailIcon, GithubIcon, LinkedinIcon, TwitterIcon } from 'assets/icons'
import { InstagramIcon } from 'assets/icons/InstagramIcon'
import { links, paths } from 'common/const'
import Link from 'next/link'

export const Footer = () => {
  const borderColor = useColorModeValue('light.600', 'dark.600')

  return (
    <SimpleGrid
      as="footer"
      mt="6"
      pt="8"
      pb="16"
      px="4"
      minChildWidth="128px"
      justifyContent="center"
      spacing="4"
      borderTop="1px solid"
      borderColor={borderColor}
    >
      <VStack align="left" spacing="6" sx={{ a: { color: 'current' } }}>
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
      </VStack>

      <VStack align="left" spacing="6" sx={{ a: { color: 'current' } }}>
        <ChakraLink
          href={links.social.github}
          isExternal
          display="flex"
          alignItems="center"
        >
          <GithubIcon boxSize="5" mr="2" /> Github
        </ChakraLink>

        <ChakraLink
          href={links.social.linkedin}
          isExternal
          display="flex"
          alignItems="center"
        >
          <LinkedinIcon boxSize="5" mr="2" /> LinkedIn
        </ChakraLink>

        <ChakraLink
          href={links.social.twitter}
          isExternal
          display="flex"
          alignItems="center"
        >
          <TwitterIcon boxSize="5" mr="2" /> Twitter
        </ChakraLink>

        <ChakraLink
          href={links.social.instagram}
          isExternal
          display="flex"
          alignItems="center"
        >
          <InstagramIcon boxSize="5" mr="2" /> Instagram
        </ChakraLink>
      </VStack>

      <VStack align="left" spacing="6">
        <ChakraLink
          href={links.email}
          isExternal
          display="flex"
          alignItems="center"
          color="current"
        >
          <EmailIcon boxSize="5" mr="2" /> Email
        </ChakraLink>

        <Text fontSize="sm">
          {"Don't know which music is playing on the background? here is  "}
          <ChakraLink href={links.musicInspiration} isExternal>
            your clue
          </ChakraLink>
        </Text>

        <Text fontSize="sm">
          © 2022 José Victor Dantas. All Rights Reserved.
        </Text>
      </VStack>
    </SimpleGrid>
  )
}
