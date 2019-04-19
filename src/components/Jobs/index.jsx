import React from "react";
import { useQuery } from "react-apollo-hooks";
/* Styles wrapper  */
import {
  JobContainer,
  JobTitle,
  CompanyName,
  CreateNewJob,
  CreateNewJobContainer,
  Container,
} from "./styles";
import { GET_JOBS } from "../../queries";

function Jobs() {
  const { data, loading, error } = useQuery(GET_JOBS);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (data) {
    const renderJobs = data.jobs.map(({ id, company, title }) => (
      <JobContainer key={id}>
        <CompanyName>{company}</CompanyName>
        <JobTitle to={`/view/${id}`}>{title}</JobTitle>
      </JobContainer>
    ));
    return (
      <Container>
        <CreateNewJobContainer>
          <CreateNewJob to="/new">Post A Job</CreateNewJob>
        </CreateNewJobContainer>
        <ul>{renderJobs}</ul>
      </Container>
    );
  }
}

export default Jobs;
