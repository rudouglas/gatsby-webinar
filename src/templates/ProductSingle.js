import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  Img,
  Stack,
  Text,
  List,
  ListIcon,
  ListItem,
  useColorModeValue as mode,
} from "@chakra-ui/react"
import {UnlockIcon} from "@chakra-ui/icons";
import React from "react"
import Banner from "../components/Banner"
import { Navbar } from "../components/Navbar/App"
import { graphql } from 'gatsby'

const JANKY_SITE = process.env.JANKY_SITE === 'true' ? true : false

const ProductSingle = props => {
  const product = props.pageContext
  JANKY_SITE && console.log(product)
  return (
    <>
      <Banner />
      <Navbar />
      <Box
        as="section"
        bg={mode("gray.50", "gray.800")}
        pb="24"
        pos="relative"
        px={{
          base: "6",
          lg: "12",
        }}
      >
        {Banner}
        <Box maxW="9xl" mx="auto">
          <Box
            maxW={{
              lg: "md",
              xl: "xl",
            }}
            pt={{
              base: "20",
              lg: "40",
            }}
            pb={{
              base: "16",
              lg: "24",
            }}
          >
            <Heading
              as="h1"
              size="3xl"
              lineHeight="1"
              fontWeight="extrabold"
              letterSpacing="tight"
            >
              {product.product}
            </Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={UnlockIcon} color="green.500" />
                <HStack
              className="group"
              as="a"
              href="#"
              px="2"
              py="1"
              bg={mode("gray.200", "gray.700")}
              rounded="full"
              fontSize="sm"
              mb="8"
              display="inline-flex"
              minW="10rem"
            >
              <Badge
                px="2"
                variant="solid"
                colorScheme="green"
                rounded="full"
                textTransform="capitalize"
              >
                Over Priced {product.currecny}
              </Badge>
              <Box fontWeight="medium">{product.overPriced}</Box>
            </HStack>

              </ListItem>
              <ListItem>
                <ListIcon as={UnlockIcon} color="green.500" />
                <HStack
              className="group"
              as="a"
              href="#"
              px="2"
              py="1"
              bg={mode("gray.200", "gray.700")}
              rounded="full"
              fontSize="sm"
              mb="8"
              display="inline-flex"
              minW="10rem"
            >
              <Badge
                px="2"
                variant="solid"
                colorScheme="green"
                rounded="full"
                textTransform="capitalize"
              >
                Janky Company
              </Badge>
              <Box fontWeight="medium">{product.jankyCompany}</Box>
            </HStack>
              </ListItem>
              <ListItem>
                <ListIcon as={UnlockIcon} color="green.500" />
                <HStack
              className="group"
              as="a"
              href="#"
              px="2"
              py="1"
              bg={mode("gray.200", "gray.700")}
              rounded="full"
              fontSize="sm"
              mb="8"
              display="inline-flex"
              minW="10rem"
            >
              <Badge
                px="2"
                variant="solid"
                colorScheme="green"
                rounded="full"
                textTransform="capitalize"
              >
                Suitable for
              </Badge>
              <Box fontWeight="medium">{product.jankyJob}</Box>
            </HStack>
              </ListItem>
              {/* You can also use custom icons from react-icons */}
              <ListItem>
                <ListIcon as={UnlockIcon} color="green.500" />
                <HStack
              className="group"
              as="a"
              href="#"
              px="2"
              py="1"
              bg={mode("gray.200", "gray.700")}
              rounded="full"
              fontSize="sm"
              mb="8"
              display="inline-flex"
              minW="10rem"
            >
              <Badge
                px="2"
                variant="solid"
                colorScheme="green"
                rounded="full"
                textTransform="capitalize"
              >
                Janky material
              </Badge>
              <Box fontWeight="medium">{product.material}</Box>
            </HStack>
              </ListItem>
              <ListItem>
                <ListIcon as={UnlockIcon} color="green.500" />
                <HStack
              className="group"
              as="a"
              href="#"
              px="2"
              py="1"
              bg={mode("gray.200", "gray.700")}
              rounded="full"
              fontSize="sm"
              mb="8"
              display="inline-flex"
              minW="10rem"
            >
              <Badge
                px="2"
                variant="solid"
                colorScheme="green"
                rounded="full"
                textTransform="capitalize"
              >
                JankCoin Address
              </Badge>
              <Box fontWeight="medium">{product.jankyWallet}</Box>
            </HStack>
              </ListItem>
            </List>
            <Text
              mt={4}
              fontSize="xl"
              fontWeight="medium"
              color={mode("gray.600", "gray.400")}
            >
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </Text>
            <Stack
              direction={{
                base: "column",
                sm: "row",
              }}
              spacing="4"
              mt="8"
            >
              <Button
                size="lg"
                bg="white"
                color="gray.800"
                _hover={{
                  bg: "gray.50",
                }}
                height="14"
                px="8"
                shadow="base"
                fontSize="md"
                as="a"
                href="/products"
              >
                Go Back
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default ProductSingle

export const query = graphql`
query($jankySite: Boolean!) {
  allProducts {
    nodes {
      id
      janky_company
      janky_job
      janky_wallet
      over_priced
      currency
      material
      product
      janky_color @include(if: $jankySite)
      janky_bool @include(if: $jankySite)
      janky_datetime @include(if: $jankySite)
      janky_freq @include(if: $jankySite)
    }
  }
}`
