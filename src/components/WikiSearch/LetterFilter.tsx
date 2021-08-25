import React from 'react';
import styled from '@emotion/styled';
import LetterButtonList from './LetterButtonList';
import { EN_LETTERS, KO_LETTERS } from '../../../static/searchLetter';

export default function SearchFilter({
  onLetterClick,
}: {
  value: string;
  onLetterClick: (value: string) => void;
}) {
  return (
    <>
      <Ul>
        <LetterButtonList letters={KO_LETTERS} onClick={onLetterClick} />
      </Ul>
      <Ul>
        <LetterButtonList letters={EN_LETTERS} onClick={onLetterClick} />
      </Ul>
    </>
  );
}

const Ul = styled.ul`
  padding: 0;
  margin-bottom: 7px;
`;
