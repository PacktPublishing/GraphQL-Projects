import React from "react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "react-apollo-hooks";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { parseMarkdown } from "../markdownUtils";
import { Link, navigate } from "@reach/router";

const GET_JOB = gql`
  query GetJob($jobId: Int!) {
    jobs_by_pk(id: $jobId) {
      id
      company
      description
      link_to_apply
    }
  }
`;

const ApplyLink = styled.a`
  padding: 10px;
  background: red;
  color: white;
  text-decoration: none;
`;
const ApplyContainer = styled.div`
  text-align: center;
  width: 100%;
  justify-content: space-between;
  display: flex;
`;

const BackButton = styled(Link)`
  color: gray;
`;

const JobContainer = styled.div`
  margin: 20px;
`;

const DeleteJob = styled(ApplyLink)`
  background: lightgray;
  cursor: pointer;
`;

const DeleteJobFromDb = gql`
  mutation DeleteJob($jobId: Int!) {
    delete_jobs(where: { id: { _eq: $jobId } }) {
      returning {
        id
      }
    }
  }
`;

function Job(params) {
  const { data, error, loading } = useQuery(GET_JOB, {
    variables: { jobId: params.id },
  });
  const deleteAJob = useMutation(DeleteJobFromDb);
  const handleDeleteJob = e => {
    deleteAJob({ variables: { jobId: parseInt(params.id) } }).then(() =>
      navigate("/"),
    );
  };
  if (loading) {
    return <h1>Loading...</h1>;
  } else if (data) {
    const { description, id, company, link_to_apply } = data.jobs_by_pk;
    let convertedDescription = parseMarkdown(description);
    return (
      <JobContainer>
        <BackButton to="/"> Back to search </BackButton>
        <h1>Work for {company}</h1>
        <ReactMarkdown source={convertedDescription} />
        <ApplyContainer>
          <DeleteJob onClick={handleDeleteJob}>💥</DeleteJob>
          <ApplyLink href={link_to_apply}>Apply Now</ApplyLink>
        </ApplyContainer>
      </JobContainer>
    );
  }
}

export default Job;
