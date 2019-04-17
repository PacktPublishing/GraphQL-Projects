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
