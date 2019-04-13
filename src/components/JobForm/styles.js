import styled from "styled-components";
import { Link } from "@reach/router";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  font-size: 24px;
  margin-top: 10px;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const Submit = styled.input`
  font-size: 32px;
  padding: 5px;
  margin-top: 15px;
  width: 50%;
  align-self: flex-end;
`;

export const JobDescription = styled.textarea`
  font-size: 18px;
`;

export const Cancel = styled(Link)`
  position: fixed;
  top: 0;
  left: 10px;
  font-size: 18px;
  margin-top: 15px;
  color: gray;
`;
