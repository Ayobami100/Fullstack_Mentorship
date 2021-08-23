import React from 'react'

const Notification = ({ message,diffColor }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className={diffColor} >
        {message}

      </div>
    )
  }

  export default Notification