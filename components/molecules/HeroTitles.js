import { Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { ButtonTertiary } from '../atoms/Buttons'

const HeroTitles = () => {
  return (
    <Stack rowGap="22px">
      <ButtonTertiary width="fit-content">
        Netbook community
      </ButtonTertiary>

      <Heading as="h1" size={{ base: "2xl", sm: "3xl" }}>
        Your Solutions For Community!
      </Heading>

      <Text>
        More than 2 billion people in over countries use socibook to stay in touch with friends & family.
      </Text>
    </Stack>
  )
}

export default HeroTitles