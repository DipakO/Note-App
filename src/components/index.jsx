import React from 'react'
import AddNote from './AddNote';
import Note from './Note';
import Style from "./style.module.css"
const Card = ({notes , nodess, handleAddNote , deleteNote }) => {
  return (
    <div className={Style.notes_list}>
      {
      notes.map((note)=>
      <Note 
        id ={note.id} 
        text = {note.text} 
        date = {note.date} 
        handleDeleteNote = {deleteNote}
      />
        
        )}
       <AddNote handleAddNote = {handleAddNote} />
    </div>
  )
}

export default Card ;