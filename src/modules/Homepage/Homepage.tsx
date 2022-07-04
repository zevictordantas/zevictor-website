import { Box, Heading, Stack, Text } from '@chakra-ui/layout'
import { useColorModeValue } from '@chakra-ui/react'
import Image from 'next/future/image'

export const Homepage = () => {
  const outlineColor = useColorModeValue('black', 'white')
  // const underlineColor = useColorModeValue('light.600', 'dark.600')

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
            <Heading as="h1" fontWeight="bold">
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

        {/* <Heading
          fontSize="lg"
          fontWeight="bold"
          w="fit-content"
          borderBottom={`4px solid`}
          borderColor={underlineColor}
        >
          Work
        </Heading>

        <Text textAlign="justify">
          José is a freelance and a full-stack developer based in Brazil with a
          passion for building web apps with great impact. He has a knack for designing 
          all things launching products, from planning and designing all the way
          to solving real-life problems with code. When not online, he loves
          hanging out with his camera. Currently, he is living off of his own
          product called Inkdrop. He publishes content for marketing his
          products and his YouTube channel called &quot;Dev as Life&quot; has
          more than 100k subscribers.
        </Text> */}
      </Stack>
    </>
  )
}
