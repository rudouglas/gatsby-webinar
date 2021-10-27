import {
  Box,
  Button,
  Flex,
  HStack,
  useColorModeValue as mode,
  VisuallyHidden,
  Img
} from '@chakra-ui/react'
import * as React from 'react'
import { MobileNav } from './MobileNav'
import { NavLink } from './NavLink'

export const Navbar = (props) => {
  return (
    <Box>
      <Box as="header" bg={mode('white', 'gray.800')} borderBottomWidth="1px">
        <Box
          maxW="7xl"
          mx="auto"
          py="4"
          px={{
            base: '6',
            md: '8',
          }}
        >
          <Flex as="nav" justify="space-between">
            <HStack spacing="8">
              <Box as="a" href="/" rel="home">
                <VisuallyHidden>Envelope app</VisuallyHidden>
                {/* <Logo h="6" iconColor="blue.500" /> */}

                <Img src="/logo.png" maxH="60px" />
              </Box>
              <HStack
                display={{
                  base: 'none',
                  lg: 'flex',
                }}
                spacing="8"
              >
                {/* <NavLink.Desktop href="/" active>Home</NavLink.Desktop> */}
                <NavLink.Desktop href="/about" {...props.active}>About</NavLink.Desktop>
                <NavLink.Desktop href="/products" {...props.active}>Products</NavLink.Desktop>

                <NavLink.Desktop href="https://github.com/newrelic-experimental/gatsby-plugin-newrelic" {...props.active} target="_blank">Plugin</NavLink.Desktop>
              </HStack>
            </HStack>
            <Flex align="center">
              <HStack
                spacing="8"
                display={{
                  base: 'flex',
                }}
              >
                <a href="/about">
                <Button bg="#FF0081" color="white" rounded="full" _hover={{
                  bg: "#b8005d"
                }}>
                  Win a free powerbank
                </Button>
                </a>
              </HStack>
              <Box ml="5">
                <MobileNav />
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box >
  )
}
