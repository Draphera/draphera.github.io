const translations = {
  it: {
    "common.skip": "Salta al contenuto",
    "common.openMenu": "Apri menu",
    "nav.ecosystem": "Ecosistema",
    "nav.research": "Ricerca",
    "nav.founder": "Founder",
    "nav.manifesto": "Manifesto",
    "nav.contact": "Contatti",
    "nav.access": "Accesso",
    "nav.privacy": "Privacy",
    "cta.accessRequest": "Richiedi Accesso",
    "cta.visionExplore": "Esplora VISION",
    "cta.openVision": "Apri VISION Observatory",
    "cta.discoverVision": "Scopri VISION",
    "brand.claim": "Nato dai Drappeggi. Costruito per il Futuro.",
    "brand.note": "Draphera è un ecosistema indipendente per tecnologie vettoriali, modellistica tecnica e infrastrutture digitali.",
    "brand.rights": "Tutti i diritti riservati.",
    "home.heroEyebrow": "Draphera Ecosystem",
    "home.heroTitle": "Nato dai Drappeggi.<br>Costruito per il Futuro.",
    "home.heroLead": "Draphera costruisce un ecosistema dedicato a modellistica tecnica, dati vettoriali, interoperabilità e infrastrutture digitali per la conoscenza industriale.",
    "home.problemEyebrow": "Il problema",
    "home.problemTitle": "La moda tecnica parla ancora linguaggi frammentati.",
    "home.problemText": "Oggi gran parte della conoscenza industriale vive dentro formati chiusi, archivi difficili da leggere, software non interoperabili e processi che disperdono il valore tecnico dei modelli.",
    "home.missionEyebrow": "Missione",
    "home.missionTitle": "Draphera nasce per ricostruire il ponte tra creatività, geometria e infrastruttura.",
    "home.missionText": "Dalla modellistica tecnica ai sistemi vettoriali avanzati, Draphera trasforma il sapere industriale in dati leggibili, verificabili e pronti per il futuro.",
    "home.ecosystemTitle": "Un ecosistema, non un singolo prodotto.",
    "home.visionTitle": "VISION è il motore tecnico sotto Draphera.",
    "home.visionText": "VISION è l'infrastruttura di ricerca e sviluppo dedicata a geometria, formati CAD, validazione deterministica, interoperabilità e asset tecnici.",
    "home.manifestoEyebrow": "Manifesto breve",
    "home.manifestoTitle": "Crediamo che i dati tecnici appartengano ai loro creatori.",
    "home.betaEyebrow": "Anteprima privata",
    "home.betaTitle": "Draphera è attualmente in anteprima privata.",
    "home.betaText": "Stiamo costruendo il primo nucleo dell'ecosistema con partner selezionati, creator tecnici, aziende e professionisti della modellistica.",
    "manifesto.eyebrow": "Manifesto",
    "manifesto.title": "Manifesto Draphera",
    "manifesto.lead": "Per una moda tecnica più aperta, verificabile e duratura.",
    "ecosystem.eyebrow": "Architettura",
    "ecosystem.title": "L'Ecosistema Draphera",
    "ecosystem.lead": "Draphera connette identità, ricerca tecnica, AI e asset digitali in un portale pensato per il futuro industriale della moda.",
    "vision.eyebrow": "Osservatorio tecnico",
    "vision.title": "VISION: l'infrastruttura tecnica di Draphera",
    "vision.lead": "VISION è il laboratorio tecnico dove Draphera sviluppa il proprio fondamento: geometria, formati CAD, validazione deterministica, reverse engineering, interoperabilità e asset digitali certificabili.",
    "contact.eyebrow": "Anteprima privata",
    "contact.title": "Richiedi Accesso a Draphera",
    "contact.lead": "Stiamo costruendo il primo nucleo dell'ecosistema con partner selezionati, creator tecnici, aziende e professionisti della modellistica.",
    "contact.asideTitle": "Accesso su invito",
    "contact.asideText": "Il form è statico e pronto per integrazione futura. Nessun dato viene inviato finché non sarà collegato un servizio di raccolta o un backend dedicato.",
    "privacy.eyebrow": "Informativa",
    "privacy.title": "Privacy",
    "privacy.lead": "Questa pagina descrive in modo essenziale come Draphera gestisce i dati raccolti attraverso il sito statico.",
    "privacy.dataTitle": "Dati raccolti",
    "privacy.dataText": "Il sito è statico. Il modulo di accesso non invia dati finché non sarà collegato a un servizio dedicato o a un backend futuro.",
    "privacy.cookiesTitle": "Cookie e tracciamento",
    "privacy.cookiesText": "La versione attuale non include cookie di profilazione. Le preferenze di tema e lingua possono essere salvate localmente nel browser.",
    "privacy.linksTitle": "Link esterni",
    "privacy.linksText": "Il sito può collegare risorse esterne, inclusi VISION Observatory e canali social. Tali servizi hanno proprie informative e impostazioni privacy.",
    "privacy.contactTitle": "Contatti",
    "privacy.contactText": "Per richieste relative a Draphera, usa il modulo di accesso quando sarà integrato o i canali ufficiali indicati nel footer.",
    "form.name": "Nome",
    "form.email": "Email",
    "form.role": "Azienda / ruolo",
    "form.interest": "Area di interesse",
    "form.message": "Messaggio",
    "form.staticStatus": "Il form è pronto per integrazione futura. Nessun dato è stato inviato."
  }
};

