import React from "react"
import {useTeam} from "./teamContext"
import styled from "styled-components"

const Ul = styled.ul`
  list-style: none;
  padding-left: 0;
  overflow: hidden;
`

const Li = styled.li`
  float: left;
  width: 100%;
  max-width: 150px;
  margin: 10px;
`

const ButtonRed = styled.button`
  background-color: red;
  color: white;
  cursor: pointer;
`

const ButtonGreen = styled.button`
  background-color: green;
  color: white;
  cursor: pointer;
`

function Lineup() {
  const {team, dispatch} = useTeam()

  function addSpeed(id) {
    dispatch({type: "addSpeed", id})
  }

  function removeSpeed(id) {
    dispatch({type: "removeSpeed", id})
  }

  // List Dog Team
  const dogTeam = team.map((item) =>
    <Li key={item.img}>
      <img src={item.img} alt="A dog" height="100px"/>
      <p>
        {item.speed ?
          <ButtonRed onClick={() => removeSpeed(item.img)}>Remove extra speed</ButtonRed>
          :
          <ButtonGreen onClick={() => addSpeed(item.img)}>Give extra speed</ButtonGreen>
        }
      </p>
    </Li>)

  console.log(`Lineup:${team}`)

  return(
    <>
      <Ul>
        {dogTeam}
      </Ul>
    </>
  )
}

export default Lineup
