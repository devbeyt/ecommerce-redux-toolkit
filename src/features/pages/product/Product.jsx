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
        dispatch(addFavorite(product))
      
  }


  return ( <div class="card">
     <div onClick={()=>handleFavorite(product)}>
      <AiFillHeart size={20} className={`product_icon ${heartStyle && 'heart_style'}`}/>
      </div>
  <img src={product.image} alt={product.title} onClick={()=>getProductDetails(product)}/>
  <div class="card_body">
    <div class="row">
      <div class="card_title">
        <h5>{product.title}</h5>
        <span>Price: ${product.price}</span>
      </div>
    </div>
    <hr />
    <p>
     {product.description.substring(0, 40)}
    </p>
      <div class="btn">
      <Button text="add to cart" styles="addtocart_btn" handle={()=>handleCart(product)}/>
    </div>
  </div>
</div>
  )
}

export default Product



