import styled from "styled-components";
import { Link } from "@reach/router";
import ReactMarkdown from "react-markdown";

export const ApplyLink = styled.a`
  padding: 10px;
  background: red;
  color: white;
  text-decoration: none;
`;
export const ApplyContainer = styled.div`
  text-align: center;
  width: 100%;
  justify-content: space-between;
  display: flex;
`;

export const BackButton = styled(Link)`
  color: gray;
`;

export const JobContainer = styled.div`
  margin: 20px;
`;

export const JobDescription = styled(ReactMarkdown)``;

export const DeleteJob = styled(ApplyLink)`
  background: lightgray;
  cursor: pointer;
`;
