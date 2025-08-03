import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Manual de Usuario',
  tagline: 'Versão pharus 2.0',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://IFNMG-Almenara.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/PharusV2_Manual/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'IFNMG-Almenara', // Usually your GitHub org/user name.
  projectName: 'PharusV2_Manual', // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Manual Pharus 2.0',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          items: [
            {
              html: `
              <div class="div-pharus">
                <image src="https://i.ibb.co/njkpMc3/footer-white-pharus-icon.png" style="width: 30px; height: 30px;"/>
                <h2 class="ms-2 me-3">Pharus</h2>
              </div>
                <strong>Gestão de Enventos</strong>
              <div>
              </p>
            </div>
              `,
            },
            
          ],
        },
        {
          items: [
            {
              label: "Outros Eventos",
              to: "https://eventos.ifnmg.edu.br/#eventos",
            },
            {
              label: "Validação de Certificados",
              to: "https://eventos.ifnmg.edu.br/#certificados"
            },
            {
              label: "Área do participante",
              to: "https://eventos.ifnmg.edu.br/area-do-participante/meus-eventos"
            }
          ]
        },
        {
          items: [
            {
              html:`
              <p class="desenvolvido">Desenvolvido pelo IFNMG - Campus Almenara</p>
              `
            },
            {
              label: "pharus@ifnmg.edu.br",
              to: "mailto:pharus@ifnmg.edu.br"
            }
          ]
          
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} IFMNG - Campus Almenara - Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
