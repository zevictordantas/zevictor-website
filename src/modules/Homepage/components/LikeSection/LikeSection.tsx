import { useColorModeValue } from '@chakra-ui/color-mode'
import { Heading, Stack, Text } from '@chakra-ui/layout'

export const LikeSection = () => {
  const underlineColor = useColorModeValue('light.600', 'dark.600')

  return (
    <Stack mt="4" spacing="4" as="section">
      <Heading
        fontSize="lg"
        fontWeight="extrabold"
        w="fit-content"
        borderBottom={`4px solid`}
        borderColor={underlineColor}
      >
        I Like
      </Heading>

      <Text>
        Nature, Music, Hiking, Bicycling, Finance, Investing/Trading,
        Entrepreneurship, Decentralized Web
      </Text>
    </Stack>
  )
}
