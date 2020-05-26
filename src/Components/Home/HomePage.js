import React from 'react'
import Title from '../../Reuse/Title'
import SideMenu from './SideMenu'
import { lives } from "../../utils/Lives"
import LivesTemplate from '../lives/LivesTemplate'
import Origin from './Origin'

import "../../Styles/HomePage.scss"

const HomePage = () => {

    const home = true
    const display = lives.map(el =>
        <LivesTemplate key={el.id} data={el} />)

    return (
        <div className="homePage">
            <SideMenu />
            <div className="homeBody">
                <Title header={"Shoujo Kageki Revue Starlight"} />
                {home && <Origin />}
                {home ? null : display}
            </div>
        </div>
    )
}

export default HomePage
