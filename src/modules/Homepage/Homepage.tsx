import { Button } from '@chakra-ui/react'
import { CarbonaIcon } from 'assets/icons'
import Image from 'next/image'

export const Homepage = () => {
  return (
    <div>
      <main>under maintenance</main>
      <CarbonaIcon />

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
