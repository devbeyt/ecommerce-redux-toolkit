import React from 'react'
import Button from '../../components/button/Button';
import {AiOutlineHeart} from 'react-icons/ai'
import './../../styles/styles.css'

function Product({product}) {
  const {title,image,description} = product;

  return (<div className='product'>
    <AiOutlineHeart size={20} className="product_icon"/>
    <h5 className='product_title'>{title}</h5>
    <img src={image} alt={title} className="product_img"/>
    <span className='product_description'>{description.substring(0, 50)}</span>
    <Button text="sepete elve et" styles="addtocart_btn"/>
  </div>
  )
}

export default Product