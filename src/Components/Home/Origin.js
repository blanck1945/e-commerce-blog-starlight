import React from 'react'
import Claudine from "../../Images/cast/Claudine.png"
import Daiba from "../../Images/cast/Daiba.png"
import Hikari from "../../Images/cast/hikari.png"
import Karen from "../../Images/cast/karen.png"
import Maya from "../../Images/cast/maya.png"


import "../../Styles/Origin/Origin.scss"

const Origin = () => {

    const counter = 0

    return (
        <div className="origin">
            {counter === 0 && < img src={Claudine} alt="" className="castImg cla" />}
            {counter === 0 && < img src={Daiba} alt="" className="castImg" />}
            {counter === 0 && < img src={Hikari} alt="" className="castImg" />}
            {counter === 0 && < img src={Karen} alt="" className="castImg" />}
            {counter === 0 && < img src={Maya} alt="" className="castImg" />}
        </div>
    )
}

export default Origin
