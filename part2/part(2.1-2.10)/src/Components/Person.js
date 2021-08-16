import React from 'react'




const Person = ({group}) =>{
    return  group.map((person) =>
        
          <p key={person.number}>{person.name} {person.number}</p>
        
        )
  }


export default Person