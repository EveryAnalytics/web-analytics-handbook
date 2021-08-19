import * as React from "react";
import Head from "@docusaurus/Head";

const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;

const createInitializeGA = (REACT_APP_GA_TRACKING_ID) => {
  
  if(REACT_APP_GA_TRACKING_ID === undefined) {
    return `console.warn("GA가 초기화 실패되었습니다. "GA_TRACKING_ID"가 정의되지 않았습니다.");`;
  }
  return `
    console.info("✅GA가 초기화 되었습니다.")
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "${GA_TRACKING_ID}");
  `
}

const createGtagPath = (GA_TRACKING_ID) => {
  if(GA_TRACKING_ID === undefined) {
    console.warn(`[web-analytics-handbook] Warnning Can't create gtag path. Because "GA_TRACKING_ID" is not defined.`);
    return "";
  }
  return `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
}

const gtagPath = createGtagPath(GA_TRACKING_ID);
const initializeGA = createInitializeGA(GA_TRACKING_ID);

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
