const typeDefs = [`
  scalar Datetime
  type Query {
    user(_id: ID): User
    users: [User]
  }
  type User {
    _id: ID
    username: String
    email: String
    phoneNumber: String
    skillSets: String
    hobby: String
    createdAt: Datetime
    updatedAt: Datetime
  }
  type Mutation {
    createUser(user: CreateUser!): User
    updateUser(_id: ID!, user: UpdateData!): User
    deleteUser(_id: ID!): User
  }
  input CreateUser {
    username: String
    email: String
    phoneNumber: String
    skillSets: String
    hobby: String
  }
  input UpdateData {
    username: String
    email: String
    phoneNumber: String
    skillSets: String
    hobby: String
  }
  schema {
    query: Query
    mutation: Mutation
  }
`];

export default typeDefs;
