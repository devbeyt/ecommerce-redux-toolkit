import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../search/Search'
import './../../styles/styles.css'
import {AiOutlineUser,AiOutlineHeart} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'

function Navigation() {
  return (
    <nav className='navigation'>
        <div className="container nav_container">
          <Link to="/" className="nav_logo">Ecommerce</Link>
          <Search/>
          <div className="nav_account_wrapper">
            <div className="register_box"><AiOutlineUser size={20}/></div>
            <div className="favorite_box"><AiOutlineHeart size={20}/></div>
            <div className="cart_box"><FiShoppingCart size={20}/></div>
          </div>
        </div>
    </nav>
  )
}

export default Navigation