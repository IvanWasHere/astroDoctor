// Zentrale Praxisdaten. Änderungen hier wirken sich auf die ganze Website aus.
// Texte, die übersetzt werden, stehen als { de, en }.
import type { Lang, RouteKey } from '../i18n';

export const site = {
  name: 'Gemeinschaftspraxis Immensen',
  doctors: 'Dr. med. Ilsemarie Horst & Renke Harms',
  url: 'https://www.praxis-immensen.de',
  street: 'Bauernstraße 36',
  zip: '31275',
  city: 'Lehrte-Immensen',
  phone: '05175 9205-0',
  phoneIntl: '+49 5175 9205-0',
  phoneHref: 'tel:+495175920500',
  fax: '05175 9205-66',
  faxIntl: '+49 5175 9205-66',
  // TODO: E-Mail-Adresse der Praxis eintragen (wird dann automatisch angezeigt)
  email: '',
  // Formular-Endpunkt (z. B. Formspree, Web3Forms oder eigener Server).
  // Leer lassen = Formulare zeigen einen Hinweis und verweisen aufs Telefon.
  formEndpoint: '',
  chamber: 'Ärztekammer Niedersachsen',
};

/** Telefonnummer passend zur Sprache (international für Englisch). */
export const phoneFor = (lang: Lang) => (lang === 'en' ? site.phoneIntl : site.phone);
export const faxFor = (lang: Lang) => (lang === 'en' ? site.faxIntl : site.fax);

const address = `${site.street}, ${site.zip} ${site.city}`;
export const mapsLink = `https://www.openstreetmap.org/search?query=${encodeURIComponent(address)}`;
export const directionsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

export const navKeys: RouteKey[] = ['practice', 'team', 'services', 'hours', 'news', 'contact'];

type L = Record<Lang, string>;

// Öffnungszeiten (gültig ab 01.01.2025). day: 1 = Montag … 5 = Freitag
// who: null = allgemeine „Sprechstunde“
export type Slot = { from: string; to: string; who: string | null };
export const hours: { day: number; slots: Slot[] }[] = [
  {
    day: 1,
    slots: [
      { from: '07:30', to: '12:00', who: 'Dr. Horst & Harms' },
      // TODO: Auf der alten Seite stand hier noch „Frau Henne“ – bitte Arzt/Ärztin ergänzen
      { from: '13:00', to: '18:00', who: null },
    ],
  },
  {
    day: 2,
    slots: [
      { from: '07:30', to: '12:00', who: 'Harms' },
      { from: '13:00', to: '18:00', who: 'Dr. Horst' },
    ],
  },
  { day: 3, slots: [{ from: '07:30', to: '12:00', who: 'Dr. Horst' }] },
  {
    day: 4,
    slots: [
      { from: '07:30', to: '12:00', who: 'Dr. Horst' },
      { from: '13:00', to: '18:00', who: 'Harms' },
    ],
  },
  { day: 5, slots: [{ from: '07:30', to: '12:00', who: 'Harms' }] },
];

