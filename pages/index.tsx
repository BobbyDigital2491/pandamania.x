import { Image, Button, Link } from '@chakra-ui/react'

import BigText from 'components/BigText'

import AltCont from 'components/Container/AltCont'


export default function Home() {
  return (
    <AltCont>
      <div className='flex flex-col items-center justify-center inset-0'>
        <BigText slides={['Pandamania ', ' ', 'Craze']} />
        <Image objectFit='cover' src='/cover.jpg' alt='logo' />
        <br />
        <Button colorScheme='red'>
          <Link href='/about'>Enter Site</Link>
        </Button>{' '}
      </div>
    </AltCont>
  )
}
