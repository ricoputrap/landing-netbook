import React from 'react'
import { ListIcon, ListItem as ChakraListItem } from "@chakra-ui/react";
import { MdRadioButtonChecked } from "react-icons/md"

const ListItem = ({ children }) => {
  return (
    <ChakraListItem>
      <ListIcon as={MdRadioButtonChecked} color="blue.primary" />
      { children }
    </ChakraListItem>
  )
}

export default ListItem