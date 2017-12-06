import React from 'react';

class ChannelSelector extends React.Component {
  constructor(props) {
    super(props);
    this.selectChannel = this.selectChannel.bind(this);
  }

  selectChannel(e) {
    this.props.changeChannel(e.target.value);
  }

  render() {
    return (
      <div>
        <input
          type="radio"
          id="All"
          name="channels"
          value="all"
          onChange={this.selectChannel}
        />
        <label htmlFor="all">All</label>

        <input
          type="radio"
          id="membraneAndDna"
          name="channels"
          value="membraneAndDna"
          onChange={this.selectChannel}
        />
        <label htmlFor="membraneAndDna">Membrane and DNA</label>

        <input
          type="radio"
          id="spinning"
          name="channels"
          value="spinning"
          onChange={this.selectChannel}
        />
        <label htmlFor="spinning">Spinning</label>
      </div>
    );
  }
}

export default ChannelSelector;
