import { useEffect, useState } from 'react';

const usePagination = ({ source = [], initialPage = 1, offset = 10 }) => {
  const getResult = () => {
    const startIdx = (currentPage - 1) * offset;
    const endIdx = startIdx + offset;
    return source.slice(startIdx, endIdx);
  };

  const getMaxPage = () => {
    return Math.max(Math.ceil(source.length / offset), 1);
  };

  const minPage = 1;
  const [currentPage, setCurrentPage] = useState(initialPage);

  useEffect(() => {
    if (currentPage !== 1) setCurrentPage(1);
    else getResult();
  }, [source]);

  const onPrevious = () => {
    if (currentPage <= minPage) return;
    setCurrentPage(currentPage - 1);
  };

  const onNext = () => {
    if (currentPage >= getMaxPage()) return;
    setCurrentPage(currentPage + 1);
  };

  return {
    result: getResult(),
    currentPage,
    isLastPage: currentPage === getMaxPage(),
    isFirstPage: currentPage === minPage,
    onPrevious,
    onNext,
  };
};

export default usePagination;
