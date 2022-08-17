import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel
} from '@chakra-ui/accordion'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { Box, Heading, Text } from '@chakra-ui/layout'
import Image from 'next/future/image'

export const Works = () => {
  const grayColor = useColorModeValue('light.300', 'dark.300')
  const underlineColor = useColorModeValue('light.600', 'dark.600')
  const bgColor = useColorModeValue('light.900', 'dark.900')
  const hoverBgColor = useColorModeValue('light.800', 'dark.800')
  const outlineColor = useColorModeValue('black', 'white')

  const jobs = [
    {
      jobDetails: [
        'My main responsibilities were related to development, planning and relationship with stakeholders. KMJ receives, on demand, a series of projects from our partnership network.',
        '· Responsible for the development of tech-based projects as Scrum Master and Front-End Developer.',
        '· Responsible for the development of long-term strategic planning for the company.',
        '· In charge of evaluating and approving partnerships with strategic companies and projects.',
        '· Analyze the valuation of investment projects presented to the company.',
        '· Develop innovative R&D plans for prime clients that can benefit from tax incentives.',
        "· Monitor the development of the company's social and innovation projects and identify new opportunities."
      ],
      jobImage: 'kmj-logo.jpeg',
      jobTitle: 'Co-founder and Software Engineer of KMJ Consulting',
      period: '2018'
    },
    {
      jobDetails: [
        'As CTO of a seed stage startup my main responsibilities were related to development, planning and relationship with stakeholders.',
        '· Responsible for evaluating and approving partnerships with strategic companies and institutions, i was able to make contact with key investors, one of them became the owner of our project, and partners that assured APIs and data to our project.',
        '· We used Business Modeling, Design Sprint/Thinking to elaborate our approach to the customer, our UX/UI and the key factor behind our functioning.'
      ],
      jobImage: 'corp-insider-logo.png',
      jobTitle: 'Co-founder and CTO of Corp Insider',
      period: '2020'
    },
    {
      jobDetails: [
        'Worked with the Server Side Rendered, SEO First frontend client for the Aluna Platform, creating a great experience for crypto-traders, connecting them to each other in a multi-exchange platform with powerful tools.',

        '· Main Techs: TypeScript, React Hooks + Zustand, NextJS, Chakra-UI, NodeJs, MongoDB.',
        '. Migrated our project from styled-components to Chakra-UI.',
        '· Creating reusable components using Atomic Design method with Storybook.',
        ". Developing pixel perfect UI from our designer's work."
      ],
      jobImage: 'aluna-logo.png',
      jobTitle: 'Software Engineer of Aluna Social',
      period: '2020'
    },
    {
      jobDetails: [
        'Working in Faktura Inc, I worked directly with the CTO to meet the demands of creating dynamic NFTs for their customers while monitoring and documenting the work of a plural development team.The main technical challenges were:',
        '· Create an SDK for rendering and modifying assets of different formats (.gltf, .glb, .stl, .mp4, etc), in order to create/modify new NFTS with complex parameters.',
        '· Create a SaaS platform with NextJS and style components so the user can create collections of NFTs with a no-code approach, and control various aspects related to them.'
      ],
      jobImage: 'faktura-logo.png',
      jobTitle: 'Senior Frontend Engineer at Faktura',
      period: '2022'
    },
    {
      jobDetails: [
        'Carbona is a project that will be disrupting the access to the process of generating carbon credits, my key responsibilities are:',
        '· Hands-on leadership and R&D',
        '· DevOps Architecture and Implementation',
        '· API Design and Systems Engineering',
        '· Product Development',
        '· OpenSource and Smart Contract Development'
      ],
      jobImage: 'carbona-logo.png',
      jobTitle: 'Co-founder and CTO at Carbona',
      period: '2021 - to present'
    },
    {
      jobDetails: [
        'We are outsourcing for Dapp projects on Cosmos Ecosystem, Terra Luna. (Cases: Sigma, Andromeda, Minerva, Prism, Vertex, WhiteWhale, Nexus, Astroport and Persistence)',
        '· Main Techs: TypeScript, Redux, NextJS, Remix, Chakra-UI, Web3.js, Ethers.js, Solidity, GraphQl, Terra.js.',
        '· Create reusable components for clients and test coverage.',
        '. Integrate smart contracts on the frontend and aid SC engineers.',
        '. Refact code in a fast-paced environment.'
      ],
      jobImage: 'yeti-labs-logo.jpg',
      jobTitle: 'Freelance Software Engineer at Yeti-Labs',
      period: '2022 - to present'
    }
  ]

  return (
    <>
      <Heading
        as="h1"
        fontWeight="extrabold"
        w="fit-content"
        borderBottom={`4px solid`}
        borderColor={underlineColor}
        mb="6"
      >
        Portfolio details
      </Heading>

      <Accordion allowMultiple mb="10">
        {jobs.map((job, index) => (
          <AccordionItem
            key={index + job.period}
            borderRadius="lg"
            overflow="clip"
            border="none"
            bgColor={bgColor}
            mb="4"
          >
            <AccordionButton
              justifyContent="space-between"
              flexDir={index % 2 === 0 ? 'row' : 'row-reverse'}
              _hover={{ bgColor: hoverBgColor }}
              _expanded={{
                borderBottom: '1px solid',
                borderColor: underlineColor
              }}
              p="4"
            >
              <Image
                src={`/${job.jobImage}`}
                width={60}
                height={60}
                style={{
                  borderRadius: '8px',
                  outline: `1px solid ${outlineColor}`,
                  outlineOffset: '4px'
                }}
              />

              <Box textAlign={index % 2 === 0 ? 'right' : 'left'}>
                <Text fontWeight="extrabold" fontSize="xl">
                  {job.jobTitle}
                </Text>

                <Text color={grayColor} fontWeight="extrabold">
                  {job.period}
                </Text>
              </Box>
            </AccordionButton>

            <AccordionPanel pb={4}>
              {job.jobDetails.map((details, index) => (
                <Text mb="2" key={index + job.jobTitle}>
                  {details}
                </Text>
              ))}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}
