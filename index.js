// Require the framework and instantiate it

// ESM
import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})
// CommonJs


// Declare a route
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'John' })
})

// Run the server!
fastify.listen({ port: 8800 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})