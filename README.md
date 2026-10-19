# MAWIZA — prototipo web

Prototipo navegable del sitio oficial de MAWIZA: home, tienda, detalle de producto, carro, pago y confirmación, más una página de términos y condiciones. Usa los colores, tipografías y componentes del design system MAWIZA.

Es un prototipo: **no cobra ni guarda pedidos**. El botón de pago solo muestra la pantalla de confirmación.

## Qué incluye

- `index.html`: el sitio completo. Las pantallas se cambian con la dirección (`#/tienda`, `#/producto/serpientes`, `#/pago`).
- `terminos.html`: términos y condiciones.
- `css/styles.css`: tokens del design system (temas Noche, Papel y Cuero) y estilos.
- `js/app.js`: catálogo, textos en español e inglés, carro y navegación. No necesita instalar nada.
- `assets/`: fotos, logos y fuentes.

## Publicarlo en GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo, `mawiza-web`).
2. Sube todo el contenido de esta carpeta a la raíz del repositorio. Desde la web: **Add file › Upload files**, arrastra los archivos y carpetas, y confirma con **Commit changes**.
3. Ve a **Settings › Pages**. En **Build and deployment**, elige **Deploy from a branch**, la rama `main` y la carpeta `/ (root)`. Guarda.
4. En uno o dos minutos el sitio queda en `https://TU-USUARIO.github.io/mawiza-web/`. GitHub muestra el enlace en esa misma página.

## Cómo editar lo más común

- **Precios, ofertas y stock**: al inicio de `js/app.js`, en `CATALOG`. `price` es el precio normal, `sale` el de oferta (`null` si no hay) y `stock: false` marca el producto como agotado.
- **Textos**: en `js/app.js`, objeto `T`, con una versión `es` y otra `en`.
- **Fotos**: reemplaza los archivos en `assets/img/` con el mismo nombre.

## Por completar

Los datos entre corchetes son provisionales: fechas y recintos de conciertos, biografía, precio del vinilo, medidas de la guía de tallas, costo de despacho y los datos legales de los términos.

## Antes de hacerlo público

- Las fuentes Trattatello y Arial Nova tienen licencia comercial. Confirma que la licencia permite usarlas en un sitio web publicado.
- El repositorio y el sitio quedan visibles para cualquiera con el enlace.
