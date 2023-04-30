import { gql } from 'apollo-server'

const typeDefs = gql`
  type SimpleProduct {
    id: Int!
    productName: String
    sellerName: String
    price: Float
    image: String
    stock: Int
  }

  type typeOfRent {
    perNight: Boolean
    perHour: Boolean
  }

  type availability {
    Monday: Boolean
    Tuesday: Boolean
    Wednesday: Boolean
    Thursday: Boolean
    Friday: Boolean
    Saturday: Boolean
    Sunday: Boolean
  }

  type profitableProduct {
    id: Int!
    productName: String
    sellerName: String
    price: Float
    image: String
    typeOfRent: typeOfRent
    availability: availability
  }

  type space {
    id: Int!
    productName: String
    sellerName: String
    price: Float
    image: String
    googleMapsAddress: String
    availability: availability
  }

  type Query {
    listSimpleProducts: [SimpleProduct]
    findSimpleProduct(id: Int!): SimpleProduct

    listProfitableProducts: [profitableProduct]
    findProfitableProduct(id: Int!): profitableProduct

    listSpaces: [space]
    findSpace(id: Int!): space
  }

  type Mutation {
    addSimpleProduct(id: Int!, productName: String!): SimpleProduct!
  }
`

export default typeDefs
