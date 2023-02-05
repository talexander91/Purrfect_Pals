import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      email
    }
  }
`;

export const QUERY_DISCUSSIONS = gql`
query GetDiscussion($id: ID!) {
  discussion(id: $id) {
    _id
    title
    userId {
      _id
      name
    }
    comments {
      _id
      text
      user {
        _id
        name
      }
    }
  }
}
`;
