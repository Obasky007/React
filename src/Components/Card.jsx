import React from 'react'

function Cards({title, description}) {
  return (
    <div>
      <div className='border border-gray-400 shadow-2xl md:w-[550px] w-[470px] m-auto rounded-xl p-7 mb-10'>
        <h1 className='font-bold text-3xl mb-4'>{title}</h1>
        <p className='font-medium text-base'>{description}</p>
      </div>
    </div>
  )
}

export default Cards