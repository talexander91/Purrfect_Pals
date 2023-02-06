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
<<<<<<< HEAD
      title
    }
=======
    }
    title
  }
>>>>>>> d66459e3257f90fd694c4a27132582de1d8d1046
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
`;
export const GET_COMMENTS_FOR_DISCUSSION = gql`
  query GetCommentsForDiscussion($id: String!) {
    discussionById(_id: $id) {
      comments {
        _id
        text
        discussion {
          _id
        }
        user {
          name
        }
      }
    }
  }
`;