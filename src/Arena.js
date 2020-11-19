import React, {useState, useEffect, useMemo, useCallback} from "react"
import styled from "styled-components"
import { Button } from "./buttons"

const Ground = styled.div`
  max-width: 120px;
  padding: 120px 50px;
  text-align: center;
  color: white;
`

function Arena() {
  const [ground, setGround] = useState(false)
  const [value, setValue] = useState(0)
  const [hotDog, setHotDog] = useState(0)

  function handleChange(event) {
    setValue(parseInt(event.target.value))
  }

  function handleClick() {
    setGround((item) => {
      if (ground === true) {
        item = false
      } else {
        item = true
      }
    return item;
  })
}

// UseMemo for audience and ground
  const doubleNumber = useMemo(() => {
    return double(value)
  }, [value])

  function double(num) {
    // console.log("Calling double")
      return num * 2
  }

// useCallback for buying hot dogs
  const buyHotDog = useCallback(() => {
    // console.log("Calling buy")
    setHotDog(sum => sum + 1)
  }, [setHotDog])

  useEffect(() => {
    buyHotDog()
    // console.log("Calling useeffect")
  }, [buyHotDog])

  return (
    <>
      <h2>Arena</h2>
      <label>Audience:</label> <br />
      <input
        type="number"
        value={value}
        onChange={handleChange}
      />
      <p>
        <Button
          onClick={handleClick}
        >
          Change ground
        </Button>
      </p>
      <Ground
        style={{ backgroundColor: ground ? 'orange' : 'green' }}
      >
        <h2>{ground ? 'sand' : 'grass' }</h2>
      </Ground>
      <h2>Good to Know</h2>
      <p>You need to buy at least {doubleNumber} hot dogs</p>
      <p>
        <Button
          data-testid="buy-hotdog"
          onClick={buyHotDog}
        >
          Buy hot dog
        </Button>
      </p>
      <p>You have <span data-testid="sum-hotdogs">{hotDog}</span> hot dogs</p>
    </>
  )
}

export default Arena
