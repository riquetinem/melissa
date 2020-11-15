import React from 'react';

import userAvatar from '../../assets/user-avatar.png';

import {Message, TextMessage, AvatarImage} from './styles';

interface MessageProps {
  children: string;
}

const MessageUser: React.FC<MessageProps> = ({children}) => {
  return (
    <Message>
      <TextMessage> {children} </TextMessage>
      <AvatarImage source={userAvatar} />
    </Message>
  );
};

export default MessageUser;
