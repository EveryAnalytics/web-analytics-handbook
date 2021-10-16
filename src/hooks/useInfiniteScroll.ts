import { useEffect, useState } from 'react';
import { WikiWord } from 'types';

type Args = {
  source: WikiWord[];
  limit: number;
  offset: number;
};

type Returns = {
  result: WikiWord[];
  currentOffest: number;
  isLastOffset: boolean;
  onNext: () => void;
};
const usePagination = ({
  source = [],
  limit = 10,
  offset = 0,
}: Args): Returns => {
  const getResult = (): WikiWord[] => {
    const startIdx = 0;
    const endIdx: number = currentOffest;
    return source.slice(startIdx, endIdx);
  };

  const getMaxOffset = (): number => {
    return source.length;
  };

  const [currentOffest, setCurrentOffest] = useState<number>(limit);

  useEffect(() => {
    if (currentOffest !== limit) setCurrentOffest(limit);
    else getResult();
  }, [source]);

  const onNext = () => {
    if (currentOffest >= getMaxOffset()) return;
    setCurrentOffest(currentOffest + limit);
  };

  return {
    result: getResult(),
    currentOffest,
    isLastOffset: currentOffest > getMaxOffset(),
    onNext,
  };
};

export default usePagination;
