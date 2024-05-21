import "./App.css"
import { useState } from "react"
import {addNewJoke} from "./services/jokeService"

export const App = () => {

  const [newJokeState, setNewJokeState ] = useState("")



  return <>
  <h1>Chuckle Checklist</h1>
  <div>
    <p>Add Joke:</p>
  <input
  className=""
  type="text"
  placeholder="New One Liner"
  value={newJokeState}
  onChange={(event) => {
    setNewJokeState(event.target.value)
    // What's the value of event?
  }}
/>
<button onClick={() => {addNewJoke(
  {
    text: newJokeState,
    told: false
  }
  ).then(setNewJokeState(""))
  }}>Add</button>
  </div>
  
  
  </>
}
