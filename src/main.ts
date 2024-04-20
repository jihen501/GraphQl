import { createSchema, createYoga } from "graphql-yoga";
import { createServer } from "http";
import { Query } from "./resolvers/Query";
import { Db } from "./data";

const fs = require("fs");
const path = require("path");
const db = new Db();
export const schema = createSchema({
    typeDefs: fs.readFileSync(
        path.join(__dirname, "schema/schema.graphql"),
        "utf-8"
    ),
    resolvers: {
       Query
    }
});

function main() {
    const yoga = createYoga({ schema ,context: {db} }); ;
    const server = createServer(yoga);
    server.listen(4000, () => {
      console.info("Server is running on http://localhost:4000/graphql");
    });
  }
  
  main();