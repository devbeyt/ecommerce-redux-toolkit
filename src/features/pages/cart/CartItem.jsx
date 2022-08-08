import React from 'react'
import { useDispatch } from 'react-redux';
import './../../styles/styles.css'
import { removeFromCart } from './cartSlice';

function CartItem({ item }) {
    // const { id, title, price,image } = item;
    const dispatch = useDispatch()

    const handleRemove =(item)=>{
        dispatch(removeFromCart(item))
    }

    return (
        <div className='cart_item' key={item.id}>
                
                <div className="item_view">
                <h5 className='item_title'>{item.title}</h5>
                <img src={item.image} alt={item.title} className="item_img" />
                </div>

                <span className='item_price'>Price: {item.price} $</span>
                
                <div className="item_delete_container">
                <button className='remove_btn' onClick={()=>(handleRemove(item))}>remove</button>
                </div>
        </div>
    )
}

export default CartItem