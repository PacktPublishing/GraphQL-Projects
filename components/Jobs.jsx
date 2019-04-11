import React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";
import styled from "styled-components";

const GET_JOBS = gql`
  query {
    jobs {
      company
      title
    }
  }
`;

const CompanyName = styled.span``;
const JobTitle = styled.span``;
const JobContainer = styled.li``;

function Jobs() {
  const { data, loading, error } = useQuery(GET_JOBS);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (data) {
    console.log(data);
    const renderJobs = data.jobs.map(({ company, title }) => (
      <JobContainer>
        <CompanyName>{company}</CompanyName>
        <JobTitle>{title}</JobTitle>
      </JobContainer>
    ));
    return <ul>{renderJobs}</ul>;
  }
}

export default Jobs;
