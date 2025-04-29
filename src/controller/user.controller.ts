import { type FastifyReply, type FastifyRequest } from "fastify";
import type { IndividualType } from "../types/user.js"
import { fastify } from "../../index.ts";
// import { individual } from "../utils/collections.ts";

// create user controller
export async function createUser(request: FastifyRequest<{ Body: IndividualType }>, reply: FastifyReply) {
  const { email, password, fullName } = request.body
  const individualCollection = fastify.mongo.db?.collection('individual')

  if (!email || !password || !fullName) return reply.status(400).send({ message: 'Provide a complete object user detail' })


  const user = await individualCollection?.insertOne({ user: { email, password, fullName } })
  reply.log.info(user)

  reply.status(200).send({ message: 'user created successfully' })
}