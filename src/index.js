import ReactDOM from "react-dom";
import React from "react";
import Routes from "./components/Routes";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://gql-projects-location-tracking.herokuapp.com/v1alpha1/graphql",
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
