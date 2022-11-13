import React from 'react'
import { useState } from 'react'
import Style from "./style.module.css"
const AddNote = ({handleAddNote }) => {
    const [noteText , setNoteText] = useState('')
    const characterLimit = 200;
    const handleChange = (e)=>{
        // if(characterLimit-e.target.value.length >=0){
            {
        setNoteText(e.target.value);
        // console.log(e.target.value)
        }
    }
    // const handleSaveClick = ()=>{
    //     // if(noteText.trim().length > 0){
    //         handleAddNote(noteText)
    //         // setNoteText('')
    //     // }
    // };
    const handleSaveClick = ()=>{
        handleAddNote(noteText)
    }
  return (
    <div className={Style.new_note}>
        <textarea  cols="10" rows="8" placeholder='Type to add a note....'
        value={noteText} onChange = {handleChange} >

        </textarea>
        <div className={Style.note_footer}>
            <small>{characterLimit-noteText.length} Remaining</small>
            <button className={Style.save} onClick = {handleSaveClick}>Save</button>
        </div>
    </div>
  )
}

export default AddNote