# Importación del catálogo · 22 de octubre de 2026

Tienda verificada: labsens-co.myshopify.com; dominio permanente labsens-ptjm0f07.myshopify.com, ambos visibles en Configuración → Dominios. Shop ID 84499792121.

## Resultado

- 121 productos únicos, 269 variantes: 32 simples y 89 variables.
- 106 activos publicados en Online Store; 15 borradores (incluye el producto privado del origen).
- 115 imágenes importadas en estado READY; 14 productos sin imágenes en el CSV conservan esa ausencia.
- 11 colecciones automáticas por tipo: Accesorios, Aditivos, Cera, Colorantes, Envases, Eventos, Pabilos, Fragancias, sus dos subtipos y Parafinas. Parafinas no tiene productos en este CSV.
- Conservados los IDs de los tres productos del piloto y sus variantes. No se duplicaron productos.
- Propiedades como rich text; notas olfativas como texto multilínea sin etiquetas HTML. Recomendaciones y usos enlazados a los metaobjects existentes; excepciones y controles de ocultación conservados.
- Cada variante de WooCommerce conserva su ID en labsens.source_variation_id. Los productos simples conservan labsens.source_id en el producto.
- Inventario sin seguimiento por instrucción del negocio; precios COP, opciones, SKU y condición de envío verificados.

## Causa y corrección del piloto

La API confirmó que Shopify rechaza la secuencia ` / ` en el nombre de la opción `Cantidad / Tamaño`. Se usa `Presentación`; sus valores, SKU y precios no se modifican.

## Datos que requieren completar en el origen

- Cinco precios ausentes en productos/variantes en borrador. Shopify representa el precio vacío como cero; estos productos NO fueron publicados y deben recibir un precio antes de activarse.
- Catorce productos sin foto, incluido Cairo bajo cero que está activo en origen. No se inventaron imágenes.
- SKU vacíos y el SKU repetido del origen se conservaron; no se generaron identificadores comerciales artificiales.
- La categoría de taxonomía estándar de Shopify no se infiere automáticamente. La organización migrada usa tipos, etiquetas y colecciones nativas.
- SEO, redirecciones de URLs de WordPress y artículos del blog corresponden a la siguiente fase.

## Evidencia local

Fuera del repositorio: work/migration/catalog-payloads.json, import-journal.json, after-catalog.json, verification-summary.json y publication-verification.json. El CSV original y los datos completos no se publican en GitHub.
