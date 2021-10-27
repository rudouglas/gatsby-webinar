import React from "react"
import { Button } from "@chakra-ui/react"

import { UserInfo } from "./UserInfo"
const ProductCard = ({ product, linkURL }) => (
  <>
    <UserInfo
      mt="3"
      product={product.product}
      overPriced={product.over_priced}
    />
    <a href={linkURL}>
      <Button
        variant="outline"
        colorScheme="blue"
        rounded="full"
        size="sm"
        width="full"
        mt="3"
      >
        View Product
      </Button>
    </a>
  </>
)

export default ProductCard
