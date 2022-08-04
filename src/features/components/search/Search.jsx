import React from 'react'
import './../../styles/styles.css'
import { BsSearch } from 'react-icons/bs'

function Search() {
    return (<div className="nav_search_box">
        <input type="search" placeholder="Axtaris  edin..... " className="search_styles"/>
        <BsSearch size={16} className="nav_icon search_icon"/>
    </div>
    )
}

export default Search