const pageTitles = {
  home: "Draphera - Nato dai Drappeggi. Costruito per il Futuro.",
  manifesto: "Manifesto Draphera",
  ecosystem: "L'Ecosistema Draphera",
  vision: "VISION: l'infrastruttura tecnica di Draphera",
  contact: "Richiedi Accesso a Draphera",
  founder: "Il Fondatore - Draphera",
  privacy: "Privacy - Draphera"
};

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("[data-header]");
  const menu = document.querySelector("[data-menu]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const themeToggle = document.querySelector("[data-theme-toggle]");
  const themeIcon = document.querySelector("[data-theme-icon]");
  const form = document.querySelector("[data-static-form]");
  const formStatus = document.querySelector("[data-form-status]");
  const yearTargets = document.querySelectorAll("[data-year]");
  const supportedLanguages = ["it"];

  yearTargets.forEach((target) => {
    target.textContent = String(new Date().getFullYear());
  });

  const getInitialLanguage = () => {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get("lang");
    const fromStorage = localStorage.getItem("draphera-lang");
    const browserLanguage = (navigator.language || "it").slice(0, 2).toLowerCase();
    return [fromUrl, fromStorage, browserLanguage, "it"].find((lang) => supportedLanguages.includes(lang));
  };

  const localizeLinks = (lang) => {
    document.querySelectorAll("a[href$='.html'], a[href*='.html#']").forEach((link) => {
      const url = new URL(link.getAttribute("href"), window.location.href);
      if (url.origin !== window.location.origin) return;
      url.searchParams.set("lang", lang);
      link.setAttribute("href", `${url.pathname.split("/").pop() || "index.html"}${url.search}${url.hash}`);
    });
  };

  const applyLanguage = (lang) => {
    const dictionary = translations[lang] || translations.it;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const value = dictionary[node.dataset.i18n];
      if (value) node.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((node) => {
      const value = dictionary[node.dataset.i18nHtml];
      if (value) node.innerHTML = value;
    });

    document.querySelectorAll("[data-lang-option]").forEach((button) => {
      const isActive = button.dataset.langOption === lang;
      button.toggleAttribute("aria-current", isActive);
    });

    const page = document.documentElement.dataset.page;
    if (page && pageTitles[page]) {
      document.title = pageTitles[page];
      const ogTitle = document.querySelector("meta[property='og:title']");
      if (ogTitle) ogTitle.setAttribute("content", pageTitles[page]);
    }

    localizeLinks(lang);
    localStorage.setItem("draphera-lang", lang);
  };

  const setHeaderState = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const applyTheme = (theme) => {
    const isLight = theme === "light";
    document.body.classList.toggle("light-mode", isLight);
    if (themeIcon) {
      themeIcon.textContent = isLight ? "☀" : "☾";
    }
    localStorage.setItem("draphera-theme", theme);
  };

  const themeFromUrl = new URLSearchParams(window.location.search).get("theme");
  const savedTheme = localStorage.getItem("draphera-theme");
  if (themeFromUrl === "light" || themeFromUrl === "dark") {
    applyTheme(themeFromUrl);
  } else if (savedTheme) {
    applyTheme(savedTheme);
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const nextTheme = document.body.classList.contains("light-mode") ? "dark" : "light";
      applyTheme(nextTheme);
    });
  }

  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.dataset.langOption;
      if (!supportedLanguages.includes(lang)) return;
      const url = new URL(window.location.href);
      url.searchParams.set("lang", lang);
      window.history.replaceState({}, "", url);
      applyLanguage(lang);
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  applyLanguage(getInitialLanguage());

  if (form && formStatus) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      formStatus.textContent = translations[document.documentElement.lang]?.["form.staticStatus"] || translations.it["form.staticStatus"];
    });
  }
});
