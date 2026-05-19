import React from 'react'

const ReButton = ({text}) => {
  return (
    <div className=' cursor-pointer hidden md:block lg:block'>
        <button className='bg-blue-400 rounded-3xl p-2 pl-8 pr-8 poppins-bold text-white hover:bg-blue-50 hover:text-black hover:cursor-pointer'>{text}</button>
    </div>
  )
}

export default ReButton