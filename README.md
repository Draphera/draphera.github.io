# Draphera.com

Sito statico ufficiale dell'ecosistema Draphera.

Draphera.com comunica l'identità istituzionale del progetto: un ecosistema indipendente dedicato a modellistica tecnica, dati vettoriali, interoperabilità, preservazione della conoscenza industriale e infrastrutture digitali. VISION è l'infrastruttura tecnica collegata che alimenta ricerca e sviluppo.

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
|-- manifesto.html
|-- ecosystem.html
|-- vision.html
|-- founder.html
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

- `index.html`: portale principale, relazione Draphera/VISION, ricerca, standard studiati, manifesto sintetico, iniziative future e accesso privato.
- `ecosystem.html`: mappa dell'ecosistema Draphera.
- `vision.html`: descrizione dell'infrastruttura tecnica VISION e collegamento all'Observatory.
- `founder.html`: origine industriale e tecnologica del progetto.
- `manifesto.html`: principi fondamentali.
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
git -c safe.directory=C:/xampp/htdocs/draphera.com status --short
```

Verifiche manuali:

- Home desktop/tablet/mobile senza overflow orizzontale.
- Tema chiaro e scuro leggibili, soprattutto hero e pagine secondarie.
- Menu mobile funzionante da tastiera e touch.
- Footer completo con Privacy e canali social.
- Link VISION verso Observatory funzionante.
- Contact form statico: nessun dato inviato finché non viene integrato un backend.
- SEO base presente su ogni pagina: title, description, canonical, Open Graph.

## Lingue

La versione pubblica è in italiano. La UI mostra `IT | EN`, con EN disabilitato finché la versione inglese completa non viene finalizzata.

## Social

- Facebook: https://www.facebook.com/draphera
- Instagram: https://www.instagram.com/draphera
- LinkedIn: https://www.linkedin.com/company/draphera

## Note di posizionamento

Non presentare Draphera come software house generica, brand moda o startup AI. Il sito deve comunicare:

> Draphera è un ecosistema di ricerca e infrastruttura nato dall'esperienza diretta nelle tecnologie industriali e orientato alla preservazione e valorizzazione della conoscenza tecnica.
