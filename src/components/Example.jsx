import React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";

const currency = "AUD";
// GraphQL Query
const GET_RATES = gql`
  query GetRates($currency: String!) {
    rates(currency: $currency) {
      name
      currency
      value: rate
    }
  }
`;

function Example() {
  const { data, error, loading } = useQuery(GET_RATES, {
    variables: { currency }
  });
  if (loading) {
    return <h1> Loading rates...</h1>;
  }
  if (error) {
    return <h1>Something went wrong: {error}</h1>;
  } else {
    const renderRates = data.rates.map(rate => (
      <li key={rate.currency}>
        You need {rate.value}
        {rate.currency} to get 1 {currency}
      </li>
    ));
    return <ul>{renderRates}</ul>;
  }
}

export default Example;
