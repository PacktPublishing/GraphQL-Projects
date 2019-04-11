import React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";
import styled from "styled-components";
import { Link } from "@reach/router";

const GET_JOBS = gql`
  query {
    jobs {
      id
      company
      title
    }
  }
`;

const CompanyName = styled.span`
  flex: 1;
`;
const JobTitle = styled(Link)`
  color: black;
  text-decoration: none;
  flex: 3;
`;
const JobContainer = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;

function Jobs() {
  const { data, loading, error } = useQuery(GET_JOBS);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (data) {
    console.log(data);
    const renderJobs = data.jobs.map(({ id, company, title }) => (
      <JobContainer>
        <CompanyName>{company}</CompanyName>
        <JobTitle to={id.toString()}>{title}</JobTitle>
      </JobContainer>
    ));
    return <ul>{renderJobs}</ul>;
  }
}

export default Jobs;
