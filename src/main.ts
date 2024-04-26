/*import { createPubSub, createSchema, createYoga } from "graphql-yoga";
import { createServer } from "http";
import {  Query } from "./resolvers/Query";
import { createContext } from './context'
import { Mutation } from "./resolvers/Mutation";
import { Subscription } from "./resolvers/Subscription";

const fs = require("fs");
const path = require("path");
const pubSub=createPubSub();
export const schema = createSchema({
    typeDefs: fs.readFileSync(
        path.join(__dirname, "schema/schema.graphql"),
        "utf-8"
    ),
    resolvers: {
       Query,Mutation,Subscription,
    }
});
function main() {
    const yoga = createYoga({context:createContext}); ;
    const server = createServer(yoga);
    server.listen(4000, () => {
      console.info("Server is running on http://localhost:4000/graphql");
    });
  }
  
  main();
  */
  import { createServer } from 'http'
  import { createYoga } from 'graphql-yoga'
  import { createContext } from './context'
  import { schema } from './schema/schema'
   
  function main() {
    const yoga = createYoga({ schema, context: createContext })
    const server = createServer(yoga)
    server.listen(4000, () => {
      console.info('Server is running on http://localhost:4000/graphql')
    })
  }
   
  main() 