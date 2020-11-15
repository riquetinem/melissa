import React from 'react';

import {TextMessage, Message, AvatarImage} from './styles';

import melissaAvatar from '../../assets/avatar-melissa.png';

interface MessageProps {
  isClickable: boolean;
}

const MessageMelissa: React.FC<MessageProps> = ({isClickable, children}) => {
  return (
    <Message>
      <AvatarImage source={melissaAvatar} />

      <TextMessage isClickable={isClickable}> {children} </TextMessage>
    </Message>
  );
};

export default MessageMelissa;
