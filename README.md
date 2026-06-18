# Draphera.com

Sito statico principale dell'ecosistema Draphera.

## Struttura

```text
/
├── index.html
├── manifesto.html
├── ecosystem.html
├── vision.html
├── contact.html
├── assets/
│   ├── css/main.css
│   ├── js/main.js
│   ├── img/
│   └── icons/
└── README.md
```

## Sviluppo locale

Il sito non richiede build o dipendenze. Apri `index.html` nel browser, oppure usa un server statico locale:

```bash
python -m http.server 8080
```

Poi visita `http://localhost:8080`.

## Deploy su GitHub Pages

1. Pubblica i file nella branch principale del repository.
2. In GitHub, apri `Settings -> Pages`.
3. Seleziona la branch e la cartella root.
4. Salva la configurazione.

## Deploy su Vercel

1. Importa il repository in Vercel.
2. Lascia vuoto il build command.
3. Imposta la output directory su `.` se richiesto.
4. Pubblica.

## Note

- `contact.html` contiene un form statico pronto per Formspree, Netlify Forms o backend futuro.
- Il selettore lingua supporta `IT / EN / ES / FR / DE` con JavaScript vanilla, parametro `?lang=` e memoria locale. La base resta statica e puo essere estesa senza introdurre un sistema i18n complesso.
- La home mantiene solo due CTA principali: VISION Observatory e modulo contatti.
- Gli asset grafici storici in `assets/img/` sono riutilizzati per mantenere la pelle visuale Draphera.
