import { useEffect, useState } from 'react';

const usePagination = ({ source = [], limit = 10, offset = 0 }) => {
  const getResult = () => {
    const startIdx = 0;
    const endIdx = currentOffest;
    return source.slice(startIdx, endIdx);
  };

  const getMaxOffset = () => {
    return source.length;
  };

  const [currentOffest, setCurrentOffest] = useState(limit);

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
