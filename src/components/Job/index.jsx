import React from "react";
import { useQuery, useMutation } from "react-apollo-hooks";
import { fromDb } from "../../markdownUtils";
import { navigate } from "@reach/router";
import {
  ApplyContainer,
  JobContainer,
  BackButton,
  ApplyLink,
  DeleteJob,
  JobDescription,
} from "./styles";
import { GET_JOB, DELETE_JOB, GET_JOBS } from "../../queries";

function Job(params) {
  const { data, error, loading } = useQuery(GET_JOB, {
    variables: { jobId: params.id },
  });
  const deleteJob = useMutation(DELETE_JOB);
  const handleDeleteJob = e => {
    console.log("DELETING A JOB", params.id);
    deleteJob({
      variables: { jobId: params.id },
      refetchQueries: [{ query: GET_JOBS }],
    }).then(() => navigate("/"));
  };
  if (loading) {
    return <h1>Loading...</h1>;
  } else if (data) {
    const { description, id, company, link_to_apply } = data.job;
    let convertedDescription = fromDb(description);
    return (
      <JobContainer>
        <BackButton to="/"> Back to search </BackButton>
        <h1>Work for {company}</h1>
        <JobDescription source={convertedDescription} />
        <ApplyContainer>
          <DeleteJob onClick={handleDeleteJob}>💥</DeleteJob>
          <ApplyLink href={link_to_apply}>Apply Now</ApplyLink>
        </ApplyContainer>
      </JobContainer>
    );
  }
}

export default Job;
