import React from 'react';

import { WikiWord } from '../../types';

type WikiWordType = WikiWord & {
  handleRowClick: () => void;
};

export default function WikiTableRow({
  name,
  description,
  handleRowClick,
}: WikiWordType) {
  return (
    <tr onClick={handleRowClick}>
      <td>{name}</td>
      <td>{description}</td>
    </tr>
  );
}
