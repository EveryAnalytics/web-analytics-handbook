import React from 'react';
import styled from '@emotion/styled';
import { FiSearch } from 'react-icons/all';

export default function SearchInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const onKeywordChange = event => {
    onChange(event.target.value);
  };
  return (
    <InputWrapper>
      <Input
        type="text"
        value={value}
        placeholder="search"
        onChange={onKeywordChange}
      />
      <SearchIcon />
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  position: relative;
  margin-top: 12px;
  width: 100%;
  max-width: 600px;
`;

const Input = styled.input`
  max-width: 600px;
  width: 100%;
  height: 56px;
  padding-left: 56px;
  padding-right: 28px;
  font-size: 1.2rem;
  border: 2px solid var(--ifm-color-primary);
  border-radius: 28px;
  outline: none;

  &::placeholder {
    color: var(--ifm-color-gray-500);
  }
`;

const SearchIcon = styled(FiSearch)`
  position: absolute;
  top: 50%;
  left: 18px;
  transform: translateY(-50%);
  font-size: 2rem;
  color: var(--ifm-color-primary);
`;
