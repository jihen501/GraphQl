import { makeExecutableSchema } from "@graphql-tools/schema";
import { Query } from "../resolvers/Query";
import { Mutation } from "../resolvers/Mutation";
import { Subscription } from "../resolvers/Subscription";

const resolvers = {
  Query,
  Mutation,
  Subscription,
};
export const schema = makeExecutableSchema({
  resolvers,
  typeDefs: [
    `type Query { getCvs: [cv] getCvsById(id: Int): cv }
             type Mutation { addCv(cvInput: CvAddInput!): cv! updateCv(id: Int!, updatecvInput: UpdateCvInput!): cv! deleteCv(id: Int!): cv! } 
             input CvAddInput { name: String! age: Int! job: String! userId: Int! skills: [Int] } 
             input UpdateCvInput { name: String age: Int job: String userId: Int skills: [Int] }
            type Subscription{ CvAdded:cv! cvDeleted:cv! cvUpdated:cv! } 
            type cv { id: ID! name: String! age: Int job: String! user: User! skills: [Skill] }
            type User { id: ID! name: String! email: String role: Role cv: [cv] } 
            type Skill { id: ID! description: String! cv: [cv] } enum Role { ADMIN USER} `,
  ],
});
