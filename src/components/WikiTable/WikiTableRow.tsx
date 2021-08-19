import React from 'react';

import { WikiWord } from '../../types';

export default function WikiTableRow({ name, description }: WikiWord) {
  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
    </tr>
  );
}
