import Container from 'components/Container'
import { Text, Image, Center } from '@chakra-ui/react'
import AbText from 'components/BigText/AbText'
import BbText from 'components/BigText/BbText'

export default function About() {
  return (
    <Container>
      <div className='flex flex-col items-center justify-center inset-0'>
        <AbText slides={['Consistency ', 'Meets ', 'Innovation']} />
        <Image
          objectFit='cover'
          src='/steps.jpg'
          alt='logo'
          border='4px'
          borderRadius='2xl'
        />
        <br />
        <br />
        <AbText slides={['Planning', 'Meets ', 'Execution']} />
        <Image
          objectFit='cover'
          src='/map.jpg'
          alt='logo'
          border='4px'
          borderRadius='2xl'
        />
        <Text fontSize='3xl' fontWeight='extrabold'>
          Roadmap
        </Text>
        <Center>
          <Text align='center'>
            *See whitepaper for detailed roadmap, accomplishments, and ongoing
            project development*
          </Text>
        </Center>
        <br />
        <br />
        <br />
        <br />
        <BbText slides={['Mission ', ' ', 'Statement']} />

        <Text fontSize='3xl' align='center' border='4px' borderRadius='2xl'>
          The mission of this project is to promote quality art at an affordable
          price without straying away from the utilities and benefits of our
          holders. We will stay committed to bringing value to the project, by
          focusing on the short and long term goals. Preparing ourselves for
          long term stability with each short term success one step at a time.
          Pandamania’s collection consists of multiple projects that share the
          same common goal. These projects work as a bridge for each other as
          one focus on community development the other focus on project
          development. Allowing us to build in both areas effectively and set up
          a support even throughout a bear market. If conditions change, then
          the project adapts to the change and continue moving forward.
        </Text>

        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </Container>
  )
}
