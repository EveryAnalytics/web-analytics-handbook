import { useState } from 'react';
import KOREAN_CONSONANTS from '../../static/korean-consonants';

const useSearch = ({ source = [] }) => {
  const [result, setResult] = useState(source);
  const onSearch = keyword => {
    keyword = keyword.trim();
    if (
      keyword.length == 1 &&
      (/[A-Za-z]/.test(keyword) ||
        KOREAN_CONSONANTS.findIndex(consonant => consonant === keyword) >= 0)
    ) {
      onFilter(keyword);
    } else {
      setResult(source.filter(item => item.name.includes(keyword)));
    }
  };
  const onFilter = value => {
    value = value.trim();
    const isKorean = /[ㄱ-ㅎ]/.test(value);
    const isEnglish = /[A-Za-z]/.test(value);
    if (value === '' || !value || (!isKorean && !isEnglish)) {
      setResult(source);
      return;
    }
    if (isKorean) {
      setResult(
        source.filter(item => {
          const code = item.name.trim().charCodeAt(0) - 44032;
          if (code <= -1 && code >= 11172) {
            return false;
          }
          return KOREAN_CONSONANTS[Math.floor(code / 588)] === value;
        }),
      );
    } else {
      value = value.toUpperCase();
      setResult(
        source.filter(
          item =>
            item.name
              .match(/\((.*?)\)/g)[0]
              .replace(/[()]/gi, '')
              .trim()
              .toUpperCase()
              .charAt(0) === value,
        ),
      );
    }
  };
  return {
    result,
    onSearch,
    onFilter,
  };
};

export default useSearch;