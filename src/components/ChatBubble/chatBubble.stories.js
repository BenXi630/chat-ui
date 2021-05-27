import React from 'react';
import ChatBubble from '.';
import VoiceMessage from 'components/VoiceMessage';
import Emoji from 'components/Emoji';

export default {
  title: 'UI组件/ChatBubble',
  component: ChatBubble,
  decorators: [(storyFn) => <div style={{ padding: '24px' }}>{storyFn()}</div>],
};

export const FromOthers = () => (
  <ChatBubble time='昨天 下午14:26'>这是一条其他人发送的聊天消息</ChatBubble>
);

/* eslint-disable jsx-a11y/accessible-emoji */
export const Mine = () => (
  <ChatBubble type='mine' time='昨天 下午14:26'>
    这是一条我自己发送的聊天消息<Emoji label='smile'>😁</Emoji>
  </ChatBubble>
);

export const VoiceMessageType = () => (
  <ChatBubble time='昨天 下午14:26'>
    <VoiceMessage time='01:24' />
  </ChatBubble>
);

export const VoiceMessageTypeMine = () => (
  <ChatBubble type='mine' time='昨天 下午14:26'>
    <VoiceMessage type='mine' time='01:24' />
  </ChatBubble>
);
