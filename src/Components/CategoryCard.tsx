import React from 'react'
import { cyberSecurity } from '../assets/assest'
import ReButton from './ReButton';


const CategoryCard = ({title,image}) => {
  return (
    <div className="relative group w-[300px] h-[500px] sm:[340px] sm:[510px] bg-cover bg-center m-2 rounded-2xl p-4 cursor-pointer"
      style={{ backgroundImage: `url(${image})` }}>
        
      

      <div className='absolute w-full h-full inset-0 bg-black/60 opacity-0 rounded-2xl group-hover:opacity-100 transition duration-300'>
        <div className='absolute top-2/4 left-1/8'>
           <h3 className='text-blue-50 poppins-bold text-3xl'>{title}</h3>
           <ReButton text={'Read More'}/>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard