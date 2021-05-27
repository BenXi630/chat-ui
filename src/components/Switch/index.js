import React from 'react';
import PropTypes from 'prop-types';
import StyledSwitch, { Checkbox, Slider } from './style';

function Switch({ children, ...rest }) {
  return (
    <StyledSwitch {...rest}>
      <Checkbox />
      <Slider />
    </StyledSwitch>
  );
}

Switch.propTypes = {
  children: PropTypes.any,
};

export default Switch;
