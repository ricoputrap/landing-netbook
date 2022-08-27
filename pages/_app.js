import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '../styles/globals.css'

const theme = extendTheme({
  colors: {
    white: "#FFFFFF",
    blue: {
      "primary": "#217BF4",
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
