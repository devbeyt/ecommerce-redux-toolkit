import React from 'react'
import { useDispatch } from 'react-redux';
import Button from '../../components/button/Button';
import {AiOutlineHeart} from 'react-icons/ai'
import './../../styles/styles.css'
import { addToCart } from '../cart/cartSlice';

function Product({product}) {
  const dispatch = useDispatch();

  const handleCart = (product)=>{
        dispatch(addToCart(product))
  }

  return (<div className='product'>
    <AiOutlineHeart size={20} className="product_icon"/>
    <h5 className='product_title'>{product.title}</h5>
    <img src={product.image} alt={product.title} className="product_img"/>
    <span className='product_description'>{product.description.substring(0, 50)}</span>
    <Button text="sepete elve et" styles="addtocart_btn" handle={()=>handleCart(product)}/>
  </div>
  )
}

export default Product