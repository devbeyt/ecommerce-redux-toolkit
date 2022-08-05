import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import './../../styles/styles.css'
import { fetchProducts, productsSelector } from './productsSlice';
import Product from './Product'

function ProductList() {
  const dispatch = useDispatch();

  const allProducts = useSelector(productsSelector)
  
  let content = allProducts.map(product=>{
             return <Product product={product}/>
  })

     useEffect(()=>{
       dispatch(fetchProducts())
     },[dispatch])
    
  return (
    <div className='product_list space'>
     {content}
    </div>
  )
}

export default ProductList