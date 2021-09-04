import React, { useCallback, useEffect, useRef } from 'react';
import { WikiWord } from 'types';

import WikiTableRow from './WikiTableRow';

export default function WikiTable({ words = [] }: { words: WikiWord[] }) {
  const getIsLast = (index): boolean => {
    return words.length - 1 == index;
  };
  return (
    <>
      <table width="100%" summary="Web Analytics Handbook 용어사전">
        <thead>
          <tr style={{ borderBottom: 'none' }}>
            <th>용어</th>
            <th>뜻</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word, index) => (
            <WikiTableRow key={word.name} {...word} last={getIsLast(index)} />
          ))}
        </tbody>
      </table>
    </>
  );
}
