import React from 'react';
import PropTypes from 'prop-types';
import StyledContactCard, { Name, Intro } from './style';
import Avatar from 'components/Avatar';

import face from 'assets/images/face-male-1.jpg';

function ContactCard({ children, ...rest }) {
  return (
    <StyledContactCard {...rest}>
      <Avatar src={face} status='online' />
      <Name>李浩</Name>
      <Intro>我是一名前端工程师</Intro>
    </StyledContactCard>
  );
}

ContactCard.propTypes = {
  children: PropTypes.any,
};

export default ContactCard;
