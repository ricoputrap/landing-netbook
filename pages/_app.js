import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '../styles/globals.css'

const theme = extendTheme({
  colors: {
    white: "#FFFFFF",
    blue: {
      "primary": "#217BF4",
    },
    black: {
      "1": "#0A093D",
      "2": "#171648"
    },
    gray: {
      "1": "#656464"
    }
  }
})

function MyApp({ Component, pageProps }) {
  

  return (
    <ChakraProvider theme={ theme }>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
