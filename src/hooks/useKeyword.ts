import { useState } from 'react';

const useKeyword = ({ initKeyword = '' }) => {
  const [keyword, setKeyword] = useState(initKeyword);

  const onKeywordChange = value => {
    setKeyword(value);
  };

  return {
    keyword,
    onKeywordChange,
  };
};

export default useKeyword;
