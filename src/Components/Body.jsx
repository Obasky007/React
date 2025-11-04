import React from 'react'
import Cards from './Card';

function Body() {
  return (
    <div>
      <div className="text-white text-center bg-pink-700 p-20">
        <h1 className="font-bold text-5xl mb-5">Become a React Dev</h1>
        <p>Find the React job that fits your skill set</p>
      </div>
      <div className='flex justify-center items-center gap-[150px] mt-16'>
        <Cards
          title='For Developers'
        description='Browse our React jobs and start your career today'/>
        
        <Cards
          title='For Employers'
        description='Browse our React jobs and start your career today'/>
      </div>
    </div>
  );
}

export default Body