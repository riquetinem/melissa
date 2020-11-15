import React from 'react';

import {TextMessage, Message, AvatarImage} from './styles';

interface MessageProps {
  isClickable: boolean;
  children: string;
}

const MessageMelissa: React.FC<MessageProps> = ({isClickable, children}) => {
  return (
    <Message>
      <AvatarImage />
      <TextMessage isClickable={isClickable}> {children} </TextMessage>
    </Message>
  );
};

export default MessageMelissa;
