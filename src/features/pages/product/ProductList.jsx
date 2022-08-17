import React,{useEffect} from 'react'
// import { useGetProductsQuery } from '../../../services/apiSlice'
import { useDispatch,useSelector } from 'react-redux'
import './../../styles/styles.css'
import { fetchProducts,productsSelector } from './productsSlice';
import Product from './Product'
import Loading from './../loading/Loading'


function ProductList() {
  const dispatch = useDispatch();
  const allProducts = useSelector(productsSelector)

  // const { data = [], error, isLoading } = useGetProductsQuery()

  
  
  let content = allProducts.map(product=>{
             return <Product product={product}/>
  })



     useEffect(()=>{
       dispatch(fetchProducts())
     },[dispatch])
    
  return (
    <div className='grid page'>
    
      {content}


     {/* {error ? (
      <>Oh no, there was an error</>
    ) : isLoading ? (
      <Loading/>
    ) : data ? (  
      content
    ) : null} */}
    </div>
  )
}

export default ProductList