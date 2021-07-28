import React from 'react'
const Hello = (props) => {
  return (
    <div>
      <p>Hello world {props.name}</p>
    </div>
  )
}
const Hi = (props) => {
  return (
    <div>
      <p>Hi world {props.age}</p>
    </div>
  )
}

const App = () => {
  const name = "habeeb";
  const age = "8";
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="ayo"/>
      <Hello name ={name}/>
      <Hello />
      <Hi age = {age}/>
      <Hi age = {age * 2}/>
      <Hello />
    </div>
  )
}
export default App