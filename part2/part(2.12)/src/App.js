import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'



const Display = ({countries,showCountry,newSearch}) => {

  const checkName = countries.filter((country) =>      
    country.name.toLocaleLowerCase().indexOf(newSearch) > -1)
      console.log(countries.length)

 if((checkName.length > 10) && (checkName.length < 100)){
 return <p>Too many matches, specify another filter</p>
}
else if ((checkName.length > 1) &&(checkName.length <= 10)){
return(
  <div>{checkName.map((search,i) =>
   <div key={i}>
     <p key={i}>{search.name}<button  onClick={showCountry.bind(this,search.name)}>show</button></p>
    </div>)}
  </div>
)}
else if(checkName.length === 1){
return <div>{checkName.map((search) => 
<div>
  <h1>{search.name}</h1>
  <p>Capital: {search.capital}</p>
  <p>Population: {search.population}</p>

  <h3>languages</h3>
  {search.languages.map((lang,i) => <ul><li key={i}>{lang.name}</li></ul>)}

  <img src={search.flag} style={{width:150,height:150}}/>
</div>
)}
</div>
}
else{
return<div></div>
}
}


const App = () => {
  const [countries, setCountry] = useState([])
  const [weather, setWeather] = useState([])
  const [newSearch, setNewSearch] = useState('')

    //  .get(`https://restcountries.eu/rest/v2/name/${newSearch}`)

  const hook = () =>{
      axios
       .get('https://restcountries.eu/rest/v2/all')
       .then(response => {
         setCountry(response.data)
       })
  }
  const hooky = () =>{
    axios
     .get('https://restcountries.eu/rest/v2/all')
     .then(response => {
       setWeather(response.data)
     })
}



const showNow = (tid) =>{

  let newCountry = tid.toLocaleLowerCase()
    setNewSearch(newCountry)    
}

const handleSearch = (event) => {
 event.preventDefault()
 setNewSearch(event.target.value)
}

useEffect(hook,[])



  
  console.log('render', countries, 'contries')

  return(
    <div>
       <p> find contries:<input onChange={handleSearch} value={newSearch}/></p>
     <Display countries ={countries} showCountry={showNow} newSearch={newSearch}/>
     </div>
  )
}

export default App;
