import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductDetailsQuery } from '../../../services/apiSlice'
import './../../styles/styles.css'
import {AiOutlineDoubleLeft} from 'react-icons/ai'

function ProductDetails() {
    const {productId} = useParams();
    const navigate = useNavigate();
    const { data: product, isFetching, isSuccess } = useGetProductDetailsQuery(productId)

    const GoHomePage = ()=>{
      navigate('/')
    }
        
    let content
    if(isFetching){
      content = <h1>Loading..</h1>
    }else if(isSuccess)(
      content =  <div className="product_details container">
      <h3>Product Details</h3>
      <div className="product_details_box">
        <div className="product_details_img_wrapper">
        <img src={product.image} className="product_details_img" alt={product.title}/>
      <h3 className='product_details_title'>{product.title}</h3>
      <button type='button' onClick={GoHomePage} className="go_home_btn"><AiOutlineDoubleLeft size={20}/>Go back</button>
        </div>
      <p className='product_details_price'>Price: ${product.price}</p>
      <span className='product_details_description'>
        <h4>Product description</h4>
        {product.description}
        </span>
      </div>
    </div>
    )
  return (
    <div>{content}</div>
  )
}

export default ProductDetails