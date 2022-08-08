import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductDetailsQuery } from '../../../services/apiSlice'

function ProductDetails() {
    const {productId} = useParams();
    const { data: product, isFetching, isSuccess } = useGetProductDetailsQuery(productId)
        
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