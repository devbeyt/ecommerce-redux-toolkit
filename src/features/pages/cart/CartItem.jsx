import React from 'react'
import Button from './../../components/button/Button'
import './../../styles/styles.css'

function CartItem({ item }) {
    const { id, title, price,image } = item;
    return (
        <div className='cart_item' key={id}>
                
                <div className="item_view">
                <h5 className='item_title'>{title}</h5>
                <img src={image} alt={title} className="item_img" />
                </div>

                <span className='item_price'>Price: {price} $</span>
                
                <div className="item_delete_container">
                <Button text="mehsulu sil" styles="remove_btn" />
                </div>
        </div>
    )
}

export default CartItem