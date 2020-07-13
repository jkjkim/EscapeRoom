import React from 'react';
import './MainFloor.css';
import Touch from '../data/TouchTank.png'

const MainFloor = () => {

    return (
        <div className="parent">
            <div className="div1">Stars</div>
            <div className="div2">Shark Tank</div>
            <div className="div3">Reception</div>
            <div className="div4"> Touch Tank
                <img src={Touch} width="200" height="300" alt="1" />
            </div> 
            <div className="div5">Fish Tank</div>
            <div className="div6">Kid's Section</div>
            <div className="div7">Lab/Research Room</div>
        </div>
    )
}

export default MainFloor;