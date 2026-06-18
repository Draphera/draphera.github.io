const translations = {
  it: {
    "common.skip": "Salta al contenuto",
    "common.openMenu": "Apri menu",
    "nav.ecosystem": "Ecosistema",
    "nav.research": "Ricerca",
    "nav.blog": "Blog",
    "nav.about": "About Draphera",
    "nav.manifesto": "Manifesto",
    "nav.contact": "Contatti",
    "nav.access": "Accesso",
    "nav.privacy": "Privacy",
    "cta.accessRequest": "Richiedi Accesso",
    "cta.exploreEcosystem": "Esplora l'Ecosistema",
    "cta.openVision": "Apri VISION Observatory",
    "cta.discoverVision": "Scopri VISION",
    "cta.readManifesto": "Leggi il Manifesto",
    "brand.claim": "Nato dai Drappeggi. Costruito per il Futuro.",
    "brand.note": "Draphera è un ecosistema indipendente per tecnologie vettoriali, modellistica tecnica e infrastrutture digitali.",
    "brand.rights": "Tutti i diritti riservati.",
    "home.heroEyebrow": "Ecosistema di ricerca indipendente",
    "home.heroTitle": "Nato dai Drappeggi.<br>Costruito per il Futuro.",
    "home.heroLead": "Draphera costruisce un ecosistema dedicato alla modellistica tecnica, ai dati vettoriali e alla conoscenza industriale.",
    "home.problemEyebrow": "Il problema",
    "home.problemTitle": "La moda tecnica parla ancora linguaggi frammentati.",
    "home.problemText": "Molti dati tecnici vivono ancora dentro formati chiusi, archivi complessi, conoscenza frammentata e sistemi con scarsa interoperabilità.",
    "home.manifestoEyebrow": "Manifesto",
    "home.manifestoTitle": "Cinque principi per una conoscenza tecnica più leggibile.",
    "manifesto.eyebrow": "Manifesto",
    "manifesto.title": "Manifesto Draphera",
    "manifesto.lead": "Cinque principi per una conoscenza tecnica più aperta, leggibile e duratura.",
    "ecosystem.eyebrow": "Architettura essenziale",
    "ecosystem.title": "L'Ecosistema",
    "ecosystem.lead": "Draphera non è una piattaforma promessa: è un ecosistema di ricerca e infrastruttura concentrato su ciò che esiste oggi.",
    "vision.eyebrow": "Laboratorio tecnico",
    "vision.title": "VISION",
    "vision.lead": "Il laboratorio tecnico di Draphera.",
    "contact.eyebrow": "Accesso",
    "contact.title": "Richiedi Accesso a Draphera",
    "contact.lead": "Draphera è attualmente un ecosistema indipendente di ricerca e infrastruttura. Il modulo è predisposto per future integrazioni.",
    "contact.asideTitle": "Modulo statico",
    "contact.asideText": "Nessun dato viene inviato finché il form non sarà collegato a un servizio di raccolta o a un backend dedicato.",
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
  home: "Draphera - Ricerca, dati vettoriali e conoscenza industriale",
  manifesto: "Manifesto Draphera",
  ecosystem: "L'Ecosistema Draphera",
  vision: "VISION - Il laboratorio tecnico di Draphera",
  contact: "Richiedi Accesso a Draphera",
  about: "About Draphera",
  blog: "Journal - Draphera",
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
