import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  SimpleGrid,
  Text,
  Badge,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import * as Logos from './Brands'
export function Landing() {
  return (
    <Box as="section" bg={mode('gray.50', 'gray.800')} pt="24" pb="12" overflow="hidden">
      <Box
        maxW={{
          base: 'xl',
          md: '7xl',
        }}
        mx="auto"
        px={{
          base: '6',
          md: '8',
        }}
      >
        <Flex
          align="flex-start"
          direction={{
            base: 'column',
            lg: 'row',
          }}
          justify="space-between"
          mb="20"
        >
          <Box
            flex="1"
            maxW={{
              lg: 'xl',
            }}
          // pt="6"
          >
            <Heading as="h1" size="3xl" fontWeight="extrabold">
             Don't let your JamStack app become a JankStack.
            </Heading>
            <Text color={mode('gray.600', 'gray.400')} mt="5" fontSize="xl">
              When you’re building a large e-commerce site, SaaS application or personal blog, there is more than likely a collection of Jank building up. The JANKStack movement exists to help you gain reliable visibility into the performance of your entire site to remove JANK from your website.
            </Text>
            <a href="/characters">
              <Button
                mt="8"
                minW="14rem"
                colorScheme="blue"
                size="lg"
                height="14"
                bg="#FF0081"
                px="8"
                fontSize="md"
                fontWeight="bold"
                _hover={{
                  bg: "#b8005d"
                }}
              >

                Join the Movement

              </Button>
            </a>
          </Box>
          <Box
            boxSize={{
              base: '20',
              lg: '8',
            }}
          />
          <Img
            pos="relative"
            marginEnd="-16rem"
            w="50rem"
            src="/jankstack.png"
            alt="Screenshot for Form builder"
          />
        </Flex>
      </Box>
    </Box>
  )
}
