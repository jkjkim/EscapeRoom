import React from 'react';
import './MainFloor.css';
import Touch from '../data/TouchTank.png'
import Shark from '../data/Shark Tank Clipart.png'
import Kids from '../data/Gate_Final.png'
const MainFloor = () => {

    return (
        <div className="parent">
            <div className="div1">Stars</div>
            <div className="div2">
            <img style={{position: "absolute" }} src={Shark} width="300" alt="imgs" />           
            </div>
            <div className="div3">Reception</div>
            <div className="div4">
            <img style={{position: "absolute" }} src={Touch} width="300" alt="imgs" />           
            </div> 
            <div className="div5">Fish Tank</div>
            <div className="div6">
            <img style={{position: "absolute" }} src={Kids} width="200" alt="imgs" />    
            </div>
            <div className="div7">Lab/Research Room</div>
        </div>
    )
}

export default MainFloor;