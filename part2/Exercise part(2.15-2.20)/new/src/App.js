import React, { useEffect, useState } from 'react'
import Filter from './Components/Filter'
import Persons from './Components/Person'
import PersonForm from './Components/PersonForm'
import phoneService from './Services/Phone'
import Notification from './Components/Notification'


const App = () => {
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setSearch ] = useState('')
  const [ persons, setPersons ] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const [diffColor, setDiffColor] = useState('')
  // const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    phoneService
      .getAll()
      .then(initialNotes => {
        setPersons(initialNotes)
        console.log(initialNotes)
      })
  }, [])

const filterShown = (event) => {

    setSearch(event.target.value.toLocaleLowerCase())
}

const checkName = () => {
  if(newSearch === ""){ 
    return persons
    }
  else{
    return persons.filter((person) => person.name.toLocaleLowerCase().indexOf(newSearch) > -1)

  }
}


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

    const compareName = persons.filter((person) => person.name.toLocaleLowerCase() === newName.toLocaleLowerCase())
    
    console.log('compare Name' ,compareName);
    if(compareName.length > 0) {
          
        const id = compareName.map((person) => person.id )
        const index = persons.indexOf(id)



        if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one `)){
          phoneService
          .update(id, personObject)
          .then(returnedNote => {
            console.log('returned note',returnedNote);
            console.log('persons',persons);
            persons.splice(index,1)
            setPersons(persons.concat(returnedNote))
            
            setErrorMessage(
              `Updated' ${newName}' `
            )
        setDiffColor('success')

            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          })
          .catch(error => {
            setDiffColor('error')
            setErrorMessage(
              `${newName}' was already removed from server`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
            setDiffColor('error')
            // setPersons(persons.filter(n => n.id !== id))
          })

          
        
        }
        else{

        }
    }
    else{
      phoneService
      .create(personObject)
      .then(returnedNote => {
        setPersons(persons.concat(returnedNote))
        setErrorMessage(
          `Added '${newName}'`
        )
        setDiffColor('success')
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
      .catch(error => {
        setDiffColor('error')
        setErrorMessage(
          `${newName}' was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setDiffColor('error')
        // setPersons(persons.filter(n => n.id !== id))
      })
       
    }

    setNewName('')
    setNewNumber('')

  }

  const removeNow = (id) =>{
    const filteredName = persons.find(n => n.id === id)

    const index = persons.indexOf(id)
    if(window.confirm(`Delete ${filteredName.name}?`)){
      
    const changedNote = { ...filteredName }

    phoneService
      .remove(id, changedNote)
      .then(returnedNote => {
        // setPersons(persons.map(person => person.id !== id ? person : returnedNote))

         persons.splice(index,1);
      console.log("filteredName",returnedNote);
      setErrorMessage(
        `Deleted' ${filteredName.name}'`
      )
      setDiffColor('error')

      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      })
      
      .catch(error => {
        setDiffColor('success')
        setErrorMessage(
          `${newName}' was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setDiffColor('error')
        // setPersons(persons.filter(n => n.id !== id))
      })


     
      
    }

    else{

    }
    
  }
  

  return (  


<div>
      <h2>Phonebook</h2>

      <Filter filterShown={filterShown}/>

      <Notification message={errorMessage} diffColor={diffColor}/>

      <PersonForm 
        newName={newName} handleNameChange={handleNameChange}
        newNumber={newNumber} handleNumberChange={handleNumberChange}
        addName={addName}
      />

      <h3>Numbers</h3>
      <ul>
         {checkName().map((person,i) =>
         <Persons 
         label = "Delete"
         key={i}
        group={person} 
      deleteNow = {() => removeNow(person.id)} />
      )}
     
      </ul>
     
    
</div>
  )
}

export default App