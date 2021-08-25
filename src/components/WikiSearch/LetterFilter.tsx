import React from 'react';
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
      <LetterButtonList letters={KO_LETTERS} onClick={onLetterClick} />
      <LetterButtonList letters={EN_LETTERS} onClick={onLetterClick} />
    </>
  );
}
