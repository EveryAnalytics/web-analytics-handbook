import React from 'react';
import styled from '@emotion/styled';

export default function LetterButtonList({
  letters,
  onClick,
}: {
  letters: string[];
  onClick: (value: string) => void;
}) {
  const onClickLetter = (letter: string) => {
    return () => onClick(letter);
  };
  return (
    <>
      {letters.map(letter => (
        <Li key={letter}>
          <Button onClick={onClickLetter(letter)}>{letter}</Button>
        </Li>
      ))}
    </>
  );
}

const Li = styled.li`
  display: inline-block;
  list-style: none;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  margin: 3px;
  border: 1px solid var(--ifm-color-gray-300);
  border-radius: 4px;
  background-color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: var(--ifm-color-gray-200);
  }

  &:focus {
    color: #ffffff;
    background-color: var(--ifm-color-primary);
    border-color: var(--ifm-color-primary);
  }
`;