export const team: {
  name: string;
  initials: string;
  role: L;
  bio: L[];
  cv: { year: string; text: L }[];
}[] = [
  {
    name: 'Dr. med. Ilsemarie Horst',
    initials: 'IH',
    role: {
      de: 'Hausärztin · Fachärztin für Allgemeinmedizin',
      en: 'Family doctor · Specialist in general medicine',
    },
    bio: [
      {
        de: 'Seit 2016 ist Frau Dr. Horst Hausärztin in der Gemeinschaftspraxis Immensen.',
        en: 'Dr. Horst has been a family doctor at Gemeinschaftspraxis Immensen since 2016.',
      },
    ],
    cv: [],
  },
  {
    name: 'Renke Harms',
    initials: 'RH',
    role: {
      de: 'Hausarzt · Facharzt für Allgemeinmedizin · Facharzt für Anästhesiologie · Zusatzbezeichnung Notfallmedizin',
      en: 'Family doctor · Specialist in general medicine · Specialist in anaesthesiology · Additional qualification in emergency medicine',
    },
    bio: [
      {
        de: 'Seit dem 01.01.2025 als Hausarzt in der Gemeinschaftspraxis Immensen tätig. Langjährige klinische Erfahrung als Anästhesist, Intensivmediziner und Notarzt in unterschiedlichen Kliniken in der Region Hannover.',
        en: 'Family doctor at Gemeinschaftspraxis Immensen since 1 January 2025. Many years of hospital experience as an anaesthetist, intensive care physician and emergency doctor at several hospitals in the Hannover region.',
      },
      {
        de: 'Geboren in Oldenburg (Oldb), Vater von zwei Kindern. Zunächst Ausbildung zum Rettungsassistenten, danach Studium der Humanmedizin in Hannover. Von 1996 bis 2000 im Rettungsdienst des Landkreises Oldenburg, seit 2000 als Rettungsassistent und seit 2008 als Notarzt in der Region Hannover tätig – unter anderem an der DRK-Rettungswache Lehrte.',
        en: 'Born in Oldenburg (Oldb), father of two. Trained as a paramedic first, then studied medicine in Hannover. Worked in the Oldenburg district ambulance service from 1996 to 2000; in the Hannover region as a paramedic since 2000 and as an emergency doctor since 2008 – including at the German Red Cross ambulance station in Lehrte.',
      },
    ],
    cv: [
      { year: '2007 – 2009', text: { de: 'Diakovere Henriettenstiftung', en: 'Diakovere Henriettenstiftung' } },
      { year: '2009 – 2014', text: { de: 'KRH Siloah, Oststadt-Heidehaus', en: 'KRH Siloah, Oststadt-Heidehaus' } },
      { year: '2014 – 2016', text: { de: 'Diakovere Annastift', en: 'Diakovere Annastift' } },
      { year: '2016 – 2022', text: { de: 'Paracelsus-Klinik am Silbersee', en: 'Paracelsus-Klinik am Silbersee' } },
      {
        year: '2022 – 2024',
        text: {
          de: 'Weiterbildung Allgemeinmedizin in Bad Münder und Mellendorf',
          en: 'Specialist training in general medicine in Bad Münder and Mellendorf',
        },
      },
      { year: '2024', text: { de: 'Facharztanerkennung Allgemeinmedizin', en: 'Board certification in general medicine' } },
    ],
  },
  {
    name: 'Dr. med. Yeliz Hörl-Aydemir',
    initials: 'YH',
    role: {
      de: 'Weiterbildungsärztin zur Fachärztin für Allgemeinmedizin',
      en: 'Doctor in specialist training for general medicine',
    },
    bio: [],
    cv: [],
  },
];

