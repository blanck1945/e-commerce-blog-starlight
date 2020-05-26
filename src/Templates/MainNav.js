import React from 'react'

import "../Styles/MainNav.scss"
import { Link } from 'react-router-dom'

const MainNav = () => {
    return (
        <div className="mainNav">
            <Link to="/shop" className="shopLink">
                <div className="changeTheme">
                    <h4>Starlight Shop</h4>
                </div>
            </Link>
            <div className="searchBar">
                <h4>Search Bar</h4>
            </div>
            <div className="optionsTheme">
                <h4>Starlight Theme</h4>
            </div>

        </div>
    )
}

export default MainNav
