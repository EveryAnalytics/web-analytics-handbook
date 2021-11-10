import React, { useMemo } from 'react';
import RabbitHappy from '@site/static/img/characters/rabbit/rabbit-happy.png';
import RaccoonDizzy from '@site/static/img/characters/raccoon/raccoon-dizzy.png';
import styled from '@emotion/styled';

type Avatar = 'rabbit-happy' | 'raccoon-dizzy';

const ChatBox = ({
  avatar,
  children,
}: {
  avatar: Avatar;
  children: React.ReactNode;
}) => {
  const imgSrc = useMemo(() => {
    switch (avatar) {
      case 'rabbit-happy':
        return RabbitHappy;
      case 'raccoon-dizzy':
        return RaccoonDizzy;
      default:
        return ''; // TODO: 기본 아바타 이미지
    }
  }, [avatar]);
  return (
    <ChatContainer>
      <img src={imgSrc} alt="avatar" />
      &quot;{children}&quot;
    </ChatContainer>
  );
};

const ChatContainer = styled.div`
  display: flex;
  background: #efeeeebf;
  padding: 0.7em;
  border-radius: 6px;
  align-items: center;
  box-shadow: 1px 1px 6px -1px #b6b6b6;
  margin-bottom: 1em;

  > img {
    height: 2.5em;
    margin-right: 1em;
  }
`;

export default ChatBox;
