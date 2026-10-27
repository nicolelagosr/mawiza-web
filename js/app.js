/* MAWIZA — prototipo web (JavaScript sin dependencias). Textos según el copy deck v1. */
(function () {
  'use strict';

  var IMG = 'assets/img/';
  var REGIONS = ['Arica y Parinacota', 'Tarapacá', 'Antofagasta', 'Atacama', 'Coquimbo', 'Valparaíso', 'Metropolitana de Santiago', "Libertador General Bernardo O'Higgins", 'Maule', 'Ñuble', 'Biobío', 'La Araucanía', 'Los Ríos', 'Los Lagos', 'Aysén del General Carlos Ibáñez del Campo', 'Magallanes y de la Antártica Chilena'];
  var SXXL = ['S', 'M', 'L', 'XL', 'XXL'];
  var XSL = ['XS', 'S', 'M', 'L'];
  var CARE_ES = 'Cuidado: lavar al revés, en agua fría.';
  var CARE_EN = 'Care: wash inside out, cold water.';

  /* ---------- Datos editables ----------
     price: precio normal en CLP (null = por definir) · sale: precio de oferta (null = sin oferta)
     image: foto (null = sin foto) · sizes: tallas (null = sin talla) · stock: false = agotado */
  var CATALOG = [
    { id: 'rojo', cat: 'poleras', es: 'Polera diseño rojo', en: 'Red design T-shirt', price: 25000, sale: null, image: IMG + 'polera-ramas.jpg', sizes: SXXL, stock: true,
      altEs: 'Polera negra con el logo de ramas en rojo y una ilustración de flores rojas y blancas', altEn: 'Black T-shirt with the red branch logo and a red and white flower illustration',
      descEs: 'Polera negra con una ilustración de Almacenero Gráfico en blanco y rojo, con el logo de la banda en la parte superior.', descEn: 'Black t-shirt featuring artwork by Almacenero Gráfico in white and red, topped by the band’s branch logo.',
      detEs: 'Material: 100% algodón · Tallas: S a XXL · ' + CARE_ES, detEn: 'Material: 100% cotton · Sizes: S to XXL · ' + CARE_EN },
    { id: 'serpientes', cat: 'poleras', es: 'Polera serpientes', en: 'Serpents T-shirt', price: 25000, sale: 20000, image: IMG + 'polera-serpientes.jpg', sizes: SXXL, stock: true,
      altEs: 'Polera blanca con ilustración negra y naranja de serpientes y el nombre MAWIZA', altEn: 'White T-shirt with a black and orange serpent illustration and the MAWIZA name',
      descEs: '[Descripción pendiente: no está en el copy deck.]', descEn: '[Description pending: not in the copy deck.]', detEs: '', detEn: '' },
    { id: 'gato', cat: 'poleras', es: 'Polera gato', en: 'Cat T-shirt', price: null, sale: null, image: null, sizes: SXXL, stock: true, altEs: '', altEn: '',
      descEs: 'Polera negra con una ilustración en blanco, de estilo grabado. Muestra una figura que lleva un kollong, la máscara de madera mapuche, con pequeñas orejas que le dan su nombre y el logo de la banda en su pecho.',
      descEn: 'Black t-shirt with a white woodcut-style illustration of a figure wearing a kollong, the traditional Mapuche wooden mask, with small cat-like ears and the band logo on its chest.',
      detEs: 'Material: 100% algodón · Tallas: S a XXL · ' + CARE_ES, detEn: 'Material: 100% cotton · Sizes: S to XXL · ' + CARE_EN },
    { id: 'logo', cat: 'poleras', es: 'Polera logo', en: 'Logo T-shirt', price: null, sale: null, image: null, sizes: XSL, stock: true, altEs: '', altEn: '',
      descEs: 'Polera negra con el logo de Mawiza en blanco: en tamaño pequeño en el pecho, sobre el corazón, y en grande en la espalda.', descEn: 'Black t-shirt with the Mawiza logo in white: small on the left chest and large on the back.',
      detEs: 'Material: algodón con elasticidad · Tallas: XS a L · ' + CARE_ES, detEn: 'Material: stretch cotton · Sizes: XS to L · ' + CARE_EN },
    { id: 'poleron-rojo', cat: 'polerones', es: 'Polerón capucha diseño rojo', en: 'Red design hoodie', price: null, sale: null, image: null, sizes: SXXL, stock: true, altEs: '', altEn: '',
      descEs: 'Polerón negro con una ilustración de Almacenero Gráfico en blanco y rojo y el logo de la banda en la parte superior.', descEn: 'Black hoodie featuring artwork by Almacenero Gráfico in white and red, topped by the band’s branch logo.',
      detEs: 'Material: 100% algodón · Tallas: S a XXL · ' + CARE_ES, detEn: 'Material: 100% cotton · Sizes: S to XXL · ' + CARE_EN },
    { id: 'poleron-logo', cat: 'polerones', es: 'Polerón capucha logo', en: 'Logo hoodie', price: null, sale: null, image: null, sizes: XSL, stock: true, altEs: '', altEn: '',
      descEs: 'Polerón negro con el logo de Mawiza en blanco: pequeño en el pecho, sobre el corazón, y grande en la espalda.', descEn: 'Black hoodie with the Mawiza logo in white: small on the left chest and large on the back.',
      detEs: 'Material: algodón con elasticidad · Tallas: XS a L · ' + CARE_ES, detEn: 'Material: stretch cotton · Sizes: XS to L · ' + CARE_EN },
    { id: 'cd', cat: 'discos', es: 'CD ÜL', en: 'ÜL CD', price: 20000, sale: null, image: IMG + 'portada-ul.jpg', sizes: null, stock: true,
      altEs: 'Portada del disco ÜL', altEn: 'ÜL album cover',
      descEs: 'Edición física del disco ÜL, con librillo que incluye las letras en mapuzungun.', descEn: 'Physical edition of the ÜL album, with a booklet including the lyrics in Mapuzungun.',
      detEs: 'Formato: CD con librillo.', detEn: 'Format: CD with booklet.' },
    { id: 'vinilo', cat: 'discos', es: 'Vinilo ÜL rojo', en: 'ÜL red vinyl', price: null, sale: null, image: IMG + 'vinilo-rojo.svg', sizes: null, stock: false,
      altEs: 'Vinilo rojo con salpicaduras negras', altEn: 'Red vinyl with black splatter',
      descEs: '[Descripción pendiente: no está en el copy deck.]', descEn: '[Description pending: not in the copy deck.]', detEs: '', detEn: '' },
    { id: 'gorro', cat: 'accesorios', es: 'Gorro logo', en: 'Logo beanie', price: null, sale: null, image: null, sizes: null, stock: true, altEs: '', altEn: '',
      descEs: 'Gorro negro con un parche del logo de Mawiza al centro, en la parte frontal.', descEn: 'Black beanie with a Mawiza logo patch on the front.', detEs: '', detEn: '' },
    { id: 'llavero', cat: 'accesorios', es: 'Llavero baqueta', en: 'Drumstick keychain', price: null, sale: null, image: null, sizes: null, stock: true, altEs: '', altEn: '',
      descEs: 'Llavero hecho con un trozo de baqueta usada en nuestros conciertos, customizado con el sello de Mawiza. Cada pieza es única.', descEn: 'Keychain made from a piece of a drumstick used at our shows, customized with the Mawiza seal. Each piece is one of a kind.', detEs: '', detEn: '' }
  ];

  /* Fotos del carrusel del inicio (ids del catálogo, en orden). */
  var CAROUSEL = ['rojo', 'serpientes', 'poleron-rojo', 'gorro'];

  /* Fechas: deja la lista vacía [] para mostrar el mensaje "Pronto anunciaremos nuevas fechas". */
  var SHOWS = [
    { date: '14.NOV', venue: 'Instituto Nacional', city: 'Santiago', tickets: '#/fechas' },
    { date: '19.NOV', venue: 'Barley Restobar', city: 'Rancagua', tickets: '#/fechas' },
    { date: '20.NOV', venue: 'Skol Restobar', city: 'Villarrica', tickets: '#/fechas' },
    { date: '21.NOV', venue: 'Vieja Escuela', city: 'Pucón', tickets: '#/fechas' },
    { date: '22.NOV', venue: 'Templo Crápula', city: 'Concepción', tickets: '#/fechas' }
  ];

  var ALBUMS = [
    { title: 'Kollong', year: '2022', cover: null, es: 'Nuestro primer disco, Premio Pulsar a Mejor Artista Metal.', en: 'Our first album, winner of the Pulsar Award for Best Metal Artist.' },
    { title: 'ÜL', year: '2025', cover: IMG + 'portada-ul.jpg', es: 'Segundo disco de la banda, lanzado bajo el sello de Season of Mist y con la participación de Joe Duplantier (Gojira).', en: 'Our second album, released by Season of Mist and featuring Joe Duplantier (Gojira).' },
    { title: 'Iñ Mongeletew', year: '2026', cover: null, es: 'Una versión acústica de nuestras canciones.', en: 'An acoustic version of our songs.' }
  ];

  var LINKS = { spotify: '#/musica', youtube: '#/musica', bandcamp: '#/musica', instagram: '#/', facebook: '#/' };

  var T = {
    es: {
      skip: 'Saltar al contenido', shipBar: 'Solo despachamos dentro de Chile', navHome: 'Inicio', navMusic: 'Música', navDates: 'Fechas', navStore: 'Merch', navContact: 'Contacto', langLabel: 'Idioma', cart: 'Carrito',
      heroKicker: 'Nuevo EP', btnListen: 'Escucha ahora', nextShow: 'Próxima fecha',
      bandPhotoAlt: 'Los cuatro integrantes de MAWIZA en un campo abierto, con instrumentos y la Wenufoye flameando al centro',
      showsTitle: 'Próximas fechas', tickets: 'Entradas', allDates: 'Ver todas las fechas',
      datesTitle: 'Fechas', datesSub: 'Revisa dónde tocamos y consigue tus entradas.', noShowsTitle: 'Pronto anunciaremos nuevas fechas.', noShowsText: '¡Síguenos en redes para enterarte!',
      merchTitle: 'Merch oficial', merchHomeSub: 'Poleras, polerones y más. Envíos a todo Chile y retiro en conciertos.', goStore: 'Ir a la tienda',
      carouselLabel: 'Fotos del merch', prevPhoto: 'Foto anterior', nextPhoto: 'Foto siguiente', goToPhoto: 'Ir a la foto',
      storeSub: 'Envíos a todo Chile y retiro en conciertos.', shipNotice: 'Solo despachamos dentro de Chile. Enviamos tu pedido en [3 a 5] días hábiles.',
      add: 'Agregar al carrito', soldOut: 'Agotado', size: 'Talla', chooseSize: 'Elige tu talla', sizeGuide: 'Guía de tallas', sizeErr: 'Elige una talla para agregar al carrito.',
      oldPrice: 'Precio anterior: ', salePrice: 'Precio oferta: ', unavailable: 'No disponible: ', offer: 'Oferta', seeDetail: 'Ver detalle del producto',
      cat: { poleras: 'Polera', polerones: 'Polerón', discos: 'Disco', accesorios: 'Accesorio' },
      catPlural: { todos: 'Todos', poleras: 'Poleras', polerones: 'Polerones', discos: 'Discos', accesorios: 'Accesorios' },
      filterLabel: 'Filtrar por categoría', breadcrumb: 'Ruta de navegación',
      sortLabel: 'Ordenar', sortRecent: 'Más recientes', sortLow: 'Precio: menor a mayor', sortHigh: 'Precio: mayor a menor', products: 'productos', product: 'producto',
      guideIntro: '¿Dudas con tu talla? Compara estas medidas con una prenda que te quede bien.', width: 'Ancho', length: 'Largo', howTo: 'Ancho: de axila a axila. Largo: desde el hombro hasta el borde inferior.',
      musicTitle: 'Música', musicIntro: 'Toda nuestra música está disponible en plataformas.', playVideo: 'Reproducir video', btnSpotify: 'Escuchar en Spotify', btnYoutube: 'Ver en YouTube', btnBandcamp: 'Comprar en Bandcamp', coverOf: 'Portada de',
      contactTitle: 'Contacto', contactIntro: 'Escríbenos según tu consulta:', cBooking: 'Contrataciones', cPress: 'Prensa', cStore: 'Tienda y pedidos',
      footerNav: 'Pie de página', termsLink: 'Términos y condiciones', privacyLink: 'Privacidad', returnsLink: 'Cambios y devoluciones', copyright: '© 2026 Mawiza. Todos los derechos reservados.',
      close: 'Cerrar', yourCart: 'Tu carrito', emptyCart: 'Tu carrito está vacío.', qty: 'Cantidad', decrease: 'Quitar una unidad', increase: 'Agregar una unidad', remove: 'Eliminar', each: 'c/u', unitLabel: 'Unidad',
      checkout: 'Ir a pagar', keepShopping: 'Seguir comprando', shipOnly: 'Solo despachamos dentro de Chile.',
      secure: 'Pago seguro', backCart: 'Volver al carrito', stepsLabel: 'Pasos de la compra', stepCart: 'Carrito', stepData: 'Datos y pago', stepOk: 'Confirmación',
      backStore: 'Volver a la tienda', checkoutTitle: 'Finalizar compra', contact: 'Contacto', fName: 'Nombre y apellido', fPhone: 'Teléfono', email: 'Correo',
      delivery: 'Entrega', homeDelivery: 'Envío a domicilio · [3 a 5] días hábiles.', pickupOption: 'Retiro en concierto o punto acordado.',
      fCountry: 'País', fRegion: 'Región', fComuna: 'Comuna', fAddress: 'Dirección', payment: 'Pago', webpayNote: 'Débito o crédito',
      summary: 'Resumen', shippingCost: 'Despacho', costHome: '[COSTO]', costPickup: '[POR DEFINIR]', acceptPre: 'Acepto los', acceptPost: ' de la tienda.', termsErr: 'Acepta los términos y condiciones para continuar con el pago.', pay: 'Pagar',
      okTitle: '¡Gracias por tu compra!', okText: 'Te enviamos el detalle a tu correo.', orderNo: 'Pedido', emptyCheckout: 'No hay productos en tu carrito.'
    },
    en: {
      skip: 'Skip to content', shipBar: 'We only ship within Chile', navHome: 'Home', navMusic: 'Music', navDates: 'Tour', navStore: 'Merch', navContact: 'Contact', langLabel: 'Language', cart: 'Cart',
      heroKicker: 'New release', btnListen: 'Listen now', nextShow: 'Next show',
      bandPhotoAlt: 'The four members of MAWIZA in an open field, with their instruments and the Wenufoye flag in the center',
      showsTitle: 'Upcoming shows', tickets: 'Tickets', allDates: 'See all dates',
      datesTitle: 'Tour', datesSub: 'See where we’re playing and get your tickets.', noShowsTitle: 'New dates coming soon.', noShowsText: 'Follow us on social media to stay updated!',
      merchTitle: 'Official merch', merchHomeSub: 'T-shirts, hoodies and more. Shipping within Chile and pickup at shows.', goStore: 'Shop now',
      carouselLabel: 'Merch photos', prevPhoto: 'Previous photo', nextPhoto: 'Next photo', goToPhoto: 'Go to photo',
      storeSub: 'Shipping within Chile and pickup at shows.', shipNotice: 'Shipping within Chile only, [3 to 5] business days after purchase.',
      add: 'Add to cart', soldOut: 'Sold out', size: 'Size', chooseSize: 'Choose your size', sizeGuide: 'Size guide', sizeErr: 'Choose a size to add it to your cart.',
      oldPrice: 'Previous price: ', salePrice: 'Sale price: ', unavailable: 'Unavailable: ', offer: 'Sale', seeDetail: 'See product details',
      cat: { poleras: 'T-shirt', polerones: 'Hoodie', discos: 'Album', accesorios: 'Accessory' },
      catPlural: { todos: 'All', poleras: 'T-shirts', polerones: 'Hoodies', discos: 'Albums', accesorios: 'Accessories' },
      filterLabel: 'Filter by category', breadcrumb: 'Breadcrumb',
      sortLabel: 'Sort', sortRecent: 'Newest', sortLow: 'Price: low to high', sortHigh: 'Price: high to low', products: 'products', product: 'product',
      guideIntro: 'Not sure about your size? Compare these measurements with a garment that fits you well.', width: 'Width', length: 'Length', howTo: 'Width: armpit to armpit. Length: from the shoulder to the bottom hem.',
      musicTitle: 'Music', musicIntro: 'All our music is available on streaming platforms.', playVideo: 'Play video', btnSpotify: 'Listen on Spotify', btnYoutube: 'Watch on YouTube', btnBandcamp: 'Buy on Bandcamp', coverOf: 'Cover of',
      contactTitle: 'Contact', contactIntro: 'Get in touch:', cBooking: 'Booking', cPress: 'Press', cStore: 'Store and orders',
      footerNav: 'Footer', termsLink: 'Terms and conditions', privacyLink: 'Privacy', returnsLink: 'Exchanges and returns', copyright: '© 2026 Mawiza. All rights reserved.',
      close: 'Close', yourCart: 'Your cart', emptyCart: 'Your cart is empty.', qty: 'Quantity', decrease: 'Remove one', increase: 'Add one', remove: 'Remove', each: 'each', unitLabel: 'Item',
      checkout: 'Checkout', keepShopping: 'Keep shopping', shipOnly: 'We only ship within Chile.',
      secure: 'Secure payment', backCart: 'Back to cart', stepsLabel: 'Checkout steps', stepCart: 'Cart', stepData: 'Details and payment', stepOk: 'Confirmation',
      backStore: 'Back to the store', checkoutTitle: 'Checkout', contact: 'Contact', fName: 'Full name', fPhone: 'Phone', email: 'Email',
      delivery: 'Delivery', homeDelivery: 'Home delivery · [3 to 5] business days.', pickupOption: 'Pick up at a show or agreed location.',
      fCountry: 'Country', fRegion: 'Region', fComuna: 'Commune', fAddress: 'Address', payment: 'Payment', webpayNote: 'Debit or credit',
      summary: 'Summary', shippingCost: 'Shipping', costHome: '[COST]', costPickup: '[TO BE DEFINED]', acceptPre: 'I accept the store', acceptPost: '.', termsErr: 'Accept the terms and conditions to continue to payment.', pay: 'Pay',
      okTitle: 'Thank you for your order', okText: 'Details are on their way to your inbox.', orderNo: 'Order', emptyCheckout: 'There are no products in your cart.'
    }
  };

  /* ---------- Estado ---------- */
  function load(key, fallback) {
    try { var v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; }
  }
  function save(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* sin almacenamiento: el carrito dura la visita */ }
  }

  var state = {
    lang: load('mz-lang', 'es'),
    cart: load('mz-cart-v2', []),
    sel: {}, err: {},
    drawer: false, quick: null, guide: false,
    filter: 'todos', sort: 'recientes', delivery: 'domicilio', slide: 0,
    terms: false, termsErr: false
  };
  var lastFocus = null;
  var opener = null;

  function t() { return T[state.lang] || T.es; }
  function byId(id) { for (var i = 0; i < CATALOG.length; i++) if (CATALOG[i].id === id) return CATALOG[i]; return null; }
  function eff(p) { return p.sale !== null ? p.sale : p.price; }
  function clp(n) {
    if (n === null || n === undefined) return '$[PRECIO]';
    return '$' + Math.round(n).toLocaleString('es-CL') + (state.lang === 'en' ? ' CLP' : '');
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; });
  }
  function pname(p) { return state.lang === 'en' ? p.en : p.es; }
  function palt(p) { return state.lang === 'en' ? p.altEn : p.altEs; }
  function onSale(p) { return p.stock && p.sale !== null && p.price !== null; }

  /* ---------- Rutas ---------- */
  function route() {
    var h = location.hash.replace(/^#\/?/, '');
    var parts = h.split('/');
    if (parts[0] === 'merch' || parts[0] === 'tienda') return { screen: 'tienda' };
    if (parts[0] === 'fechas') return { screen: 'fechas' };
    if (parts[0] === 'producto' && byId(parts[1])) return { screen: 'producto', id: parts[1] };
    if (parts[0] === 'pago') return { screen: 'pago' };
    if (parts[0] === 'confirmacion') return { screen: 'ok' };
    return { screen: 'home', anchor: ['musica', 'contacto'].indexOf(parts[0]) >= 0 ? parts[0] : null };
  }
  function go(hash) {
    if (location.hash === hash) { render(); return; }
    location.hash = hash;
  }

  /* ---------- Piezas ---------- */
  var ICON_CART = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 4h2l2.4 11h11.2L21 7H6.2"/><circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/></svg>';
  var ICON_X = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg>';
  var ICON_LOCK = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="5" y="11" width="14" height="10"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>';
  function wunelfe(size) {
    return '<svg class="wunelfe" width="' + size + '" height="' + size + '" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2l5 5 5-5v5h5l-5 5 5 5h-5v5l-5-5-5 5v-5H2l5-5-5-5h5z"/></svg>';
  }
  function srOnly(text) { return '<span class="sr-only">' + esc(text) + '</span>'; }
  function placeholder(label) {
    return '<span class="placeholder"><img src="' + IMG + 'simbolo-blanco.png" alt=""><span class="label tenue">' + esc(label || '[FOTO]') + '</span></span>';
  }
  function photo(p, withAlt) {
    return p.image ? '<img src="' + p.image + '" alt="' + (withAlt ? esc(palt(p)) : '') + '" loading="lazy">' : placeholder();
  }
  function thumb(p, size) {
    return p.image ? '<img src="' + p.image + '" alt="" style="width:' + size + 'px;height:' + size + 'px;object-fit:cover;flex:none">' : '<span class="thumb-empty" aria-hidden="true" style="width:' + size + 'px;height:' + size + 'px"></span>';
  }

  function priceBlock(p, big) {
    var L = t();
    var cls = big ? ' style="font-size:24px;line-height:32px"' : '';
    if (!p.stock) return '<span class="price price-off"' + cls + '>' + srOnly(L.unavailable) + esc(clp(p.price)) + '</span>';
    if (onSale(p)) {
      return '<span class="price-row"><s class="price-old">' + srOnly(L.oldPrice) + esc(clp(p.price)) + '</s>' +
        '<span class="price"' + cls + '>' + srOnly(L.salePrice) + esc(clp(p.sale)) + '</span></span>';
    }
    return '<span class="price"' + cls + '>' + esc(clp(p.price)) + '</span>';
  }
  function imageTag(p) {
    var L = t();
    if (!p.stock) return '<span class="card-tag"><span class="mz-tag mz-tag-plata">' + esc(L.soldOut) + '</span></span>';
    if (onSale(p)) {
      var pct = Math.round((1 - p.sale / p.price) * 100);
      return '<span class="card-tag"><span class="mz-tag">' + esc(L.offer + ' −' + pct + '%') + '</span></span>';
    }
    return '';
  }
  function sizeButtons(p, keyPrefix) {
    var chosen = state.sel[p.id];
    return p.sizes.map(function (z) {
      return '<button type="button" data-action="size" data-id="' + p.id + '" data-size="' + z + '" data-key="' + keyPrefix + '-' + p.id + '-' + z + '" aria-pressed="' + (chosen === z) + '">' + z + '</button>';
    }).join('');
  }

  function card(p) {
    var L = t();
    var href = '#/producto/' + p.id;
    var action = p.stock
      ? '<button type="button" class="mz-btn mz-btn-primary" data-action="add" data-id="' + p.id + '" data-key="add-' + p.id + '">' + esc(L.add) + '</button>'
      : '<span class="no-stock label">' + esc(L.soldOut) + '</span>';
    return '<article class="mz-card">' +
      '<a class="mz-card-img" href="' + href + '" tabindex="-1" aria-hidden="true" style="display:flex;align-items:center;justify-content:center">' + photo(p, false) + imageTag(p) + '</a>' +
      '<span class="label tenue">' + esc(L.cat[p.cat]) + '</span>' +
      '<h2 class="mz-card-name"><a href="' + href + '">' + esc(pname(p)) + '</a></h2>' +
      priceBlock(p, false) +
      '<div class="card-action">' + action + '</div>' +
      '</article>';
  }

  function showRows(list) {
    var L = t();
    return '<ul class="shows">' + list.map(function (s) {
      return '<li><span class="poster" style="white-space:nowrap">' + esc(s.date) + '</span><span class="leader" aria-hidden="true"></span>' +
        '<span class="poster">' + esc(s.venue) + ' · ' + esc(s.city) + '</span>' +
        '<a class="mz-btn mz-btn-secondary" href="' + esc(s.tickets) + '">' + esc(L.tickets) + '</a></li>';
    }).join('') + '</ul>';
  }

  /* ---------- Pantallas ---------- */
  function header(screen) {
    var L = t();
    var inStore = screen === 'tienda' || screen === 'producto';
    function nav(href, label, current) { return '<a href="' + href + '"' + (current ? ' aria-current="page"' : '') + '>' + esc(label) + '</a>'; }
    return (inStore ? '<div class="shipbar label">' + esc(L.shipBar) + '</div>' : '') +
      '<header class="site-header"><div class="wrap">' +
      '<a href="#/" aria-label="MAWIZA, inicio"><img src="' + IMG + 'wordmark-blanco.png" alt="MAWIZA" style="height:28px;width:auto"></a>' +
      '<nav class="nav label" aria-label="Principal">' +
      nav('#/', L.navHome, screen === 'home') + nav('#/musica', L.navMusic, false) + nav('#/fechas', L.navDates, screen === 'fechas') +
      nav('#/merch', L.navStore, inStore) + nav('#/contacto', L.navContact, false) +
      '</nav>' +
      '<div class="header-tools">' +
      '<div class="lang" role="group" aria-label="' + esc(L.langLabel) + '">' +
      '<button type="button" data-action="lang" data-lang="es" data-key="lang-es" aria-pressed="' + (state.lang === 'es') + '">ES</button>' +
      '<button type="button" data-action="lang" data-lang="en" data-key="lang-en" aria-pressed="' + (state.lang === 'en') + '">EN</button>' +
      '</div>' +
      '<button type="button" class="cart-btn label" data-action="drawer" data-key="cart">' + ICON_CART + '<span>' + esc(L.cart) + '</span><span class="oro">(' + cartCount() + ')</span></button>' +
      '</div></div></header>';
  }

  function footer() {
    var L = t();
    return '<footer class="site-footer"><span class="mz-guarda mz-guarda-rombos" aria-hidden="true"></span><div class="wrap">' +
      '<img src="' + IMG + 'simbolo-blanco.png" alt="" style="height:48px;width:auto">' +
      '<nav class="footer-links label" aria-label="' + esc(L.footerNav) + '">' +
      '<a href="#/merch">' + esc(L.navStore) + '</a>' +
      '<button type="button" class="link-btn label" style="color:inherit;text-decoration:none;min-height:44px;font-size:12px;align-self:auto" data-action="guide" data-key="guide-footer">' + esc(L.sizeGuide) + '</button>' +
      '<a href="terminos.html#terminos">' + esc(L.termsLink) + '</a>' +
      '<a href="terminos.html#privacidad">' + esc(L.privacyLink) + '</a>' +
      '<a href="terminos.html#cambios">' + esc(L.returnsLink) + '</a>' +
      '</nav>' +
      '<div class="footer-links small"><a class="tenue" href="' + LINKS.instagram + '">Instagram</a><a class="tenue" href="' + LINKS.facebook + '">Facebook</a><a class="tenue" href="' + LINKS.youtube + '">YouTube</a><a class="tenue" href="' + LINKS.bandcamp + '">Bandcamp</a><a class="tenue" href="' + LINKS.spotify + '">Spotify</a></div>' +
      '<p class="small tenue" style="margin:0">' + esc(L.copyright) + '</p>' +
      '</div></footer>';
  }

  function carousel() {
    var L = t();
    var n = CAROUSEL.length;
    var cur = ((state.slide % n) + n) % n;
    var p = byId(CAROUSEL[cur]);
    var dots = CAROUSEL.map(function (id, i) {
      return '<button type="button" data-action="slide" data-i="' + i + '" data-key="dot-' + i + '" aria-label="' + esc(L.goToPhoto + ' ' + (i + 1)) + '" aria-current="' + (i === cur) + '"><span aria-hidden="true"></span></button>';
    }).join('');
    return '<div class="carousel" role="region" aria-roledescription="carrusel" aria-label="' + esc(L.carouselLabel) + '">' +
      '<div class="carousel-frame">' +
      '<div role="group" aria-roledescription="foto" aria-label="' + esc((cur + 1) + ' / ' + n + ': ' + pname(p)) + '" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center">' +
      (p.image ? '<img src="' + p.image + '" alt="' + esc(palt(p)) + '" style="width:100%;height:100%;object-fit:cover">' : placeholder('[FOTO MODELADA]')) + '</div>' +
      '<button type="button" class="arrow arrow-prev" data-action="slide-prev" data-key="slide-prev" aria-label="' + esc(L.prevPhoto) + '"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></button>' +
      '<button type="button" class="arrow arrow-next" data-action="slide-next" data-key="slide-next" aria-label="' + esc(L.nextPhoto) + '"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></button>' +
      '</div>' +
      '<div class="carousel-foot"><a href="#/producto/' + p.id + '"><span class="poster" style="font-size:22px">' + esc(pname(p)) + '</span>' + priceBlock(p, false) + '</a>' +
      '<div class="dots">' + dots + '<span class="small tenue" aria-live="polite" style="margin-left:8px">' + (cur + 1) + ' / ' + n + '</span></div></div>' +
      '</div>';
  }

  function home() {
    var L = t();
    var next = SHOWS[0];
    var albums = ALBUMS.map(function (a) {
      return '<li>' + (a.cover ? '<img class="cover" src="' + a.cover + '" alt="' + esc(L.coverOf + ' ' + a.title) + '">' : '<span class="cover-empty" aria-hidden="true">[PORTADA]</span>') +
        '<div class="stack" style="gap:6px"><h3 class="poster" style="margin:0">' + esc(a.title) + ' <span class="label oro" style="font-family:var(--font-texto);font-size:14px">· ' + esc(a.year) + '</span></h3>' +
        '<p class="tenue" style="margin:0;font-size:15px;line-height:22px">' + esc(state.lang === 'en' ? a.en : a.es) + '</p></div></li>';
    }).join('');
    var contacts = [[L.cBooking, 'booking@mawiza.cl'], [L.cPress, 'prensa@mawiza.cl'], [L.cStore, 'tienda@mawiza.cl']].map(function (c) {
      return '<li><span class="label oro">' + esc(c[0]) + '</span><a href="mailto:' + c[1] + '">' + c[1] + '</a></li>';
    }).join('');

    return '<main id="contenido">' +
      '<section class="hero" aria-labelledby="hero-titulo"><img src="' + IMG + 'banda-bn.jpg" alt="' + esc(L.bandPhotoAlt) + '">' +
      '<div class="hero-inner wrap">' +
      '<div class="stack center" style="gap:24px">' +
      '<div style="display:flex;align-items:center;gap:8px">' + wunelfe(18) + '<span class="label oro">' + esc(L.heroKicker) + '</span>' + wunelfe(18) + '</div>' +
      '<h1 id="hero-titulo" class="titulo-xl" style="font-size:clamp(56px,9vw,112px);line-height:0.95">Iñ Mongeletew</h1>' +
      '<a class="mz-btn mz-btn-primary" href="#/musica">' + esc(L.btnListen) + '</a>' +
      '</div>' +
      (next ? '<p class="hero-next poster"><span class="llamado">' + esc(L.nextShow) + '</span> · ' + esc(next.date) + ' · ' + esc(next.venue) + ' · ' + esc(next.city) + '</p>' : '<span></span>') +
      '</div></section>' +

      '<section id="conciertos" class="section" aria-labelledby="conciertos-titulo"><div class="wrap-sm stack" style="gap:24px">' +
      '<h2 id="conciertos-titulo" class="titulo-md" style="text-align:center">' + esc(L.showsTitle) + '</h2>' +
      (SHOWS.length ? showRows(SHOWS.slice(0, 3)) : '<div class="empty-box"><p class="poster" style="margin:0">' + esc(L.noShowsTitle) + '</p><p class="tenue" style="margin:0">' + esc(L.noShowsText) + '</p></div>') +
      '<div style="display:flex;justify-content:center"><a class="mz-btn mz-btn-secondary" href="#/fechas">' + esc(L.allDates) + '</a></div>' +
      '</div></section>' +

      '<section id="merch" class="section" aria-labelledby="merch-titulo"><div class="wrap merch-home">' +
      carousel() +
      '<div class="stack" style="gap:24px;align-items:flex-start">' + wunelfe(24) +
      '<h2 id="merch-titulo" class="titulo-lg" style="color:var(--tinta-papel)">' + esc(L.merchTitle) + '</h2>' +
      '<p style="margin:0;font-size:18px;line-height:28px;max-width:440px">' + esc(L.merchHomeSub) + '</p>' +
      '<a class="mz-btn mz-btn-primary" href="#/merch">' + esc(L.goStore) + '</a></div>' +
      '</div></section>' +

      '<section id="musica" class="section musica" aria-labelledby="musica-titulo"><div class="wrap stack" style="gap:40px">' +
      '<div class="stack center" style="gap:12px"><h2 id="musica-titulo" class="titulo-md">' + esc(L.musicTitle) + '</h2><p class="tenue" style="margin:0">' + esc(L.musicIntro) + '</p></div>' +
      '<div class="grid-2"><ul class="albums">' + albums + '</ul>' +
      '<div class="stack" style="gap:16px"><a class="video" href="' + LINKS.youtube + '" aria-label="' + esc(L.playVideo) + '"><img src="' + IMG + 'logo-ramas-blanco.png" alt=""><span class="play"><svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" fill="#fff"/></svg></span></a>' +
      '<div class="platforms"><a class="mz-btn mz-btn-primary" href="' + LINKS.spotify + '">' + esc(L.btnSpotify) + '</a><a class="mz-btn mz-btn-secondary" href="' + LINKS.youtube + '">' + esc(L.btnYoutube) + '</a><a class="mz-btn mz-btn-secondary" href="' + LINKS.bandcamp + '">' + esc(L.btnBandcamp) + '</a></div></div>' +
      '</div></div></section>' +

      '<section id="contacto" class="section" aria-labelledby="contacto-titulo"><div class="wrap-sm stack center" style="gap:32px">' +
      '<div class="stack center" style="gap:12px"><h2 id="contacto-titulo" class="titulo-md">' + esc(L.contactTitle) + '</h2><p class="tenue" style="margin:0">' + esc(L.contactIntro) + '</p></div>' +
      '<ul class="contacts">' + contacts + '</ul></div></section>' +
      '</main>';
  }

  function dates() {
    var L = t();
    return '<main id="contenido" class="wrap-sm stack" style="gap:24px;padding-top:56px;padding-bottom:64px">' +
      '<div class="stack" style="gap:8px"><h1 class="titulo-lg" style="color:var(--tinta-papel)">' + esc(L.datesTitle) + '</h1><p class="tenue" style="margin:0">' + esc(L.datesSub) + '</p></div>' +
      (SHOWS.length ? '<div style="border-top:1px solid var(--trama)">' + showRows(SHOWS) + '</div>'
        : '<div class="empty-box"><p class="poster" style="margin:0">' + esc(L.noShowsTitle) + '</p><p class="tenue" style="margin:0">' + esc(L.noShowsText) + '</p></div>') +
      '</main>';
  }

  function store() {
    var L = t();
    var list = CATALOG.filter(function (p) { return state.filter === 'todos' || p.cat === state.filter; });
    if (state.sort !== 'recientes') {
      var dir = state.sort === 'menor' ? 1 : -1;
      list = list.slice().sort(function (a, b) {
        var pa = a.stock ? eff(a) : null, pb = b.stock ? eff(b) : null;
        if (pa === null && pb === null) return 0;
        if (pa === null) return 1;
        if (pb === null) return -1;
        return (pa - pb) * dir;
      });
    }
    var filters = ['todos', 'poleras', 'polerones', 'discos', 'accesorios'].map(function (f) {
      return '<button type="button" class="label" data-action="filter" data-filter="' + f + '" data-key="filter-' + f + '" aria-pressed="' + (state.filter === f) + '">' + esc(L.catPlural[f]) + '</button>';
    }).join('');
    var opts = [['recientes', L.sortRecent], ['menor', L.sortLow], ['mayor', L.sortHigh]].map(function (o) {
      return '<option value="' + o[0] + '"' + (state.sort === o[0] ? ' selected' : '') + '>' + esc(o[1]) + '</option>';
    }).join('');
    return '<main id="contenido">' +
      '<section aria-labelledby="tienda-pagina-titulo"><div class="wrap stack" style="gap:8px;padding-top:56px">' +
      '<h1 id="tienda-pagina-titulo" class="titulo-lg" style="color:var(--tinta-papel)">' + esc(L.merchTitle) + '</h1>' +
      '<p style="margin:0;color:var(--tinta-papel)">' + esc(L.storeSub) + '</p></div></section>' +
      '<div class="wrap stack" style="gap:32px;padding-top:32px;padding-bottom:64px">' +
      '<div class="toolbar"><div class="filters" role="group" aria-label="' + esc(L.filterLabel) + '">' + filters + '</div>' +
      '<div class="sort"><span class="small tenue" aria-live="polite">' + list.length + ' ' + esc(list.length === 1 ? L.product : L.products) + '</span>' +
      '<label class="label" for="orden">' + esc(L.sortLabel) + '</label><select id="orden" data-action="sort" data-key="sort">' + opts + '</select></div></div>' +
      '<p class="tenue" style="margin:0;font-size:14px;line-height:20px">' + esc(L.shipNotice) + '</p>' +
      '<div class="grid-cards">' + list.map(card).join('') + '</div>' +
      '</div></main>';
  }

  function product(id) {
    var L = t();
    var p = byId(id);
    var details = state.lang === 'en' ? p.detEn : p.detEs;
    var buy = '';
    if (p.stock) {
      buy = (p.sizes ? '<fieldset class="stack" style="gap:12px"><legend class="label">' + esc(L.size) + '</legend><div class="sizes">' + sizeButtons(p, 'pd') + '</div>' +
        '<button type="button" class="link-btn" data-action="guide" data-key="guide-pd">' + esc(L.sizeGuide) + '</button></fieldset>' : '') +
        (state.err[p.id] ? '<p class="error" role="alert">' + esc(L.sizeErr) + '</p>' : '') +
        '<button type="button" class="mz-btn mz-btn-primary" data-action="add-direct" data-id="' + p.id + '" data-key="pd-add">' + esc(L.add) + '</button>';
    } else {
      buy = '<span class="no-stock label">' + esc(L.soldOut) + '</span>';
    }
    return '<main id="contenido" class="wrap stack" style="max-width:1180px;gap:24px;padding-top:24px;padding-bottom:64px">' +
      '<nav class="crumbs label" aria-label="' + esc(L.breadcrumb) + '"><ol>' +
      '<li><a href="#/merch">' + esc(L.navStore) + '</a></li><li aria-hidden="true" class="tenue">/</li>' +
      '<li><a href="#/merch" data-action="filter-link" data-filter="' + p.cat + '">' + esc(L.catPlural[p.cat]) + '</a></li><li aria-hidden="true" class="tenue">/</li>' +
      '<li aria-current="page" class="tenue">' + esc(pname(p)) + '</li></ol></nav>' +
      '<div class="grid-2">' +
      '<div class="detail-img" style="display:flex;align-items:center;justify-content:center">' + photo(p, true) + imageTag(p) + '</div>' +
      '<div class="stack" style="gap:20px">' +
      '<span class="label tenue">' + esc(L.cat[p.cat]) + '</span>' +
      '<h1 class="titulo-md">' + esc(pname(p)) + '</h1>' +
      priceBlock(p, true) +
      '<p style="margin:0">' + esc(state.lang === 'en' ? p.descEn : p.descEs) + '</p>' +
      (details ? '<p class="tenue" style="margin:0;font-size:14px;line-height:20px">' + esc(details) + '</p>' : '') +
      buy +
      '<ul class="notes"><li>' + esc(L.shipNotice) + '</li><li>' + esc(L.pickupOption) + '</li><li><a href="terminos.html#cambios" style="color:var(--tinta)">' + esc(L.returnsLink) + '</a></li></ul>' +
      '</div></div></main>';
  }

  function purchaseShell(inner) {
    var L = t();
    return '<div class="tema-papel" style="min-height:100vh;background:var(--fondo);color:var(--tinta)">' +
      '<header class="checkout-header"><div class="wrap" style="max-width:1180px">' +
      '<a href="#/" aria-label="MAWIZA, inicio"><img src="' + IMG + 'wordmark-negro.png" alt="MAWIZA" style="height:28px;width:auto"></a>' +
      '<span class="label" style="display:flex;align-items:center;gap:8px">' + ICON_LOCK + esc(L.secure) + '</span></div></header>' +
      inner +
      '<footer class="checkout-footer"><a href="terminos.html#terminos" style="color:var(--tinta);padding:12px 0">' + esc(L.termsLink) + '</a><a href="terminos.html#privacidad" style="color:var(--tinta);padding:12px 0">' + esc(L.privacyLink) + '</a><span style="padding:12px 0">' + esc(L.shipOnly) + '</span></footer>' +
      '</div>';
  }

  function steps(current) {
    var L = t();
    var names = [L.stepCart, L.stepData, L.stepOk];
    return '<ol class="steps label" aria-label="' + esc(L.stepsLabel) + '">' + names.map(function (n, i) {
      return '<li' + (i === current ? ' aria-current="step"' : '') + '>' + (i + 1) + ' · ' + esc(n) + (i < current ? ' ✓' : '') + '</li>';
    }).join('') + '</ol>';
  }

  function field(id, label, type, extra) {
    return '<div class="field"><label class="label" for="' + id + '">' + esc(label) + '</label><input id="' + id + '" type="' + type + '"' + (extra || '') + '></div>';
  }

  function checkout() {
    var L = t();
    var lines = cartLines();
    if (!lines.length) {
      return purchaseShell('<main id="contenido" class="wrap stack center" style="max-width:720px;gap:24px;padding-top:96px;padding-bottom:96px"><p style="margin:0">' + esc(L.emptyCheckout) + '</p><a class="mz-btn mz-btn-primary" href="#/merch">' + esc(L.goStore) + '</a></main>');
    }
    var sum = cartTotal();
    var home = state.delivery === 'domicilio';
    var regions = REGIONS.map(function (r) { return '<option>' + esc(r) + '</option>'; }).join('');
    var summary = lines.map(function (l) {
      var unit = eff(l.p);
      return '<div class="sum-line">' + thumb(l.p, 48) + '<span style="flex:1">' + l.qty + ' × ' + esc(pname(l.p)) + ' <span class="tenue">· ' + esc(l.size ? L.size + ' ' + l.size : L.unitLabel) + '</span></span><span style="white-space:nowrap">' + esc(unit === null ? clp(null) : clp(unit * l.qty)) + '</span></div>';
    }).join('');
    return purchaseShell('<main id="contenido" class="wrap stack" style="max-width:1180px;gap:32px;padding-top:32px;padding-bottom:64px">' +
      '<div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px"><a class="label" href="#/merch" data-action="back-cart" style="padding:14px 0">← ' + esc(L.backCart) + '</a>' + steps(1) + '</div>' +
      '<h1 class="titulo-md">' + esc(L.checkoutTitle) + '</h1>' +
      '<div class="checkout-cols">' +
      '<form class="checkout-form" onsubmit="return false">' +
      '<fieldset class="fields"><legend class="subheading">1 · ' + esc(L.contact) + '</legend>' +
      field('co-nombre', L.fName, 'text', ' autocomplete="name"') + field('co-correo', L.email, 'email', ' autocomplete="email" placeholder="nombre@correo.cl"') +
      field('co-fono', L.fPhone, 'tel', ' autocomplete="tel" placeholder="+56 9 1234 5678"') + field('co-rut', 'RUT', 'text', ' placeholder="12.345.678-9"') + '</fieldset>' +
      '<fieldset class="stack" style="gap:12px"><legend class="subheading">2 · ' + esc(L.delivery) + '</legend><p class="notice">' + esc(L.shipOnly) + '</p>' +
      '<label class="radio"><input type="radio" name="entrega" value="domicilio" data-action="delivery" data-key="del-home"' + (home ? ' checked' : '') + '><span>' + esc(L.homeDelivery) + '</span></label>' +
      '<label class="radio"><input type="radio" name="entrega" value="retiro" data-action="delivery" data-key="del-pickup"' + (!home ? ' checked' : '') + '><span>' + esc(L.pickupOption) + '</span></label>' +
      (home ? '<div class="fields" style="padding-top:8px">' +
        field('co-pais', L.fCountry, 'text', ' value="Chile" readonly style="background:var(--fondo-carbon);color:var(--tinta-tenue);border-color:var(--trama)"') +
        '<div class="field"><label class="label" for="co-region">' + esc(L.fRegion) + '</label><select id="co-region">' + regions + '</select></div>' +
        field('co-comuna', L.fComuna, 'text', '') + field('co-dir', L.fAddress, 'text', ' autocomplete="street-address"') + '</div>' : '') +
      '</fieldset>' +
      '<fieldset class="stack" style="gap:12px"><legend class="subheading">3 · ' + esc(L.payment) + '</legend>' +
      '<label class="radio"><input type="radio" name="pago" value="webpay" checked><strong>Webpay</strong><span class="tenue" style="font-size:14px">' + esc(L.webpayNote) + '</span></label>' +
      '<label class="radio"><input type="radio" name="pago" value="mercadopago"><strong>Mercado Pago</strong></label></fieldset>' +
      '</form>' +
      '<aside class="summary" aria-labelledby="resumen-titulo"><h2 id="resumen-titulo" class="subheading" style="margin:0">' + esc(L.summary) + '</h2>' + summary +
      '<div class="tenue" style="display:flex;justify-content:space-between;gap:12px;font-size:14px;border-top:1px solid var(--trama);padding-top:12px"><span>' + esc(L.shippingCost) + '</span><span>' + esc(home ? L.costHome : L.costPickup) + '</span></div>' +
      '<div style="display:flex;justify-content:space-between;align-items:baseline"><strong class="subheading" style="font-size:16px">Total</strong><span style="font-size:24px;font-weight:700">' + esc(clp(sum)) + '</span></div>' +
      '<label class="check"><input type="checkbox" data-action="terms" data-key="terms"' + (state.terms ? ' checked' : '') + '><span>' + esc(L.acceptPre) + ' <a href="terminos.html#terminos" style="color:var(--sangre)">' + esc(L.termsLink) + '</a>' + esc(L.acceptPost) + '</span></label>' +
      (state.termsErr ? '<p class="error" role="alert" style="font-weight:700">' + esc(L.termsErr) + '</p>' : '') +
      '<button type="button" class="mz-btn mz-btn-primary" data-action="pay" data-key="pay">' + esc(L.pay + ' ' + clp(sum)) + '</button>' +
      '</aside></div></main>');
  }

  function confirmation() {
    var L = t();
    return purchaseShell('<main id="contenido" class="wrap stack center" style="max-width:720px;gap:24px;padding-top:96px;padding-bottom:96px">' + steps(2) +
      '<h1 class="titulo-lg">' + esc(L.okTitle) + '</h1><p style="margin:0;font-size:18px;line-height:28px">' + esc(L.okText) + '</p>' +
      '<p class="subheading" style="margin:0">' + esc(L.orderNo) + ' #[NÚMERO]</p>' +
      '<a class="mz-btn mz-btn-primary" href="#/merch">' + esc(L.backStore) + '</a></main>');
  }

  /* ---------- Ventanas ---------- */
  function quickDialog() {
    var L = t();
    var p = byId(state.quick);
    if (!p) return '';
    return '<div class="overlay"><button type="button" class="overlay-bg" data-action="close-quick" aria-label="' + esc(L.close) + '" tabindex="-1"></button>' +
      '<div class="dialog" role="dialog" aria-modal="true" aria-labelledby="rapida-titulo">' +
      '<button type="button" class="close" data-action="close-quick" data-key="quick-close" aria-label="' + esc(L.close) + '">' + ICON_X + '</button>' +
      '<div style="display:flex;gap:16px;align-items:center;padding-right:48px">' + thumb(p, 88) +
      '<div class="stack" style="gap:6px"><h2 id="rapida-titulo" class="mz-card-name" style="font-size:26px">' + esc(pname(p)) + '</h2>' + priceBlock(p, false) + '</div></div>' +
      '<fieldset class="stack" style="gap:12px"><legend class="label">' + esc(L.chooseSize) + '</legend><div class="sizes">' + sizeButtons(p, 'q') + '</div>' +
      '<button type="button" class="link-btn" data-action="guide" data-key="guide-q">' + esc(L.sizeGuide) + '</button></fieldset>' +
      (state.err[p.id] ? '<p class="error" role="alert">' + esc(L.sizeErr) + '</p>' : '') +
      '<button type="button" class="mz-btn mz-btn-primary" data-action="add-direct" data-id="' + p.id + '" data-key="q-add">' + esc(L.add) + '</button>' +
      '<a class="label" href="#/producto/' + p.id + '" style="align-self:center;padding:12px 0">' + esc(L.seeDetail) + '</a>' +
      '</div></div>';
  }

  function guideDialog() {
    var L = t();
    var rows = ['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(function (z) { return '<tr><th scope="row">' + z + '</th><td>[CM]</td><td>[CM]</td></tr>'; }).join('');
    return '<div class="overlay" style="z-index:50"><button type="button" class="overlay-bg" data-action="close-guide" aria-label="' + esc(L.close) + '" tabindex="-1"></button>' +
      '<div class="dialog" role="dialog" aria-modal="true" aria-labelledby="guia-titulo" style="gap:16px">' +
      '<button type="button" class="close" data-action="close-guide" data-key="guide-close" aria-label="' + esc(L.close) + '">' + ICON_X + '</button>' +
      '<h2 id="guia-titulo" class="titulo-md" style="font-size:32px">' + esc(L.sizeGuide) + '</h2>' +
      '<p style="margin:0;font-size:14px;line-height:20px">' + esc(L.guideIntro) + '</p>' +
      '<table><thead><tr><th scope="col">' + esc(L.size) + '</th><th scope="col">' + esc(L.width) + '</th><th scope="col">' + esc(L.length) + '</th></tr></thead><tbody>' + rows + '</tbody></table>' +
      '<p class="small tenue" style="margin:0">' + esc(L.howTo) + '</p></div></div>';
  }

  function drawer() {
    var L = t();
    var lines = cartLines();
    var body;
    if (!lines.length) {
      body = '<div class="stack" style="padding:40px 24px;gap:16px;align-items:flex-start"><p style="margin:0">' + esc(L.emptyCart) + '</p><a class="mz-btn mz-btn-secondary" href="#/merch" data-action="close-drawer">' + esc(L.goStore) + '</a></div>';
    } else {
      body = '<ul class="lines">' + lines.map(function (l, i) {
        var unit = eff(l.p);
        return '<li>' + thumb(l.p, 72) + '<div class="stack" style="flex:1;gap:8px;min-width:0">' +
          '<span class="mz-card-name" style="font-size:20px">' + esc(pname(l.p)) + '</span>' +
          '<span class="small tenue">' + esc(l.size ? L.size + ' ' + l.size : L.unitLabel) + ' · ' + esc(clp(unit) + ' ' + L.each) + '</span>' +
          '<div style="display:flex;justify-content:space-between;align-items:center;gap:8px">' +
          '<div class="qty" role="group" aria-label="' + esc(L.qty) + '"><button type="button" data-action="qty" data-i="' + l.index + '" data-d="-1" data-key="dec-' + i + '" aria-label="' + esc(L.decrease) + '">−</button><span aria-live="polite">' + l.qty + '</span><button type="button" data-action="qty" data-i="' + l.index + '" data-d="1" data-key="inc-' + i + '" aria-label="' + esc(L.increase) + '">+</button></div>' +
          '<span class="price" style="font-size:16px">' + esc(unit === null ? clp(null) : clp(unit * l.qty)) + '</span></div>' +
          '<button type="button" class="remove label" data-action="remove" data-i="' + l.index + '">' + esc(L.remove) + '</button></div></li>';
      }).join('') + '</ul>' +
        '<div class="drawer-foot"><div style="display:flex;justify-content:space-between;align-items:baseline"><strong class="label" style="font-size:14px">Subtotal</strong><span class="price" style="font-size:22px">' + esc(clp(cartTotal())) + '</span></div>' +
        '<p class="small tenue" style="margin:0">' + esc(L.shipOnly) + '</p>' +
        '<a class="mz-btn mz-btn-primary" href="#/pago" data-action="close-drawer">' + esc(L.checkout) + '</a>' +
        '<button type="button" class="mz-btn mz-btn-secondary" data-action="close-drawer">' + esc(L.keepShopping) + '</button></div>';
    }
    return '<div class="drawer-wrap"><button type="button" class="overlay-bg" data-action="close-drawer" aria-label="' + esc(L.close) + '" tabindex="-1"></button>' +
      '<aside class="drawer" role="dialog" aria-modal="true" aria-labelledby="carro-titulo">' +
      '<div class="drawer-head"><h2 id="carro-titulo" class="titulo-md" style="font-size:32px">' + esc(L.yourCart) + ' (' + cartCount() + ')</h2>' +
      '<button type="button" class="close" style="position:static" data-action="close-drawer" data-key="drawer-close" aria-label="' + esc(L.close) + '">' + ICON_X + '</button></div>' +
      body + '</aside></div>';
  }

  /* ---------- Carrito ---------- */
  function cartLines() {
    var out = [];
    state.cart.forEach(function (l, index) {
      var p = byId(l.id);
      if (p && p.stock) out.push({ p: p, size: l.size, qty: l.qty, index: index });
    });
    return out;
  }
  function cartCount() { return cartLines().reduce(function (a, l) { return a + l.qty; }, 0); }
  function cartTotal() { return cartLines().reduce(function (a, l) { return a + (eff(l.p) || 0) * l.qty; }, 0); }
  function addItem(id, size) {
    var found = false;
    state.cart = state.cart.map(function (l) {
      if (l.id === id && l.size === size) { found = true; return { id: id, size: size, qty: l.qty + 1 }; }
      return l;
    });
    if (!found) state.cart.push({ id: id, size: size, qty: 1 });
    delete state.err[id];
    state.quick = null;
    state.drawer = true;
    save('mz-cart-v2', state.cart);
  }

  /* ---------- Render ---------- */
  var app = document.getElementById('app');
  var prevScreen = null;

  function render() {
    var r = route();
    var L = t();
    document.documentElement.lang = state.lang;
    var html = '<a class="skip" href="#contenido" data-action="skip">' + esc(L.skip) + '</a>';
    if (r.screen === 'pago') html += checkout();
    else if (r.screen === 'ok') html += confirmation();
    else {
      html += header(r.screen);
      if (r.screen === 'tienda') html += store();
      else if (r.screen === 'fechas') html += dates();
      else if (r.screen === 'producto') html += product(r.id);
      else html += home();
      html += footer();
    }
    if (state.quick) html += quickDialog();
    if (state.guide) html += guideDialog();
    if (state.drawer && r.screen !== 'pago' && r.screen !== 'ok') html += drawer();
    app.innerHTML = html;
    document.body.style.overflow = state.quick || state.guide || state.drawer ? 'hidden' : '';

    var titles = { home: 'MAWIZA', fechas: L.datesTitle + ' · MAWIZA', tienda: L.merchTitle + ' · MAWIZA', producto: (r.id ? pname(byId(r.id)) : '') + ' · MAWIZA', pago: L.checkoutTitle + ' · MAWIZA', ok: L.okTitle + ' · MAWIZA' };
    document.title = titles[r.screen] || 'MAWIZA';

    var screenKey = r.screen + (r.id || '') + (r.anchor || '');
    if (screenKey !== prevScreen) {
      prevScreen = screenKey;
      if (r.anchor) {
        var el = document.getElementById(r.anchor);
        if (el) el.scrollIntoView();
      } else if (!lastFocus) {
        window.scrollTo(0, 0);
      }
    }
    restoreFocus();
  }

  function restoreFocus() {
    var target = null;
    if (state.guide) target = app.querySelector('[data-key="guide-close"]');
    else if (state.quick) target = lastFocus && app.querySelector('[data-key="' + lastFocus + '"]') || app.querySelector('[data-key="quick-close"]');
    else if (state.drawer) target = lastFocus && app.querySelector('.drawer [data-key="' + lastFocus + '"]') || app.querySelector('[data-key="drawer-close"]');
    else if (lastFocus) target = app.querySelector('[data-key="' + lastFocus + '"]');
    if (target) target.focus({ preventScroll: true });
    lastFocus = null;
  }

  /* ---------- Eventos ---------- */
  app.addEventListener('click', function (e) {
    var el = e.target.closest('[data-action]');
    if (!el) return;
    var a = el.getAttribute('data-action');
    var id = el.getAttribute('data-id');
    lastFocus = el.getAttribute('data-key');
    switch (a) {
      case 'skip': {
        e.preventDefault();
        var main = document.getElementById('contenido');
        if (main) { main.setAttribute('tabindex', '-1'); main.focus(); }
        return;
      }
      case 'lang': state.lang = el.getAttribute('data-lang'); save('mz-lang', state.lang); break;
      case 'drawer': opener = 'cart'; state.drawer = true; break;
      case 'close-drawer': state.drawer = false; lastFocus = el.tagName === 'A' ? null : opener; break;
      case 'filter': state.filter = el.getAttribute('data-filter'); break;
      case 'filter-link': state.filter = el.getAttribute('data-filter'); return;
      case 'slide': state.slide = +el.getAttribute('data-i'); break;
      case 'slide-prev': state.slide = (state.slide - 1 + CAROUSEL.length) % CAROUSEL.length; break;
      case 'slide-next': state.slide = (state.slide + 1) % CAROUSEL.length; break;
      case 'size': state.sel[id] = el.getAttribute('data-size'); delete state.err[id]; break;
      case 'add': {
        var p = byId(id);
        opener = 'add-' + id;
        if (p.sizes) { state.quick = id; lastFocus = null; } else { addItem(id, null); lastFocus = null; }
        break;
      }
      case 'add-direct': {
        var q = byId(id);
        if (q.sizes && !state.sel[id]) { state.err[id] = true; break; }
        if (!opener) opener = el.getAttribute('data-key');
        addItem(id, q.sizes ? state.sel[id] : null); lastFocus = null;
        break;
      }
      case 'close-quick': state.quick = null; lastFocus = opener; break;
      case 'guide': state.guide = true; break;
      case 'close-guide': state.guide = false; lastFocus = state.quick ? 'guide-q' : null; break;
      case 'qty': {
        var i = +el.getAttribute('data-i'), d = +el.getAttribute('data-d');
        var line = state.cart[i];
        line.qty += d;
        if (line.qty < 1) { state.cart.splice(i, 1); lastFocus = 'drawer-close'; }
        save('mz-cart-v2', state.cart);
        break;
      }
      case 'remove': state.cart.splice(+el.getAttribute('data-i'), 1); save('mz-cart-v2', state.cart); lastFocus = 'drawer-close'; break;
      case 'back-cart': state.drawer = true; return;
      case 'terms': case 'delivery': return;
      case 'pay':
        if (!state.terms) { state.termsErr = true; break; }
        state.cart = []; state.terms = false; save('mz-cart-v2', state.cart);
        go('#/confirmacion');
        return;
      default: return;
    }
    render();
  });

  app.addEventListener('change', function (e) {
    var el = e.target;
    var a = el.getAttribute('data-action');
    if (a === 'sort') { state.sort = el.value; lastFocus = 'sort'; render(); }
    if (a === 'terms') { state.terms = el.checked; state.termsErr = false; lastFocus = 'terms'; render(); }
    if (a === 'delivery') { state.delivery = el.value; lastFocus = el.getAttribute('data-key'); render(); }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (state.guide) { state.guide = false; lastFocus = state.quick ? 'guide-q' : null; render(); }
    else if (state.quick) { state.quick = null; lastFocus = opener; render(); }
    else if (state.drawer) { state.drawer = false; lastFocus = opener; render(); }
  });

  window.addEventListener('hashchange', function () {
    state.quick = null; state.guide = false;
    var h = location.hash;
    state.drawer = (h === '#/merch' || h === '#/tienda') && state.drawer;
    render();
  });

  render();
})();
