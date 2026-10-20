# Homepage Labsens — 20 octubre 2026

Objetivo: reproducir el WordPress antes de introducir mejoras. Referencia pública inspeccionada en https://labsens.co/ y auditoría del 19 de octubre.

## Secciones editables

| Sección | Edición |
|---|---|
| Labsens · Carrusel | Diapositivas, imagen desktop/móvil, descripción, enlace, reproducción automática |
| Labsens · Categorías | Título, bloques reordenables con imagen/nombre/enlace |
| Labsens · Campaña | Título multilínea y colección opcional; tres instancias |
| Labsens · Banner kits | Imagen, título, texto, botón y enlace |
| Labsens · Marcas | Título y logos reordenables |
| Labsens · Recursos | Título y tarjetas con imagen, categoría editorial, título y enlace |

Las imágenes originales están en assets/labsens-home-*. Cada selector de imagen permite reemplazarlas desde Shopify; mientras no se elige otra, utiliza el archivo original del tema. Las secciones se pueden reordenar en el editor.

## Evidencia y decisiones

- Hero original: 500 px desktop / 365 px móvil; rotación cada 5 segundos. Dos imágenes independientes por dispositivo, no un recorte del mismo banner. Se conserva su contenido, incluso fechas de campañas antiguas.
- Categorías: seis columnas desktop y dos móvil. Se conserva la imagen que el sitio identifica visualmente como Pabilos aunque su archivo se llama Parafinas_Labsens.jpg.
- Enlaces inconsistentes de Ceras y Accesorios: imagen y título ahora usan el destino de la imagen original (/cera/ y /accesorios/). No se replicaron /ceras/ y /recipientes/. Se documenta esta normalización explícitamente.
- Las tres campañas no mostraban productos en la referencia. Se mantienen los títulos y espacios; no se inventan productos. Permiten seleccionar una colección después de importar catálogo.
- Recursos editoriales conservados: Colorantes, Weissen y Cera de palma, con enlaces originales hasta migrar artículos.
- No se activa el popup de regalo: falta confirmar el destino de la descarga, consentimiento e integración. Esta dependencia impide considerar terminada la migración funcional completa del homepage.
- Carrusel sin dependencia de Swiper: navegación anterior/siguiente, puntos, autoplay, pausa al interactuar/foco/hover y respeto por reduced motion. Se agrega control explícito de pausa accesible. El cambio de diapositiva es inmediato; no se reproduce la transición horizontal de Elementor.

## Fuentes de imágenes

Todas bajo https://labsens.co/wp-content/uploads/:

- 2026/06/logo-labsens.png y 2026/01/LABSENS_BANNERWEB-GUIAPRACTICA_PORTADA-scaled.png.
- 2026/09/Banner-movile.webp y 2025/07/LabSens_Hero_Lanzamiento_mob.jpg.
- 2025/06/CTA_Labsesns_home.jpg.
- Imágenes de categorías, marcas y artículos: rutas registradas en ../audit/2026-10-19/homepage-desktop.json.

## Validación

- Render en tema de desarrollo; revisión de escritorio 1280×720 y móvil 390×844, sin overflow horizontal.
- Probado cambio de diapositiva, puntos y selección responsive de imagen; enlaces de campaña comprobados sin enviar mensajes ni comprar.
- Revisión independiente de código: corregidos reinicio de autoplay con foco dentro del carrusel y producto de colección sin imagen.
- Theme Check mantiene exclusivamente las incidencias de baseline: dos UnknownFilter de applicable_disclosures y seis warnings anteriores. JavaScript pasa node --check.
- Validador del plugin Shopify no disponible por dependencia @shopify/theme-check-common ausente; se utilizó Theme Check oficial y carga real de secciones en Shopify.
- Colecciones con productos reales y edición interactiva de imágenes en Theme Editor pendientes de pruebas con catálogo. Schema aceptado por Shopify.
- Sin publicación del tema live. Capturas disponibles como entregables en la tarea.
