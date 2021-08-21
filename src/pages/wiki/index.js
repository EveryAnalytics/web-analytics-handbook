import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import WikiTable from '../../components/WikiTable';

export default function Wiki() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <h1>용어사전</h1>
        <WikiTable />
      </main>
    </Layout>
  );
}
