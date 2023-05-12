import React from 'react'

interface props  {
    title: string
};

const Header = ( { title } : props ) => {
  return (
    <div className='h-24 border-b-4 border-zinc-300'>
        <h1 className='text-4xl'>{ title }</h1>
    </div>
  )
}

export default Header