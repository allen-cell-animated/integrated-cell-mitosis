import React from 'react';
import ReactDom from 'react-dom';

import './styles/app.scss';

import Header from './components/header';
import ImagePlayer from './components/image-view';
import PlayBackSlider from './components/slider';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.sliderChange = this.sliderChange.bind(this);
    this.state = {
      currentTime: 0,
    };
  }

  sliderChange(value) {
    this.setState({
      currentTime: value,
    });
  }

  render() {
    return (
      <div>
        <Header />
        <ImagePlayer currentTime={this.state.currentTime} />
        <PlayBackSlider sliderChange={this.sliderChange} currentTime={this.state.currentTime} />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
