import React, { useEffect, useState } from 'react'
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { blogCategories } from '../assets/assest';


const CategoryHero = ({category}) => {

    const [data,setData] = useState()

    useEffect(()=>{
        const foundCategory = blogCategories.find(
            (item)=>item.name == category
        )

        setData(foundCategory)
    },[category])

  return (
    <div>
        <Link to={"/"} className=''><IoArrowBackCircleSharp className='text-4xl'/></Link>
        <div className='w-screen h-full flex items-center justify-center'>
           <div className='p-3 rounded-full border border-black'>
              {data && <img src={data.image} alt="category image" className='w-78 h-78 rounded-full '/>}
           </div>
            
        </div>
        
    </div>
  )
}

export default CategoryHero