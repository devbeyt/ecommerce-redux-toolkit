import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import Button from '../../components/button/Button';
import {AiFillHeart} from 'react-icons/ai'
import './../../styles/styles.css'
import { addToCart } from '../cart/cartSlice';
import { addFavorite } from '../favorite/favoritesSlice';

function Product({product}) {
  const [heartStyle,setHeartStyle] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleCart = (product)=>{
        dispatch(addToCart(product))
  }

  const getProductDetails = (product)=>{
        navigate(`/products/${product.id}`)
  }

  const handleFavorite = (product)=>{
      dispatch(addFavorite(product))
      setHeartStyle(!heartStyle)
  }


  return (<div className='product' >
    <div onClick={()=>handleFavorite(product)}>
      <AiFillHeart size={20} className={`product_icon ${heartStyle ? 'heart_style' : null}`}/>
      </div>
    <h5 className='product_title'>{product.title}</h5>
    <img src={product.image} alt={product.title} className="product_img" onClick={()=>getProductDetails(product)}/>
    <span className='product_description'>{product.description.substring(0, 50)}</span>
    <span className='product_price'>price: ${product.price}</span>
    <Button text="add to cart" styles="addtocart_btn" handle={()=>handleCart(product)}/>
  </div>
  )
}

export default Product