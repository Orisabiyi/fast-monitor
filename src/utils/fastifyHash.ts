import type { FastifyInstance } from "fastify";
import fastifyBcrypt from "fastify-bcrypt";
import fastifyPlugin from "fastify-plugin";

async function fastifyHash(fastify: FastifyInstance) {
  fastify.register(fastifyBcrypt.default, {
    saltWorkFactor: 2
  })
}

export default fastifyPlugin(fastifyHash)