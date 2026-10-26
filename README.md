# Gemeinschaftspraxis Immensen – Website

Statische Astro-Website. Keine Cookies, kein Tracking, Schriften lokal.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # Ausgabe in dist/ – auf jedem statischen Hoster deploybar
```

## Sprachen

Deutsch unter `/`, Englisch unter `/en/`. Das Sprach-Dropdown im Header führt immer zur gleichen Seite in der anderen Sprache.

- **Routen & Oberflächentexte** (Menü, Footer, Öffnungsstatus): `src/i18n/index.ts`
- **Seiten mit Daten** (Start, Team, Leistungen, Sprechzeiten, Kontakt, Aktuelles): `src/views/*.astro` – Texte stehen dort als `de`/`en`
- **Textseiten** (Praxis, Digitalisierung, Impressum, Datenschutz): je eine Datei in `src/pages/` und `src/pages/en/`

## Inhalte pflegen

- **Praxisdaten, Öffnungszeiten, Team, Leistungen:** `src/data/site.ts` (übersetzte Texte als `{ de, en }`)
- **Neuigkeiten:** Markdown-Datei in `src/content/aktuelles/de/` und – mit gleichem Dateinamen – in `src/content/aktuelles/en/`. Fehlt die englische Fassung, führt der Umschalter zur englischen News-Übersicht.
- **Formulare:** `formEndpoint` in `src/data/site.ts` setzen (z. B. Formspree/Web3Forms oder eigener Server). Solange leer, sind die Formulare deaktiviert und verweisen aufs Telefon.

## Vor dem Livegang (TODO)

- [ ] Impressum und Datenschutzerklärung rechtlich prüfen / vervollständigen
- [ ] E-Mail-Adresse in `site.ts` eintragen
- [ ] Montag Nachmittag: zuständige Ärztin / zuständigen Arzt eintragen (alte Seite nannte noch Frau Henne)
- [ ] Formular-Dienstleister wählen (DSGVO: Gesundheitsdaten → AV-Vertrag, Server in der EU)
- [ ] Englische Übersetzungen von einer Muttersprachlerin / einem Muttersprachler gegenlesen lassen
- [ ] Optional: Team-Fotos ergänzen (aktuell Initialen-Avatare)
