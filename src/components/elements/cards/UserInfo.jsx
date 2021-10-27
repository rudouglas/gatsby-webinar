import { HStack, Icon, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import * as React from 'react'

export const UserInfo = (props) => {
  const { name, species, gender, status, ...stackProps } = props
  return (
    <VStack spacing="1" flex="1" {...stackProps}>
      <HStack>
        <Text fontWeight="bold">{name}</Text>
      </HStack>
      <Text
        fontSize="sm"
        textAlign="center"
        color={useColorModeValue('gray.600', 'gray.400')}
        noOfLines={3}
      >
        {species}
      </Text>
    </VStack>
  )
}
