import React from 'react'
import { graphql } from 'gatsby'
import { Col, Row } from 'react-styled-flexboxgrid'

import { ProductCard } from '../components/elements/cards'

import useRandomCharacters from '../utils/hooks/randomCharacters'
import { Navbar } from '../components/Navbar/App'
import Banner from '../components/Banner'
import { Button, Box, Flex, SimpleGrid, Container } from '@chakra-ui/react'

const Products = ({ data }) => {
  const products = useRandomCharacters(
    data.allProducts.nodes,
    40
  )
  return (
		<>
			<Banner />
			<Navbar active="products" />
			<Container maxW="container.xl">
				<SimpleGrid
					mt={{
						base: '8',
						md: '0',
					}}
					columns={{
						base: 1,
						md: 3,
					}}
					spacing="10"
				>
					{products.map((product, index) => (
          <Col xs={12} sm={4} md={4} lg={3} key={product.id}>
            <ProductCard
              key={product.id}
              product={product}
              linkURL={`/products/${product.id}/`}
            />
          </Col>
        ))}
				</SimpleGrid>
			</Container>


		</>
	)
}

export default Products

export const query = graphql`
query yourProductQuery($limit: Int) {
  allProducts(limit: $limit) {
    nodes {
      id
      janky_company
      janky_job
      janky_wallet
      over_priced
      currency
      material
      product
    }
  }
}
`