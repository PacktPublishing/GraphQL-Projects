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

export const CREATE_NEW_JOB = gql`
  mutation CreateJob(
    $company: String!
    $title: String!
    $link_to_apply: String!
    $description: String!
  ) {
    insert_jobs(
      objects: {
        company: $company
        title: $title
        link_to_apply: $link_to_apply
        description: $description
      }
    ) {
      returning {
        id
      }
    }
  }
`;

export const DELETE_JOB = gql`
  mutation DeleteJob($jobId: Int!) {
    delete_jobs(where: { id: { _eq: $jobId } }) {
      returning {
        id
      }
    }
  }
`;
