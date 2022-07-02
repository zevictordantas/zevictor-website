import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode'
import { Button } from '@chakra-ui/react'
import { DarkIcon, LightIcon } from 'assets/icons'

export const ButtonToggleTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const iconColor = useColorModeValue('black', 'white')

  const isDark = colorMode === 'dark'

  return (
    <Button mx="0.5" size="md" onClick={toggleColorMode}>
      {isDark ? (
        <LightIcon boxSize="5" color={iconColor} />
      ) : (
        <DarkIcon boxSize="5" color={iconColor} />
      )}
    </Button>
  )
}
