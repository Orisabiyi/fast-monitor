import { type FastifyReply, type FastifyRequest } from "fastify";
import { IndividualType } from "../types/user.js";

// create user
export async function createUser(request: FastifyRequest<{ Body: IndividualType }>, reply: FastifyReply) {
  const { email, password, fullName } = request.body

  if (!email || !password || !fullName) return reply.status(400).log.info('Provide a complete object detial of user')
  reply.log.info("User creation process started")
}