import React, {useState} from "react"

function GiveName() {
  const [name, setName] = useState("")

  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <>
      <label>Give your team a name: </label>
      <input
        type="name"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <p>Your team name is: {name}</p>
    </>
  )
}

export default GiveName
