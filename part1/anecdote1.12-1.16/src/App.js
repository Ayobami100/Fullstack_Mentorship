
import React, { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick = {handleClick}>{text}</button>

const Displayvote = ({vote, anecdote}) => 

<div>
  <p>{anecdote}</p>
  <p>has {vote} votes</p>
</div>

let newanecdotes = [0,0,0,0,0,0]
let highestVote

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
  
const [selected, setSelected] = useState(0)
const [vote, setVote] = useState(0)

  const setNewAnecdotes = () => {
    setSelected( Math.floor(Math.random() * 6))
  }

  const setNewVote = () => {
    


  setVote(vote + 1 )

  newanecdotes[selected] += 1

  highestVote = newanecdotes.indexOf(Math.max(...newanecdotes))

  console.log(highestVote)

  }

  // console.log(selected)
  //   console.log(vote)
     

  return (
    <div>

     <h1> Anecdote of the day</h1> 
    <Displayvote anecdote = {anecdotes[selected]} vote = {newanecdotes[selected]} />
      <Button handleClick = {setNewAnecdotes} text = 'next anecdotes' />
      <Button handleClick = {setNewVote} text = 'vote' />

     <h1> Anecdote with most votes</h1> 
        <Displayvote anecdote = {anecdotes[highestVote]} vote = {newanecdotes[highestVote]} />
    </div>
  )
}


export default App