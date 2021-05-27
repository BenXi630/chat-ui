import React from 'react';
import PropTypes from 'prop-types';
import StyledTag from './style';

function Tag({ children, type = 'default', ...rest }) {
  return (
    <StyledTag type={type} {...rest}>
      {children}
    </StyledTag>
  );
}

Tag.propTypes = {
  children: PropTypes.any.isRequired,
  type: PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
};

export default Tag;
