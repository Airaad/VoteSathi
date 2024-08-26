import React from 'react'
import Nav from './Nav'


export default function Header() {
  return (
    <header className='bg-orange-400 sticky top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-between border-gray-500 px-8 py-4'>
    <div>
    <img src='/votesathi-high-resolution-logo-transparent.png' className='w-60 h-10'></img>
    </div>
    <Nav/>
    
    </header>
  )
}
