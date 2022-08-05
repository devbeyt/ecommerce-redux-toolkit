import React from 'react'
import { useGetProductsQuery } from '../../../services/apiSlice'
// import { useDispatch,useSelector } from 'react-redux'
import './../../styles/styles.css'
// import { fetchProducts } from './productsSlice';
import Product from './Product'
import Loading from './../loading/Loading'

function ProductList() {
  // const dispatch = useDispatch();
  // const allProducts = useSelector(productsSelector)

  const { data = [], error, isLoading } = useGetProductsQuery()
  
  let content = data.map(product=>{
             return <Product product={product}/>
  })

    //  useEffect(()=>{
    //    dispatch(fetchProducts())
    //  },[dispatch])
    
  return (
    <div className='product_list page'>
     {error ? (
      <>Oh no, there was an error</>
    ) : isLoading ? (
      <Loading/>
    ) : data ? (  
      content
    ) : null}
    </div>
  )
}

export default ProductList