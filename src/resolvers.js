import products from './data.js'

const resolvers = {
  Query: {
    listSimpleProducts: (_, args) => products['simpleProducts'],
    findSimpleProduct: (_, { id }) => {
      const task = products['simpleProducts'].find(
        (product) => product.id === id
      )
      return task
    },
    listProfitableProducts: (_, args) => products['profitableProducts'],
    findProfitableProduct: (_, { id }) => {
      const task = products['profitableProducts'].find(
        (product) => product.id === id
      )
      return task
    },
    listSpaces: (_, args) => products['spaces'],
    findSpace: (_, { id }) => {
      const task = products['spaces'].find((space) => space.id === id)
      return task
    }
  },
  Mutation: {
    addSimpleProduct: (_, args) => {
      const newProduct = {
        id: args.id,
        productName: args.productName
      }

      products['profitableProducts'].push(newProduct)
      return newProduct
    }
  }
}

export default resolvers
