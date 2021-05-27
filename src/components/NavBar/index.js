import React from 'react';
import StyledNavBar, { StyledMenuItem, MenuIcon, MenuItems } from './style';
import Badge from 'components/Badge';
import Avatar from 'components/Avatar';

import profileImage from 'assets/images/face-male-1.jpg';
import {
  faCommentDots,
  faUsers,
  faFolder,
  faStickyNote,
  faEllipsisH,
  faCog,
} from '@fortawesome/free-solid-svg-icons';

import 'styled-components/macro';
import { Link, useLocation, matchPath } from 'react-router-dom';

function NavBar({ ...rest }) {
  return (
    <StyledNavBar {...rest}>
      <Avatar src={profileImage} status='online' />
      <MenuItems>
        <MenuItem to='/' showBadge icon={faCommentDots} />
        <MenuItem to='/contacts' icon={faUsers} />
        <MenuItem to='/files' icon={faFolder} />
        <MenuItem to='/notes' icon={faStickyNote} />
        <MenuItem icon={faEllipsisH} />
        <MenuItem
          to='/settings'
          icon={faCog}
          css={`
            align-self: end;
          `}
        />
      </MenuItems>
    </StyledNavBar>
  );
}

function MenuItem({ to, icon, showBadge, ...rest }) {
  const loc = useLocation();
  const active = !!matchPath(loc.pathname, {
    path: to,
    exact: to === '/',
  })
    ? 1
    : 0;

  return (
    <StyledMenuItem active={active} {...rest}>
      <Link to={to}>
        <Badge show={showBadge}>
          <MenuIcon active={active} icon={icon} />
        </Badge>
      </Link>
    </StyledMenuItem>
  );
}

export default NavBar;

export { MenuItem };
