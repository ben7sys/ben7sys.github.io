import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const entries = (await getCollection('docs'))
    .filter(
      (entry) =>
        entry.id.startsWith('wissen/') &&
        entry.data.status === 'stable' &&
        entry.data.publishedAt,
    )
    .sort(
      (a, b) =>
        b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf(),
    );

  return rss({
    title: 'ben7sys – Wissen',
    description:
      'Technische Beiträge zu nachhaltigen Systemen, Automatisierung und digitaler Souveränität.',
    site: context.site,
    customData: '<language>de-DE</language>',
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.publishedAt,
      link: `/${entry.id.replace(/\/index$/, '')}/`,
      categories: entry.data.tags,
    })),
  });
}
