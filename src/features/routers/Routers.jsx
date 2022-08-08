import React from 'react'
import { Routes,Route } from 'react-router-dom'
import ProductList from './../pages/product/ProductList'
import Cart from './../pages/cart/Cart'
import NotFound from './../pages/notFound/NotFound'
import ProductDetails from '../pages/product/ProductDetails'
import Favorite from './../pages/favorite/Favorite'


function Routers() {
  return (<Routes>
    <Route path="/" element={<ProductList/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/products/:productId" element={<ProductDetails/>}/>
    <Route path="/favorite" element={<Favorite/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes>
  )
}

export default Routers