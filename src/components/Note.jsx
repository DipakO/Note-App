import React from 'react'
import { MdDeleteForever } from "react-icons/md" ;
import Style from "./style.module.css"
const Note = ({id , text , date , handleDeleteNote}) => {
  return (
    <div className={Style.note}>
        <span>{text}</span>
        <div className={Style.note_footer}>
            <small>{date}</small>
            <MdDeleteForever 
            onClick={()=>handleDeleteNote(id)} 
            className={Style.delete_icon} size = '1.3em'/>
        </div>


    </div>
  )
}

export default Note