import type { FastifyInstance, FastifyPluginOptions } from "fastify";
import { createUser } from "../controller/user.controller.ts";
import { userSchema } from "../model/user.schema.ts";

export default async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get('/create-user', { schema: userSchema }, createUser)
}