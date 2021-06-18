module.exports = {
  title: 'Ultimate Backend',
  tagline: 'A set of microservice packages for Typescript, Rust and GoLang',
  url: 'https://ultimate-backend.xraph.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Ultimate Backend',
      logo: {
        alt: 'Ultimate Backend Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'https://xraph.com/blog?project=ultimate-backend', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/juicycleff/ultimate-backend',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/ultimate-backend',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/ultimate-backend',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ultimate-backend',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://xraph.com/blog?project=ultimate-backend',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/ultimate-backend',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} XRaph Projects, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/juicycleff/ultimate-backend-docs/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/juicycleff/ultimate-backend-docs/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
