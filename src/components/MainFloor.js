import React from 'react';
import './MainFloor.css';
import { Link } from "react-router-dom";
import TouchImg from '../data/TouchTank.png'
import SharkImg from '../data/Shark Tank Clipart.png'
import KidsImg from '../data/Gate_Final.png'
import ResearchImg from '../data/Door.png'
import FishImg from '../data/TempFishTank.png'
import ReceptionImg from '../data/Podium_Final.png'
import TempStars from '../data/TempStars.PNG'
const MainFloor = () => {

    return (
        <div className="parent">
            <div className="div1">
            <img style={{position: "absolute" }} src={TempStars} width="2000" height="150" alt="imgs" />     
            </div>
            <div className="div2">
                <Link to = '/shark'>
                    <img style={{position: "absolute" }} src={SharkImg} width="300" alt="imgs" />
                </Link>
            </div>
            <div className="div3">
            <img style={{position: "absolute" }} src={ReceptionImg} width="200" alt="imgs" />   
            </div>
            <div className="div4">
            <Link to = '/touchtank'>
                <img style={{position: "absolute" }} src={TouchImg} width="300" alt="imgs" />           
            </Link>
            </div> 
            <div className="div5">
            <Link to = '/math'>
                <img style={{position: "absolute" }} src={FishImg} width="300" alt="imgs" />           
            </Link>
            </div>
            <div className="div6">
            <img style={{position: "absolute" }} src={KidsImg} width="200" alt="imgs" />    
            </div>
            <div className="div7">
            <Link to = '/research'>
                <img style={{position: "absolute" }} src={ResearchImg} width="200" height="300" alt="imgs" />           
            </Link>
            </div>
        </div>
    )
}

export default MainFloor;