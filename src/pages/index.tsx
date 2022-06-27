import { Button } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <main>lets beat it</main>

      <footer>
        <a href="" target="_blank" rel="noopener noreferrer">
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            <Button>tab</Button>
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
