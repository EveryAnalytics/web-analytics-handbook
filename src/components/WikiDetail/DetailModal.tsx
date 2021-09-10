import React from 'react';
import styled from '@emotion/styled';
import { WikiWord } from '../../types';

type DetailModalProps = {
  selectedWord: WikiWord | null;
  onClose: () => void;
};

export default function DetailModal({
  selectedWord,
  onClose,
}: DetailModalProps) {
  const { name, description, content } = selectedWord;

  return (
    <Dimmed onClick={() => onClose()}>
      <Modal
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <DetailHeader>
          <DetailTitle>{name}</DetailTitle>
        </DetailHeader>
        <Description>{description}</Description>
        {content && (
          <>
            <Line />
            <Content>{content}</Content>
          </>
        )}
      </Modal>
    </Dimmed>
  );
}

const Dimmed = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Modal = styled.div`
  background-color: #ffffff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 800px;
  min-width: 500px;
  padding: 40px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.28) 0 8px 28px;
  overflow: hidden;
`;

const DetailHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  svg {
    font-size: 1.5rem;
  }
`;

const DetailTitle = styled.h2`
  margin-bottom: 0;
`;

const Description = styled.div`
  font-weight: 500;
`;

const Line = styled.div`
  border-top: 1px solid var(--ifm-color-gray-300);
  margin: 20px 0 30px;
`;

const Content = styled.div``;
