import React from 'react';
import PropTypes from 'prop-types';

import Slider from 'antd/es/slider';
import InputNumber from 'antd/es/input-number';
import Row from 'antd/es/row';
import Col from 'antd/es/col';


require('style-loader!css-loader!antd/es/slider/style/index.css');

class PlayBackSlider extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.props.sliderChange(Number(value));
  }

  render() {
    return (
      <Row>
        <Col span={12}>
          <Slider min={0} max={510} onChange={this.onChange} value={this.props.currentTime} />
        </Col>
        <Col span={4}>
          <InputNumber
            min={0}
            max={510}
            style={{ marginLeft: 16 }}
            value={this.props.currentTime}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}

PlayBackSlider.propTypes = {
  currentTime: PropTypes.number.isRequired,
  sliderChange: PropTypes.func.isRequired,
};

export default PlayBackSlider;