export const services: { id: string; icon: string; title: L; text?: L; items?: L[] }[] = [
  {
    id: 'diagnostik',
    icon: 'pulse',
    title: { de: 'Diagnostik', en: 'Diagnostics' },
    items: [
      { de: 'EKG', en: 'ECG' },
      { de: 'Notfallversorgung', en: 'Emergency care' },
      { de: 'Sonografie (Ultraschall)', en: 'Ultrasound' },
      { de: 'Lungenfunktionsuntersuchung', en: 'Lung function testing' },
      { de: 'Blutentnahmen', en: 'Blood tests' },
    ],
  },
  {
    id: 'impfungen',
    icon: 'syringe',
    title: { de: 'Impfungen', en: 'Vaccinations' },
    text: {
      de: 'Nach den Empfehlungen der STIKO am RKI: Überprüfung des Impfpasses sowie Standard- und Indikationsimpfungen.',
      en: 'Following the recommendations of Germany’s Standing Committee on Vaccination (STIKO): we check your vaccination record and give routine and indication-based vaccines.',
    },
  },
  {
    id: 'frueherkennung',
    icon: 'search',
    title: { de: 'Früherkennung', en: 'Screening & check-ups' },
    items: [
      { de: 'Gesundheitsuntersuchung (Check-up)', en: 'Health check-up' },
      { de: 'Jugendarbeitsschutzuntersuchung', en: 'Occupational health exam for young workers' },
      { de: 'Hautkrebsscreening', en: 'Skin cancer screening' },
      { de: 'Krebsfrüherkennung beim Mann', en: 'Cancer screening for men' },
      { de: 'Darmkrebsfrüherkennung', en: 'Bowel cancer screening' },
    ],
  },
  {
    id: 'dmp',
    icon: 'heart',
    title: { de: 'Chronische Erkrankungen (DMP)', en: 'Chronic conditions (DMP)' },
    text: { de: 'Disease-Management-Programme für:', en: 'Structured care programmes for:' },
    items: [
      { de: 'Diabetes Typ II', en: 'Type 2 diabetes' },
      { de: 'COPD', en: 'COPD' },
      { de: 'Asthma', en: 'Asthma' },
      { de: 'KHK (koronare Herzkrankheit)', en: 'Coronary heart disease' },
    ],
  },
  {
    id: 'operationen',
    icon: 'clipboard',
    title: { de: 'Vor und nach Operationen', en: 'Before and after surgery' },
    items: [
      { de: 'Vorbereitung auf ambulante Operationen', en: 'Preparation for outpatient surgery' },
      { de: 'Fädenentfernung', en: 'Stitch removal' },
    ],
  },
  {
    id: 'chirurgie',
    icon: 'bandage',
    title: { de: 'Kleine Chirurgie & Wunden', en: 'Minor surgery & wound care' },
    items: [
      { de: 'Wundversorgung', en: 'Wound care' },
      { de: 'Behandlung chronischer Wunden', en: 'Treatment of chronic wounds' },
    ],
  },
  {
    id: 'hzv',
    icon: 'handshake',
    title: { de: 'Hausarztverträge (HZV)', en: 'GP-centred care contracts (HZV)' },
    text: {
      de: 'Hausarztzentrierte Versorgung der großen gesetzlichen Krankenkassen. Informationen erhalten Sie bei Ihrer Krankenkasse und bei uns in der Praxis.',
      en: 'We take part in the GP-centred care programmes of the major statutory health insurers. Ask your insurer or us at the practice for details.',
    },
  },
  {
    id: 'psychosomatik',
    icon: 'mind',
    title: { de: 'Psychosomatische Grundversorgung', en: 'Psychosomatic care' },
    text: {
      de: 'Körper („Soma“) und Seele („Psyche“) hängen untrennbar zusammen. Schmerz erzeugt Ängste – und Ängste zeigen sich etwa als erhöhter Blutdruck oder Schlafstörungen. Wir nehmen diese Sprache des Körpers ernst.',
      en: 'Body (“soma”) and mind (“psyche”) are inseparable. Pain can cause anxiety – and anxiety can show up as high blood pressure or trouble sleeping. We take these signals from the body seriously.',
    },
  },
  {
    id: 'begleitung',
    icon: 'home',
    title: { de: 'Begleitung & Betreuung', en: 'Ongoing care & support' },
    items: [
      { de: 'Hausbesuche in Einzelfällen oder besonderen Situationen', en: 'Home visits in individual cases or special situations' },
      { de: 'Beständige Betreuung älterer Menschen', en: 'Continuous care for older people' },
      { de: 'Hausärztliche Versorgung des nahe gelegenen betreuten Wohnens', en: 'GP care for the nearby assisted-living residence' },
      { de: 'Begleitung und Hilfe für Sterbende und ihre Familien', en: 'Support for the dying and their families' },
      {
        de: 'Verordnung außerklinischer Intensivpflege für langfristig beatmete Patientinnen und Patienten',
        en: 'Prescribing home intensive care for patients on long-term ventilation',
      },
      { de: 'Beratung und Unterstützung bei der Nikotinentwöhnung', en: 'Advice and support to quit smoking' },
    ],
  },
  {
    id: 'igel',
    icon: 'plane',
    title: { de: 'Individuelle Gesundheitsleistungen (IGeL)', en: 'Self-pay services (IGeL)' },
    text: {
      de: 'Zum Beispiel Reiseberatung vor Fernreisen, Reiseimpfungen und Malaria-Prophylaxe. Diese Leistungen zahlen die gesetzlichen Krankenkassen nicht – Sie erhalten dafür eine Rechnung von uns.',
      en: 'For example travel advice before long-haul trips, travel vaccinations and malaria prevention. Statutory health insurance does not cover these services – we will send you an invoice.',
    },
  },
];
