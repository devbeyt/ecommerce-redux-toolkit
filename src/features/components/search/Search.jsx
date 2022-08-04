import React from 'react'
import './../../styles/styles.css'
import { BsSearch } from 'react-icons/bs'

function Search() {
    return (<div className="nav_search_box">
        <input type="search" placeholder="Axtaris edin..." />
        <BsSearch size={20}/>
    </div>
    )
}

export default Search