import React, {useReducer, useContext} from "react"
import dogReducer from "./dogReducer"

const TeamContext = React.createContext(null)

export function TeamProvider(props) {
  const [team, dispatch] = useReducer(dogReducer, [])
  const contextValue = {
    team,
    dispatch,
  }
  return <TeamContext.Provider value={contextValue}>{props.children}</TeamContext.Provider>
}

export function useTeam() {
  const context = useContext(TeamContext)
  if (!context) {
    throw new Error("useTeam must be used in a cartprovider. Wrap av paret compnent i cartprvider to fix this error.")
  }
  return context
}
