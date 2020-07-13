import React from 'react';
import './TouchTank.css';

import Crab from '../data/TouchTankData/Hosesshoe Crab.png'
import OStarfish from '../data/TouchTankData/Orange Starfish.png'
import RStarfish from '../data/TouchTankData/Red Starfish.png'
import Dollar from '../data/TouchTankData/Sand dollar Clipart.png'
import Anemone from '../data/TouchTankData/Sea Anemone Clipart.png'
import Urchin from '../data/TouchTankData/Sea Urchin.png'

import Snail from '../data/TouchTankData/Snail.png'

import { Popover, OverlayTrigger } from 'react-bootstrap';


class TouchTank extends React.Component {
    constructor() {
        super()
        const orange = new Audio("http://www.vibrationdata.com/piano_middle_C.mp3");
        const dollar = new Audio("http://www.vibrationdata.com/piano_G.mp3");
        const crab = new Audio("http://www.vibrationdata.com/piano_A.mp3");
        const anemone = new Audio("http://www.vibrationdata.com/piano_F.mp3");
        const urchin = new Audio("http://www.vibrationdata.com/piano_E.mp3");
        const red = new Audio("http://www.vibrationdata.com/piano_D.mp3");

        this.state = {
            vals: [OStarfish, OStarfish, Dollar, Dollar, Crab, Crab, Dollar, Anemone, Anemone, Urchin, Urchin, RStarfish, RStarfish, OStarfish],
            constants: [orange, orange, dollar, dollar, crab, crab, dollar, anemone, anemone, urchin, urchin, red, red, orange],
            xs: ['26%', '32%', '58%', '67%', '73%', '66%', '52%', '35%', '30%', '30%', '35%', '48%', '53%', '43%'],
            ys: ['15%', '8%', '8%', '18%', '48%', '55%', '70%', '62%', '56%', '38%', '30%', '28%', '35%', '45%']
        }
        this.myRef = React.createRef();


    }


    makeSound = (sound) => {
        sound.currentTime = 0.5;
        sound.play();
    }

    render() {
        return (
            <div className='touchtank-parent'>

                <img style={{ left: "3%", top: "35%", position: "absolute" }} src={Snail} width="200" alt="snail" />


                {
                    this.state.vals.map((val, i) => (
                        <img style={{ left: this.state.xs[i], top: this.state.ys[i], position: "absolute" }} src={val} onClick={() => this.makeSound(this.state.constants[i])} key={i} width="90" alt="imgs" />
                    ))
                }
                {/* <img className="div2" src={Squid} width="400" height="300" alt="2" />
                <img className="div3" src={Cuttlefish} width="400" height="300" alt="3" /> */}
                <div className="box sb2">
                    Sheldon the Conductor keeps us in shape.
                    He decides the order of when we sing.
                    He carries the team on his back,
                    starting from the edge,
                    and slowly focusing on the center.
                </div>

            </div>
        )
    }
}


export default TouchTank;