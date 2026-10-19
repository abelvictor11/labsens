# Auditoría inicial · Labsens

Fecha: **2026-10-19**. Fuente pública: https://labsens.co/.
Objetivo acordado: **reproducir fielmente el diseño actual antes de proponer mejoras**.
Este documento registra observaciones; no constituye un inventario completo ni una aprobación de cambios.

## Cobertura

| Superficie | URL | Referencias |
|---|---|---|
| Homepage | https://labsens.co/ | homepage-desktop / homepage-mobile |
| Colección Cera | https://labsens.co/categoria-producto/cera/ | collection-cera-desktop / collection-cera-mobile |
| PDP Cera de soya | https://labsens.co/tienda/cera/cera-de-soya/ | pdp-cera-de-soya-desktop / pdp-cera-de-soya-mobile |
| Contacto | https://labsens.co/contacto/ | contact-desktop / contact-mobile |
| Aprende | https://labsens.co/aprende/ | learn-desktop / learn-mobile |

Cada referencia cuenta con JSON (tokens, encabezados, enlaces, imágenes y hojas de estilo), TXT (DOM accesible) y JPEG en screenshots/.
Las imágenes son **capturas del viewport superior**, 1280×720 y 390×844 CSS px. No son capturas completas de cada página. Se descartaron las capturas largas porque su composición produjo duplicaciones. Los JSON/TXT incluyen el documento más allá del viewport.
El carrusel avanza automáticamente: las capturas desktop/móvil pueden mostrar diapositivas diferentes. No deducir diferencias responsive solamente a partir de la diapositiva.
El popup cuenta con evidencia JSON/TXT independiente; su archivo de imagen defectuoso se descartó.

## Identidad verificada

Valores extraídos del estilo calculado del body (Elementor kit 920), no aproximados desde una imagen:

| Token actual | Valor |
|---|---|
| primary / text | #313131 |
| secondary | #FDD5B0 |
| accent | #FFFFFF |
| cc2df78 | #FAF7EA |
| 55ba82d | #FDEFE2 |
| f4cfa48 | #FBBE9C |
| Familia global | Syne |
| Título principal configurado, desktop | 50px / 700 |
| Título secundario configurado, desktop | 30px / 700 |
| Texto configurado, desktop | 16px / 400 |
| Acento configurado, desktop | 18px / 600 |

Los tokens configurados no equivalen al estilo de todos los componentes. Por ejemplo, los títulos de categoría visibles tienen 18px/600 y los artículos destacados 21px/700 en la muestra desktop. Consultar [evidencia de tokens](../../design/tokens-observed.json).
Faltan mediciones sistemáticas de espaciados, radios, anchos y todos los breakpoints.

## Estructura que debe conservarse

### Global

Barra de envíos nacionales; logo; búsqueda; contacto; carrito; navegación de categorías y Aprende. En móvil la composición cambia a logo/contacto y una fila de búsqueda, carrito y menú. La barra de anuncios no aparece en la muestra móvil.
Footer con logo, sello visual de Wompi, categorías, Nosotros, legales, redes y datos de empresa. Botón flotante de WhatsApp.

### Homepage, orden observado

1. Cabecera y navegación.
2. Carrusel promocional; enlaces de WhatsApp y Hotmart detectados.
3. Compra por categorías: Ceras, Envases, Colorantes, Fragancias, Pabilos y Accesorios.
4. Fragancias temporada de Madres.
5. KIT DE MADRES: Alma femenina.
6. Nuestras ceras perfectas para esta temporada.
7. Banner educativo de kits, con CTA a tienda.
8. Trabajamos con los mejores.
9. Recursos educativos: Colorantes, Weissen y Cera de palma en esta visita.
10. Footer y WhatsApp.

Los títulos de campañas están presentes, pero la muestra no permite confirmar el contenido de todos sus listados dinámicos. No inventar productos para llenar estas zonas.
Popup observado: regalo de plantilla de costeos, nombre y correo, CTA de descarga. No se envió el formulario ni se verificó su destino.

### Colección Cera

Título, filtros por categorías en desktop y tarjetas con categoría, nombre y rango de precio. Tres productos observados: Cera Akosense, Cera de soya y Cera de Vaso. La muestra móvil no muestra el título de filtros; falta probar su interacción específica.

### PDP Cera de soya

Imagen a la izquierda e información a la derecha en desktop; nombre, rango de precio, descripción, tres acordeones (Propiedades, Recomendaciones, Modos de uso), beneficios y botón Comprar por Whatsapp. Relacionados y footer.
Se abrió Propiedades: “Ideal para velas aromáticas” y punto de fusión entre 45°C y 48°C. Ver pdp-propiedades.txt.
**No se observó selector de variantes ni botón de añadir al carrito en esta PDP.** No asumir que el rango de precios equivale a un flujo de selección operativo. Antes de implementar la compra en Shopify, confirmar el comportamiento deseado y revisar otras PDP. La fidelidad visual y el alcance transaccional deben distinguirse.

### Contacto y Aprende

Contacto presenta formulario, dirección, teléfonos, correo y redes. No se enviaron datos.
Aprende contiene un índice editorial con guías sobre ceras, fragancias, pabilos, colorantes y ventas. El detalle de artículos aún no fue auditado.

## Dependencias observadas, pendientes de equivalencia

Los recursos cargados identifican Hello Elementor, Elementor/Pro, WooCommerce, JetEngine y un plugin de envíos TCC. Esto acredita presencia de recursos, no funcionamiento ni configuración interna.
Wompi aparece visualmente en el footer; falta verificar integración real. WhatsApp y Hotmart están enlazados. Formularios, descarga, analítica, envíos y pagos necesitan auditoría funcional y acceso autorizado antes de migrarse.

## Hallazgos para decidir, sin aplicar cambios

- Ceras tiene enlaces distintos entre imagen (/cera/) y título (/ceras/).
- Accesorios enlaza /accesorios/ en una zona y /recipientes/ en otra.
- Aparece texto Lorem ipsum después del footer.
- Títulos de campañas de Madres presentes en la visita de octubre.
- PDP de muestra orientada a WhatsApp, sin selector de compra visible.

Registrar estos casos y acordar su tratamiento; no corregirlos silenciosamente ni convertirlos automáticamente en requisitos de reproducción de errores.

## Próxima documentación

- Capturas por sección para completar la referencia visual más allá del primer viewport.
- Menú móvil abierto, búsqueda, carrito, otros estados del carrusel y formularios.
- Una PDP por familia y casos agotados, variantes y cantidades.
- Artículo, políticas, tutoriales y resto de colecciones.
- Catálogo exportado: SKU, opciones, imágenes, precios e inventario.
- Mapa completo de redirecciones; urls-discovered.csv es sólo un inventario de enlaces encontrados, no un crawl completo ni un CSV de importación de redirects.
- Modelo de secciones editables y correspondencia de datos, basado en estas evidencias.

## Criterio para la implementación posterior

Comparar con el mismo viewport, contenido y estado de interacción. Preservar orden, tipografía, paleta, proporciones e imágenes. Registrar cualquier diferencia impuesta por Shopify. Proponer mejoras en una fase posterior separada.
