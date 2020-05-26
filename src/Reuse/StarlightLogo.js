import React from 'react'

import star from "../logos/starlight.jpg"
import "./ReuseStyles/star.scss"
const StarlightLogo = () => {
    return (
        <div className="sideTitle">
            <img src={star} alt="" className="star" />
        </div>
    )
}

export default StarlightLogo
