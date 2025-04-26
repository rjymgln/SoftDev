import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function NAVBAR({onLogout}) {
  const navigate = useNavigate
  const handleLogoutClick = () => {
    localStorage.removeItem('activeUser'); // Clear the active session
    navigate('/login');
  };
  return (
    <>
      <header className="top_bar">
        <div className="cafe_logo">
          <img src={require('../../Assets/cafelogo.png')} alt="GV CAFE" />
          <h1>GV CAFE</h1>
        </div>
        <button className="menu-toggle" aria-label="Open Menu">
          <lord-icon
            src="https://cdn.lordicon.com/eouimtlu.json"
            trigger="hover"
            colors="primary:#000000"
            style={{ width: 30, height: 30 }}
          ></lord-icon>
        </button>
        <div className="navbar">
          <nav>
            <ul className="links">
              <li>
                <a href="#HomePage" className="box-bar">
                  HOME
                </a>
              </li>
              <li>
                <a href="#ProductSelection" className="box-bar">
                  PRODUCT
                </a>
              </li>
              <li>
                <a href="#aboutus" className="box-bar">
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="#Contact" className="box-bar">
                  CONTACT
                </a>
              </li>
              <li>
                <a href="/" onClick={handleLogoutClick}>LOGOUT</a>              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}