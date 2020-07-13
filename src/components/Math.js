import React from 'react';
import './Math.css';
import Crab from '../data/MathData/Cartoon Crab.png'
import Cuttlefish from '../data/MathData/Cartoon Cuttlefish.png'
import Lobster from '../data/MathData/Cartoon Lobster.png'
import Octopus from '../data/MathData/Cartoon Octopus.png'
import Shrimp from '../data/MathData/Cartoon Shrimp.png'
import Squid from '../data/MathData/Cartoon Squid.png'

import $ from 'jquery';


class MathClass extends React.Component {
    constructor() {
        super()
        this.state = {
            tops: [Octopus, Squid, Cuttlefish, Cuttlefish],
            topNames: ["a", "b", "c", "d"],
            topX: ['5%', '25%', '60%', '70%'],
            topY: ['50px', '100px', '75px', '200px'],

            bottoms: [Shrimp, Crab, Lobster, Crab, Shrimp, Lobster, Shrimp, Shrimp, Crab, Lobster],
            bottomNames: ["e", "f", "g", "h", "i", "j", "k", "l", "m", "n"],
            bottomX: ['6%', '9%', '20%', '23%', '45%', '50%', '69%', '78%', '80%', '82%'],
            bottomY: ['55%', '80%', '57%', '65%', '59%', '70%', '75%', '82%', '78%', '60%'],

            duration: 5000,
            min_duration: 5000
        }
        this.myRef = React.createRef();
        this.makeNewPosition = this.makeNewPosition.bind(this)
        this.animateDiv1 = this.animateDiv1.bind(this)
        this.animateDiv2 = this.animateDiv2.bind(this)
        this.animateDiv3 = this.animateDiv3.bind(this)
        this.animateDiv4 = this.animateDiv4.bind(this)
        this.animateDiv5 = this.animateDiv5.bind(this)
        this.animateDiv6 = this.animateDiv6.bind(this)
        this.animateDiv7 = this.animateDiv7.bind(this)
        this.animateDiv8 = this.animateDiv8.bind(this)
        this.animateDiv9 = this.animateDiv9.bind(this)
        this.animateDiv10 = this.animateDiv10.bind(this)
        this.animateDiv11 = this.animateDiv11.bind(this)
        this.animateDiv12 = this.animateDiv12.bind(this)
        this.animateDiv13 = this.animateDiv13.bind(this)
        this.animateDiv14 = this.animateDiv14.bind(this)

    }


    animateDiv1 = () => {
        var newq = this.makeNewPosition1();
        $('.a').animate({ top: newq[0], left: newq[1] }, Math.random() * this.state.duration + this.state.min_duration, () => {
            this.animateDiv1();
        });
    };
    animateDiv2 = () => {
        var newq = this.makeNewPosition1();
        $('.b').animate({ top: newq[0], left: newq[1] }, Math.random() * this.state.duration + this.state.min_duration, () => {
            this.animateDiv2();
        });
    };
    animateDiv3 = () => {
        var newq = this.makeNewPosition1();
        $('.c').animate({ top: newq[0], left: newq[1] }, Math.random() * this.state.duration + this.state.min_duration, () => {
            this.animateDiv3();
        });
    };
    animateDiv4 = () => {
        var newq = this.makeNewPosition1();
        $('.d').animate({ top: newq[0], left: newq[1] }, Math.random() * this.state.duration + this.state.min_duration, () => {
            this.animateDiv4();
        });
    };
    animateDiv5 = () => {
        var newq = this.makeNewPosition();
        $('.e').animate({ top: newq[0], left: newq[1] }, Math.random() * this.state.duration + this.state.min_duration, () => {
            this.animateDiv5();
        });
    };
    animateDiv6 = () => {
        var newq = this.makeNewPosition();
        $('.f').animate({ top: newq[0], left: newq[1] }, Math.random() * this.state.duration + this.state.min_duration, () => {
            this.animateDiv6();
        });
    };
    animateDiv7 = () => {
        var newq = this.makeNewPosition();
        $('.g').animate({ top: newq[0], left: newq[1] }, Math.random() * this.state.duration + this.state.min_duration, () => {
            this.animateDiv7();
        });
    };
    animateDiv8 = () => {
        var newq = this.makeNewPosition();
        $('.h').animate({ top: newq[0], left: newq[1] }, Math.random() * this.state.duration + this.state.min_duration, () => {
            this.animateDiv8();
        });
    };
    animateDiv9 = () => {
        var newq = this.makeNewPosition();
        $('.i').animate({ top: newq[0], left: newq[1] }, Math.random() * this.state.duration + this.state.min_duration, () => {
            this.animateDiv9();
        });
    };
    animateDiv10 = () => {
        var newq = this.makeNewPosition();
        $('.j').animate({ top: newq[0], left: newq[1] }, Math.random() * this.state.duration + this.state.min_duration, () => {
            this.animateDiv10();
        });
    };

