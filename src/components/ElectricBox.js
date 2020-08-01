import React from 'react';

import LockBox from '../data/Research/Electric Box.png'
import Desk from '../data/Research/Desk.png'

class ElectricBox extends React.Component {


    render() {
        return (
            
            <div>
                <div styles={{backgroundImage: "url(../data/Research/Floor.png)",}}>
                </div>
                <div style={{ left: "13%", top: "15%", position: "absolute" }}>Mollusk/Crustacean Tank</div>
                <div style={{ left: "85%", top: "25%", position: "absolute" }}>
                <Link to = '/box'>
                    <img style={{position: "absolute" }} src={LockBox} width="200"  alt="imgs" />
                </Link>
                </div>
                <div style={{ left: "55%", top: "50%", position: "absolute" }}>
                <img style={{position: "absolute" }} src={Desk} width= "400"  alt="imgs" />
                </div>
                <div style={{ left: "0%", top: "85", position: "absolute" }}>Floor</div>
            </div>
        )
    }
}

export default ElectricBox;