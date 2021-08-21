import Head from '@docusaurus/Head';
import { useRouteChangingListner } from 'hooks';
import React from 'react';

const initializeGA = `
  console.info("✅GA가 초기화 되었습니다.");
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-GZ339RG282");
`;

function Root({ children }: { children: React.ReactNode }) {
  useRouteChangingListner(() => {
    const wrapper = document.body.getElementsByClassName('main-wrapper')[0];
    wrapper.classList.remove('show');

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const wrapper = document.body.getElementsByClassName('main-wrapper')[0];
        wrapper.classList.add('show');
      });
    });
  });

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
