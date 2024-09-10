import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

const Header = () => {
  return (
    <>
      <nav className='p-4 flex justify-between items-center'>
        <Link>
          <img src="/logo.png" alt="Logo" className='h-10'/>
        </Link>

        <Button variant='outline'>Login</Button>
      </nav>
    </>
  )
}

export default Header