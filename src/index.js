import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {TeamProvider} from "./teamContext"

ReactDOM.render(
    <TeamProvider>
      <App />
    </TeamProvider>,
  document.getElementById('root'))
