import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Hamburger from "../components/Hamburger";

const Header = ({ history }) => {

  const [state, setState] = useState({
    inital: false,
    clicked: null,
    menuName: "Menu",
  })

  //disabled button state
  const [disabled, setDisabled] = useState(false)

  //Determine if menu button disabled
  const handleMenu = () => {
    disabledMenu();
    if (state.inital === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: 'Close',
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  }

  const disabledMenu = () => {
    setDisabled(!disabled);
    console.log(1);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    < header >
      <div className='container'>
        <div className='inner-header'>
          <div className='nav-home'>
            <Link to='/home'>Kobe <span>8</span> / <span>24</span></Link>
          </div>
          <div className='navigation'>
            <nav>
              <Link to='/carrer'>Carrer</Link>
              <Link to='/awards'>Awards</Link>
              <button disabled={disabled} onClick={handleMenu}>Menu</button>
            </nav>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </ header>
  )
}
export default Header;
