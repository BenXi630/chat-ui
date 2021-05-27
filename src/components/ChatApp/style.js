import styled, { css } from 'styled-components';

const Nav = styled.nav`
  flex-shrink: 0;

  position: relative;
  z-index: 100;
`;

const Sidebar = styled.aside`
  max-width: 448px;
  min-height: 344px;
  height: 100vh;
  flex: 1.2;
  background: ${({ theme }) => theme.grediantGray};

  position: relative;
  z-index: 50;
  > div {
    will-change: transform, opacity;
    position: absolute;
    width: 100%;
  }
`;

const Content = styled.main`
  flex: 2;
  position: relative;
`;

const Drawer = styled.div`
  max-width: 310px;
  width: 0;
  transform: translateX(200px);
  transition: transform 0.4s;
  will-change: width, transform;
  ${({ show }) =>
    show &&
    css`
      width: initial;
      transform: translateX(0);
    `};
`;

const StyledChatApp = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
`;

export default StyledChatApp;
export { Nav, Sidebar, Content, Drawer };
