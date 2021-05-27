import React from 'react';
import Badge from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'UI组件/Badge',
  component: Badge,
};

export const Default = () => <Badge count={5} />;

export const DotVariant = () => {
  return (
    <Badge show>
      <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: '24px' }} />
    </Badge>
  );
};
