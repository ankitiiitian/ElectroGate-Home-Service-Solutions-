import React, { useState, useContext, useEffect } from "react";
import { auth, db } from "./firebase";
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import logo from './Electro.png'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { signOut } from "firebase/auth";

function Header() {
  const { currentUser } = useContext(AuthContext);

  const handleAuthentication = () => {
    if( currentUser ){
      signOut(auth);
    }
  }
  return (
    <div className='header'>
      <Link to="/">
      <img className="header_logo" src={logo}/>
      </Link>
      <div className='header_search'>
          <input
          className='header_searchInput' type="text"/>
          <SearchIcon className="header_searchIcon" />
      </div>
      <div className='header_nav'>
        <Link to={!currentUser && "/login"}>
            <div onClick={handleAuthentication} className='header_option'>
                <span className='header_optionLineOne'>Hello {!currentUser ? 'Guest' : currentUser.email}</span>
                <span className='header_optionLineTwo'>{currentUser ? "Sign Out" : "Sign In"}</span>
            </div>
        </Link>
        <Link to ="/Register">
            <div className='header_option'>
                <span className='header_optionLineOne'>Register As</span>
                <span className='header_optionLineTwo'>Professional</span>
            </div>
        </Link>
            
            {/* <div className='header_option'>
                <span className='header_optionLineOne'>Your</span>
                <span className='header_optionLineTwo'>Prime</span>
            </div> */}
            <Link to="/Blog">
            <div className='header_option'>
                <span className='header_optionLineOne'>Your</span>
                <span className='header_optionLineTwo'>Blog</span>
            </div>
            </Link>
      </div>
    </div>
  );
}

export default Header
