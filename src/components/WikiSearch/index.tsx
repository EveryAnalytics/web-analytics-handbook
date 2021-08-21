import React from 'react';
import styled from '@emotion/styled';
import SearchFilter from './SearchFilter';
import SearchInput from './SearchInput';

export default function WikiSearch() {
  return (
    <SearchWrapper>
      <SearchFilter />
      <SearchInput />
    </SearchWrapper>
  );
}

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 1rem 0 2rem;
  padding: 1.5rem 1rem;
  border-radius: 8px;
  background-color: #fafafa;
`;
