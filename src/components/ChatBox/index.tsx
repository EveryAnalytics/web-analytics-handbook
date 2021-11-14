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
  padding: 0.7em;
  border-radius: 15px;
  align-items: center;
  margin-bottom: 1em;
  padding: 20px;

  & > img {
    height: 2.5em;
    margin-right: 1em;
  }

  html[data-theme='light'] & {
    background-color: #f6f7f8;
    box-shadow: 1px 1px 5px #dddedf;
  }

  html[data-theme='dark'] & {
    background-color: #333437;
    box-shadow: 1px 1px 5px #2e2f31;
  }
`;

export default ChatBox;
