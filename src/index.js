import ReactDOM from "react-dom";
import React from "react";
import Jobs from "./components/Jobs";
import Job from "./components/Job";
import JobForm from "./components/JobForm";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import { Router } from "@reach/router";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { RestLink } from "apollo-link-rest";
import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-boost";
import { createHttpLink } from "apollo-link-http";

const httpLink = createHttpLink({
  uri: "https://jb-simpler.herokuapp.com/v1alpha1/graphql",
});
const restLink = new RestLink({
  uri: "https://company.clearbit.com/v2",
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_CLEARBIT_API_KEY}`,
  },
});

const client = new ApolloClient({
  link: ApolloLink.from([restLink, httpLink]),
  cache: new InMemoryCache(),
});

const AppRoot = () => (
  <Router>
    <Jobs path="/" />
    <Job path="/view/:id" />
    <JobForm path="/new" />
  </Router>
);

const App = () => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <AppRoot />
    </ApolloHooksProvider>
  </ApolloProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
