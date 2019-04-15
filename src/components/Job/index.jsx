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
import { GET_JOB, DELETE_JOB, GET_JOBS, GET_COMPANY_INFO } from "../../queries";

const getHostname = data => {
  if (data) {
    if (data.job) {
      return data.job.link_to_apply;
    }
  } else {
    return "example.com";
  }
};
function Job(params) {
  const { data: jobData, error, loading: jobLoading } = useQuery(GET_JOB, {
    variables: { jobId: params.id },
  });
  const { data: companyInfo, loading: companyInfoLoading } = useQuery(
    GET_COMPANY_INFO,
    {
      variables: { companyDomain: getHostname(jobData) },
      skip: jobLoading,
    },
  );
  const deleteJob = useMutation(DELETE_JOB, {
    refetchQueries: [{ query: GET_JOBS }],
  });
  const handleDeleteJob = e => {
    console.log("DELETING A JOB", params.id);
    deleteJob({
      variables: { jobId: params.id },
    }).then(() => navigate("/"));
  };
  if (jobLoading) {
    return <h1>Loading...</h1>;
  } else if (jobData) {
    const { description, id, company, link_to_apply } = jobData.job;
    let convertedDescription = fromDb(description);

    let additionalInformation = undefined;
    if (!companyInfoLoading) {
      additionalInformation = <span>{companyInfo.company.phone}</span>;
    }
    return (
      <JobContainer>
        <BackButton to="/"> Back to search </BackButton>
        <h1>Work for {company}</h1>
        {additionalInformation}
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
