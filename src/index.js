import ReactDOM from "react-dom";
import React from "react";
import Example from "./components/Example";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import ApolloClient from "apollo-boost";
import "./index.css";

const client = new ApolloClient({
  uri:
    "https://gql-projects-chat-app.herokuapp.com/v1alpha1/graphql" /* Example Static GraphQL Backend */,
});

const App = () => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <Example />
    </ApolloHooksProvider>
  </ApolloProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
