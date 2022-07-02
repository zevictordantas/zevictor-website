import { Button } from '@chakra-ui/button'
import { useColorMode } from '@chakra-ui/color-mode'
import { DarkIcon, LightIcon } from 'assets/icons'

export const ButtonToggleTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const isDark = colorMode === 'dark'

  return (
    <Button mx="0.5" size="md" onClick={toggleColorMode}>
      {isDark ? <LightIcon boxSize="5" /> : <DarkIcon boxSize="5" />}
    </Button>
  )
}
