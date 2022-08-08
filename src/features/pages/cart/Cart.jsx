import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import './../../styles/styles.css'
import Messages from './../../components/messages/Messages'


function Cart() {
  const items = useSelector(state=>state.cart.cartItems)
  
  let content = items.length > 0 ? items.map(item=>{
    return <CartItem item={item}/>
  }) : <Messages message="Your Cart is empty..." styles="messages_styles"/>


  return (
    <div className='cart page'>
        {content}
    </div>
  )
}

export default Cart