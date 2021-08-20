import React from 'react';
import styled from '@emotion/styled';
import { EN_LETTERS, KO_LETTERS } from '../../../static/searchLetter';

export default function SearchFilter() {
  return (
    <>
      <Ul>
        {KO_LETTERS.map(word => (
          <Li key={word}>
            <Button>{word}</Button>
          </Li>
        ))}
      </Ul>
      <Ul>
        {EN_LETTERS.map(word => (
          <Li key={word}>
            <Button>{word}</Button>
          </Li>
        ))}
      </Ul>
    </>
  );
}

const Ul = styled.ul`
  padding: 0;
  margin-bottom: 10px;
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
  margin: 0 3px;
  border: 1px solid var(--ifm-color-gray-300);
  border-radius: 4px;
  background-color: #ffffff;

  &:hover,
  &:focus {
    color: #ffffff;
    background-color: var(--ifm-color-primary);
    border-color: var(--ifm-color-primary);
  }
`;
