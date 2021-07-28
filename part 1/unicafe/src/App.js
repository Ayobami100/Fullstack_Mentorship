import React, { useState } from 'react'


const Button = ({handleClick, text}) => <button onClick ={handleClick}>{text}</button>

const StatisticLine = ({text,value,p}) => <p style={{ margin:'0px' }}>{text} {value}</p>

// const totalFeedback = (props) => {
  
//   return (good) + (neutral) + (bad)
//  }


//  const positiveFeedback = ({good, neutral, bad}) => {
 
//   return (good)/(good + neutral + bad) * 100
//  }

const Statistics = ({good , neutral, bad}) =>
{
  if(good === 0 && bad === 0 && neutral === 0)
  return <h1>No feeback given</h1>
  else
  return(
    <div>
      <h1>statistics</h1>
        <table>
          <tbody>
            <tr><td> <StatisticLine text = 'good' value = {good} /></td></tr>   
            <tr><td><StatisticLine text = 'neutral' value = {neutral} /></td></tr>
            <tr><td><StatisticLine text = 'bad' value = {bad} /></td></tr>
            <tr><td><StatisticLine text = 'all' value = {good} /></td></tr>
            <tr><td><StatisticLine text = 'average' value = {(good) + (neutral) + (bad)} /></td></tr>
            <tr><td><StatisticLine text = 'positive' value ={(good)/(good + neutral + bad) * (100)+'%'}/></td></tr>
          </tbody>  
        </table>
    </div>
 
  )
}
// const Display = ({text}) => {}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

   const handleSetGood = () =>  setGood(good + 1)  
   const handleSetNeutral = () => setNeutral(neutral + 1)
   const handleSetBad = () => setBad(bad + 1)

   

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick ={handleSetGood} text = 'good' />
      <Button handleClick ={handleSetNeutral} text = 'neutral' />
      <Button handleClick ={handleSetBad} text = 'bad' />
     <Statistics good={good} neutral = {neutral} bad = {bad} />
    </div>
  )
}

export default App