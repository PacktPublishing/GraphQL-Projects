import React, { useState } from "react";
import styled from "styled-components";
import { Link, navigate } from "@reach/router";
import { useMutation } from "react-apollo-hooks";
import gql from "graphql-tag";
import { toDb } from "../markdownUtils";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  font-size: 24px;
  margin-top: 10px;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Submit = styled.input`
  font-size: 32px;
  padding: 5px;
  margin-top: 15px;
  width: 50%;
  align-self: flex-end;
`;

const JobDescription = styled.textarea`
  font-size: 18px;
`;

const Cancel = styled(Link)`
  position: fixed;
  top: 0;
  left: 10px;
  font-size: 18px;
  margin-top: 15px;
  color: gray;
`;

const INSERT_JOB = gql`
  mutation InsertJob(
    $company: String!
    $linkToApply: String!
    $title: String!
    $description: String!
  ) {
    insert_jobs(
      objects: {
        company: $company
        link_to_apply: $linkToApply
        title: $title
        description: $description
      }
    ) {
      returning {
        id
        company
      }
    }
  }
`;
function JobForm({ id }) {
  const [formState, setFormState] = useState({
    company: "",
    title: "",
    description: "",
    linkToApply: "",
  });
  const handleChange = e =>
    setFormState({ ...formState, [e.target.name]: e.target.value });
  const { company, title, description, linkToApply } = formState;
  const insertJob = useMutation(INSERT_JOB);
  const handleSubmit = e => {
    e.preventDefault();
    const { company, title, description, linkToApply } = formState;
    const convertedDescription = toDb(description);
    insertJob({
        description: convertedDescription,
    }).then(() => navigate("/"));
  };
  return (
    <Form onSubmit={handleSubmit}>
      <InputContainer>
        <Input
          type="text"
          placeholder="Your Company Name"
          onChange={handleChange}
          value={company}
          name="company"
        />
        <Input
          type="text"
          placeholder="Job Title"
          onChange={handleChange}
          value={title}
          name="title"
        />
        <Input
          type="text"
          placeholder="Link to apply"
          onChange={handleChange}
          value={linkToApply}
          name="linkToApply"
        />
        <JobDescription
          name="description"
          id="description"
          placeholder="Job Description"
          cols="30"
          rows="10"
          value={description}
          onChange={handleChange}
        />
        <Submit type="submit" value="Post" />
      </InputContainer>
      <Cancel to="/">Cancel</Cancel>
    </Form>
  );
}
export default JobForm;
