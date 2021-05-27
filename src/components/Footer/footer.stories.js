import React from 'react';
import Footer from '.';

export default {
  title: '页面组件/Footer',
  component: Footer,
  decorators: [(storyFn) => <div style={{ padding: '24px' }}>{storyFn()}</div>],
};

export const Default = () => (
  <div style={{ marginTop: 80 }}>
    <Footer />
  </div>
);
