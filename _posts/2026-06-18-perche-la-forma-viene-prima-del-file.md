---
layout: post
title: "Perché la forma viene prima del file"
date: 2026-06-18
category: Research
tags:
  - geometria
  - interoperabilità
  - cad
  - conoscenza-tecnica
  - vision
description: "Una riflessione sul rapporto tra geometria, dati e interoperabilità nei sistemi CAD applicati alla modellistica tecnica."
---

# Ontologia del Dato Geometrico: Perché la Forma Precede il File  

## 1. Introduzione
Nel panorama industriale contemporaneo, la rappresentazione digitale dei manufatti è ancora dominata da un paradigma *file‑centrico*. In questo modello, la forma viene trattata come un derivato del file, anziché come la sua origine concettuale.  
I formati neutri (STEP, IGES) e quelli proprietari non sono ontologie della forma, ma compromessi computazionali che traducono — e inevitabilmente distorcono — l’intento progettuale.

I dataset industriali analizzati da VISION (Lectra, Gerber, Pro2CAD, Assyst) mostrano che la forma sopravvive *non grazie* al file, ma *nonostante* esso.

---

## 2. Il problema: Il rumore geometrico
Il rumore geometrico è l’entropia introdotta dai processi di esportazione, conversione e normalizzazione.  
Non è un difetto marginale: è una conseguenza strutturale del paradigma file‑centrico.

### Tipologie principali
- **Micro‑segmentazione**  
  Curve analitiche vengono discretizzate in centinaia o migliaia di segmenti.  
  *Esempio reale*: un bordo Lectra PLX passa da 1 curva a 1.200 segmenti.

- **Ridondanza topologica**  
  Punti duplicati, SP ripetuti, nodi coincidenti.  
  *Esempio*: Assyst.sp_redundancy → SP da 225 a 2 (−99%).

- **Residui numerici**  
  Floating point incoerenti che impediscono la chiusura topologica.  
  *Esempio*: Investronica.generic → coordinate-driven PA con errori cumulativi.

### Evidenze dai dataset VISION
- **Lectra PLX**  
  - Comandi: −90%  
  - PD: −94%  
  - Idle salvato: decine di milioni di unità  
- **Gerber LB symbolic text**  
  - Idle: −85%  
  - LB rimossi sistematicamente  
- **Pro2CAD**  
  - PU: +35%  
  - Comandi: −73%  
  - Idle salvato: ~17M unità

---

## 3. L’illusione dell’interoperabilità
L’interoperabilità viene spesso interpretata come la capacità di leggere un file.  
Ma comprendere un file non equivale a comprendere la forma.

### Esempio concreto
Un file Lectra con **33.000 comandi** viene normalizzato da VISION a **3.000**.  
Quale rappresentazione è “vera”?

- quella con 33.000 comandi?  
- quella con 3.000?  
- o nessuna delle due?

La risposta è epistemologica: **la forma non risiede nel file, ma nell’intento progettuale che il file tenta di approssimare**.

---

## 4. Verso un approccio intent‑centric
La forma deve essere trattata come una struttura logica, non come una sequenza di coordinate.

### Esempio 1 — Ricostruzione di una curva
- CAD: 1 curva analitica  
- File PLX: 1.200 segmenti  
- Output VISION: 14 segmenti  
- Ricostruzione semantica: 1 curva analitica

La forma è l’entità logica che precede tutte le sue rappresentazioni.

### Esempio 2 — Perdita di semantica in Gerber
Una tasca modellistica è definita da:
- geometria  
- etichette LB  
- vincoli di simmetria  
- relazioni di cucitura  

Dopo esportazione:
- rimane solo la geometria  
- la semantica scompare  
- la tasca diventa un poligono generico

VISION può recuperare parte della semantica, ma il file non la conserva perché **la semantica non è un metadato: è la condizione di esistenza della forma**.

---

## 5. Conclusioni
Il file è un artefatto tecnico, non un fondamento concettuale.  
La forma precede il file perché:

- la forma è *intento*  
- il file è *implementazione*  
- l’intento è stabile  
- l’implementazione è contingente

VISION dimostra che la geometria può essere validata, purificata e ricostruita solo se trattata come entità logica, non archivistica.  
La transizione da un paradigma file‑centrico a uno intent‑centrico è il prerequisito per una vera interoperabilità industriale.

---

## Epilogo Nerd
Come direbbe Alphonse Elric in *Fullmetal Alchemist*:  
**“La forma è la verità. Il resto è solo il prezzo dell’equivalente scambio.”**
