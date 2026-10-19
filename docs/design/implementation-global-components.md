# Tokens y componentes globales — 19 octubre 2026

Implementación sobre Horizon para reproducir Labsens. Referencia: auditoría `../audit/2026-10-19/README.md` y `tokens-observed.json`.

## Identidad

| Token | Valor observado | Control Shopify |
|---|---|---|
| Papel | #FAF7EA | Fondo de la paleta |
| Tinta | #313131 | Texto de la paleta |
| Durazno | #FDD5B0 | Color 1 |
| Suave | #FDEFE2 | Color 2 |
| Acento | #FBBE9C | Color 3 |
| Tipografía | Syne 400–800 | Labsens · Identidad / activar fuente |
| Títulos | 50, 30, 21, 18 px | Tipografía global |
| Texto | 16 px | Tipografía global |

`assets/labsens-tokens.css` define fuente local y constantes de espaciado/bordes; `snippets/labsens-tokens.liquid` conecta paleta y tipografía con Horizon. Se añadieron tamaños exactos 50/30/21 a las opciones nativas.

## Edición

- **Labsens · Header:** anuncio, logo, contacto, menú Shopify o nueve bloques de enlaces de respaldo. Búsqueda nativa y carrito Horizon. Dropdowns con teclado, cierre Escape y menú móvil. Navegación fija al desplazar.
- **Labsens · Footer:** logos, imagen de pagos, tres columnas editables (menú Shopify o texto enriquecido), redes, datos de empresa, créditos y URL de WhatsApp.
- Los enlaces de contenido siguen en WordPress hasta crear sus equivalentes Shopify; reemplazarlos en navegación y footer durante la migración.
- El logo de Wompi es una imagen visual de referencia; no configura métodos de pago.

## Procedencia

Logo horizontal: https://labsens.co/wp-content/uploads/2025/01/Labsens_logo_web.svg

Logo apilado: https://labsens.co/wp-content/uploads/2025/01/Logo_Favicon_labsens.svg

Pagos: https://labsens.co/wp-content/uploads/2025/01/Pagos-Wompi-logos-1.png

Iconos SVG extraídos del DOM público original. Syne local corresponde a la fuente usada en el sitio; licencia OFL en `../licenses/Syne-OFL.txt`.

## Verificación y límites

- Preview de desarrollo: 1280 y 390 px, sin desbordamiento horizontal. Revisión intermedia a 768 px.
- Fuente Syne cargada, fondo y alturas del header comprobados: escritorio 173 px y móvil 96 px; controles móviles fijos 50 px.
- Apertura de carrito vacío, búsqueda `cera` (ruta Shopify y estado sin resultados), apertura de menús, Escape y foco comprobados.
- Revisión de código: corregidos offsets de contenido sticky y contraste/recorte del contador móvil.
- Theme Check CLI 4.8.2: 2 errores `UnknownFilter applicable_disclosures` y 6 avisos ya presentes en Horizon. Sin incidencias adicionales de esta implementación. El validador del plugin no pudo ejecutarse por dependencia `@shopify/theme-check-common` ausente; se usó CLI oficial.
- Catálogo, homepage y PDP aún no migrados. No se pudo probar contador con productos reales ni resumen de compra con carrito lleno.
- Se omitió el Lorem ipsum al final del WordPress; queda registrado para revisión de fidelidad.
- Trabajo sobre tema de desarrollo y repositorio conectado no publicado. No se cambió el tema publicado.
