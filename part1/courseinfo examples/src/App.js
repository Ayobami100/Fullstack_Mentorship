// import React from 'react'

// const Header = (props) => {
//   return(
//     <h1>{props.course}</h1>

//   )
// }


// const Part1 = (props) => {
//   return(
//     <p>
//         {props.part1} {props.exercises1}
//       </p>

//   )
// }


// const Part2 = (props) => {
//   return(
//     <p>{props.part2 + props.exercises2}</p>

//   )
// }


// const Part3 = (props) => {
//   return(
//     <p>
//         {props.part3} {props.exercises3}
//       </p>

//   )
// }

// const Content = (props) => {

//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return(
//     <div>
//       <Part1 part1 = {part1} exercises1 = {exercises1} />
//       <Part2 part2 = {part2} exercises2 = {exercises2} />
//       <Part3 part3 = {part3} exercises3 = {exercises3}/>     
     
//     </div>
//   )

  
// }
// const Total = (props) => {
//   return(
//     <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>

//   )
// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const exercises1 = 10
//   const exercises2 = 7
//   const exercises3 = 14

//   return (
//     <div>
      
//       <Header course ={course} />    

//       <Content  />

//       <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
    
//     </div>
//   )
// }

// export default App




// import React from 'react'

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }

//   return (
//     <div>
//     <h1>{course.name}</h1>
//     <p>{course.parts[0].name}{course.parts[0].exercises}</p>
//     <p>{course.parts[1].name}{course.parts[1].exercises}</p>
//     <p>{course.parts[2].name}{course.parts[2].exercises}</p>

//     <p>The total exercises is {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises } </p>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const Display = ({ counter }) => <div>{counter}</div>

// const Button = ({handleClick, text}) =>  (<button onClick={handleClick}> {text}</button>)

// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   const increaseByOne = () => setCounter(counter + 1)
//   const decreaseByOne = () => setCounter(counter - 1)
//   const setToZero = () => setCounter(0)

//   return (
//     <div>
//       <Display counter={counter}/>
//       <Button
//         handleClick={increaseByOne}
//         text='plus'
//       />
//       <Button
//         handleClick={setToZero}
//         text='zero'
//       />     
//       <Button
//         handleClick={decreaseByOne}
//         text='minus'
//       />           
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({handleClick, text}) => <button onClick = {handleClick}>{text}</button>

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }
  console.log(allClicks.length)

  return (
    <div>
     <Button handleClick = {handleLeftClick} text = 'left'/>
     <Button handleClick = {handleRightClick} text = 'right'/>
      
    <History allClicks = {allClicks} />
      
    </div>
  )
}


export default App
