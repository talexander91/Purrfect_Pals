import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation register($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
        email
      }
    }
  }
`;
export const CREATE_DISCUSSION = gql`
mutation AddComment($title: String!) {
  addDiscussion(title: $title) {
    _id
    title
  }
}
`;

export const CREATE_COMMENT = gql`
mutation AddComment($text: String!, $discussion: String!) {
  addComment(text: $text, discussion: $discussion) {
    discussion {
      _id
    }
    text
    user {
      _id
      name
    }
  }
}
`;
