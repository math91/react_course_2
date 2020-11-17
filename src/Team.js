import React from "react"
import GiveName from "./GiveName"
import Lineup from "./Lineup"

function Team() {
  return (
    <>
      <h1>Your Team</h1>
      <h2>Name</h2>
      <GiveName />
      <h2>Lineup</h2>
      <Lineup />
    </>
  )
}

export default Team
