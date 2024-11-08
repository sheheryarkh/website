import React from 'react'
import Link from 'next/link'



const Header = () => {
  return (
    <div>
      <header id="header">
        <div id='lis'>
        <Link id='i' href="/"><li>Home</li></Link>
        <Link id='i' href="./about"><li>About</li></Link>
        <Link id='i' href="./docs"><li>Docs</li></Link>
        </div>
      </header>
    </div>
  )
}

export default Header
