import React from 'react';
import styled from '@emotion/styled';
import { EN_LETTERS, KO_LETTERS } from '../../../static/searchLetter';

const SearchFilterList = ({ letters }: { letters: string[] }) => {
  return (
    <>
      {letters.map(letter => (
        <Li key={letter}>
          <Button>{letter}</Button>
        </Li>
      ))}
    </>
  );
};

export default function SearchFilter() {
  return (
    <>
      <Ul>
        <SearchFilterList letters={KO_LETTERS} />
      </Ul>
      <Ul>
        <SearchFilterList letters={EN_LETTERS} />
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
