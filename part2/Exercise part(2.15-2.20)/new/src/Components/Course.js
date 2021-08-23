import React from 'react'

const Header = ({ courses }) => {
  return <h2>{courses.name}</h2> ;
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Content = ({courses}) =>
{
  return (
    <div>
      {courses.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};



const Total = ({courses}) => {
 const sum = courses.parts.reduce((sum, part) => {
  return sum + part.exercises;
}, 0);

return <h4>Total of {sum} exercises</h4>;
}


const Courses =({courses}) =>{
  return(
<div>
   <Header courses={courses} />
    <Content courses={courses} />
    <Total courses={courses} />
</div>
  )
  
}
export default Courses