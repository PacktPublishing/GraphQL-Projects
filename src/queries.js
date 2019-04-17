import gql from "graphql-tag";

export const GET_MESSAGES = gql`
  query {
    message(order_by: { timestamp: asc }) {
      id
      username
      text
      timestamp
    }
  }
`;

export const ADD_MESSAGE = gql`
  mutation AddMessage($text: String!, $username: String!) {
    insert_message(objects: { text: $text, username: $username }) {
      returning {
        id
        timestamp
        text
        username
      }
    }
  }
`;
