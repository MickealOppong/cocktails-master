import { useRef } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
  const navRef = useRef(null)

  const handleClick = () => {
    const nav = navRef.current;
    const links = nav.querySelector('.links')
    const navLinksContainer = nav.querySelector('.links-container')
    const linksContainerHeight = navLinksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if (linksContainerHeight === 0) {
      navLinksContainer.style.height = `${linksHeight}px`
      navLinksContainer.style.transitionDuration = '0.2s'
    } else {
      navLinksContainer.style.height = `${0}px`
      navLinksContainer.style.transitionDuration = '0.2s'
    }
  }
  return <nav ref={navRef}>
    <div className="nav-header">
      <Link to='/' className='logo'>cocktail<span>Masters</span> </Link>
      <button className='toggle-btn' onClick={() => handleClick()}>  <FaBars /> </button>
      <div className="nav-center">
        <div className="links-container">
          <ul className='links'>
            <NavLink to='/' className='nav-link'>Home</NavLink>
            <NavLink to='/about' className='nav-link'>about</NavLink>
            <NavLink to='/contact' className='nav-link'>contact</NavLink>
          </ul>
        </div>
      </div>
    </div>
  </nav>
}

export default Navbar