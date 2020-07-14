import React from 'react';

import Slide1 from '../data/Intro/Slide1.png'
import Slide2 from '../data/Intro/Slide2.png'
import Slide3 from '../data/Intro/Slide3.png'
import MainFloor from './MainFloor.js'


class Intro extends React.Component {
    constructor() {
        super()

        this.state = {
            index: 0
        }
        this.values = [Slide1, Slide2, Slide3]
    }

    render() {
        if (this.state.index < 3) {
            return (
                <div>
                    <div style={{
                        minHeight: "100vh",
                        /* height: 700px;
                        width: 90%; */
                        position: "relative",
                        backgroundImage: "url(" + this.values[this.state.index] + ")",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center"
                    }}>
                        <button onClick={() => this.setState({ index: this.state.index + 1 })}>Click for next slide</button>
                    </div>
                </div>
            )
        }
        return (
            <MainFloor />
        )
    }
}

export default Intro;