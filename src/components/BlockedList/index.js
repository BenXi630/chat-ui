import React from 'react';
import PropTypes from 'prop-types';
import StyledBlockedList, {
  SettingsMenu,
  ClosableAvatar,
  BlockedAvatar,
  CloseIcon,
  BlockedName,
  FriendList,
} from './style';
import Icon from 'components/Icon';
import { ReactComponent as ArrowMenuLeft } from 'assets/icons/arrowMenuLeft.svg';
import { ReactComponent as closeCircle } from 'assets/icons/closeCircle.svg';
import 'styled-components/macro';
import face from 'assets/images/face-male-1.jpg';
import Text from 'components/Text';
import { useHistory } from 'react-router-dom';

function BlockedList({ children, ...rest }) {
  const history = useHistory();

  return (
    <StyledBlockedList {...rest}>
      <SettingsMenu>
        <Icon
          icon={ArrowMenuLeft}
          css={`
            cursor: pointer;
          `}
          onClick={() => history.goBack()}
        />
        <Text size='xxlarge'>已屏蔽的好友</Text>
      </SettingsMenu>

      <FriendList>
        {new Array(8).fill(0).map((_, i) => {
          return (
            <ClosableAvatar key={i}>
              <BlockedAvatar size='105px' src={face} />
              <CloseIcon width={46} height={51} icon={closeCircle} />
              <BlockedName>李浩</BlockedName>
            </ClosableAvatar>
          );
        })}
      </FriendList>
    </StyledBlockedList>
  );
}

BlockedList.propTypes = {
  children: PropTypes.any,
};

export default BlockedList;
