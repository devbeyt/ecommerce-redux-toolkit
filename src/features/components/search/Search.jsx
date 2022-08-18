import React from 'react'
import './../../styles/styles.css'
import { BsSearch } from 'react-icons/bs'

function Search({handleSearch,value}) {

    return (<div className="nav_search_box">
        <input type="search" placeholder="Search..... " className="search_styles" 
        value={value} onChange={handleSearch}/>
        <BsSearch size={16} className="nav_icon search_icon"/>
    </div>
    )
}

export default Search