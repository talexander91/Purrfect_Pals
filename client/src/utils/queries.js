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
  }
<<<<<<< HEAD
  me {
    name
  }
}`;

export const QUERY_DISCUSSION_BY_ID = gql`
query DiscussionById($id: String!) {
  discussionById(_id: $id) {
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
=======
>>>>>>> 004eb097c3557adfcf4f090cb1f3ccff31511528
`;
