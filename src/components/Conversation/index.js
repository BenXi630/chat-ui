import React from 'react';
import PropTypes from 'prop-types';
import StyledConversation, { Conversations, MyChatBubble } from './style';
import TitleBar from 'components/TitleBar';
import ChatBubble from 'components/ChatBubble';
import VoiceMessage from 'components/VoiceMessage';
import Emoji from 'components/Emoji';
import Footer from 'components/Footer';
import { useSpring } from 'react-spring';
import Link from 'components/Link';

/* eslint-disable jsx-a11y/accessible-emoji */
function Conversation({ children, onAvatarClick, onVideoClicked, ...rest }) {
  const tBarAnimeProps = useSpring({
    opacity: 1,
    transform: 'translate3d(0px, 0px, 0px)',
    from: { opacity: 0, transform: 'translate3d(0px, -50px, 0px)' },
    delay: 500,
  });

  const convsAnimeProps = useSpring({
    opacity: 1,
    transform: 'translate3d(0px, 0px, 0px)',
    from: { opacity: 0, transform: 'translate3d(50px, 0px, 0px)' },
    delay: 800,
  });

  const ftAnimeProps = useSpring({
    opacity: 1,
    transform: 'translate3d(0px, 0px, 0px)',
    from: { opacity: 0, transform: 'translate3d(0px, 50px, 0px)' },
    delay: 950,
  });

  return (
    <StyledConversation {...rest}>
      <TitleBar
        onAvatarClick={onAvatarClick}
        onVideoClicked={onVideoClicked}
        animeProps={tBarAnimeProps}
      />
      <Conversations style={convsAnimeProps}>
        <ChatBubble time='昨天 下午14:26'>Hi 小宇，忙什么呢？</ChatBubble>
        <MyChatBubble time='昨天 下午16:30'>
          Hello啊，最近写了一个即使通讯UI组件库！
        </MyChatBubble>
        <ChatBubble time='昨天 下午18:30'>
          <VoiceMessage time='01:24' />
        </ChatBubble>
        <MyChatBubble time='昨天 下午18:52'>
          给你地址：
          <Link target='_blank' to='https://chat.benxi630.cn/document'>
            https://chat.benxi630.cn/document
          </Link>{' '}
          ✌<Emoji label='smile'>✌</Emoji>
        </MyChatBubble>
      </Conversations>
      <Footer animeProps={ftAnimeProps} />
    </StyledConversation>
  );
}

Conversation.propTypes = {
  children: PropTypes.any,
};

export default Conversation;
