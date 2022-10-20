
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../img/project/logo.svg';
import { FiChevronDown } from 'react-icons/fi';



const Nav = () => {
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#fff") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("6rem") : setnavSize("10rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (

    <div className='container-fluid d-flex  align-items-center py-4 nav_menu' style={{
     
      backgroundColor: navColor,
      height: navSize,
      transition: "all 1s"
    }} >
      <nav className="navbar navbar-expand-lg " >
        <div className="container">
          <Link className="navbar-brand m-0" to="/"><img src={Logo} alt="Logo" id="logo" /></Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0 me-5">
              <li className="nav-item">
                <NavLink className="nav-link mx-3 page_title cl" aria-current="page" to="/">Digital Agency</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mx-3 page_title cl" to="/">Services</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link mx-3 page_title cl" to="/portfolio">Portfolio</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link mx-3 page_title cl" to="/pages">Pages <FiChevronDown /></NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link mx-3 page_title" to="/">Blog </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link mx-3 page_title text-muted" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>

  )
}

export default Nav