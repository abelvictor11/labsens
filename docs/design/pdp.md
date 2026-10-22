# PDP Labsens — 22 de octubre de 2026

Referencia: captura de Porta mechas suministrada por el cliente.

## Implementación

- `product.json` y `product.labsens.json` usan la sección Labsens · Producto y una sección independiente Labsens · Relacionados.
- Columna de imagen vertical 0,775, borde fino y línea inferior; información a la derecha; fondo, tipografía y colores desde los tokens de Labsens.
- Título, precio, descripción, información técnica, beneficios y WhatsApp son bloques editables y reordenables. Precios y contenido básico provienen del producto nativo.
- Propiedades y notas usan metafields; recomendaciones y modo de uso usan referencias a instrucciones, con respaldo del perfil por tipo y controles para ocultar contenido vacío en origen.
- Relacionados: selección manual prioritaria o colección; filtro opcional por tipo, máximo cuatro tarjetas y exclusión del producto actual. Sin colección seleccionada se revisan los primeros 50 productos del catálogo. Para catálogos grandes debe seleccionarse una colección pertinente o productos manuales.
- La compra conserva el enlace de WhatsApp de la referencia. No incluye selector de variantes ni compra directa; deben validarse con una referencia de PDP variable antes de ampliar ese flujo.

## Verificación

- Porta mechas, Kit de iniciación y Fragancia -Arena rosada aparecen activos, publicados en dos canales y sin seguimiento de inventario en Admin.
- Recomendaciones específicas de Porta mechas asignadas y verificadas en el acordeón de la vista previa.
- Escritorio 1512 px y móvil 390 px: composición revisada. Ancho del documento móvil 390 px, sin desbordamiento.
- Dos tarjetas relacionadas reales disponibles en Porta mechas: el catálogo piloto contiene solo tres productos, no se duplican tarjetas para simular cuatro.
- Theme Check: ningún diagnóstico en las secciones nuevas; permanecen dos errores UnknownFilter y seis advertencias previas de Horizon.

## Pendientes del piloto, fuera del ajuste visual

- Resolver la importación de Colorante Amarillo, Cera de Vaso y Cera Akosense: seis productos preparados, tres presentes en Admin.
- Completar propiedades, notas olfativas limpias y trazabilidad de variantes del piloto.
- Afinar los pictogramas de beneficios con los recursos originales: los actuales son SVG aproximados.
- Los enlaces globales aún apuntan a WordPress hasta migrar las colecciones y páginas correspondientes.
