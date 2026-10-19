# Base de Horizon

- Versión: **4.3.0**.
- Commit oficial: `6de238c5fc76a877a73beafc0e34be7b98284431` (mensaje: Horizon v4.3.0).
- Fuente: https://github.com/Shopify/horizon
- Conservamos LICENSE.md y el historial original.
- No existen tags remotos en la consulta realizada; la referencia reproducible es el SHA del commit.

## Validación inicial

Ejecutado localmente: `shopify theme check --output json`, con Shopify CLI **3.87.0**, sobre el código original sin modificaciones.
Resultado: **exit 1; 8 errores y 3 advertencias en 8 archivos**.

- 6 errores UniqueStaticBlockId.
- 2 errores UnknownFilter para applicable_disclosures.
- 2 advertencias UnclosedHTMLElement en bento-grid.
- 1 advertencia RemoteAsset.

[Reporte íntegro con rutas relativas](audit/2026-10-19/theme-check-baseline.json).

No se corrigieron ni silenciaron estos hallazgos: este commit preserva la base oficial. El CLI instalado es anterior a la versión disponible; la compatibilidad del analizador debe verificarse con una versión vigente antes de atribuir todos los hallazgos a defectos de Horizon.
No se ha probado renderizado ni checkout en Shopify: falta conectar la tienda.
