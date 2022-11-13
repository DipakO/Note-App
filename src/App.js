// import Card from "./pages";
import "./App.css"
import { useState , useEffect } from "react";
import { nanoid } from 'nanoid';
import "./App.css"
import Card from "./components";
import Search from "./components/Search";
import Toggle from "./components/Toggle";

const App =()=>{
    const [notes , setNotes] = useState(
        ()=>{
            const savedItem = localStorage.getItem("react-notes-app-data");
            const parseItem = JSON.parse(savedItem);
            return parseItem ||
        [
        {
            id : nanoid(),
            text : "This Is My first notes ",
            date : "06/05/2021"
        },
        {
            id : nanoid(),
            text : "This Is My second notes ",
            date : "06/05/2021"
        },
        {
            id : nanoid(),
            text : "This Is My third notes ",
            date : "06/05/2021"
        },
        {
            id : nanoid(),
            text : "This Is My third notes ",
            date : "06/05/2021"
        }
    ]
}
    );

    const addNote = (text)=>{
        const date = new Date();
       const newNote = {
        id : nanoid(),
        text : text,
        date : date.toLocaleDateString()

       }
       const newNotes = [...notes, newNote]
       setNotes(newNotes);
    }

    const [searchText , setSearchText] = useState(" ")
    // {notes.filter((note)=>note.text.toLowerCase().includes(searchText))}
    const [darkMode , setDarkMode] = useState(" ")
   
    useEffect(()=>{
        localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
    },[notes])

    const deleteNote = (id) =>{
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    }
    return(
        <div className={`${darkMode && 'dark_mode'}`}>
        <div className="container">
            <Toggle darkMode ={setDarkMode}/>
            <Search handleSearchNote = {setSearchText}/>
            <Card 
                notes = {notes} 
                handleAddNote = {addNote} 
                deleteNote = {deleteNote}
            
            />
        </div>
        </div>
    )
    
}

export default App;