import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Search from '../search/Search'
import './../../styles/styles.css'
import {AiOutlineUser,AiOutlineHeart} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import Hamburger from '../hamburger/Hamburger'
import { useSelector } from 'react-redux'


function Navigation() {
  const navigate = useNavigate()
  const count = useSelector(state=>state.cart.cartItems.length)
  const total = useSelector(state=>state.favorites.total)

 const goFavoritePage =()=>{
      navigate('/favorite')
 }

  return (
    <nav className='navigation'>
        <div className="container nav_container">
          <Link to="/" className="nav_logo">Ecommerce</Link>
          <Search/>
          <div className="nav_account_wrapper">
            <div className="register_box nav_icon"><AiOutlineUser size={20}/></div>
            <div className="favorite_box nav_icon" onClick={goFavoritePage}>
              <AiOutlineHeart size={20}/>
              <span className='total'>{total}</span>
              </div>
            <Link to="/cart" className="cart_box nav_icon"><FiShoppingCart size={20}/>
            <span className='total'>{count}</span>
            </Link>
          </div>
          <Hamburger/>
        </div>
    </nav>
  )
}

export default Navigation