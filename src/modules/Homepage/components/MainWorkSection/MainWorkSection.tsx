import { Button } from '@chakra-ui/button'
import { useColorModeValue } from '@chakra-ui/color-mode'
import {
  Box,
  Heading,
  Link as ChakraLink,
  Stack,
  Text
} from '@chakra-ui/layout'
import { links, paths } from 'common/const'
import Image from 'next/future/image'
import Link from 'next/link'

export const MainWorkSection = () => {
  const outlineColor = useColorModeValue('black', 'white')
  const underlineColor = useColorModeValue('light.600', 'dark.600')

  return (
    <>
      <Stack spacing="4" as="main">
        <Stack
          direction={{ base: 'column-reverse', md: 'row' }}
          align="center"
          spacing="10"
          justifyContent="center"
        >
          <Box>
            <Heading
              as="h1"
              textAlign={{ base: 'center', md: 'start' }}
              fontWeight="bold"
            >
              José Victor Dantas
            </Heading>

            <Text>{'Software Engineer (Developer / Builder / Writer)'}</Text>
          </Box>

          <Image
            src="/tiny-jose-victor-dantas.jpg"
            width={120}
            height={120}
            style={{
              borderRadius: '50%',
              outline: `1px solid ${outlineColor}`,
              outlineOffset: '4px'
            }}
          />
        </Stack>

        <Heading
          fontSize="lg"
          fontWeight="extrabold"
          w="fit-content"
          borderBottom={`4px solid`}
          borderColor={underlineColor}
        >
          Work
        </Heading>

        <Text textAlign="justify">
          José is a freelance and a full-stack developer based in Brazil with a
          passion for building web apps with a socio-economic impact. He has a
          knack for tackling community-impacting projects, from planning and
          designing all the way to the code. When he isn’t online, you’ll be
          able to find him riding his MTB on trails looking for waterfalls and
          wonderful views. Currently, Zé is working on his own project,{' '}
          <ChakraLink href={links.projects.carbona} isExternal>
            carbona.io
          </ChakraLink>
          , which will be disrupting the access to the process of generating
          carbon credits, he is also working with Yeti Labs on awesome projects
          on the Cosmos Ecosystem, like the{' '}
          <ChakraLink href={links.projects.wizardUi} isExternal>
            Wizard-UI
          </ChakraLink>
          , an open-source library with react components and hooks for the Terra
          and Cosmos community, and now is working with{' '}
          <ChakraLink href={links.projects.faktura} isExternal>
            Faktura
          </ChakraLink>{' '}
          to create the next generation of NFTs.
        </Text>
      </Stack>

      <Link passHref href={paths.works}>
        <Button my="6" as="a">
          My portfolio
        </Button>
      </Link>
    </>
  )
}
