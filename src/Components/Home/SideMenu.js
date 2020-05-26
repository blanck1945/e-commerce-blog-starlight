import React from 'react'
import StarlightLogo from '../../Reuse/StarlightLogo'

import bushi from "../../logos/bushiroad.png"

const SideMenu = () => {
    return (
        <div className="sideMenu">
            <StarlightLogo />
            <button className="sideBtn">Theather</button>
            <button className="sideBtn">Lives</button>
            <button className="sideBtn">Anime</button>
            <button className="sideBtn">Events</button>
            <button className="sideBtn">Game</button>
            <button className="sideBtn">Cast Members</button>
            <div className="bushiBox">
                <img src={bushi} alt="" className="bushi" />
            </div>
        </div>
    )
}

export default SideMenu
