const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const TITLE = "Web Analytics Handbook";

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: TITLE,
  tagline: "개발자를 위한 웹 사용자 데이터 분석 핸드북",
  url: "https://EveryAnalytics.github.io",
  baseUrl: "/web-analytics-handbook/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "EveryAnalytics", // Usually your GitHub org/user name.
  projectName: "web-analytics-handbook", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: TITLE,
      logo: {
        alt: `${TITLE} logo`,
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "handbook/intro",
          position: "left",
          label: "📚 핸드북",
        },
        {
          type: "doc",
          docId: "react-analytics-provider/intro",
          position: "left",
          label: "💡 react-analytics-provider",
        },
        { to: "/blog", label: "👾 블로그", position: "left" },
        { to: "/wiki", label: "🙋 용어사전", position: "left" },
        {
          href: "https://github.com/EveryAnalytics/web-analytics-handbook",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/handbook/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
