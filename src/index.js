import ReactDOM from "react-dom";
import React from "react";
import Jobs from "./components/Jobs";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri:
    "https://jb-simpler.herokuapp.com/v1alpha1/graphql" /* Example Static GraphQL Backend */,
});

const App = () => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <Jobs />
    </ApolloHooksProvider>
  </ApolloProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
