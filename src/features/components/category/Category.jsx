import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import './../../styles/styles.css'
import {Link} from 'react-router-dom'
import { categoriesSelector, fetchCategories } from './categoriesSlice';

function Category() {
     const dispatch = useDispatch();
     const allCategories = useSelector(categoriesSelector)

     useEffect(()=>{
       dispatch(fetchCategories())
     },[dispatch])

     const content = allCategories.map(category=>{
      return <li className='ul_li'>
        <Link to={`${category}`} className='Link'>{category}</Link>
      </li>
     })

  return (
    <div className='category space'>
      <ul className='ul'>
      {content}
      </ul>
    </div>
  )
}

export default Category