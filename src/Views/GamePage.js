import React from 'react'

const GamePage = (props) => {
  return (
    <div className="HomePage">
    <div className="Center">
     <h1>Welcome to MatchCards</h1>
         <button onClick={()=>props.handleclick(true)}>Start</button>
    </div>
   </div>
  )
}

export default GamePage