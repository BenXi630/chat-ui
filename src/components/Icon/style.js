import styled from 'styled-components';

const StyledIcon = styled.div`
  display: inline-flex;
  svg,
  svg * {
    ${({ color }) => (color ? `fill: ${color}` : '')};
    ${({ opacity }) => (opacity ? `opacity: ${opacity}` : '')};
  }
`;

export default StyledIcon;
