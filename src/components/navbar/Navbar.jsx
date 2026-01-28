import './navbar.css';
import logo from '../../assets/logo.svg';
import { useState } from 'react';
import { RiCloseLine , RiMenuLine } from 'react-icons/ri';


const menuItems = (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wpt3'>What is GPT?</a></p>
    <p><a href='#possibility'>Open AI</a></p>
    <p><a href='#features'>case studies</a></p>
    <p><a href="#library">library</a></p>
  </>
);


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
        <div className='gpt3_navbar'>

        <div className='gpt3_navbar-links'>
          <div className='gpt3_navbar-links_logo'>
            <img src={logo} alt="logo" />
          </div>

          <div className='gpt3_navbar-links_container'>
            {menuItems}
          </div>
        </div>

        <div className='gpt3_navbar-sign'>
          <p>Sign In</p>
          <button type='button'>Sign Up</button>
        </div>

        <div className='gpt3_navbar-menu'>
          {toggleMenu
            ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenuLine color='#fff' size={27} onClick={() => setToggleMenu(true)} />
          }

          {toggleMenu && (
            <div className='gpt3_navbar-menu_container scale-up-center'>
              <div className='gpt3_navbar-menu_container-links'>
                {menuItems}

                <div className="gpt3_navbar-menu_container-links-sign">
                  <p>Sign In</p>
                  <button type='button'>Sign Up</button>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>
  )
}

export default Navbar
