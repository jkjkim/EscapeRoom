import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      img: 'https://images.freeimages.com/images/large-previews/44a/cow-1575964.jpg'
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <button onClick={() => { this.setState({ img: 'https://images.freeimages.com/images/large-previews/44a/cow-1575964.jpg' }) }}>Click to see a Cow</button>
          <button onClick={() => { this.setState({ img: 'https://images.freeimages.com/images/large-previews/63d/dog-1383055.jpg' }) }}>Click to see a Dog</button>
          <img src={this.state.img} alt="an image" />
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
    );
  }
}

export default App;
