# Video tutoriales — 2026-10-24

Página nativa publicada: `/pages/video-tutoriales`, ID 166221840633, plantilla `page.labsens-videos`.

Cinco videos originales de YouTube, en el mismo orden. Cabecera reutiliza `labsens-page-heading`; biblioteca independiente `labsens-video-library` con bloques editables de URL y título accesible. Se pueden añadir, reordenar y eliminar bloques desde el editor de temas.

Cuadrícula de tres columnas, separación y márgenes de 20 px, proporción 16:9; una columna bajo 768 px. Sin reproducción automática. Se conservan los reproductores originales de YouTube con carga diferida.

Verificación: cinco IDs de videos coinciden con el sitio original; reproductores visibles en escritorio; a 390 px se verificó una columna de 350 px sin desbordamiento horizontal. Theme Check sin incidencias nuevas; persisten dos errores y seis advertencias previos de Horizon. El toolkit no ejecutó su validador por dependencia ausente; se utilizó Shopify CLI.

Preparar en el corte de dominio la redirección `/video-tutoriales/` → `/pages/video-tutoriales`. El menú Aprende ya enlaza a Shopify.
