import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import DetailModal from './DetailModal';
import DetailFullSize from './DetailFullSize';
import { WikiWord } from '../../types';

type WikiDetailInnerProps = WikiDetailProps;

function WikiDetailInner({ selectedWord, onClose }: WikiDetailInnerProps) {
  const isMobile = useMediaQuery({
    query: '(max-width: 500px)',
  });

  useEffect(() => {
    return () => {
      // Todo: Clean State
    };
  }, []);

  return isMobile ? (
    <DetailFullSize onClose={onClose} selectedWord={selectedWord} />
  ) : (
    <DetailModal onClose={onClose} selectedWord={selectedWord} />
  );
}

type WikiDetailProps = {
  selectedWord: WikiWord | null;
  onClose: () => void;
};

export default function WikiDetail({ selectedWord, onClose }: WikiDetailProps) {
  return (
    selectedWord && (
      <WikiDetailInner onClose={onClose} selectedWord={selectedWord} />
    )
  );
}
