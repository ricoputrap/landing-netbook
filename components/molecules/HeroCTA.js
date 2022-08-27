import { Flex } from '@chakra-ui/react'
import React from 'react'
import { ButtonPrimary, ButtonSecondary } from '../atoms/Buttons'

const HeroCTA = () => {
  return (
    <Flex columnGap="18px">
      <ButtonPrimary>
        About More
      </ButtonPrimary>
      <ButtonSecondary>
        Invite Friend
      </ButtonSecondary>
    </Flex>
  )
}

export default HeroCTA