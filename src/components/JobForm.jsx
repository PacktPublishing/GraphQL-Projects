import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

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
function JobForm({ id }) {
  const [formState, setFormState] = useState({
    company: "",
    title: "",
    description: "",
  });
  const handleChange = e =>
    setFormState({ ...formState, [e.target.name]: e.target.value });
  const { company, title, description } = formState;
  const handleSubmit = e => {
    e.preventDefault();
    /* TO USE MUTATION HERE */
    console.log("SUBMITTING:", formState);
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
