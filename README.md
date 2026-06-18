# Draphera.com

Sito statico ufficiale dell'ecosistema Draphera.

Draphera.com comunica una realtà tecnica concreta: un ecosistema indipendente di ricerca e infrastruttura dedicato alla modellistica tecnica, ai dati vettoriali, all'interoperabilità e alla preservazione della conoscenza industriale. VISION è l'infrastruttura tecnica sviluppata all'interno di Draphera.

## URL

- GitHub Pages: https://draphera.github.io/
- Repository: https://github.com/Draphera/draphera.github.io
- VISION Observatory: https://vision-argus-observatory.vercel.app/

## Stack

- HTML statico
- CSS moderno con custom properties
- JavaScript vanilla
- Nessun framework frontend
- Nessuna build obbligatoria
- Compatibile con GitHub Pages e Vercel

## Struttura

```text
/
|-- index.html
|-- ecosystem.html
|-- vision.html
|-- manifesto.html
|-- about.html
|-- blog.html
|-- contact.html
|-- privacy.html
|-- assets/
|   |-- css/
|   |   |-- main.css
|   |-- js/
|   |   |-- main.js
|   |-- img/
|   |-- icons/
|-- README.md
```

## Architettura narrativa

- `index.html`: portale principale con hero, problema, identità, ecosistema, VISION, ricerca, standard studiati, manifesto e journal.
- `ecosystem.html`: mappa essenziale con VISION, Ricerca e Knowledge.
- `vision.html`: laboratorio tecnico di Draphera e collegamento all'Observatory.
- `manifesto.html`: cinque principi fondamentali.
- `about.html`: origini, missione, principi e ruolo di VISION in forma breve.
- `blog.html`: Draphera Journal, struttura pronta per futuri articoli tecnici.
- `contact.html`: modulo statico pronto per futura integrazione.
- `privacy.html`: informativa essenziale per il sito statico.

## Local Development

Aprire direttamente `index.html` oppure usare un server locale.

Con PHP/XAMPP:

```powershell
& 'C:\xampp\php\php.exe' -S 127.0.0.1:8080 -t 'C:\xampp\htdocs\draphera.com'
```

Poi visitare:

```text
http://127.0.0.1:8080/
```

## Deploy GitHub Pages

Il repository pubblica da `main` nella root.

1. Committare le modifiche.
2. Fare push su `main`.
3. Verificare in GitHub `Settings -> Pages`:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ root`

## Deploy Vercel

1. Importare il repository.
2. Lasciare vuoto il build command.
3. Impostare output directory su `.` se richiesto.
4. Pubblicare.

## Checklist pre-push

```powershell
node --check assets\js\main.js
git -c safe.directory=C:/xampp/htdocs/draphera.com diff --check
git -c safe.directory=C:/xampp/htdocs/draphera.com status --short
```

Verifiche manuali:

- Home desktop/tablet/mobile senza overflow orizzontale.
- Tema chiaro e scuro leggibili, soprattutto hero e pagine secondarie.
- Menu mobile funzionante da tastiera e touch.
- Footer completo con About Draphera, Manifesto, VISION, Journal, Contatti e Credits.
- Link VISION verso Observatory funzionante.
- Modulo di accesso statico: nessun dato inviato finché non viene integrato un backend.
- SEO base presente su ogni pagina: title, description, canonical, Open Graph.
- Versione italiana e inglese verificabili con `?lang=it` e `?lang=en`.

## Lingue

La versione pubblica supporta italiano e inglese tramite JavaScript vanilla leggero. La lingua può essere impostata da query string (`?lang=it` o `?lang=en`) e viene salvata in `localStorage`.

## Social

- Facebook: https://www.facebook.com/draphera
- Instagram: https://www.instagram.com/draphera
- LinkedIn: https://www.linkedin.com/company/draphera

## Note di posizionamento

Il sito non presenta Draphera come software house, startup AI, brand moda, SaaS o personal brand. Il messaggio guida è:

> Draphera è un ecosistema indipendente di ricerca e infrastruttura dedicato alla modellistica tecnica, ai dati vettoriali e alla preservazione della conoscenza industriale.
