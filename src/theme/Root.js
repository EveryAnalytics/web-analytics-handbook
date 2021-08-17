import React from "react";
import Head from "@docusaurus/Head";

const getGAId = () => {
  const GA_ID = process.env.REACT_APP_GA_ID;
  if(!GA_ID) {
    console.warn(`[web-analytics-handbook] Warnning "GA_ID" is not defined. Make sure you created the .env. And Make sure GA_ID is defined in the .env.`);
  }
  return GA_ID;
};

const GA_ID = getGAId();

const createInitializeGA = (GA_ID) => {
  if(GA_ID) {
    return `
      console.info("✅GA가 초기화 되었습니다.")
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "${GA_ID}");
    `
  }
  return `console.warn("GA가 초기화 실패되었습니다.");`;
}

const createGtagPath = (GA_ID) => {
  if(GA_ID) {
    return `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  }
  console.warn(`[web-analytics-handbook] Warnning Can't create gtag path. Because "GA_ID" is not defined.`);
  return "";
}

const gtagPath = createGtagPath(GA_ID);
const initializeGA = createInitializeGA(GA_ID);

function Root({ children }) {
  return (
    <>
      <div>
        <Head>
          <script
            async
            src={`${gtagPath}`}
          />
          <script>{initializeGA}</script>
        </Head>
        {children}
      </div>
    </>
  );
}

export default Root;
