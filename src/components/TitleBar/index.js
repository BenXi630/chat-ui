import React from 'react';
import PropTypes from 'prop-types';
import StyledTitleBar, { Title, Actions } from './style';
import Avatar from 'components/Avatar';
import Paragraph from 'components/Paragraph';
import Text from 'components/Text';

import face from 'assets/images/face-male-3.jpg';
import Icon from 'components/Icon';

import { ReactComponent as Call } from 'assets/icons/call.svg';
import { ReactComponent as Camera } from 'assets/icons/camera.svg';
import { ReactComponent as Options } from 'assets/icons/options.svg';
import Dropdown from 'components/Dropdown';
import { DropdownItem } from 'components/Dropdown/style';
import Seperator from 'components/Seperator';

function TitleBar({
  children,
  animeProps,
  style,
  onAvatarClick,
  onVideoClicked,
  ...rest
}) {
  return (
    <StyledTitleBar style={{ ...style, ...animeProps }} {...rest}>
      <Avatar status='offline' onClick={onAvatarClick} src={face} />
      <Title>
        <Paragraph size='large'>慕容天宇</Paragraph>
        <Paragraph type='secondary'>
          <Text>离线</Text>
          <Text> 最后阅读：3小时前</Text>
        </Paragraph>
      </Title>
      <Actions>
        <Icon opacity={0.3} icon={Call} />
        <Icon opacity={0.3} onClick={onVideoClicked} icon={Camera} />
        <Dropdown
          content={
            <>
              <DropdownItem>
                <Paragraph>个人资料</Paragraph>
              </DropdownItem>
              <DropdownItem>
                <Paragraph>关闭会话</Paragraph>
              </DropdownItem>
              <Seperator />
              <DropdownItem>
                <Paragraph type='danger'>屏蔽此人</Paragraph>
              </DropdownItem>
            </>
          }
        >
          <Icon opacity={0.3} icon={Options} />
        </Dropdown>
      </Actions>
    </StyledTitleBar>
  );
}

TitleBar.propTypes = {
  children: PropTypes.any,
};

export default TitleBar;
