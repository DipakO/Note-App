import React from 'react'
import Style from "./style.module.css"
import { MdSearch } from 'react-icons/md'
const Search = ({handleSearchNote}) => {
  return (
    <div className={Style.search}>
        <MdSearch className = {Style.search_icon } size = '1.3em' />
        <input 
            onChange={(e)=>handleSearchNote(e.target.value)} 
            type="text" 
            placeholder='type to search'
        />
    </div>
  )
}

export default Search