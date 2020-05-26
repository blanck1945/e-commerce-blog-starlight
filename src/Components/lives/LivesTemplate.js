import React from 'react'

import "../../Styles/Lives/LivesTemplate.scss"

const LivesTemplate = ({ data }) => {

    const {
        title,
        date,
        location,
        img
    } = data

    return (
        <div className="livesBox">
            <img src={img} alt="" className="eventImg" />
            <div className="livesBody">
                <h2>{title}</h2>
                <h4>{date}</h4>
                <h4 className="location">
                    Location: {location}
                </h4>
            </div>
        </div>
    )
}

export default LivesTemplate
