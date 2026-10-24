# Contacto y políticas — 2026-10-22

Implementado en labsens/main y desarrollo local.

## Páginas nativas

- Contacto: `/pages/contact`, ID 165969330425, plantilla `contact`.
- Calidad: `/pages/politicas-de-calidad`, ID 166158729465.
- Reclamaciones: `/pages/politica-de-reclamaciones-y-reposicion-de-producto`, ID 166158926073.
- Términos: `/pages/terminos-y-condiciones`, ID 166158860537.
- Privacidad: `/pages/politica-de-privacidad`, ID 166158827769.
- Eliminación: `/pages/politica-de-eliminacion-de-datos`, ID 166158893305.

Las políticas usan `page.labsens-policy`: cuerpo editable en Contenido > Páginas; sección con visibilidad del título y ancho. Contacto tiene título y formulario como secciones independientes; imagen, textos, datos y redes editables. Usa el formulario nativo Shopify.

Textos originales sin reformular condiciones. Comparación del texto completo ignorando espacios contra DOM original para términos, privacidad, eliminación y reclamaciones. Estructura de listas y encabezados preservada. Reclamaciones conserva negritas y listas anidadas. No se corrigieron discrepancias legales del original.

Header y footer enlazan las seis páginas. Los PDF de tratamiento de datos de clientes y proveedores están alojados en Archivos de Shopify y enlazados desde el footer. Aprende/blog migrado: ver `blog.md`.

## Verificación

- Cinco rutas legales con título y cuerpo completos, sin errores Liquid ni desbordamiento a 1280 px.
- Contacto y eliminación revisados visualmente a 1280 y 390 px.
- Imagen de Contacto cargada; campos requeridos con validación nativa. No se envió correo de prueba.
- Theme Check: 2 errores y 6 advertencias preexistentes de Horizon; ninguna incidencia en las secciones nuevas.
- Plantillas subidas al theme 189331767545.
