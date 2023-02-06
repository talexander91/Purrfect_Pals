const { gql } = require("apollo-server-express");
// link = fetch request for cat using name
const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
    discussions: [Discussion]
  }

  type Cats {
    _id: ID
    discussionId: String!
    link: String! 
  }

  type Discussion {
    _id: ID
    title: String!
    userId: User
    comments: [Comment]
  }

  type Comment {
    _id: ID
    text: String
    discussion: Discussion
    user: User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    discussions: [Discussion]
    comments: [Comment]
    discussionById(_id:String!): Discussion
  }

  type Mutation {
    register(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addDiscussion(title: String!): Discussion
    addComment(text: String!, discussion: String!): Comment
  }
`;

module.exports = typeDefs;
