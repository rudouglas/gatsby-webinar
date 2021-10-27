import { Box, Stack, Img, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'

export const Feature = (props) => {
  const { title, children, icon } = props
  return (
    <Box>
      <Box color={mode('blue.500', 'blue.300')} fontSize="5xl">
        <Img
                        objectFit="cover"
                        w="full"
                        h="full"
                        src={icon}
        />
      </Box>
      <Stack mt="6">
        <Text as="h3" color={mode('blue.500', 'blue.300')} fontSize="2xl" fontWeight="extrabold">
          {title}
        </Text>
        <Text pr="6" lineHeight="tall">
          {children}
        </Text>
      </Stack>
    </Box>
  )
}
export default Feature