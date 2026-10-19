# Labsens tokens y componentes globales · Implementation Plan

**Goal:** reproducir identidad, header y footer actuales de Labsens sobre Horizon.
**Architecture:** conservar comercio nativo Horizon; añadir tokens derivados de ajustes globales y secciones independientes editables. No rediseñar ni publicar.
**Tech Stack:** Liquid, JSON, CSS, JavaScript nativo, Shopify CLI 4.8.2.
**Spec:** ../../audit/2026-10-19/README.md y ../../design/tokens-observed.json; instrucciones del usuario: empezar por tokens y continuar componentes globales.

## Restricciones

Syne; fondo #FAF7EA; texto #313131; secundario #FDD5B0; fidelidad desktop/móvil. Sin cambios en homepage ni catálogo en esta entrega. No guardar credenciales. Mantener funcionalidad de carrito Horizon.

## Tareas

- [x] Tokens: assets/labsens-tokens.css y snippets/labsens-tokens.liquid; conectar en layout/theme.liquid; paleta y tamaños en config/settings_data.json; controles en settings_schema.json. Reutilizar archivos originales y documentar fuentes.
- [x] Header: sections/labsens-header.liquid, snippets/labsens-navigation.liquid, assets/labsens-header.js; anuncio, logo, búsqueda, contacto, carrito nativo, navegación y desplegables. Menú Shopify opcional, bloques editables de respaldo.
- [x] Footer: sections/labsens-footer.liquid; logo/pagos, columnas de links y datos legales/redes editables. Mantener enlaces WordPress hasta migrar contenidos; no inventar destinos Shopify.
- [x] Conectar grupos header/footer. Verificar carga, fuentes, medidas, ausencia de overflow y acciones búsqueda/menú/carrito a 1280 y 390 px; teclado Escape ; fallback de enlaces y details conservado en HTML.
- [x] Validación Liquid/Theme Check comparada con baseline (2 errores preexistentes), revisión de diferencias, capturas y documentación. Commit y push al repositorio autorizado, sin publicar.

## Decisiones

El contenido de catálogo no existe aún en Shopify: usar los enlaces originales configurables evita navegación a colecciones inexistentes. Desacoplar estilo de cart drawer del header personalizado y reutilizar header-actions. El Lorem ipsum observado al pie no se reproduce como contenido comercial; se registra la omisión para revisión.
