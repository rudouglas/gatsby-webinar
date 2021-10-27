const path = require(`path`)

const JANKY_SITE = process.env.JANKY_SITE === 'true' ? true : false
const SCALE_PRODUCTS = parseInt(process.env.SCALE_PRODUCTS)
const limit = JANKY_SITE ? 10000 : 40
const productMockDataFull = require("./static/MOCK_DATA.json")
const productMockData = productMockDataFull.slice(0, process.env.PRODUCT_COUNT);
const axios = require("axios")

exports.sourceNodes = async ({ actions, createContentDigest }) => {
  const { createNode } = actions

  const productData = Array.from(
    { length: SCALE_PRODUCTS },
    () => productMockData
  ).flat()
  
  if (JANKY_SITE) {
    console.log(`scaled ${productData.length}`)
    await Promise.all(
      productData.map((product, index) => {
        const nodeContent = JSON.stringify(product)
        const nodeMeta = {
          id: JSON.stringify(index),
          parent: null,
          children: [],
          internal: {
            type: `Products`,
            content: nodeContent,
            contentDigest: createContentDigest(product),
          },
        }
        const node = Object.assign({}, product, nodeMeta)
        createNode(node)
      })
    )
  } else {
    for (let i = 0; i < productData.length; i++) {
      const nodeContent = JSON.stringify(productData[i])
      const nodeMeta = {
        id: JSON.stringify(i),
        parent: null,
        children: [],
        internal: {
          type: `Products`,
          content: nodeContent,
          contentDigest: createContentDigest(productData[i]),
        },
      }
      const node = Object.assign({}, productData[i], nodeMeta)
      createNode(node)
    }
  }
  
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const ProductSingle = path.resolve("src/templates/ProductSingle.js")  

  if (JANKY_SITE) {
    
    const result = await graphql(`
      query {
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
            janky_color
            janky_bool
            janky_datetime
            janky_freq
          }
        }
      }
    `)
    if (result.errors) {
      throw result.errors
    }

    const products = result.data.allProducts.nodes
    console.log(JSON.stringify(products))
    const firstId = products[0].id
    for (let i = 0; i < products.length; i++) {
      const nextId = products[i + 1] ? products[i + 1].id : firstId;
      const node = products[i];
      createPage({
        path: `products/${node.id}`,
        component: ProductSingle,
        context: {
          id: node.id,
          nextId,
          jankySite: JANKY_SITE,
          jankyCompany: node.janky_company,
          jankyJob: node.janky_job,
          jankyWallet: node.janky_wallet,
          overPriced: node.over_priced,
          currency: node.currency,
          material: node.material,
          product: node.product,
          jankyColor: node.janky_color,
          jankyBool: node.janky_bool,
          jankyDatetime: node.janky_datetime,
          jankyFreq: node.janky_freq,
        }, // This is to pass data as props to the component.
      })
    }
  } else {
    const result = await graphql(`
      query {
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
          }
        }
      }
    `)
    if (result.errors) {
      throw result.errors
    }

    const products = result.data.allProducts.nodes
    const firstId = products[0].id

    await Promise.all(
      products.map(async (node, index) => {
        const nextId = products[index + 1] ? products[index + 1].id : firstId;
        createPage({
          path: `products/${node.id}`,
          component: ProductSingle,
          context: {
            id: node.id,
            nextId,
            jankySite: JANKY_SITE,
            jankyCompany: node.janky_company,
            jankyJob: node.janky_job,
            jankyWallet: node.janky_wallet,
            overPriced: node.over_priced,
            currency: node.currency,
            material: node.material,
            product: node.product,
          }, // This is to pass data as props to the component.
        })
      })
    )
  }
}
