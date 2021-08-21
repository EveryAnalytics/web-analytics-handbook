import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import WikiTable from '../../components/WikiTable';
import styled from '@emotion/styled';
import WikiSearch from '../../components/WikiSearch';
import useKeyword from '../../hooks/useKeyword';
import useSearch from '../../hooks/useSearch';

import words from '../../../wiki.json';

export default function Wiki() {
  const { siteConfig } = useDocusaurusContext();

  const { keyword, onChangeKeyword } = useKeyword({ initKeyword: '' });
  const { result: searchResult, onSearch } = useSearch({
    source: words,
  });
  useEffect(() => {
    onSearch(keyword);
  }, [keyword]);

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Main className="container">
        <Title>용어사전</Title>
        <WikiSearch value={keyword} onChange={onChangeKeyword} />
        <WikiTable words={searchResult} />
      </Main>
    </Layout>
  );
}

const Main = styled.main`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  text-align: center;
`;
