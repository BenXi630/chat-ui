import React from 'react';
import Select from '.';
import Option from 'components/Option';

export default {
  title: 'UI组件/Input/Select',
  component: Select,
};

export const Default = () => (
  <Select>
    <Option>最新消息优先</Option>
    <Option>在线好友优先</Option>
  </Select>
);

export const FormSelect = () => (
  <Select type='form'>
    <Option>山东省</Option>
    <Option>上海市</Option>
  </Select>
);
