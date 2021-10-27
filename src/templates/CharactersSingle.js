import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  Img,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import React from "react"
import Banner from '../components/Banner'
import { Navbar } from '../components/Navbar/App'

const CharactersSingle = props => {
  const character = props.pageContext

  return (
    <>
      <Banner />
      <Navbar />
      <Box
        as="section"
        bg={mode('gray.50', 'gray.800')}
        pb="24"
        pos="relative"
        px={{
          base: '6',
          lg: '12',
        }}
      >
        {Banner}
        <Box maxW="7xl" mx="auto">

          <Box
            maxW={{
              lg: 'md',
              xl: 'xl',
            }}
            pt={{
              base: '20',
              lg: '40',
            }}
            pb={{
              base: '16',
              lg: '24',
            }}
          >
            <HStack
              className="group"
              as="a"
              href="#"
              px="2"
              py="1"
              bg={mode('gray.200', 'gray.700')}
              rounded="full"
              fontSize="sm"
              mb="8"
              display="inline-flex"
              minW="10rem"
            >
              {character.status == "Alive" &&
                <Badge
                  px="2"
                  variant="solid"
                  colorScheme="green"
                  rounded="full"
                  textTransform="capitalize"
                >
                  {character.status}
                </Badge>
              }
              {character.status == "Dead" &&
                <Badge
                  px="2"
                  variant="solid"
                  colorScheme="red"
                  rounded="full"
                  textTransform="capitalize"
                >
                  {character.status}
                </Badge>
              }
              {character.status == "unknown" &&
                <Badge
                  px="2"
                  variant="solid"
                  colorScheme="gray"
                  rounded="full"
                  textTransform="capitalize"
                >
                  {character.status}
                </Badge>
              }
              <Box fontWeight="medium">{character.species}</Box>
            </HStack>
            <Heading as="h1" size="3xl" lineHeight="1" fontWeight="extrabold" letterSpacing="tight">
              {character.name}
            </Heading>
            <Text mt={4} fontSize="xl" fontWeight="medium" color={mode('gray.600', 'gray.400')}>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
              commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
            </Text>
            <Stack
              direction={{
                base: 'column',
                sm: 'row',
              }}
              spacing="4"
              mt="8"
            >
              <Button size="lg" colorScheme="blue" height="14" px="8" fontSize="md" as="a" href={`/characters/${parseInt(character.id, 10) + 1}/`}>
                Meet your Next Friend
              </Button>
              <Button
                size="lg"
                bg="white"
                color="gray.800"
                _hover={{
                  bg: 'gray.50',
                }}
                height="14"
                px="8"
                shadow="base"
                fontSize="md"
                as="a"
                href="/characters"
              >
                Go Back
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box
          pos={{
            lg: 'absolute',
          }}
          insetY={{
            lg: '0',
          }}
          insetEnd={{
            lg: '0',
          }}
          bg="gray.50"
          w={{
            base: 'full',
            lg: '50%',
          }}
          height={{
            base: '96',
            lg: 'full',
          }}
          sx={{
            clipPath: {
              lg: 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)',
            },
          }}
        >
          <Img
            height="100%"
            width="100%"
            objectFit="cover"
            src={character.image}
            alt="Lady working"
          />
        </Box>
      </Box>
    </>
  )
}

export default CharactersSingle
