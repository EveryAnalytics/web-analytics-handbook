import { useState } from 'react';

const useKeyword = ({ initKeyword = '' }) => {
  const [keyword, setKeyword] = useState(initKeyword);

  const onChangeKeyword = value => {
    setKeyword(value);
  };

  return {
    keyword,
    onChangeKeyword,
  };
};

export default useKeyword;
