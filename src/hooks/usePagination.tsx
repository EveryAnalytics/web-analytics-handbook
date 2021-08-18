import { useEffect, useState } from 'react';

const usePagination = ({
  source = [],
  initialPage = 1,
  offset = 10
}) => {
  const minPage = 1;
  const maxPage = Math.ceil(source.length / offset);

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isLastPage, setIsLastPage] = useState(false);
  const [isFirstPage, setIsFirstPage] = useState(false);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const startIdx = (currentPage - 1) * offset;
    const endIdx = startIdx + offset;
    
    setResult(source.slice(startIdx, endIdx));
    setIsLastPage(currentPage === maxPage);
    setIsFirstPage(currentPage === minPage);
  }, [currentPage]);

  const onPrevious = () => {
    if(currentPage <= minPage) return;
    setCurrentPage(currentPage - 1);
  };

  const onNext = () => {
    if(currentPage >= maxPage) return;
    setCurrentPage(currentPage + 1);
  };

  return {
    result,
    currentPage,
    isLastPage,
    isFirstPage,
    onPrevious,
    onNext
  };
};

export default usePagination;