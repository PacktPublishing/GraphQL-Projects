import ReactDOM from "react-dom";
import React from "react";
import Routes from "./components/Routes";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import ApolloClient from "apollo-client";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import { InMemoryCache } from "apollo-cache-inmemory";

const WEBSOCKET_ENDPOINT =
  "ws://gql-projects-vehicle-tracking.herokuapp.com/v1alpha1/graphql";
const HTTP_ENDPOINT =
  "https://gql-projects-vehicle-tracking.herokuapp.com/v1alpha1/graphql";

const wsLink = new WebSocketLink({
  uri: WEBSOCKET_ENDPOINT,
  options: {
    reconnect: true,
  },
});
const httpLink = new HttpLink({
  uri: HTTP_ENDPOINT,
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <Routes />
    </ApolloHooksProvider>
  </ApolloProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
