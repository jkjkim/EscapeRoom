import React from 'react';
import logo from './logo.svg';
import './App.css';


class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            img: 'https://images.freeimages.com/images/large-previews/44a/cow-1575964.jpg',
            value: "",
            isCorrect: ""
        };
        this.handleChange = this.handleChange.bind(this);

        this.maryAudio = new Audio('http://www.freeabcsongs.com/mp3/mary.mp3');
        // this.dogAudio = new Audio(this.url);

    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />

                    <button onClick={() => { this.setState({ img: 'https://images.freeimages.com/images/large-previews/44a/cow-1575964.jpg' }) }}>Click to see a Cow</button>
                    <button onClick={() => { this.setState({ img: 'https://images.freeimages.com/images/large-previews/63d/dog-1383055.jpg' }) }}>Click to see a Dog</button>

          click the image to go to play a sound
          <img onClick={() => { this.maryAudio.play() }} src={this.state.img} alt="animal" width="600" height="400" />


                    <input type="text" value={this.state.value} onChange={this.handleChange} name="title" />
                    <button type="button" onClick={() => {
                        if (this.state.value === "Junha") {
                            this.setState({ isCorrect: "Good Job!" })
                        }
                        else {
                            this.setState({ isCorrect: "You got it wrong oops !" })
                        }
                    }}>Submit 'Junha'</button>

                    <button type="button" onClick={() => { this.maryAudio.pause() }}>Stop Audio</button>
                    <text className>{this.state.isCorrect}</text>


                    <a
                        className="App-link"
                        href="https://google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Go to Google
          </a>
                </header>
            </div>
        )
    }
}


export default Home;