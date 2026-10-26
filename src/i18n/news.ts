// Neuigkeiten je Sprache: src/content/aktuelles/de/*.md und src/content/aktuelles/en/*.md
// Gleicher Dateiname = gleiche Meldung (für den Sprachumschalter).
import { getCollection } from 'astro:content';
import { routes, type Lang } from './index';

export async function getNews(lang: Lang) {
  const all = await getCollection('aktuelles', (e) => e.id.startsWith(`${lang}/`));
  return all
    .map((e) => ({ ...e, slug: e.id.slice(lang.length + 1) }))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const newsUrl = (lang: Lang, slug: string) => `${routes.news[lang]}${slug}/`;
