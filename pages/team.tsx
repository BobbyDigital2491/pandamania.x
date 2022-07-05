import Container from 'components/Container'
import { Text, Image, Center, Box, SimpleGrid } from '@chakra-ui/react'
import BbText from 'components/BigText/BbText'

export default function Home() {
  return (
    <Container>
      <div className='flex flex-col items-center justify-center inset-0'>
        <BbText slides={['Our ', ' ', 'Team']} />
        <Image
          objectFit='cover'
          src='/pan32.png'
          alt='logo'
          border='4px'
          borderRadius='2xl'
        />
        <Text fontSize='4xl' fontWeight='bold'>
          Ancient Panda
        </Text>
        <Center>{'Co-Founder / Business & Project Development '}</Center>
        <br />
        <br />
        <Image
          boxSize='660'
          src='/cel.jpg'
          alt='logo'
          border='4px'
          borderRadius='2xl'
        />
        <Text fontSize='4xl' fontWeight='bold'>
          Celestial Being
        </Text>
        <Center>{'Co-Founder / Editor & Finances '}</Center>
        <br />
        <br />
        <Image
          boxSize='660'
          src='/lazy.jpg'
          alt='logo'
          border='4px'
          borderRadius='2xl'
        />
        <Text fontSize='4xl' fontWeight='bold'>
          Lazy Day
        </Text>
        <Center>{'Co-Founder / Artist & Creative Lead  '}</Center>
        <br />
        <br />
        <BbText slides={['Community ', ' ', 'Managment']} />
        <SimpleGrid columns={2} spacing={10} border='4px' borderRadius='2xl'>
          <Box
            height='80px'
            fontSize='4xl'
            fontWeight='bold'
            textAlign='center'
          >
            IRep Legacy
          </Box>
          <Box
            height='80px'
            fontSize='4xl'
            fontWeight='bold'
            textAlign='center'
          >
            Vj Lee
          </Box>
          <Box
            height='80px'
            fontSize='4xl'
            fontWeight='bold'
            textAlign='center'
          >
            Rhett
          </Box>
          <Box
            height='80px'
            fontSize='4xl'
            fontWeight='bold'
            textAlign='center'
          >
            Hashgraphia
          </Box>
          <Box
            height='80px'
            fontSize='4xl'
            fontWeight='bold'
            textAlign='center'
          >
            Cryptoblaggs
          </Box>
          <Box
            height='80px'
            fontSize='4xl'
            fontWeight='bold'
            textAlign='center'
          >
            BobbyDigital24
          </Box>
        </SimpleGrid>
      </div>
    </Container>
  )
}
