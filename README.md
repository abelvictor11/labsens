# Labsens · Shopify theme

Migración fiel de https://labsens.co/ desde WordPress/WooCommerce a Shopify.
La primera fase conserva diseño, composición, contenidos y experiencia actuales. Las mejoras se proponen después, por separado.

## Base

Horizon **4.3.0**, de Shopify. Commit de origen: `6de238c5fc76a877a73beafc0e34be7b98284431`.
Los directorios del theme permanecen intactos respecto de ese commit. Se conserva el historial y la licencia original.
El README original está disponible en `git show 6de238c5fc76a877a73beafc0e34be7b98284431:README.md`.

- [Auditoría inicial y evidencias](docs/audit/2026-10-19/README.md)
- [Tokens de diseño observados](docs/design/tokens-observed.json)
- [Entorno y flujo local](docs/DEVELOPMENT.md)
- [Base y validación](docs/BASELINE.md)

## Estado

Base local preparada y documentación inicial. No hay personalización visual ni migración de catálogo todavía.
La conexión con una tienda Shopify queda pendiente de recibir su dominio `.myshopify.com` y acceso de desarrollo.

## Estructura

`assets`, `blocks`, `config`, `layout`, `locales`, `sections`, `snippets` y `templates` están en la raíz para la integración de temas con GitHub.
`docs` contiene documentación y evidencias; no es contenido de la tienda.

## Fuentes

- https://github.com/Shopify/horizon
- https://themes.shopify.com/themes/horizon/presets/horizon
- https://shopify.dev/docs/storefronts/themes/tools/github

La licencia de Shopify se conserva en [LICENSE.md](LICENSE.md).
