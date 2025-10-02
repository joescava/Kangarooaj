# Kangaroo AJ S.A.S. · Sitio estático

Sitio corporativo responsive, accesible y sin dependencias de pago. Español e inglés.

## Estructura
Ver archivos en la raíz del ZIP. HTML, CSS y JS puros.

## Despliegue (0 costo)

### Opción A. GitHub Pages
1. Crea un repo en GitHub.
2. Sube **todo** el contenido del ZIP a la raíz del repo. Confirma que `CNAME` contenga `kangarooaj.com`.
3. Ve a **Settings → Pages → Source: Deploy from a branch → Branch: main / root**.
4. En **Custom domain** escribe `kangarooaj.com`. Guarda. Activa **Enforce HTTPS** cuando aparezca.
5. DNS en tu registrador:
   - `www.kangarooaj.com` → CNAME al host que indique GitHub Pages.
   - `kangarooaj.com` (apex) → usa los A/ALIAS que documenta GitHub Pages o habilita “CNAME flattening” si tu DNS lo soporta.
6. Espera propagación de DNS. Verifica HTTPS.

### Opción B. Netlify (gratis)
1. Entra a Netlify → **Add new site → Deploy manually** → arrastra el ZIP.
2. En **Domain settings** agrega `kangarooaj.com` y `www.kangarooaj.com`.
3. Apunta **www** con CNAME al subdominio de Netlify asignado.
4. Para el **apex** usa ALIAS/ANAME o la opción **Netlify DNS** si migras tus nameservers.

### Opción C. Cloudflare Pages (gratis)
1. Crea proyecto y sube el ZIP o conecta el repo.
2. En **Domains** añade `kangarooaj.com` y `www.kangarooaj.com`.
3. Si migras DNS a Cloudflare, usa **CNAME** para `www` y **CNAME flattening** para el apex.

## SEO y metadatos
- Títulos únicos, meta description, Open Graph y Twitter listos.
- `sitemap.xml` y `robots.txt` configurados con `https://kangarooaj.com`.
- JSON‑LD Organization con nombre legal, URL, dirección y Bogotá como foundingLocation.

## Accesibilidad
- Landmarks ARIA, orden de tabulación y foco visible.
- Contraste AA con paleta neutra.

## Rendimiento
- Imágenes optimizadas, lazy-loading y sin librerías pesadas.

## Personalización
- **Textos**: edita los HTML o usa las claves `data-i18n` y el diccionario en `assets/js/main.js` para ES/EN.
- **Correo `mailto:`**: en `contacto.html` cambia `info@kangarooaj.com`.
- **Teléfono**: en `contacto.html`, campo opcional.
- **Dominio**: si usas otro dominio, cambia `CNAME`, `sitemap.xml`, `robots.txt` y las URL absolutas en los `<meta>` y el JSON‑LD en cada página.

## Desarrollo local
Abre `index.html` en tu navegador. No requiere build.

## Licencia
MIT. Ver `LICENSE`.
