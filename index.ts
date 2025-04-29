import Fastify from 'fastify'
import dotenv from 'dotenv'
import dbConnecter from './src/utils/dbConnecter.ts'
import userRoutes from './src/routes/user.routes.ts'

dotenv.config()

export const fastify = Fastify({
  logger: true
})


fastify.register(dbConnecter)
fastify.register(userRoutes)

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }

  fastify.log.info(`Server listening on ${address}`)
})