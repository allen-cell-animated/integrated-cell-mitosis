import React from 'react';
import ReactDom from 'react-dom';

import './styles/app.scss';

import ChannelSelector from './components/channel-selector';
import Header from './components/header';
import ImagePlayer from './components/image-view';
import PlayBackSlider from './components/slider';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.sliderChange = this.sliderChange.bind(this);
    this.changeChannel = this.changeChannel.bind(this);
    this.state = {
      currentTime: 0,
      currentChannel: 'all',
    };
  }

  sliderChange(value) {
    this.setState({
      currentTime: value,
    });
  }

  changeChannel(value) {
    this.setState({
      currentChannel: value,
    });
  }

  render() {
    return (
      <div>
        <Header />
        <ChannelSelector
          changeChannel={this.changeChannel}
          currentChannel={this.state.currentChannel}
        />
        <ImagePlayer currentTime={this.state.currentTime} directory={this.state.currentChannel} />
        <PlayBackSlider sliderChange={this.sliderChange} currentTime={this.state.currentTime} />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
