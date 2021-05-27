import React from 'react';
import PropTypes from 'prop-types';
import StyledSelect from './style';
import LabelContainer from 'components/LabelContainer';

function Select({ label, type, children, ...rest }) {
  const selectWithoutLabel = (
    <StyledSelect type={type} {...rest}>
      {children}
    </StyledSelect>
  );

  return label ? (
    <LabelContainer label={label}>selectWithoutLabel</LabelContainer>
  ) : (
    selectWithoutLabel
  );
}

Select.propTypes = {
  type: PropTypes.oneOf(['form']),
  label: PropTypes.string,
  children: PropTypes.any,
};

export default Select;
