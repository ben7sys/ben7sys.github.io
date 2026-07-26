import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://ben7sys.github.io',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap(),
    starlight({
      title: 'ben7sys',
      description:
        'Technische Wissensbasis und lokale Browser-Werkzeuge für nachhaltige Systeme, Automatisierung und digitale Souveränität.',
      favicon: '/favicon.svg',
      disable404Route: true,
      locales: {
        root: {
          label: 'Deutsch',
          lang: 'de',
        },
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/ben7sys',
        },
      ],
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        { label: 'Start', link: '/' },
        {
          label: 'Wissen',
          items: [{ autogenerate: { directory: 'wissen' } }],
        },
        {
          label: 'Werkzeuge',
          items: [
            { label: 'Übersicht', link: '/werkzeuge/' },
            {
              label: 'Frontmatter-Prüfer',
              link: '/werkzeuge/frontmatter-pruefer/',
            },
          ],
        },
        { label: 'Über', link: '/ueber/' },
      ],
      editLink: {
        baseUrl:
          'https://github.com/ben7sys/ben7sys.github.io/edit/master/',
      },
    }),
  ],
});
