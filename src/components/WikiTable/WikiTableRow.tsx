import useIntersectionObserver from 'hooks/useIntersectionObserver';
import React, { useEffect, useRef } from 'react';

type wikiTableRowProps = {
  description: string;
  name: string;
  last: boolean;
  onNext: () => void;
};
export default function WikiTableRow({
  name,
  description,
  last,
  onNext,
}: wikiTableRowProps) {
  const ref = useRef<HTMLFormElement | null>(null);
  const entry = useIntersectionObserver(ref, { freezeOnceVisible: true });
  useEffect(() => {
    if (entry?.isIntersecting) onNext();
  }, [entry]);
  const content = (
    <>
      <td>{name}</td>
      <td>{description}</td>
    </>
  );

  return last ? <tr ref={ref}>{content}</tr> : <tr>{content}</tr>;
}
