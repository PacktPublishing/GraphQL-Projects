import gql from "graphql-tag";

export const GET_JOBS = gql`
  query {
    jobs {
      id
      company
      title
    }
  }
`;

export const GET_JOB = gql`
  query GetJob($jobId: Int!) {
    job: jobs_by_pk(id: $jobId) {
      id
      company
      description
      link_to_apply
    }
  }
`;
