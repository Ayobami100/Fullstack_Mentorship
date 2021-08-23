import React from 'react'




const Person = ({group, deleteNow,label}) =>{


 return  <li>
  {group.name} {group.number} 
  <button onClick={deleteNow}>{label}</button>
</li>

  }


export default Person