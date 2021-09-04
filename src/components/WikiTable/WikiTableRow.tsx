import { lstat } from 'fs';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import React, { RefObject, useEffect, useRef } from 'react';

import { WikiWord } from '../../types';
type wikiTableRowProps = {
  description: string;
  name: string;
  last: boolean;
};
export default function WikiTableRow({
  name,
  description,
  last,
}: wikiTableRowProps) {
  const ref = useRef<HTMLFormElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = () => {
    return entry?.isIntersecting;
  };

  return last ? (
    <tr ref={ref}>
      <td>{name}</td>
      <td>
        {description} {last.toString()} {isVisible()}
      </td>
    </tr>
  ) : (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
    </tr>
  );
}
