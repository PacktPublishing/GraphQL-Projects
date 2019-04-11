import React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";

const GET_JOB = gql`
  {
    jobs_by_pk(id: 10) {
      id
      company
      description
    }
  }
`;

function Job(params) {
  const { data, error, loading } = useQuery(GET_JOB);
  if (loading) {
    return <h1>Loading...</h1>;
  } else if (data) {
    const { description, id, company } = data.jobs_by_pk;
    return (
      <div>
        <h1>Work for {company}</h1>
        <span>{description}</span>
      </div>
    );
  }
}

export default Job;
