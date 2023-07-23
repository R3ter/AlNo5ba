import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      result
      credentials {
        token
        firstName
        id
        lastName
      }
      errorMsg
    }
  }
`;
