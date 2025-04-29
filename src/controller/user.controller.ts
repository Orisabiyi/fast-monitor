import { type FastifyReply, type FastifyRequest } from "fastify";
import type { IndividualType } from "../types/user.js"
import { fastify } from "../../index.ts";

// create user controller
export async function createUser(request: FastifyRequest<{ Body: IndividualType }>, reply: FastifyReply) {
  const { email, password, fullName } = request.body
  const individualCollection = fastify.mongo.db?.collection('individual')

  if (!email || !password || !fullName) return reply.status(400).send({ message: 'Provide a complete object user detail' })

  // check for the existence of the user
  const findUser = await individualCollection?.findOne({ 'user.email': email })
  if (findUser?.user.email) return reply.status(400).send({ message: 'user with this email already exists' })

  // hash password
  const hashedPassword = await fastify.bcrypt.hash(password)
  const hashedPasswordState = await fastify.bcrypt.hash(password).then(hash => fastify.bcrypt.compare(password, hash)).then(match => match)

  if (!hashedPasswordState) return reply.status(400).send({ message: 'Try again, account not created' })

  const user = await individualCollection?.insertOne({ user: { email, password: hashedPassword, fullName } })
  reply.log.info(user)

  reply.status(200).send({ message: 'user created successfully' })
}