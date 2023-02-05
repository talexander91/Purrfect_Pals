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

export const QUERY_DISCUSSION_BY_ID = gql`
query DiscussionById($id: ID!) {
  discussionById(id: $id) {
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
