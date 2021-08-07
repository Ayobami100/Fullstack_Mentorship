import React, { useState } from 'react'
import Filter from './Components/Filter'
import Persons from './Components/Person'
import PersonForm from './Components/PersonForm'




const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setSearch ] = useState('')
  

const filterShown = (event) => {

    setSearch(event.target.value.toLocaleLowerCase())
}

const checkName = persons.filter((person) => 
     
person.name.toLocaleLowerCase().indexOf(newSearch) > -1)


  const handleNameChange = (event) => {
    setNewName(event.target.value)
   

}
const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
   

}
  const addName = (event) =>
  {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
  
    const compareName = persons.filter(person => (person.name === newName) && (person.number === newNumber))

    console.log(compareName);

    if(compareName.length > 0) {
            alert(`${newName} is already added to phonebook `)
    }
    else{
        setPersons(persons.concat(personObject))
    }

    setNewName('')
    setNewNumber('')

  }

  

  return (  


<div>
      <h2>Phonebook</h2>

      <Filter filterShown={filterShown}/>

      <h3>Add a new</h3>

      <PersonForm 
        newName={newName} handleNameChange={handleNameChange}
        newNumber={newNumber} handleNumberChange={handleNumberChange}
        addName={addName}
      />

      <h3>Numbers</h3>

      <Persons group={checkName} />
</div>
  )
}

export default App