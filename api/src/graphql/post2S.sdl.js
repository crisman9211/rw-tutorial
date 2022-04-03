export const schema = gql`
  type Post2 {
    id: Int!
    title: String!
    body: String!
    cratedAt: DateTime!
  }

  type Query {
    post2S: [Post2!]! @requireAuth
    post2(id: Int!): Post2 @requireAuth
  }

  input CreatePost2Input {
    title: String!
    body: String!
    cratedAt: DateTime!
  }

  input UpdatePost2Input {
    title: String
    body: String
    cratedAt: DateTime
  }

  type Mutation {
    createPost2(input: CreatePost2Input!): Post2! @requireAuth
    updatePost2(id: Int!, input: UpdatePost2Input!): Post2! @requireAuth
    deletePost2(id: Int!): Post2! @requireAuth
  }
`
