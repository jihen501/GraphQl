
  import { createServer } from 'http'
  import { createPubSub, createYoga } from 'graphql-yoga'
  import { schema } from './schema/schema'
import { PrismaClient } from '@prisma/client';
  const pubSub=createPubSub();
  const prisma=new PrismaClient();
  function main() {
    const yoga = createYoga({schema, context: {prisma,pubSub}})
    const server = createServer(yoga)
    server.listen(4000, () => {
      console.info('Server is running on http://localhost:4000/graphql')
    })
  }
   
  main() 