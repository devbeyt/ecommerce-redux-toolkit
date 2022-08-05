import React from 'react'
import './../../styles/styles.css'

function Messages({message,styles}) {
  return (
    <div className='messages'>
        <h4 className={`${styles}`}>{message}</h4>
    </div>
  )
}

export default Messages