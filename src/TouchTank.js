import React from 'react';
import './TouchTank.css';


const TouchTank = () => {

    return (
        <div className="parent">
            <div className="div1">Snail</div>
            <div className="div2" onClick={() => makeSound(orange)}>Orange Starfish</div>
            <div className="div3" onClick={() => makeSound(orange)}>Orange Starfish</div>
            <div className="div4" onClick={() => makeSound(dollar)}>Sand Dollar</div>
            <div className="div5" onClick={() => makeSound(dollar)}>Sand Dollar</div>
            <div className="div6" onClick={() => makeSound(anemone)}>Anemone</div>
            <div className="div7" onClick={() => makeSound(anemone)}>Anemone</div>
            <div className="div8" onClick={() => makeSound(urchin)}>Sea Urchin</div>
            <div className="div9" onClick={() => makeSound(urchin)}>Sea Urchin</div>
            <div className="div10" onClick={() => makeSound(red)}>Red Starfish</div>
            <div className="div11" onClick={() => makeSound(red)}>Red Starfish</div>
            <div className="div12" onClick={() => makeSound(crab)}>Horseshoe Crab</div>
            <div className="div13" onClick={() => makeSound(crab)}>Horseshoe Crab</div>
            <div className="div14" onClick={() => makeSound(dollar)}>Sand Dollar</div>
            <div className="div15" onClick={() => makeSound(orange)}>Orange Starfish</div>
        </div>
    )
}

const orange = new Audio("http://www.vibrationdata.com/piano_middle_C.mp3");
const dollar = new Audio("http://www.vibrationdata.com/piano_G.mp3");
const crab = new Audio("http://www.vibrationdata.com/piano_A.mp3");
const anemone = new Audio("http://www.vibrationdata.com/piano_F.mp3");
const urchin = new Audio("http://www.vibrationdata.com/piano_E.mp3");
const red = new Audio("http://www.vibrationdata.com/piano_D.mp3");

const makeSound = (sound) => {
    sound.currentTime = 0.5;
    sound.play();
}

export default TouchTank;