import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../search/Search'
import './../../styles/styles.css'
import {AiOutlineUser,AiOutlineHeart} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import Hamburger from '../hamburger/Hamburger'

function Navigation() {
  return (
    <nav className='navigation'>
        <div className="container nav_container">
          <Link to="/" className="nav_logo">Ecommerce</Link>
          <Search/>
          <div className="nav_account_wrapper">
            <div className="register_box nav_icon"><AiOutlineUser size={20}/></div>
            <div className="favorite_box nav_icon"><AiOutlineHeart size={20}/></div>
            <Link to="/cart" className="cart_box nav_icon"><FiShoppingCart size={20}/>
            <span className='cart_quantity'>0</span>
            </Link>
          </div>
          <Hamburger/>
        </div>
    </nav>
  )
}

export default Navigation