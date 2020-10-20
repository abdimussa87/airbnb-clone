import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
function Header() {
    return (
        <div className='header'>
            <img className='header__logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlCX_KCBoFMSJ8ocIWvCaHDwhcN4DEgnkMYg&usqp=CAU" alt="Airbnb Logo" />

            <div className='header__middle'>
                <input type="text" />
                <SearchIcon />
            </div>
            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <AccountCircleIcon style={{ color: "lightgray", fontSize: "30px" }} />
            </div>
        </div>
    )
}

export default Header
