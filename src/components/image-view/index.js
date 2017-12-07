import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class ImagePlayer extends React.Component {
  render() {
    const {
      currentTime,
      directory,
    } = this.props;
    const zeroPadding = '00000';
    const zerosNeeded = zeroPadding.length - currentTime.toString().length;
    const paddedNumber = zeroPadding.substring(0, zerosNeeded) + currentTime;
    const imageSrc = `__dirname/../../images/${directory}/chimovie-${paddedNumber}.jpeg`;
    return (
      <div className="image-holder">
        <img alt="modeled mitotic cell" src={imageSrc} />
      </div>
    );
  }
}

ImagePlayer.propTypes = {
  currentTime: PropTypes.number.isRequired,
  directory: PropTypes.string,
};

ImagePlayer.defaultProps = {
  directory: 'all',
};

export default ImagePlayer;
