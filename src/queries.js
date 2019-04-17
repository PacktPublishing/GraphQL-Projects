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

export const UPDATE_MESSAGE = gql`
  mutation UpdateMessage($id: Int!, $text: String!) {
    update_message(where: { id: { _eq: $id } }, _set: { text: $text }) {
      returning {
        id
        text
        timestamp
      }
    }
  }
`;
