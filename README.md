# Draphera.com

Sito ufficiale dell'ecosistema Draphera.

Draphera.com comunica un ecosistema indipendente dedicato a modellistica tecnica, dati vettoriali, interoperabilità, preservazione della conoscenza industriale e infrastrutture digitali. VISION è l'infrastruttura tecnica che alimenta la ricerca e lo sviluppo del progetto.

## URL

- Dominio principale: https://draphera.com
- Repository: https://github.com/Draphera/draphera.github.io
- VISION Observatory: https://vision-argus-observatory.vercel.app/

## Stack

- HTML statico
- CSS moderno con custom properties
- JavaScript vanilla
- Jekyll minimo per Journal Markdown su GitHub Pages
- Nessun CMS, database o framework frontend
- Compatibile con GitHub Pages e Vercel

## Struttura

```text
/
|-- index.html
|-- about.html
|-- manifesto.html
|-- ecosystem.html
|-- vision.html
|-- contact.html
|-- privacy.html
|-- journal.html
|-- research.html
|-- blog.html
|-- sitemap.xml
|-- robots.txt
|-- site.webmanifest
|-- _config.yml
|-- _includes/
|-- _layouts/
|-- _posts/
|-- assets/
|   |-- css/main.css
|   |-- js/main.js
|   |-- img/
|   |-- icons/
|   |-- social/
|-- README.md
```

## Architettura

- `index.html`: portale principale con identità, ricerca, VISION, standard studiati, manifesto, Journal e accesso.
- `about.html`: storia istituzionale e origine industriale del progetto.
- `ecosystem.html`: mappa essenziale dell'ecosistema Draphera.
- `vision.html`: ruolo tecnico di VISION e collegamento all'Observatory.
- `manifesto.html`: principi editoriali e infrastrutturali.
- `journal.html`: indice Jekyll del Draphera Journal.
- `research.html`: Research Index per formati, aree di studio e preservazione tecnica.
- `_posts/`: articoli Markdown del Journal.
- `contact.html`: modulo statico pronto per integrazione futura.
- `privacy.html`: informativa essenziale per un sito statico.

## Journal

Gli articoli del Journal sono file Markdown dentro `_posts/`.

Formato nome file:

```text
YYYY-MM-DD-titolo-articolo.md
```

Front matter minimo:

```yaml
---
layout: post
title: "Titolo articolo"
description: "Breve descrizione SEO."
date: 2026-06-18
category: "Research Notes"
---
```

Dopo il push, GitHub Pages genera l'articolo con permalink:

```text
/journal/titolo-articolo/
```

## SEO e Social Preview

Sono presenti:

- `sitemap.xml`
- `robots.txt`
- favicon e icone Apple/Android
- Open Graph e Twitter Card
- immagine social preview in `assets/social/draphera-og.jpg`
- JSON-LD Organization e WebSite nella home
- canonical per le pagine principali
- redirect noindex da `blog.html` a `/journal/`

## Local Development

Per controllare le pagine statiche con XAMPP/PHP:

```powershell
& 'C:\xampp\php\php.exe' -S 127.0.0.1:8080 -t 'C:\xampp\htdocs\draphera.com'
```

Poi visitare:

```text
http://127.0.0.1:8080/
```

Per controllare anche Journal e Research come verranno generati da GitHub Pages, usare Jekyll se disponibile:

```powershell
bundle exec jekyll serve
```

## Deploy GitHub Pages

Il repository `Draphera/draphera.github.io` pubblica da `main`.

1. Committare le modifiche.
2. Fare push su `main`.
3. Verificare in GitHub `Settings -> Pages`:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ root`

GitHub Pages rileva `_config.yml` e genera automaticamente le pagine Jekyll del Journal.

## Deploy Vercel

1. Importare il repository su Vercel.
2. Usare Jekyll solo se si vuole generare il Journal Markdown in build.
3. In alternativa pubblicare la root statica se non si usa la parte Journal generata.
4. Verificare canonical e dominio finale prima della pubblicazione.

## Checklist pre-push

```powershell
node --check assets\js\main.js
git -c safe.directory=C:/xampp/htdocs/draphera.com diff --check
git -c safe.directory=C:/xampp/htdocs/draphera.com status --short
```

Verifiche manuali:

- Home desktop/tablet/mobile senza overflow orizzontale.
- Tema chiaro e scuro leggibili.
- Menu mobile funzionante.
- Link Journal e Research verso `/journal/` e `/research/`.
- Link VISION verso Observatory funzionante.
- Modulo contatti statico: nessun invio reale finché non viene integrato un servizio.
- Social preview e favicon presenti.
- Sitemap e robots raggiungibili.

## Lingue

La struttura attuale supporta italiano e inglese tramite JavaScript vanilla. La lingua può essere impostata da query string (`?lang=it` o `?lang=en`) e viene salvata in `localStorage`.

## Social

- Facebook: https://www.facebook.com/draphera
- Instagram: https://www.instagram.com/draphera
- LinkedIn: https://www.linkedin.com/company/draphera

## Posizionamento

Il sito non presenta Draphera come software house, startup AI, brand moda, SaaS o personal brand. Il messaggio guida è:

> Draphera è un ecosistema indipendente di ricerca e infrastruttura dedicato alla modellistica tecnica, ai dati vettoriali e alla preservazione della conoscenza industriale.
