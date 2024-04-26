import { makeExecutableSchema } from "@graphql-tools/schema";

/*
type Query {
  getCvs: [cv]
  getCvsById(id: Int): cv
}
type Mutation {
  addCv(cvInput: CvAddInput!): cv!
  updateCv(id: Int!, updatecvInput: UpdateCvInput!): cv!
  deleteCv(id: Int!): cv!
}
input CvAddInput {
  name: String!
  age: Int!
  job: String!
  userId: Int!
  skills: [Int]
}
input UpdateCvInput {
  name: String
  age: Int
  job: String
  userId: Int
  skills: [Int]
}

type Subscription{
   CvAdded:cv!
   cvDeleted:cv!
   cvUpdated:cv!
}
*/
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
  },}


export const schema = makeExecutableSchema({
  typeDefs: `
    type Query {
      info: String!
    }
  `,
  resolvers: [resolvers],
});