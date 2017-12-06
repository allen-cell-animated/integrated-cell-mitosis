import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

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
      <div className="input-group">
        <label htmlFor="all">
          <input
            type="radio"
            id="All"
            name="channels"
            value="all"
            onChange={this.selectChannel}
          />
        All (Sec61-beta, Alpha-tubulin, DNA, Membrane)
        </label>
        <label htmlFor="membraneAndDna">
          <input
            type="radio"
            id="membraneAndDna"
            name="channels"
            value="membraneAndDna"
            onChange={this.selectChannel}
          />
        Membrane and DNA
        </label>
        <label htmlFor="all">
          <input
            type="radio"
            id="membraneAndDnaSolid"
            name="channels"
            value="membraneAndDnaSolid"
            onChange={this.selectChannel}
          />
        Membrane and DNA solid
        </label>
        <label htmlFor="spinning">
          <input
            type="radio"
            id="spinning"
            name="channels"
            value="spinning"
            onChange={this.selectChannel}
          />
          Spinning
        </label>
      </div>
    );
  }
}

ChannelSelector.propTypes = {
  changeChannel: PropTypes.func.isRequired,
};

export default ChannelSelector;
