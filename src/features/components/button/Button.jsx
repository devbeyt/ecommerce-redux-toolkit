import React from 'react'

function Button({text,styles,handle}) {
  return (
    <button type='button' className={styles} onClick={handle}>{text}</button>
  )
}

export default Button