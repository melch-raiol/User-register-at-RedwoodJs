export const schema = gql`
  type RegisterForm {
    id: Int!
    name: String!
    email: String!
    message: String!
    createdAt: DateTime!
  }

  type Query {
    registerForms: [RegisterForm!]! @requireAuth
    registerForm(id: Int!): RegisterForm @requireAuth
  }

  input CreateRegisterFormInput {
    name: String!
    email: String!
    message: String!
  }

  # input UpdateRegisterFormInput {
  #   name: String
  #   email: String
  #   message: String
  # }

  type Mutation {
    createRegisterForm(input: CreateRegisterFormInput!): RegisterForm! @skipAuth
  }
`
