import React from 'react';

import {TextMessage, Message, AvatarImage} from './styles';

interface MessageProps {
  children: string;
}

const MessageMelissa: React.FC<MessageProps> = ({children}) => {
  return (
    <Message>
      <AvatarImage />
      <TextMessage> {children} </TextMessage>
    </Message>
  );
};

export default MessageMelissa;
