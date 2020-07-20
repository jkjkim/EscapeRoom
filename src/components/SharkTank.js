import React from 'react';

import Day from '../data/STankDay.png'
import Night from '../data/STankNight.png'
import MainFloor from './MainFloor.js'


class Intro extends React.Component {
    constructor() {
        super()

        this.state = {
            index: 0
        }
        this.values = [Day, Night]
    }

    render() {
        if (this.state.index < 2) {
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
                        <button onClick={() => this.setState({ index: this.state.index + 1 })}>Click for Night</button>
                    </div>
                </div>
            )
        }
    }
}

export default Intro;