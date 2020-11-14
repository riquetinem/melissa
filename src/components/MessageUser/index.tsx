import React from 'react';

import {Message, TextMessage, AvatarImage} from './styles';

interface MessageProps {
  children: string;
}

const MessageUser: React.FC<MessageProps> = ({children}) => {
  return (
    <Message>
      <TextMessage> {children} </TextMessage>
      <AvatarImage />
    </Message>
  );
};

export default MessageUser;
