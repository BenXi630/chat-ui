import styled, { css } from 'styled-components';

const colors = (bgColor, borderColor, color) => css`
  background-color: ${bgColor};
  border-color: ${borderColor};
  color: ${color};
`;

const types = {
  success: colors('#f0f9eb', '#e1f3d8', '#67c23a'),
  info: colors('#f4f4f5', '#e9e9eb', '#909399'),
  warning: colors('#fdf6ec', '#faecd8', '#e6a23c'),
  danger: colors('#fef0f0', '#fde2e2', '#f56c6c'),
  default: colors('#ecf5ff', '#d9ecff', '#409eff'),
};

const StyledTag = styled.div`
  display: inline-flex;
  align-items: center;
  height: 32px;
  padding: 0 10px;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: ${({ theme }) => theme.small};
  line-height: ${({ theme }) => theme.small};
  border: 1px solid;
  ${({ type }) => types[type]};
`;

export default StyledTag;
