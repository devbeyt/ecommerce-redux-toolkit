import React from 'react'
// import { useDispatch,useSelector } from 'react-redux'
import './../../styles/styles.css'
import {Link} from 'react-router-dom'
// import { categoriesSelector, fetchCategories } from './categoriesSlice';
import {useGetCategoriesQuery} from './../../../services/apiSlice'
import Loading from '../../pages/loading/Loading'

function Category() {
    //  const dispatch = useDispatch();
    //  const allCategories = useSelector(categoriesSelector)
    const { data = [], error, isLoading } = useGetCategoriesQuery()

    //  useEffect(()=>{
    //    dispatch(fetchCategories())
    //  },[dispatch])

     const content = data.map(category=>{
      return <li className='ul_li'>
        <Link to={`category/${category}`} className='Link'>{category}</Link>
      </li>
     })

  return (
    <div className='category'>
      <ul className='ul'>
      {error ? (
      <>Oh no, there was an error</>
    ) : isLoading ? (
      <Loading/>
    ) : data ? (  
      content
    ) : null}
      </ul>
    </div>
  )
}

export default Category