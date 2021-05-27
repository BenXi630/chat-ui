import styled from 'styled-components';

const StyledLabelContainer = styled.label`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.normal};
`;

export default StyledLabelContainer;
