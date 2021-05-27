import styled from 'styled-components';

const InputUnderline = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.gray4};
  font-size: ${({ theme }) => theme.normal};
  width: 100%;
  line-height: 1.4;
  background: none;
  &::placeholder {
    color: ${({ theme }) => theme.gray5};
  }
  :focus,
  :hover {
    border-bottom-color: ${({ theme }) => theme.primaryColor};
  }
`;

const StyledInputText = styled.div``;

export default StyledInputText;
export { InputUnderline };
