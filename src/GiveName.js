import React, {useState} from "react"

function GiveName() {
  const [name, setName] = useState("") //Need to move this to my context

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
