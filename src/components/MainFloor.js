import React from 'react';
import './MainFloor.css';
import Touch from '../data/TouchTank.png'
import Shark from '../data/Shark Tank Clipart.png'
const MainFloor = () => {

    return (
        <div className="parent">
            <div className="div1">Stars</div>
            <div className="div2">Shark Tank
            <img style={{ left:"40%", top:"50%", position: "absolute" }} src={Shark} width="200" alt="imgs" />           
            </div>
            <div className="div3">Reception</div>
            <div className="div4"> Touch Tank
            <img style={{ left:"40%", top:"50%", position: "absolute" }} src={Touch} width="200" alt="imgs" />           
            </div> 
            <div className="div5">Fish Tank</div>
            <div className="div6">Kid's Section</div>
            <div className="div7">Lab/Research Room</div>
        </div>
    )
}

export default MainFloor;