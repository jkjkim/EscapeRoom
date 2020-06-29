import React from 'react';
import './Math.css';
import Crab from '../data/MathData/Cartoon Crab.svg'
import Cuttlefish from '../data/MathData/Cartoon Cuttlefish.svg'
import Lobster from '../data/MathData/Cartoon Lobster.svg'
import Octopus from '../data/MathData/Cartoon Octopus.svg'
import Shrimp from '../data/MathData/Cartoon Shrimp.svg'
import Squid from '../data/MathData/Cartoon Squid.svg'


const Math = () => {


    return (
        <div>
            <div className="parent">
                <div className="div1">
                    <img src={Squid} width="150" height="120" alt="1" />
                </div>
                <div className="div2">
                    <img src={Squid} width="150" height="120" alt="2" />
                </div>
                <div className="div3">
                    <img src={Cuttlefish} width="150" height="120" alt="3" />
                </div>
                <div className="div4">
                    <img src={Cuttlefish} width="150" height="120" alt="4" />
                </div>
                <div className="div5">
                    <img src={Shrimp} width="150" height="120" alt="5" />
                </div>
                <div className="div6">
                    <img src={Crab} width="150" height="120" alt="6" />
                </div>
                <div className="div7">
                    {/* <img src={Lobster} width="150" height="120" alt="7" /> */}
                </div>
                <div className="div8">
                    <img src={Crab} width="150" height="120" alt="8" />
                </div>
                <div className="div9">
                    <img src={Shrimp} width="100" height="100" alt="9" />
                </div>
                <div className="div10">
                    <img src={Lobster} width="100" height="100" alt="10" />
                </div>
                <div className="div11">
                    <img src={Shrimp} width="100" height="100" alt="11" />
                </div>
                <div className="div12">
                    <img src={Shrimp} width="100" height="100" alt="12" />
                </div>
                <div className="div13">
                    <img src={Lobster} width="100" height="100" alt="13" />
                </div>
                <div className="div14">
                    <img src={Crab} width="100" height="100" alt="14" />
                </div>
                <div className="div15">
                    TEXT GOES HERE
                </div>
            </div>
        </div>
    )
}

export default Math;