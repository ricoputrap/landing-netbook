import { List, Stack } from '@chakra-ui/react'
import React from 'react'
import ListItem from '../atoms/ListItem'
import { SectionDescription, SectionSubtitle, SectionTitle } from '../atoms/Typography'

const ReasonContents = () => {
  return (
    <Stack>
      <SectionSubtitle>
        What&apos;s Netbook?
      </SectionSubtitle>

      <SectionTitle as="h2">
        Why Join to Netbook Social Network?
      </SectionTitle>

      <SectionDescription>
        Recent surveys have indicated that small businesses recognise the need they have to connect with consumer.
      </SectionDescription>

      <List spacing={3} marginTop="36px !important">
        <ListItem>Groups</ListItem>
        <ListItem>Messages</ListItem>
        <ListItem>Share</ListItem>
      </List>
    </Stack>
  )
}

export default ReasonContents