import React from 'react'

function Button({text,styles}) {
  return (
    <button type='button' className={styles}>{text}</button>
  )
}

export default Button