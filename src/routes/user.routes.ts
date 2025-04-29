import type { FastifyInstance, FastifyPluginOptions } from "fastify";
import { createUser } from "../controller/user.controller.ts";
// import type { Collection, Document } from "mongodb";
import { userSchema } from "../model/user.schema.ts";

export default async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  // const collection: Collection<Document> | undefined = fastify.mongo.db?.collection('test_collection')

  fastify.post('/create-user', { schema: userSchema }, createUser)
}