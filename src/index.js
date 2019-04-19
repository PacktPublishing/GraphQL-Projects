import ReactDOM from "react-dom";
import React from "react";
import Example from "./components/Example";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri:
    "https://48p1r2roz4.sse.codesandbox.io/" /* Example Static GraphQL Backend */,
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
