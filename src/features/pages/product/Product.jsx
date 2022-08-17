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
        setHeartStyle(!heartStyle)
        dispatch(addFavorite(product,heartStyle))
      
  }

  return (    <article>
    <img src={product.image}  onClick={()=>getProductDetails(product)}/>
    <div className="text">
      <h3>{product.title}</h3>
      <p>$ {product.price}</p>
      <p>{product.description.substring(1,70)}</p>
          <Button text="add to cart" styles="addtocart_btn" handle={()=>handleCart(product)}/>
    </div>
    <div onClick={()=>handleFavorite(product)}>
     <AiFillHeart size={24} className={`product_icon ${heartStyle && 'heart_style'}`}/>
     </div>
  </article>
  )
}

export default Product



