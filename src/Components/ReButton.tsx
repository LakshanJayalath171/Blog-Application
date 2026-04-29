import React from 'react'

const ReButton = ({text}) => {
  return (
    <div className='my-2'>
        <button className='bg-blue-400 rounded-3xl p-2 pl-8 pr-8 poppins-bold text-white hover:bg-blue-50 hover:text-black'>{text}</button>
    </div>
  )
}

export default ReButton