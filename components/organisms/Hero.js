import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import HeroContents from '../molecules/HeroContents'
import HeroImage from "../../public/img/hero.png"
import Image from 'next/image'
import { Section } from '../atoms/Section'

const Hero = () => {
  return (
    <Section id="hero">
      <Flex
        padding={{ base: "40px", sm: "80px", md: "122px" }}
        columnGap="20px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box flexBasis={{ base: "100%", lg: "45%" }}>
          <HeroContents />
        </Box>

        <Box flexBasis={{ base: "0", lg: "55%" }} display={{ base: "none", lg: "block" }}>
          <Image src={HeroImage} alt="hero-img" />
        </Box>
      </Flex>
    </Section>
  )
}

export default Hero