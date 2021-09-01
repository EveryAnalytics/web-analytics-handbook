import React, { useEffect } from 'react';

import WikiTableRow from './WikiTableRow';

import usePagination from '../../hooks/usePagination';

export default function WikiTable({ words = [] }: { words: string[] }) {
  const { onPrevious, onNext, currentPage, result, isLastPage, isFirstPage } =
    usePagination({
      source: words,
      offset: 2,
    });

  return (
    <>
      <span>{currentPage}</span>
      <button onClick={onPrevious} disabled={isFirstPage}>
        Previous
      </button>
      <button onClick={onNext} disabled={isLastPage}>
        Next
      </button>
      <table width="100%" summary="Web Analytics Handbook 용어사전">
        <thead>
          <tr style={{ borderBottom: 'none' }}>
            <th>용어</th>
            <th>뜻</th>
          </tr>
        </thead>
        <tbody>
          {result.map(word => (
            <WikiTableRow key={word.name} {...word} />
          ))}
        </tbody>
      </table>
    </>
  );
}
