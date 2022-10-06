import { useColorModeValue } from '@chakra-ui/color-mode'
import { Heading, Stack, Text } from '@chakra-ui/layout'

export const BiographySection = () => {
  const grayColor = useColorModeValue('light.300', 'dark.300')
  const underlineColor = useColorModeValue('light.600', 'dark.600')

  const timeline = [
    {
      eventDescription: 'Born in Brasilia - DF, Brazil',
      period: '1997'
    },
    {
      eventDescription: 'Co-founder and Software Engineer of KMJ Consulting',
      period: '2018'
    },
    {
      eventDescription: 'Co-founder and CTO of Corp Insider',
      period: '2020'
    },
    {
      eventDescription: 'Software Engineer of Aluna Social',
      period: '2020'
    },
    {
      eventDescription: 'Senior Frontend Engineer at Faktura',
      period: '2022'
    },
    {
      eventDescription: 'Senior Software Engineer at Yeti-Labs',
      period: '2022'
    },
    {
      eventDescription: 'Co-founder and CTO at Carbona',
      period: '2021 - to present'
    },
    {
      eventDescription: 'CIO at BlockC',
      period: '2022 - to present'
    }
  ]

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

      {timeline.map((event, index) => (
        <Stack
          key={index + event.period}
          direction={{ base: 'column', sm: 'row' }}
        >
          <Text color={grayColor} fontWeight="extrabold">
            {event.period}
          </Text>

          <Text>{event.eventDescription}</Text>
        </Stack>
      ))}
    </Stack>
  )
}
