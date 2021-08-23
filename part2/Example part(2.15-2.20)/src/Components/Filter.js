import React from 'react'



const Filter = (props) =>{
    return(
        <div>
        filter shown with: <input onChange={props.filterShown}/>
        </div>
    )
    
}



export default Filter