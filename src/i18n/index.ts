// Sprachen, Routen und Oberflächentexte (Deutsch = Standard, Englisch unter /en/)

export const languages = {
  de: { label: 'Deutsch', short: 'DE', locale: 'de-DE', og: 'de_DE' },
  en: { label: 'English', short: 'EN', locale: 'en-GB', og: 'en_GB' },
} as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'de';

// Jede Seite in beiden Sprachen. Schlüssel werden für Links und den Sprachumschalter genutzt.
export const routes = {
  home: { de: '/', en: '/en/' },
  practice: { de: '/die-praxis/', en: '/en/practice/' },
  team: { de: '/team/', en: '/en/team/' },
  services: { de: '/leistungen/', en: '/en/services/' },
  hours: { de: '/oeffnungszeiten/', en: '/en/opening-hours/' },
  news: { de: '/aktuelles/', en: '/en/news/' },
  contact: { de: '/kontakt/', en: '/en/contact/' },
  digital: { de: '/digitalisierung/', en: '/en/digitalisation/' },
  imprint: { de: '/impressum/', en: '/en/imprint/' },
  privacy: { de: '/datenschutzerklaerung/', en: '/en/privacy/' },
} as const;
export type RouteKey = keyof typeof routes;

export function getLang(url: URL): Lang {
  return url.pathname === '/en' || url.pathname.startsWith('/en/') ? 'en' : 'de';
}

/** Gleiche Seite in jeder Sprache (für Umschalter und hreflang). */
export function alternates(pathname: string): Record<Lang, string> {
  for (const r of Object.values(routes)) {
    if (r.de === pathname || r.en === pathname) return { ...r };
  }
  // Unbekannte Seite (z. B. 404): auf die jeweilige Startseite
  return { de: routes.home.de, en: routes.home.en };
}

export const ui = {
  de: {
    skip: 'Zum Inhalt springen',
    home: 'Startseite',
    nav: { practice: 'Praxis', team: 'Team', services: 'Leistungen', hours: 'Sprechzeiten', news: 'Aktuelles', contact: 'Kontakt' },
    mainNav: 'Hauptnavigation',
    menuOpen: 'Menü öffnen',
    menuClose: 'Menü schließen',
    language: 'Sprache',
    tagline: 'Hausärztliche Versorgung · Allgemeinmedizin und Familienmedizin',
    defaultDescription:
      'Gemeinschaftspraxis Immensen in Lehrte-Immensen: Dr. med. Ilsemarie Horst & Renke Harms. Hausärztliche Versorgung für Kinder, Erwachsene und Senioren. Termine unter 05175 9205-0.',
    homeTitle: 'Gemeinschaftspraxis Immensen – Hausarztpraxis in Lehrte-Immensen',
    contact: 'Kontakt',
    phoneShort: 'Tel.',
    fax: 'Fax',
    route: 'Route planen',
    hoursTitle: 'Öffnungszeiten',
    byAppointment: 'Termine nach Vereinbarung.',
    outOfHours: 'Außerhalb der Sprechzeiten',
    oncall: 'Ärztlicher Bereitschaftsdienst',
    emergency: 'Lebensbedrohlicher Notfall',
    legal: 'Rechtliches',
    digital: 'Digitalisierung',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    call: 'Anrufen',
    callAria: 'Praxis anrufen',
    days: ['', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'],
    weekend: 'Sa / So',
    today: 'Heute',
    day: 'Tag',
    morning: 'Vormittag',
    afternoon: 'Nachmittag',
    closed: 'geschlossen',
    consultation: 'Sprechstunde',
    timeSuffix: ' Uhr',
    status: {
      openUntil: 'Jetzt geöffnet · bis {t} Uhr',
      opensToday: 'Geschlossen · öffnet heute {t} Uhr',
      opensTomorrow: 'Geschlossen · öffnet morgen {t} Uhr',
      opensOn: 'Geschlossen · öffnet {d} {t} Uhr',
      closed: 'Geschlossen',
    },
    readMore: 'Weiterlesen →',
    allNews: '← Alle Meldungen',
    notFound: {
      eyebrow: 'Fehler 404',
      title: 'Diese Seite gibt es nicht (mehr).',
      lead: 'Vielleicht hilft Ihnen einer dieser Links weiter:',
      home: 'Zur Startseite',
    },
  },
  en: {
    skip: 'Skip to content',
    home: 'Home',
    nav: { practice: 'Practice', team: 'Team', services: 'Services', hours: 'Opening hours', news: 'News', contact: 'Contact' },
    mainNav: 'Main navigation',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    language: 'Language',
    tagline: 'Family doctors · General practice and family medicine',
    defaultDescription:
      'Gemeinschaftspraxis Immensen in Lehrte-Immensen, Germany: Dr. med. Ilsemarie Horst & Renke Harms. Family doctors for children, adults and seniors. Appointments: +49 5175 9205-0.',
    homeTitle: 'Gemeinschaftspraxis Immensen – Family doctors in Lehrte-Immensen',
    contact: 'Contact',
    phoneShort: 'Phone',
    fax: 'Fax',
    route: 'Get directions',
    hoursTitle: 'Opening hours',
    byAppointment: 'By appointment only.',
    outOfHours: 'Outside opening hours',
    oncall: 'On-call medical service',
    emergency: 'Life-threatening emergency',
    legal: 'Legal',
    digital: 'Going digital',
    imprint: 'Imprint',
    privacy: 'Privacy',
    call: 'Call',
    callAria: 'Call the practice',
    days: ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    weekend: 'Sat / Sun',
    today: 'Today',
    day: 'Day',
    morning: 'Morning',
    afternoon: 'Afternoon',
    closed: 'closed',
    consultation: 'Consultation',
    timeSuffix: '',
    status: {
      openUntil: 'Open now · until {t}',
      opensToday: 'Closed · opens today at {t}',
      opensTomorrow: 'Closed · opens tomorrow at {t}',
      opensOn: 'Closed · opens {d} at {t}',
      closed: 'Closed',
    },
    readMore: 'Read more →',
    allNews: '← All news',
    notFound: {
      eyebrow: 'Error 404',
      title: 'This page doesn’t exist (any more).',
      lead: 'One of these links may help:',
      home: 'Go to homepage',
    },
  },
} as const;

export const useT = (lang: Lang) => ui[lang];
export const fmtDate = (lang: Lang, d: Date) =>
  new Intl.DateTimeFormat(languages[lang].locale, { day: 'numeric', month: 'long', year: 'numeric' }).format(d);
