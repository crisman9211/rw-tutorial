export const schema = gql`
  type ContactPrub {
    id: Int!
    name: String!
    email: String!
    message: String!
    createdAt: DateTime!
  }

  type Query {
    contactPrubs: [ContactPrub!]! @requireAuth
  }

  input CreateContactPrubInput {
    name: String!
    email: String!
    message: String!
  }

  input UpdateContactPrubInput {
    name: String
    email: String
    message: String
  }
`
