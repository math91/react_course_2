import React from "react"
import styled from "styled-components"

const MyHeader = styled.div`
  background-color: #222;
  color: #f2f2f2;
  padding: 1px 20px;
`;

function Header() {
  return (
    <MyHeader>
      <h1>Create your Dog Soccer Team</h1>
    </MyHeader>
  )
}

export default Header
