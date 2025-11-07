import React from 'react'

function Cards({title, description}) {
  return (
    <div className='hover:translate-x-0'>
      <div className='border border-gray-400 hover:shadow-2xl shadow:xl md:w-[550px] w-[470px] m-auto rounded-xl p-6 mb-10 transition-all'>
        <h1 className='font-bold text-3xl mb-4'>{title}</h1>
        <p className='font-medium text-base'>{description}</p>
      </div>
    </div>
  )
}

export default Cards