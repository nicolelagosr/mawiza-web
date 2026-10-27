# MAWIZA — prototipo web (v2)

Prototipo navegable del sitio oficial de MAWIZA, con los textos del copy deck v1: inicio, fechas, merch, detalle de producto, carrito, pago, confirmación y páginas legales. Usa los colores, tipografías y componentes del design system MAWIZA.

Es un prototipo: **no cobra ni guarda pedidos**. El botón de pago solo muestra la pantalla de confirmación.

## Qué incluye

- `index.html`: el sitio completo. Las pantallas cambian con la dirección: `#/fechas`, `#/merch`, `#/producto/rojo`, `#/pago`.
- `terminos.html`: términos y condiciones, privacidad, y cambios y devoluciones.
- `css/styles.css`: tokens del design system (temas Noche, Papel y Cuero) y estilos.
- `js/app.js`: datos, textos en español e inglés, carrito y navegación. No necesita instalar nada.
- `assets/`: fotos, logos y fuentes.

## Publicar por primera vez en GitHub Pages

1. Crea un repositorio en GitHub (por ejemplo, `mawiza-web`).
2. Sube el contenido de esta carpeta a la raíz del repositorio: **Add file › Upload files**, arrastra los archivos y carpetas, y presiona **Commit changes**.
3. En **Settings › Pages**, elige **Deploy from a branch**, la rama `main` y la carpeta `/ (root)`. Guarda.
4. En uno o dos minutos el sitio queda en `https://TU-USUARIO.github.io/mawiza-web/`.

## Actualizar el sitio

Sube los archivos nuevos encima de los anteriores con **Add file › Upload files**. Los que tienen el mismo nombre y la misma carpeta se reemplazan. GitHub Pages publica los cambios en uno o dos minutos.

## Cómo editar lo más común (todo al inicio de `js/app.js`)

- **Productos**: lista `CATALOG`. `price` es el precio normal en pesos, `sale` el de oferta (`null` si no hay), `image` la foto (`null` si no hay), `sizes` las tallas y `stock: false` marca el producto como agotado.
- **Carrusel del inicio**: lista `CAROUSEL`, con los productos en el orden en que aparecen.
- **Fechas**: lista `SHOWS`. Si la dejas vacía (`[]`), aparece el mensaje "Pronto anunciaremos nuevas fechas".
- **Discos**: lista `ALBUMS`.
- **Enlaces a redes y plataformas**: objeto `LINKS`.
- **Textos**: objeto `T`, con una versión `es` y otra `en`.
- **Fotos**: reemplaza los archivos en `assets/img/` con el mismo nombre, o agrega nuevos y escribe su nombre en `CATALOG`.

## Por completar

Lo que está entre corchetes es provisional: precios y fotos de 6 productos, fotos modeladas del carrusel, portadas de Kollong e Iñ Mongeletew, enlaces de entradas y redes, medidas de la guía de tallas, costo de despacho y los datos legales.

## Antes de hacerlo público

- Las fuentes Trattatello y Arial Nova tienen licencia comercial. Confirma que la licencia permite usarlas en un sitio web publicado.
- El repositorio y el sitio quedan visibles para cualquiera con el enlace.
