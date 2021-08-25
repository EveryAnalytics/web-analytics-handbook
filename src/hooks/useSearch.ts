import { useState } from 'react';
import { WikiWord } from '../types';
import KOREAN_CONSONANTS from '../../static/korean-consonants';

const ALPHABET_REGEX = new RegExp(/^[A-Za-z]$/);
const KOREAN_CONSONANTS_REGEX = new RegExp(/^[ㄱ-ㅎ]$/);

const isLetterFilterValue = (value: string): boolean => {
  return ALPHABET_REGEX.test(value) || KOREAN_CONSONANTS_REGEX.test(value);
};
const getLetterLanguage = (value: string): string => {
  return KOREAN_CONSONANTS_REGEX.test(value)
    ? 'KOREAN'
    : ALPHABET_REGEX.test(value)
    ? 'ENGLISH'
    : '';
};

const useSearch = (source: WikiWord[]) => {
  const [result, setResult] = useState(source);
  const onSearch = (keyword: string) => {
    keyword = keyword.trim();
    if (isLetterFilterValue(keyword)) {
      onFilter({ value: keyword, language: getLetterLanguage(keyword) });
    } else {
      setResult(source.filter(item => item.name.includes(keyword)));
    }
  };

  const onFilter = ({
    value,
    language,
  }: {
    value: string;
    language: string;
  }) => {
    switch (language) {
      case 'KOREAN':
        setResult(
          source.filter(item => {
            const code = item.name.trim().charCodeAt(0) - 44032;
            if (code <= -1 && code >= 11172) {
              return false;
            }
            return KOREAN_CONSONANTS[Math.floor(code / 588)] === value;
          }),
        );
        break;
      case 'ENGLISH':
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
        break;
      default:
        setResult([]);
    }
  };
  return {
    result,
    onSearch,
    onFilter,
  };
};

export default useSearch;
