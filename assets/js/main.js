
// Accessibility and nav active state
(function(){
  const path = location.pathname.replace(/\/index\.html$/, '/');
  document.querySelectorAll('.site-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if ((path === '/' && href === '/') || (href !== '/' && path.endsWith(href))) {
      a.setAttribute('aria-current', 'page');
    }
  });
  const year = new Date().getFullYear();
  const y = document.getElementById('year');
  if (y) y.textContent = `© ${year}`;

  // Mobile nav toggle
  const btn = document.querySelector('.nav-toggle');
  const menu = document.getElementById('menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();

// i18n: ES default, EN optional
(function(){
  const dict = {
    "nav.home": {"es":"Inicio","en":"Home"},
    "nav.services":{"es":"Servicios","en":"Services"},
    "nav.about":{"es":"Nosotros","en":"About"},
    "nav.contact":{"es":"Contacto","en":"Contact"},
    "nav.privacy":{"es":"Privacidad","en":"Privacy"},
    "nav.terms":{"es":"Términos","en":"Terms"},

    "footer.address":{"es":"Calle 12 # 5-32 OF 1602, Edificio Corkidi, Bogotá, Colombia","en":"Calle 12 # 5-32 OF 1602, Edificio Corkidi, Bogotá, Colombia"},

    // Home
    "home.hero.title":{"es":"Software, moda y agricultura con calidad global.","en":"Software, apparel, and agriculture with global quality."},
    "home.hero.subtitle":{"es":"Desarrollamos software, diseñamos y comercializamos prendas, y cultivamos con enfoque sostenible.","en":"We build software, design and market apparel, and run agricultural activities with a sustainable approach."},
    "home.hero.cta":{"es":"Contáctanos","en":"Contact us"},

    "home.card.software.title":{"es":"Software","en":"Software"},
    "home.card.software.text":{"es":"Desarrollo, mantenimiento y consultoría. Exportamos servicios para clientes en Estados Unidos y Europa.","en":"Development, maintenance, and consulting. We export services for clients in the U.S. and Europe."},
    "home.card.software.link":{"es":"Ver servicios","en":"See services"},

    "home.card.fashion.title":{"es":"Moda","en":"Apparel"},
    "home.card.fashion.text":{"es":"Diseño y comercialización de prendas y accesorios con producción responsable.","en":"Design and commercialization of apparel and accessories with responsible production."},
    "home.card.fashion.link":{"es":"Ver línea","en":"See line"},

    "home.card.agri.title":{"es":"Agricultura","en":"Agriculture"},
    "home.card.agri.text":{"es":"Actividades agropecuarias y manejo de predios rurales.","en":"Agricultural activities and rural land management."},
    "home.card.agri.link":{"es":"Ver enfoque","en":"See approach"},

    // Servicios
    "services.title":{"es":"Servicios","en":"Services"},
    "services.software.title":{"es":"Software","en":"Software"},
    "services.software.li1":{"es":"Desarrollo de software a medida (web y móvil).","en":"Custom software development (web and mobile)."},
    "services.software.li2":{"es":"Mantenimiento evolutivo y correctivo.","en":"Evolutionary and corrective maintenance."},
    "services.software.li3":{"es":"Consultoría en arquitectura, calidad y DevOps.","en":"Consulting in architecture, quality, and DevOps."},
    "services.software.li4":{"es":"Exportación de servicios para clientes en EE. UU. y Europa.","en":"Service export for clients in the U.S. and Europe."},

    "services.fashion.title":{"es":"Moda","en":"Apparel"},
    "services.fashion.li1":{"es":"Diseño de prendas y accesorios.","en":"Design of garments and accessories."},
    "services.fashion.li2":{"es":"Comercialización y distribución.","en":"Commercialization and distribution."},
    "services.fashion.li3":{"es":"Desarrollo de marca y catálogos.","en":"Brand and catalog development."},

    "services.agri.title":{"es":"Agricultura","en":"Agriculture"},
    "services.agri.li1":{"es":"Gestión de predios rurales y cultivos.","en":"Rural property and crop management."},
    "services.agri.li2":{"es":"Encadenamiento productivo y comercial.","en":"Productive and commercial linkages."},

    // Nosotros
    "about.title":{"es":"Nosotros","en":"About"},
    "about.mission.title":{"es":"Misión","en":"Mission"},
    "about.mission.text":{"es":"Crear valor sostenible con tecnología, diseño y campo, sirviendo con calidad a clientes locales e internacionales.","en":"Create sustainable value through technology, design, and agriculture, serving local and international clients with quality."},
    "about.values.title":{"es":"Valores","en":"Values"},
    "about.values.v1":{"es":"Integridad y cumplimiento.","en":"Integrity and reliability."},
    "about.values.v2":{"es":"Calidad y mejora continua.","en":"Quality and continuous improvement."},
    "about.values.v3":{"es":"Sostenibilidad y respeto por las personas.","en":"Sustainability and respect for people."},
    "about.values.v4":{"es":"Orientación al cliente global.","en":"Global customer focus."},
    "about.location.title":{"es":"Ubicación","en":"Location"},
    "about.location.text":{"es":"Bogotá, Colombia.","en":"Bogotá, Colombia."},

    // Contacto
    "contact.title":{"es":"Contacto","en":"Contact"},
    "contact.form.name":{"es":"Nombre","en":"Name"},
    "contact.form.email":{"es":"Correo electrónico","en":"Email"},
    "contact.form.phone":{"es":"Teléfono","en":"Phone"},
    "contact.form.message":{"es":"Mensaje","en":"Message"},
    "contact.form.help":{"es":"Al enviar se abrirá tu cliente de correo. No almacenamos tus datos.","en":"Submitting will open your email client. We do not store your data."},
    "contact.form.submit":{"es":"Enviar","en":"Send"},
    "contact.info.title":{"es":"Oficina","en":"Office"},
    "contact.info.address":{"es":"Calle 12 # 5-32 OF 1602, Edificio Corkidi, Bogotá, Colombia","en":"Calle 12 # 5-32 OF 1602, Edificio Corkidi, Bogotá, Colombia"},
    "contact.info.maplink":{"es":"Ver en OpenStreetMap","en":"View on OpenStreetMap"},

    // Privacidad
    "privacy.title":{"es":"Política de Privacidad","en":"Privacy Policy"},
    "privacy.p1":{"es":"Esta política describe el tratamiento de datos personales por parte de Kangaroo AJ S.A.S. conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013 en Colombia.","en":"This policy describes personal data processing by Kangaroo AJ S.A.S. in accordance with Colombian Law 1581 of 2012 and Decree 1377 of 2013."},
    "privacy.controller.title":{"es":"Responsable del Tratamiento","en":"Controller"},
    "privacy.controller.address":{"es":"Calle 12 # 5-32 OF 1602, Edificio Corkidi, Bogotá, Colombia","en":"Calle 12 # 5-32 OF 1602, Corkidi Building, Bogotá, Colombia"},
    "privacy.purpose.title":{"es":"Finalidades","en":"Purposes"},
    "privacy.purpose.li1":{"es":"Gestionar solicitudes de contacto y relaciones comerciales.","en":"Manage contact requests and business relationships."},
    "privacy.purpose.li2":{"es":"Cumplir obligaciones legales y contractuales.","en":"Comply with legal and contractual obligations."},
    "privacy.rights.title":{"es":"Derechos del titular","en":"Data subject rights"},
    "privacy.rights.li1":{"es":"Conocer, actualizar y rectificar sus datos.","en":"Know, update, and rectify your data."},
    "privacy.rights.li2":{"es":"Solicitar prueba de autorización y ser informado sobre el uso.","en":"Request proof of authorization and be informed about use."},
    "privacy.rights.li3":{"es":"Presentar quejas ante la SIC.","en":"Lodge complaints before the SIC."},
    "privacy.proc.title":{"es":"Procedimientos","en":"Procedures"},
    "privacy.proc.p":{"es":"Para ejercer derechos, escriba a info@kangarooaj.com indicando su petición. Responderemos dentro de los términos legales.","en":"To exercise rights, email info@kangarooaj.com stating your request. We will respond within legal timeframes."},
    "privacy.security.title":{"es":"Seguridad y transferencia","en":"Security and transfer"},
    "privacy.security.p":{"es":"Aplicamos medidas razonables de seguridad. Si transferimos datos fuera de Colombia, lo haremos bajo garantías adecuadas.","en":"We apply reasonable security measures. If data is transferred outside Colombia, it will be under appropriate safeguards."},
    "privacy.note":{"es":"Este sitio no usa cookies de seguimiento ni servicios de pago por defecto.","en":"This site does not use tracking cookies nor paid services by default."},
    "privacy.updated":{"es":"Última actualización: {date}".replace("{date}", new Date().toISOString().slice(0,10)), "en":"Last updated: {date}".replace("{date}", new Date().toISOString().slice(0,10))},

    // Términos
    "terms.title":{"es":"Términos y Condiciones","en":"Terms and Conditions"},
    "terms.use.title":{"es":"Uso del sitio","en":"Site use"},
    "terms.use.p":{"es":"El acceso a este sitio implica aceptación de estos términos. No podrá usar el sitio para actividades ilícitas ni vulnerar derechos de terceros.","en":"Accessing this site implies acceptance of these terms. You may not use the site for unlawful activities nor infringe third-party rights."},
    "terms.content.title":{"es":"Contenido","en":"Content"},
    "terms.content.p":{"es":"El contenido es informativo. Puede cambiar sin previo aviso. No garantizamos disponibilidad continua.","en":"Content is informational and may change without notice. Continuous availability is not guaranteed."},
    "terms.liability.title":{"es":"Responsabilidad","en":"Liability"},
    "terms.liability.p":{"es":"En la medida permitida por la ley colombiana, no seremos responsables por daños indirectos derivados del uso del sitio.","en":"To the extent allowed by Colombian law, we are not liable for indirect damages arising from use of the site."},
    "terms.ip.title":{"es":"Propiedad intelectual","en":"Intellectual property"},
    "terms.ip.p":{"es":"Las marcas y contenidos pertenecen a sus titulares. No se otorgan licencias por el uso del sitio.","en":"Trademarks and content belong to their owners. No licenses are granted by using the site."},
    "terms.law.title":{"es":"Ley aplicable","en":"Governing law"},
    "terms.law.p":{"es":"Se rigen por la ley colombiana. Cualquier disputa se resolverá ante los jueces competentes de Bogotá.","en":"Governed by Colombian law. Any dispute will be resolved before the competent courts in Bogotá."},
    "terms.updated":{"es":"Vigentes desde: {date}".replace("{date}", new Date().toISOString().slice(0,10)), "en":"Effective as of: {date}".replace("{date}", new Date().toISOString().slice(0,10))}
  };

  const setLang = (lang) => {
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'es');
    localStorage.setItem('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] && dict[key][lang]) el.textContent = dict[key][lang];
    });
    // Toggle pressed states
    const esBtn = document.getElementById('lang-es');
    const enBtn = document.getElementById('lang-en');
    if (esBtn && enBtn) {
      esBtn.setAttribute('aria-pressed', lang === 'es' ? 'true' : 'false');
      enBtn.setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false');
    }
  };

  const saved = localStorage.getItem('lang');
  const initial = saved || (navigator.language || 'es').toLowerCase().startsWith('en') ? 'en' : 'es';
  setLang(initial);

  const esBtn = document.getElementById('lang-es');
  const enBtn = document.getElementById('lang-en');
  if (esBtn) esBtn.addEventListener('click', () => setLang('es'));
  if (enBtn) enBtn.addEventListener('click', () => setLang('en'));
})();
