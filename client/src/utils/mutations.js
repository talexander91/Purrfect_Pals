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
  mutation addDiscussion($title: String!) {
    addDiscussion(title: $title) {
      _id
      title
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation addComment($text: String!, $discussionId: ID!) {
    addComment(text: $text, discussion: $discussionId) {
      _id
      text
      discussion {
        _id
        title
      }
    }
  }
`;
