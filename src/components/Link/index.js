import React from 'react';
import PropTypes from 'prop-types';
import StyledLink from './style';

function Link({ children, to, ...rest }) {
  return (
    <StyledLink href={to} {...rest}>
      {children}
    </StyledLink>
  );
}

Link.propTypes = {
  children: PropTypes.any,
};

export default Link;
