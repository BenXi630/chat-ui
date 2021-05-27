import React from 'react';
import Emoji from '.';

export default {
  title: 'UI组件/Emoji',
  component: Emoji,
};

/* eslint-disable jsx-a11y/accessible-emoji */
export const Default = () => (
  <div>
    <Emoji label='smile'>😁</Emoji>
    <Emoji label='todo'>✅</Emoji>
    <Emoji label='clock'>📝</Emoji>
  </div>
);
