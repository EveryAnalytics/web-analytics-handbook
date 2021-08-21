import React from 'react';
import styled from '@emotion/styled';
import { EN_LETTERS, KO_LETTERS } from '../../../static/searchLetter';
const SearchFilterList = ({
  letters,
  onClick,
}: {
  letters: string[];
  onClick: (value: string) => void;
}) => {
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
};

export default function SearchFilter({
  onClick,
}: {
  value: string;
  onClick: (value: string) => void;
}) {
  return (
    <>
      <Ul>
        <SearchFilterList letters={KO_LETTERS} onClick={onClick} />
      </Ul>
      <Ul>
        <SearchFilterList letters={EN_LETTERS} onClick={onClick} />
      </Ul>
    </>
  );
}

const Ul = styled.ul`
  padding: 0;
  margin-bottom: 7px;
`;

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
