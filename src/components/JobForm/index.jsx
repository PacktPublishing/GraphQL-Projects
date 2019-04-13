import React, { useState } from "react";
import { navigate } from "@reach/router";
import { useMutation } from "react-apollo-hooks";
import { toDb } from "../../markdownUtils";
import {
  Cancel,
  Form,
  InputContainer,
  Input,
  JobDescription,
  Submit,
} from "./styles";

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
