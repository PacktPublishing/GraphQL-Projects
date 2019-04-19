import styled from "styled-components";
import { Link } from "@reach/router";

export const CompanyName = styled.span`
  flex: 1;
`;
export const JobTitle = styled(Link)`
  color: black;
  text-decoration: none;
  flex: 3;
`;
export const JobContainer = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;

export const CreateNewJobContainer = styled.div`
  text-align: center;
`;
export const CreateNewJob = styled(Link)`
  text-decoration: none;
  color: blue;
  padding: 15px;
  font-size: 18px;
  border: 1px solid green;
`;

export const Container = styled.div`
  margin: 25px;
`;