    animateDiv11 = () => {
        var newq = this.makeNewPosition();
        $('.k').animate({ top: newq[0], left: newq[1] }, Math.random() * this.state.duration + this.state.min_duration, () => {
            this.animateDiv11();
        });
    };

    animateDiv12 = () => {
        var newq = this.makeNewPosition();
        $('.l').animate({ top: newq[0], left: newq[1] }, Math.random() * this.state.duration + this.state.min_duration, () => {
            this.animateDiv12();
        });
    };

    animateDiv13 = () => {
        var newq = this.makeNewPosition();
        $('.m').animate({ top: newq[0], left: newq[1] }, Math.random() * this.state.duration + this.state.min_duration, () => {
            this.animateDiv13();
        });
    };

    animateDiv14 = () => {
        var newq = this.makeNewPosition();
        $('.n').animate({ top: newq[0], left: newq[1] }, Math.random() * this.state.duration + this.state.min_duration, () => {
            this.animateDiv14();
        });
    };

    makeNewPosition1 = () => {

        // Get viewport dimensions (remove the dimension of the div)
        var h = $(window).height() - 500;
        var w = $(window).width() - 500;

        var nh = Math.floor(Math.random() * h);
        var nw = Math.floor(Math.random() * w + 350);

        return [nh, nw];

    }

    makeNewPosition = () => {

        // Get viewport dimensions (remove the dimension of the div)
        var h = $(window).height() - 500;
        var w = $(window).width() - 150;

        var nh = Math.floor(Math.random() * h + 400);
        var nw = Math.floor(Math.random() * w);

        return [nh, nw];

    }


    componentDidMount() {
        $(document).ready(() => {
            this.animateDiv1();
            this.animateDiv2();
            this.animateDiv3();
            this.animateDiv4();
            this.animateDiv5();
            this.animateDiv6();
            this.animateDiv7();
            this.animateDiv8();
            this.animateDiv9();
            this.animateDiv10();
            this.animateDiv11();
            this.animateDiv12();
            this.animateDiv13();
            this.animateDiv14();
        });
    }


    render() {
        return (
            <div className='parent1'>
                {
                    this.state.tops.map((val, i) => (
                        <img className={this.state.topNames[i]} style={{ left: this.state.topX[i], top: this.state.topY[i], position: "absolute" }} src={val} key={i} width="150" alt="top" />
                    ))
                }
                {
                    this.state.bottoms.map((val, i) => (
                        <img className={this.state.bottomNames[i]} style={{ animation: "bottom-move infinite 20s linear", left: this.state.bottomX[i], top: this.state.bottomY[i], position: "absolute" }} src={val} key={i} width="100" alt="bottom" />
                    ))
                }

                <p className='math-paragraph'>
                    Mollusks of all kinds love to hunt crustaceans for dinner. <br />
                    They try to go for those animals, such as shrimp, that pose no threat. <br />
                    However, some animals such as crabs can snip off one leg and lobsters even two. <br />
                    Furthermore, some Mollusks can eat more than one crustacean per meal. <br />
                    After the feast, how many legs remain?
                </p>

                {/* <img className="div2" src={Squid} width="400" height="300" alt="2" />
                <img className="div3" src={Cuttlefish} width="400" height="300" alt="3" /> */}

            </div>
        )
    }
}



export default MathClass;
