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
query Discussions {
  discussions {
    _id
    comments {
      text
      user {
        name
      }
    }
    title
  }
  me {
    name
  }
}`;
export const GET_DISCUSSION = gql`
  query Discussion($_id: ID!) {
    discussion(_id: $_id) {
      _id
      title
      userId {
        ...
      }
      comments {
        _id
        text
        user {
          ...
        }
      }
    }
  }
`;