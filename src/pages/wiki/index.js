import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Wiki() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <h1>용어사전</h1>
        <p>아래와 같은 느낌으로 리액트로 만들어요</p>
        <img src="https://user-images.githubusercontent.com/3839771/128228797-9d69ad4a-81a2-48c2-a486-03f0dff7896d.png" />
      </main>
    </Layout>
  );
}
