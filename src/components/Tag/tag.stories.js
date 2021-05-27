import React from 'react';
import Tag from '.';

export default {
  title: 'UI组件/Tag',
  component: Tag,
};

export const Default = () => <Tag>标签一</Tag>;

export const Types = () => {
  return (
    <div className='row-elements'>
      <Tag type='success'>标签一</Tag>
      <Tag type='info'>标签二</Tag>
      <Tag type='warning'>标签三</Tag>
      <Tag type='danger'>标签四</Tag>
    </div>
  );
};
