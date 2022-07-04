import { Button } from '@chakra-ui/button'
import { useColorModeValue } from '@chakra-ui/color-mode'
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger
} from '@chakra-ui/popover'
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack
} from '@chakra-ui/slider'
import {
  PauseIcon,
  PlayIcon,
  VolumeHighIcon,
  VolumeLowIcon,
  VolumeOffIcon
} from 'assets/icons'
import { useEffect, useRef, useState } from 'react'

export const MusicControls = () => {
  const [sliderVolume, setSliderVolume] = useState(30)
  const [isPlaying, setIsPlaying] = useState<boolean>(true)

  const music = useRef<HTMLAudioElement>(null)

  const bgColor = useColorModeValue('white', 'black')

  //Changes volume icon based on volume level
  let VolumeIcon = <VolumeLowIcon boxSize="6" />
  if (sliderVolume === 0) {
    VolumeIcon = <VolumeOffIcon boxSize="6" />
  } else if (sliderVolume < 50 && sliderVolume > 0) {
    VolumeIcon = <VolumeLowIcon boxSize="6" />
  } else {
    VolumeIcon = <VolumeHighIcon boxSize="6" />
  }

  const handlePlayPause = () => {
    const prevValue = isPlaying
    setIsPlaying(!prevValue)

    prevValue ? music.current?.pause() : music.current?.play()
  }

  useEffect(() => {
    if (music.current) {
      music.current.volume = sliderVolume / 100
    }
  }, [sliderVolume])

  // checks on first rendering if the user has allowed the autoplay and updates states accordingly
  useEffect(() => {
    if (music.current) {
      music.current.paused ? setIsPlaying(false) : setIsPlaying(true)
    }
  }, [])

  return (
    <>
      <audio src="/deus-ex-unatco-theme.mp3" autoPlay loop ref={music} />

      <Button variant="ghost" onClick={handlePlayPause}>
        {isPlaying ? <PauseIcon boxSize="4" /> : <PlayIcon boxSize="4" />}
      </Button>

      <Popover trigger="hover">
        <PopoverTrigger>
          <Button variant="ghost">{VolumeIcon}</Button>
        </PopoverTrigger>

        <PopoverContent h="24" w="10" bg={bgColor} position="relative">
          <PopoverArrow bg="current" />

          <Slider
            colorScheme="gray"
            pos="absolute"
            top="4"
            aria-label="volume-slider"
            defaultValue={30}
            orientation="vertical"
            h="16"
            onChangeEnd={(volume) => setSliderVolume(volume)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb bgColor="current" />
          </Slider>
        </PopoverContent>
      </Popover>
    </>
  )
}
