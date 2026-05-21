# kangaroo-aj-website

Sitio web corporativo de Kangaroo AJ S.A.S. construido con React 19, TypeScript, Vite, TanStack Router/Start, TanStack React Query, Tailwind CSS 4, Zod y React Hook Form.

## Objetivo

Landing page profesional, bilingüe y responsive para presentar servicios de desarrollo de software, automatización de procesos, plataformas de datos e IA aplicada para operaciones B2B.

## Stack principal

- React 19
- TypeScript
- Vite
- TanStack Router / TanStack Start
- TanStack React Query
- Tailwind CSS 4
- Zod
- React Hook Form
- Lucide React
- shadcn-style aliases preparados en `components.json`

## Estructura del proyecto

```txt
src/
  app/                 # Providers y composición raíz de la app
  assets/              # Imágenes y recursos importados por Vite
  components/          # Componentes reutilizables de UI/base
  config/              # Configuración y validación de variables de entorno
  features/            # Módulos funcionales por dominio
    consent/
    contact/
    i18n/
    landing/
    region/
  lib/                 # Utilidades compartidas
  routes/              # Rutas de TanStack Router
  server-utils/        # Utilidades de SSR/error handling para TanStack Start
  styles/              # Estilos globales mínimos organizados por responsabilidad
```

## Requisitos

- Node.js 22+
- npm 10+

## Instalación

```bash
npm install
```

## Comandos disponibles

```bash
npm run dev             # servidor local de desarrollo
npm run build           # build de producción
npm run build:dev       # build en modo development
npm run preview         # preview local del build
npm run typecheck       # validación TypeScript
npm run lint            # lint del proyecto
npm run lint:fix        # corrige problemas autofixables de ESLint/Prettier
npm run format          # formatea el proyecto con Prettier
npm run format:check    # verifica formato sin modificar archivos
npm run deploy:prepare  # build + fallback 404.html para GitHub Pages
```

## Variables de entorno

Copia `.env.example` a `.env.local` cuando necesites configurar analítica localmente.

```bash
cp .env.example .env.local
```

Variable disponible:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

No versionar `.env`, `.env.local` ni credenciales reales.

## GitHub Pages

El proyecto está configurado para desplegarse como GitHub Project Page en el repositorio:

```txt
kangaroo-aj-website
```

La configuración relevante está en `vite.config.ts`:

```ts
base: "/kangaroo-aj-website/";
```

El workflow está en:

```txt
.github/workflows/deploy.yml
```

El pipeline:

1. Instala dependencias con npm.
2. Ejecuta `npm run typecheck`.
3. Ejecuta `npm run lint`.
4. Ejecuta `npm run build`.
5. Copia `dist/client/index.html` a `dist/client/404.html` para evitar rutas rotas al recargar en GitHub Pages.
6. Publica `dist/client` con GitHub Pages.

En GitHub, habilita Pages usando **GitHub Actions** como fuente de despliegue.

## Validación antes de publicar

```bash
npm install
npm run typecheck
npm run lint
npm run build
npm run preview
```

## Notas de arquitectura

- Las funcionalidades están separadas por `features` para evitar componentes monolíticos.
- La configuración de entorno está validada con Zod.
- El formulario de contacto usa React Hook Form + Zod para evitar validaciones duplicadas.
- El provider de región está separado del hook `useRegion` para mantener compatibilidad con Fast Refresh.
- Los enlaces a páginas legales usan `import.meta.env.BASE_URL`, por lo que funcionan bajo el base path de GitHub Pages.
- Los assets importados desde `src/assets` son procesados por Vite.
- Los archivos generados, builds y configuraciones locales están excluidos en `.gitignore`.
