// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TechStackPlaybook',
  tagline: 'Technology is super cool!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://devsintech.netlify.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // baseUrl: '/techstackplaybook/',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DevsInTech', // Usually your GitHub org/user name.
  projectName: 'TechStackPlaybook', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/devs-in-tech/TechStackPlaybook',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/devs-in-tech/TechStackPlaybook/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'TechStackPlaybook',
        logo: {
          alt: 'TechStackPlaybook Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'resourceSidebar',
            position: 'left',
            label: 'Resources',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/devs-in-tech/TechStackPlaybook',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Artificial Intelligence',
                to: '/docs/AI',
              },
              {
                label: 'AR/VR',
                to: '/docs/AR-VR',
              },
              {
                label: 'Web3',
                to: '/docs/Web3',
              },
              {
                label: 'Frontend Development',
                to: '/docs/Frontend-Web-Dev',
              },
              {
                label: 'Backend Development',
                to: '/docs/Backend-Web-Dev',
              },
              {
                label: 'Cloud Computing',
                to: '/docs/Cloud',
              },
              {
                label: 'DevOps',
                to: '/docs/DevOps',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/g7FmxB9uZp',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/devs_in_tech',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Website',
                to: 'https://devsintech.vercel.app/',
              },
              {
                label: 'Blog',
                to: 'https://devsintech.hashnode.dev/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/devs-in-tech/TechStackPlaybook',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DevsInTech. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
