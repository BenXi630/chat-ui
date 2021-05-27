import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StyledDropdown, { DropdownContainer } from './style';

function Dropdown({ children, content, align = 'right', ...rest }) {
  const [visible, setVisible] = useState(false);

  return (
    <StyledDropdown onClick={() => setVisible(!visible)} {...rest}>
      {children}
      {content && (
        <DropdownContainer align={align} visible={visible}>
          {content}
        </DropdownContainer>
      )}
    </StyledDropdown>
  );
}

Dropdown.propTypes = {
  children: PropTypes.any,
  content: PropTypes.any,
  align: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
};

export default Dropdown;
