import React from 'react'
import Style from"./style.module.css"
const Toggle = ({darkMode}) => {
  return (
    <div className={Style.header}>
        <h1>Notes</h1>
        <button onClick={()=>darkMode(
            (previousDarkMode)=> !previousDarkMode)} 
            className={Style.save}>Toggle Mode</button>
    </div>
  )
}

export default Toggle