# Desarrollo local

## Entorno inicial

Inspección: 2026-10-19. Git y GitHub CLI disponibles. Shopify CLI instalado: **3.87.0**.
No se ha iniciado sesión ni desplegado un theme a Shopify en esta preparación.

## Repositorios

- `origin`: https://github.com/abelvictor11/labsens.git
- `upstream`: https://github.com/Shopify/horizon.git
- Rama inicial: `main`.
- Base fijada en el commit de Horizon 4.3.0 indicado en BASELINE.md; no actualizar automáticamente desde upstream/main.

## Próxima conexión

1. Recibir dominio `.myshopify.com` y acceso autorizado a temas.
2. Revisar la compatibilidad del CLI y volver a ejecutar Theme Check con una versión vigente antes de personalizar.
3. Previsualizar mediante `shopify theme dev --store <dominio.myshopify.com>` desde la raíz del repositorio. El dominio es un marcador, no una tienda configurada.
4. Conectar una rama de staging a un theme no publicado mediante la integración oficial de GitHub.
5. Reservar la conexión de producción y publicación para la fase de lanzamiento.

La previsualización no es offline: Shopify renderiza Liquid y proporciona datos del catálogo.

## Trabajo cotidiano

Crear ramas de trabajo desde main. Antes de integrar, revisar diferencias, ejecutar `shopify theme check`, comparar escritorio/móvil y comprobar la edición de secciones.
Los cambios del editor de Shopify generan commits en la rama conectada. Sincronizar antes de editar y resolver explícitamente cambios en templates y config/settings_data.json; no sobrescribirlos automáticamente.
Los datos de catálogo, pedidos y clientes no se respaldan en este repositorio.

## Actualizaciones de Horizon

Conservar el remoto upstream. Revisar cada actualización en una rama separada, compararla con la versión fijada y probarla antes de integrar. No ejecutar pull de upstream/main directamente sobre producción.
