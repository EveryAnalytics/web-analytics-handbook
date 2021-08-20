import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import WikiTable from '../../components/WikiTable';
import styled from '@emotion/styled';
import WikiSearch from '../../components/WikiSearch';

export default function Wiki() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Main className="container">
        <Title>용어사전</Title>
        <WikiSearch />
        <WikiTable />
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
