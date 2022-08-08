import React from 'react'
import { useSelector } from 'react-redux'
import './../../styles/styles.css'
import { favoritesSelector } from './favoritesSlice'

function Favorite() {
    const favorites = useSelector(favoritesSelector)
    console.log(favorites)

    const content = favorites.map(favory=>{
      const {image,title,id,description,price} = favory
      return <div key={id} className="favorite_product">
         <span className='favory_title'>{title}</span>
          <div className="favorite_img_wrapper">
          <img src={image} className="favory_img" alt={title}/>
          </div>
          <span className='favorite_description'>{description}</span>
      </div>
    })
    
  return (
    <div className="favorite page">
      <h3 className='text_center title'>My Favorites...</h3>
       <div className="favorite_container ">
             {content} 
       </div>
    </div>
  )
}

export default Favorite