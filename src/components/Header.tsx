import {Link} from 'react-router'

function Header() {
    return (
      <nav className='bg-pink-400 p-4'>
        <div className='flex flex-row space-x justify-center '>
            <img src="images/logo.png" alt='coffee logo' width={60} className='rounded-xl'/>
            <h1 className='text-3xl font-semibold p-4'>ComScri Coffee Shop</h1>
        </div>
        <ul className='flex flex-row space-x-4 justify-center'>
          <li><Link className='text-xl font-normal p-4 hover:text-white' to="/">Home</Link></li>
          <li><Link className='text-xl font-normal p-4 hover:text-white' to="/about">About</Link></li>
        </ul>
      </nav>
    )
  }

export default Header