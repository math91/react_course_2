import styled from "styled-components"

export const Button = styled.button`
  display: inline-block;
  font-size: 1em;
  padding: 0.25em 1em;
  color: green;
  background-color: white;
  border: 2px solid green;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: black;
    border: 2px solid black;
  }
`;
