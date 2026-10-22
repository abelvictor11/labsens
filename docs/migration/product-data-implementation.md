# Configuración de instrucciones de producto · Labsens

## Estado verificado en Shopify
- Tienda: labsens-co.myshopify.com.
- 2 definiciones propias de metaobjects: Instrucciones de producto Labsens (27 entradas) y Perfil por tipo Labsens (9 entradas).
- 7 metafields de producto: propiedades, notas olfativas, ID origen, recomendaciones específicas, modo de uso específico, ocultar recomendaciones y ocultar modo de uso.
- 1 metafield de variante: ID de variación WooCommerce.
- Catálogo importado y verificado el 22 de octubre: 121 productos y 269 variantes; 106 activos publicados en Online Store y 15 borradores. 115 imágenes READY. Sin cambios en el blog.

## Cómo editar
1. Crear productos con los campos nativos de Shopify: nombre, descripción, fotos, precios, variantes, categoría, tipo y organización.
2. En Contenido → Metaobjects → Perfil por tipo Labsens, editar las instrucciones generales de cada tipo. El nombre del tipo debe coincidir con el campo nativo del producto.
3. En Instrucciones de producto Labsens, editar el texto compartido. Una edición afecta a los perfiles y productos que lo referencien.
4. Para una excepción, elegir Recomendaciones específicas o Modo de uso específico en el producto. Los controles Ocultar conservan los apartados sin contenido del sitio original.

Los artículos educativos de Aprende corresponden al blog y se migrarán por separado. Estas 27 entradas proceden exclusivamente de recomendaciones y modo_de_uso del CSV de productos.

## Contrato técnico real
- Tipo de instrucciones: labsens_product_guide. Claves de campos creadas por Shopify: titulo, clase_de_guia, contenido. La etiqueta visible clase_de_guia se cambió a Clase de instrucción; conservar la clave técnica.
- Tipo de perfil: labsens_product_type_profile. Campos: tipo_de_producto, recomendaciones, modo_de_uso.
- Metafields: labsens.properties, labsens.olfactory_notes, labsens.source_id, labsens.recommendations_guide, labsens.usage_guide, labsens.hide_recommendations, labsens.hide_usage; variante labsens.source_variation_id.
- Identificadores y correspondencias guardados localmente en work/migration, fuera del repositorio.

## Verificación local
121 correspondencias de producto comprobadas: ocultación → excepción → perfil por tipo resuelve al contenido original, incluidos los vacíos. 27 IDs únicos de instrucciones y 9 perfiles únicos. Solo se asignaron valores generales mayoritarios; las diferencias se conservan como excepciones.

## Estado después de la importación completa
- Importación completa aplicada: propiedades en rich text, notas limpias, referencias a instrucciones y trazabilidad por variante.
- PDP implementada con herencia por perfil, excepciones y controles de ocultación. Perfiles coinciden con los nueve tipos nativos.
- Revisar formato enriquecido contra el HTML original: los textos se cargaron mediante el editor, pero énfasis y listas requieren comparación visual antes de publicar. HTML original conservado localmente.
- Verificados todos los precios presentes, SKU, opciones, IDs, campos y fotos. Moneda COP; inventario sin seguimiento. Taller Fragancias y sus variantes agotadas permanecen en borrador. Los campos de precio ausentes en origen quedan en borradores y requieren completar su precio antes de publicar.
