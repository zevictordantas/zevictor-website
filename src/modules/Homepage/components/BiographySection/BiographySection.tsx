import { useColorModeValue } from '@chakra-ui/color-mode'
import { Heading, Stack, Text } from '@chakra-ui/layout'

export const BiographySection = () => {
  const grayColor = useColorModeValue('light.300', 'dark.300')
  const underlineColor = useColorModeValue('light.600', 'dark.600')

  return (
    <Stack spacing="4" as="section">
      <Heading
        fontSize="lg"
        fontWeight="extrabold"
        w="fit-content"
        borderBottom={`4px solid`}
        borderColor={underlineColor}
      >
        Bio
      </Heading>

      <Stack direction={{ base: 'column', sm: 'row' }}>
        <Text color={grayColor} fontWeight="extrabold">
          1997
        </Text>
        <Text>Born in Brasilia - DF, Brazil</Text>
      </Stack>

      <Stack direction={{ base: 'column', sm: 'row' }}>
        <Text color={grayColor} fontWeight="extrabold">
          2018
        </Text>
        <Text>Co-founder and Software Engineer of KMJ Consulting</Text>
      </Stack>

      <Stack direction={{ base: 'column', sm: 'row' }}>
        <Text color={grayColor} fontWeight="extrabold">
          2020
        </Text>
        <Text>Co-founder and CTO of Corp Insider</Text>
      </Stack>

      <Stack direction={{ base: 'column', sm: 'row' }}>
        <Text color={grayColor} fontWeight="extrabold">
          2020
        </Text>
        <Text>Software Engineer of Aluna Social</Text>
      </Stack>

      <Stack direction={{ base: 'column', sm: 'row' }}>
        <Text color={grayColor} fontWeight="extrabold">
          2021 - to present
        </Text>
        <Text>Co-founder and CTO at Carbona</Text>
      </Stack>

      <Stack direction={{ base: 'column', sm: 'row' }}>
        <Text color={grayColor} fontWeight="extrabold">
          2022 - to present
        </Text>
        <Text>Freelance Software Engineer at Yeti-Labs</Text>
      </Stack>

      <Stack direction={{ base: 'column', sm: 'row' }}>
        <Text color={grayColor} fontWeight="extrabold">
          2022 - to present
        </Text>
        <Text>Software Engineer at Faktura</Text>
      </Stack>
    </Stack>
  )
}
