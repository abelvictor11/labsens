# Blog Aprende — 2026-10-24

18 artículos publicados migrados desde el export nativo de WordPress, con contenido HTML completo, fechas originales, etiquetas e imágenes alojadas en Shopify. Ruta principal `/blogs/aprende`; `/pages/aprende` usa el mismo listado nativo.

## Edición

- Contenido > Entradas del blog: título, cuerpo, imagen, etiquetas y publicación. Plantilla `article.labsens`.
- Metafield de artículo `labsens.recommended_products`: lista de referencias a productos, fijada en el administrador. Conserva las recomendaciones del origen; oculta productos sin publicación.
- Editor de temas > Blogs > labsens: introducción y listado como secciones independientes.
- Editor de temas > Entradas del blog > labsens: cabecera y contenido como secciones independientes; títulos, relacionados, cantidad y CTA editables.
- Relacionados por etiquetas compartidas. Filtros por categorías originales; Weissen conserva Uncategorized.
- Comentarios: soporte del formulario nativo condicionado a la configuración del blog. No se importaron comentarios históricos ni se probó el envío.

## Verificación

18/18 artículos publicados con imagen; texto completo comparado con XML normalizando espacios. Todas las rutas revisadas a 390 px, con contenido y sin errores Liquid ni desbordamiento horizontal. Listado y artículo revisados en escritorio. Filtro fragancias: tres artículos; Uncategorized: Weissen. Primer artículo: tres productos recomendados y seis lecturas relacionadas.

Theme Check: sin incidencias en archivos nuevos. Persisten dos UnknownFilter de Horizon y seis advertencias preexistentes. El validador del toolkit no pudo cargar su dependencia de Theme Check; se usó Shopify CLI.

Tabla de pabilos y PDF legales alojados en Archivos de Shopify. Export XML y respuestas de API se mantienen fuera del repositorio.

## Antes del cambio de dominio

Importar y verificar `docs/migration/blog-redirects.csv` (preparado, no aplicado). Revisar redirecciones de categorías antiguas en la auditoría SEO global. Video-tutoriales migrado a `/pages/video-tutoriales`; ver `videos.md`. El listado conserva el orden original de los 18 artículos invirtiendo la página nativa de hasta 50 entradas; revisar estrategia de orden y filtros si el blog supera 50.
