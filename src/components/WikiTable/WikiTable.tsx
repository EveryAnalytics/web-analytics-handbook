import React, { useCallback, useEffect, useRef } from 'react';
import { WikiWord } from 'types';

import WikiTableRow from './WikiTableRow';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

export default function WikiTable({ words = [] }: { words: WikiWord[] }) {
  const { result, onNext } = useInfiniteScroll({
    source: words,
  });
  const getLastRow = (index): boolean => {
    return result.length - 1 == index;
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
          {result.map((word, index) => (
            <WikiTableRow
              key={word.name}
              {...word}
              last={getLastRow(index)}
              onNext={onNext}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
