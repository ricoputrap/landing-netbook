import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import HeroCTA from './HeroCTA'
import HeroTitles from './HeroTitles'

const HeroContents = () => {
  return (
    <Stack rowGap="42px">
      <HeroTitles />
      <HeroCTA />
    </Stack>
  )
}

export default HeroContents