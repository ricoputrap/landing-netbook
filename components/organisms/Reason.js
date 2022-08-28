import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Section } from '../atoms/Section'
import ReasonContents from '../molecules/ReasonContents'
import HeroImage from "../../public/img/hero.png"
import Image from 'next/image'

const Reason = () => {
  return (
    <Section id="reason">
      <Flex
        padding={{ base: "40px", sm: "80px", md: "122px" }}
        columnGap="20px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box flexBasis={{ base: "100%", lg: "40%" }}>
          <ReasonContents />
        </Box>

        <Box
          flexBasis={{ base: "0", lg: "60%" }}
          display={{ base: "none", lg: "block" }}
          textAlign="center"
        >
          <Image src={HeroImage} alt="hero-img" />
        </Box>
      </Flex>
    </Section>
  )
}

export default Reason