# Desarrollo local

## Entorno inicial

Inspección: 2026-10-19. Git y GitHub CLI disponibles. Shopify CLI instalado: **3.87.0**.
Sesión CLI autorizada y previsualización verificada el 2026-10-19.

## Repositorios

- `origin`: https://github.com/abelvictor11/labsens.git
- `upstream`: https://github.com/Shopify/horizon.git
- Rama inicial: `main`.
- Base fijada en el commit de Horizon 4.3.0 indicado en BASELINE.md; no actualizar automáticamente desde upstream/main.

## Flujo de conexión (referencia)

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

## Conexión verificada · 2026-10-19

- Tienda: `labsens-co.myshopify.com`.
- Publicado: Horizon, ID `189331407097` (sin cambios).
- GitHub: labsens/main, ID `189331767545`, no publicado.
- Desarrollo: ID `189332029689`.
- Preview local mientras el proceso siga activo: http://127.0.0.1:9292
- Preview remoto de desarrollo: https://labsens-co.myshopify.com/?preview_theme_id=189332029689

Usar Shopify CLI **4.8.2** para esta base. CLI 3.87.0 produjo rechazos de valores dinámicos de color y errores en cascada de bloques y plantillas durante la carga. Con 4.8.2, sin cambiar el código del theme, la homepage cargó correctamente en el navegador.
La versión 4.8.2 está instalada de forma aislada fuera del repositorio, en `../work/shopify-cli/node_modules/.bin/shopify`. Para reiniciar desde este checkout usar esa ruta con `theme dev --store labsens-co.myshopify.com`; proporcionar la contraseña del escaparate cuando corresponda. No guardar contraseñas en Git.

La homepage todavía muestra el contenido inicial de Horizon. Esta comprobación acredita el renderizado básico; no es una prueba de catálogo, compra ni fidelidad visual a WordPress.
