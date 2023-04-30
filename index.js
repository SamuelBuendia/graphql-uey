import { ApolloServer } from 'apollo-server'
import typeDefs from './src/typeDefs.js'
import resolvers from './src/resolvers.js'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true
})

server.listen().then(() => {
  console.log(
    'Corriendo aplicación graphQL en <http://localhost:4000/grapqhql>'
  )
})
