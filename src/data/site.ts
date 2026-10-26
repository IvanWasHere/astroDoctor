// Zentrale Praxisdaten. Änderungen hier wirken sich auf die ganze Website aus.
// Texte, die übersetzt werden, stehen als { de, en }.
import type { ImageMetadata } from 'astro';
import type { Lang, RouteKey } from '../i18n';
import photoHorst from '../assets/praxis/dr-horst.jpg';
import photoTomic from '../assets/praxis/dr-tomic.webp';

export const site = {
  name: 'Gemeinschaftspraxis Immensen',
  doctors: 'Dr. med. Jelena Tomic & Dr. med. Ilsemarie Horst',
  url: import.meta.env.SITE,
  street: 'Bauernstraße 36/2',
  zip: '31275',
  city: 'Lehrte-Immensen',
  phone: '05175 9205-0',
  phoneIntl: '+49 5175 9205-0',
  phoneHref: 'tel:+495175920500',
  fax: '05175 9205-66',
  faxIntl: '+49 5175 9205-66',
  email: 'info@hausarzt-immensen.de',
  // KIM-Adresse für elektronische Arztbriefe (nur für Praxen/Kliniken)
  kim: 'immensen@kv.dox.kim.telematik',
  // Online-Terminbuchung über T2med (auch Videosprechstunde)
  bookingUrl: 'https://www.termin-patmed.de/p/a741ead2-cf96-4e57-a23a-8626aee0f46c',
  facebook: 'https://www.facebook.com/Arztpraxis.Immensen',
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

// Öffnungszeiten (Stand: hausarzt-immensen.de, Oktober 2026). day: 1 = Montag … 5 = Freitag
// who: null = allgemeine „Sprechstunde“
export type Slot = { from: string; to: string; who: string | null };
export const hours: { day: number; slots: Slot[] }[] = [
  {
    day: 1,
    slots: [
      { from: '07:30', to: '12:00', who: null },
      { from: '13:00', to: '17:00', who: null },
    ],
  },
  {
    day: 2,
    slots: [
      { from: '07:30', to: '12:00', who: null },
      { from: '13:00', to: '18:00', who: null },
    ],
  },
  { day: 3, slots: [{ from: '07:30', to: '12:00', who: null }] },
  {
    day: 4,
    slots: [
      { from: '07:30', to: '12:00', who: null },
      { from: '13:00', to: '18:00', who: null },
    ],
  },
  { day: 5, slots: [{ from: '07:30', to: '12:00', who: null }] },
];

export const team: {
  name: string;
  initials: string;
  photo?: ImageMetadata;
  role: L;
  bio: L[];
  cv: { year: string; text: L }[];
}[] = [
  {
    name: 'Dr. med. Jelena Tomic',
    initials: 'JT',
    photo: photoTomic,
    role: {
      de: 'Hausärztin · Fachärztin für Allgemeinmedizin · Partnerin seit 1. Juli 2026',
      en: 'Family doctor · Specialist in general medicine · Partner since 1 July 2026',
    },
    bio: [
      {
        de: 'Dr. Jelena Tomic lebt mit ihrer Familie in Lehrte. Lange hat sie im Lehrter Krankenhaus in der Anästhesie und in der Hausarztpraxis in Sievershausen gearbeitet.',
        en: 'Dr. Jelena Tomic lives in Lehrte with her family. For many years she worked in anaesthesiology at Lehrte hospital and at the family practice in Sievershausen.',
      },
    ],
    cv: [],
  },
  {
    name: 'Dr. med. Ilsemarie Horst',
    initials: 'IH',
    photo: photoHorst,
    role: {
      de: 'Hausärztin · Fachärztin für Allgemeinmedizin · Weiterbildungsbefugt (30 Monate)',
      en: 'Family doctor · Specialist in general medicine · Authorised trainer (30 months)',
    },
    bio: [
      {
        de: 'Dr. Ilsemarie Horst stammt aus Burgdorf. Sie ist seit 1986 Ärztin und hat jahrelange Erfahrung u. a. in der Hausarzt- und Familienmedizin, der Altersheilkunde, der Dermatologie, der Kardiologie, der Therapie von Suchterkrankungen und der Nierenheilkunde.',
        en: 'Dr. Ilsemarie Horst comes from Burgdorf. She has been a doctor since 1986 and has many years of experience in family medicine, geriatrics, dermatology, cardiology, addiction treatment and nephrology, among other fields.',
      },
      {
        de: 'Die Ärztekammer Niedersachsen hat sie ermächtigt, angehende Hausärztinnen und Hausärzte über 30 Monate weiterzubilden.',
        en: 'The Lower Saxony Medical Association has authorised her to train future family doctors for up to 30 months.',
      },
    ],
    cv: [],
  },
  {
    name: 'Frau Nwankwo',
    initials: 'N',
    role: {
      de: 'Hausärztin in Weiterbildung',
      en: 'Family doctor in specialist training',
    },
    bio: [
      {
        de: 'Unsere Hausärztin in Weiterbildung hat sich erfolgreich bei uns eingearbeitet.',
        en: 'Our doctor in training has settled in well at the practice.',
      },
    ],
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
      { de: 'Sonografie (Ultraschall) des Bauchraums', en: 'Abdominal ultrasound' },
      { de: 'Langzeit-Blutdruckmessung', en: '24-hour blood pressure monitoring' },
      { de: 'Lungenfunktionsuntersuchung', en: 'Lung function testing' },
      { de: 'Blutentnahmen', en: 'Blood tests' },
    ],
  },
  {
    id: 'impfungen',
    icon: 'syringe',
    title: { de: 'Impfungen', en: 'Vaccinations' },
    text: {
      de: 'Nach den Empfehlungen der STIKO am RKI: Überprüfung des Impfpasses sowie Standard- und Indikationsimpfungen – z. B. Tetanus, Pneumokokken, Gürtelrose, Corona und Grippe.',
      en: 'Following the recommendations of Germany’s Standing Committee on Vaccination (STIKO): we check your vaccination record and give routine and indication-based vaccines – e.g. tetanus, pneumococcus, shingles, COVID-19 and flu.',
    },
  },
  {
    id: 'frueherkennung',
    icon: 'search',
    title: { de: 'Früherkennung', en: 'Screening & check-ups' },
    items: [
      { de: 'Gesundheitsuntersuchung (Check-up) alle 3 Jahre', en: 'Health check-up every 3 years' },
      { de: 'Jugendarbeitsschutzuntersuchung', en: 'Occupational health exam for young workers' },
      { de: 'Hautkrebsscreening alle 2 Jahre', en: 'Skin cancer screening every 2 years' },
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
      { de: 'Hausbesuche, wenn es medizinisch notwendig ist', en: 'Home visits when medically necessary' },
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
      de: 'Diese Leistungen zahlen die gesetzlichen Krankenkassen nicht – Sie erhalten dafür eine Rechnung von uns.',
      en: 'Statutory health insurance does not cover these services – we will send you an invoice.',
    },
    items: [
      { de: 'Atteste', en: 'Medical certificates' },
      { de: 'Reiseberatung und Reiseimpfungen, z. B. Hepatitis A', en: 'Travel advice and travel vaccines, e.g. hepatitis A' },
      { de: 'Malaria-Prophylaxe', en: 'Malaria prevention' },
      { de: 'Untersuchungen für Lebensversicherungen', en: 'Examinations for life insurance' },
      { de: 'Laboruntersuchungen, die die GKV nicht übernimmt', en: 'Lab tests not covered by statutory insurance' },
    ],
  },
];
