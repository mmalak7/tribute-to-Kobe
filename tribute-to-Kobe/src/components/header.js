import React from "react"
import { Link } from "gatsby"
import Photo from '../images/basketball.png';

const Header = () => (
  <header>
    <div className='container'>
      <div className='inner-header'>
        <div className='nav-home'>
          <Link to='/'>Kobe <span>8</span> / <span>24</span></Link>
        </div>
        <div className='navigation'>
          <nav>
            <Link to='/carrer'>Carrer</Link>
            <Link to='/awards'>Awards</Link>
            <Link to='/menu'><img className='menu-logo' src={Photo} alt='' /></Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)
export default Header
