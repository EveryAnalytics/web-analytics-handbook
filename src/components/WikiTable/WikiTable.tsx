import React from 'react';

import WikiTableRow from './WikiTableRow';

import words from '../../../wiki.json';

export default function WikiTable() {
  return (
    <table>
      <tbody>
        {words.map((word) => (
          <WikiTableRow key={word.name} {...word} />
        ))}
      </tbody>
    </table>
  );
}
