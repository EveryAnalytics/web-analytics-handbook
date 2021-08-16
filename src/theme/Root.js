import React from "react";
import Head from "@docusaurus/Head";

const getGAId = () => {
  const GA_ID = process.env.REACT_APP_GA_ID;
  if(!GA_ID) {
    console.warn(`[web-analytics-handbook] Warnning "GA_ID" is not defined. Make sure you created the .env. And Make sure GA_ID is defined in the .env.`);
  }
  return GA_ID;
};


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
