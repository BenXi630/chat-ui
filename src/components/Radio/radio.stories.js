import React from 'react';
import Radio from '.';

export default {
  title: 'UI组件/Input/Radio',
  component: Radio,
};

export const Default = () => <Radio>选项</Radio>;

export const RadioGroup = () => (
  <Radio.Group label='请选择'>
    <Radio name='option' checked>
      选项1
    </Radio>
    <Radio name='option'>选项2</Radio>
    <Radio name='option'>选项3</Radio>
  </Radio.Group>
);
