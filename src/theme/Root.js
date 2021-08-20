import React from 'react';
import Head from '@docusaurus/Head';

const initializeGA = `
  console.info("✅GA가 초기화 되었습니다.");
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-GZ339RG282");
`;

function Root({ children }) {
  return (
    <>
      <div>
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-GZ339RG282"
          />
          <script>{initializeGA}</script>
        </Head>
        {children}
      </div>
    </>
  );
}

export default Root;
