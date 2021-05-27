import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StyledFooter, { IconContainer, StyledPopoverContent } from './style';
import Input from 'components/Input';
import Icon from 'components/Icon';

import { ReactComponent as ClipIcon } from 'assets/icons/clip.svg';
import { ReactComponent as SmileIcon } from 'assets/icons/smile.svg';
import { ReactComponent as MicrophoneIcon } from 'assets/icons/microphone.svg';
import { ReactComponent as PlaneIcon } from 'assets/icons/plane.svg';
import { ReactComponent as OptionsIcon } from 'assets/icons/options.svg';

import Button from 'components/Button';
import Emoji from 'components/Emoji';
import Popover from 'components/Popover';
import { useTheme } from 'styled-components';
import theme from 'theme';

function Footer({ children, animeProps, style, ...rest }) {
  const [emojiIconActive, setEmojiIconActive] = useState(false);
  const theme = useTheme();

  return (
    <StyledFooter style={{ ...style, ...animeProps }} {...rest}>
      <Input
        placeholder='输入想和对方说的话...'
        prefix={<Icon icon={ClipIcon} />}
        suffix={
          <IconContainer>
            <Popover
              content={<PopoverContent />}
              offset={{ x: '-25%' }}
              onVisible={() => setEmojiIconActive(true)}
              onHide={() => setEmojiIconActive(false)}
            >
              <Icon
                icon={SmileIcon}
                color={emojiIconActive ? undefined : theme.gray3}
              />
            </Popover>
            <Icon icon={MicrophoneIcon} />
            <Button size='52px'>
              <Icon
                icon={PlaneIcon}
                color='white'
                style={{ transform: 'translateX(-2px)' }}
              />
            </Button>
          </IconContainer>
        }
      />
    </StyledFooter>
  );
}

/* eslint-disable jsx-a11y/accessible-emoji */
function PopoverContent(props) {
  return (
    <StyledPopoverContent>
      <Emoji label='smile'>😁</Emoji>
      <Emoji label='smile'>😁</Emoji>
      <Emoji label='smile'>😁</Emoji>
      <Emoji label='smile'>😁</Emoji>
      <Emoji label='smile'>😁</Emoji>
      <Emoji label='smile'>😁</Emoji>
      <Emoji label='smile'>😁</Emoji>
      <Emoji label='smile'>😁</Emoji>
      <Icon icon={OptionsIcon} color={theme.gray3} style={{ marginLeft: 24 }} />
    </StyledPopoverContent>
  );
}

Footer.propTypes = {
  children: PropTypes.any,
};

export default Footer;
