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

export const GET_USER = gql`
  query GetUser($username: String!) {
    matching_user: user_aggregate(where: { username: { _eq: $username } }) {
      matches: aggregate {
        count
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($username: String!, $user_auth_id: String!) {
    insert_user(objects: { username: $username, auth_id: $user_auth_id }) {
      returning {
        id
        username
      }
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
