import React from "react";
import styled from "styled-components";

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
  margin-top: 15px;
  width: 50%;
  align-self: flex-end;
`;
function JobForm({ id }) {
  return (
    <Form>
      <InputContainer>
        <Input type="text" placeholder="Your Company Name" name="company" />
        <Input type="text" placeholder="Job Title" name="title" />
        <Submit type="submit" value="Post" />
      </InputContainer>
    </Form>
  );
}
export default JobForm;
