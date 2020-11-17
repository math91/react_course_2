import React from "react"
import Header from "./Header"
import Main from "./Main"
import styled from "styled-components"
import './style.css';

const Wrapper = styled.div`
  background-color: white;
  margin: 0 auto;
  padding: 2.2em;
  max-width: 600px;
`

function App() {
  return (
    <Wrapper>
      <Header />
      <Main />
    </Wrapper>
  )
}

export default App
