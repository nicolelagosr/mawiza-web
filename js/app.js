/* MAWIZA — prototipo web (JavaScript sin dependencias). */
(function () {
  'use strict';

  var IMG = 'assets/img/';
  var SIZES = ['S', 'M', 'L', 'XL', 'XXL'];
  var REGIONS = ['Arica y Parinacota', 'Tarapacá', 'Antofagasta', 'Atacama', 'Coquimbo', 'Valparaíso', 'Metropolitana de Santiago', "Libertador General Bernardo O'Higgins", 'Maule', 'Ñuble', 'Biobío', 'La Araucanía', 'Los Ríos', 'Los Lagos', 'Aysén del General Carlos Ibáñez del Campo', 'Magallanes y de la Antártica Chilena'];

  /* Catálogo: precio en CLP; sale = precio de oferta; price null = por definir. */
  var CATALOG = [
    { id: 'serpientes', cat: 'poleras', es: 'Polera Serpientes', en: 'Serpents T-shirt', price: 25000, sale: 20000, image: IMG + 'polera-serpientes.jpg', altEs: 'Polera blanca con ilustración negra y naranja de serpientes y el nombre MAWIZA', altEn: 'White T-shirt with a black and orange serpent illustration and the MAWIZA name', sized: true, stock: true },
    { id: 'ramas', cat: 'poleras', es: 'Polera Ramas', en: 'Branches T-shirt', price: 25000, sale: null, image: IMG + 'polera-ramas.jpg', altEs: 'Polera negra con el logo de ramas en rojo y flores rojas y blancas', altEn: 'Black T-shirt with the red branch logo and red and white flowers', sized: true, stock: true },
    { id: 'cd', cat: 'discos', es: 'CD ÜL', en: 'ÜL CD', price: 20000, sale: null, image: IMG + 'portada-ul.jpg', altEs: 'Portada del disco ÜL', altEn: 'ÜL album cover', sized: false, stock: true },
    { id: 'vinilo', cat: 'discos', es: 'Vinilo ÜL rojo', en: 'ÜL red vinyl', price: null, sale: null, image: IMG + 'vinilo-rojo.svg', altEs: 'Vinilo rojo con salpicaduras negras', altEn: 'Red vinyl with black splatter', sized: false, stock: false }
  ];

  var T = {
    es: {
      skip: 'Saltar al contenido', shipBar: 'Envíos solo dentro de Chile', navMusic: 'Música', navShows: 'Conciertos', navStore: 'Tienda', navBand: 'Banda', langLabel: 'Idioma', cart: 'Carro',
      heroKicker: 'Nuevo disco', heroSub: 'Metal indígena del Wallmapu, cantado solo en mapuzungun.', btnListen: 'Escuchar ÜL', btnMerch: 'Ver tienda', nextShow: 'Próxima fecha',
      coverAlt: 'Portada del disco ÜL: retrato en blanco y negro de una persona exhalando humo, con el logo de ramas en rojo',
      bandPhotoAlt: 'Los cuatro integrantes de MAWIZA en un campo abierto, con instrumentos y la Wenufoye flameando al centro',
      showsTitle: 'Próximos conciertos', tickets: 'Entradas', soldOut: 'Agotado', lastTickets: 'Últimas entradas', allDates: 'Todas las fechas',
      storeTitle: 'Tienda', storeTagline: 'Merch oficial de MAWIZA', storeNote: 'Precios en pesos chilenos, IVA incluido. Venta y despacho solo dentro de Chile.', viewStore: 'Ver toda la tienda',
      add: 'Agregar al carro', noStock: 'Sin stock', size: 'Talla', chooseSize: 'Elige tu talla', sizeGuide: 'Guía de tallas', sizeErr: 'Elige una talla para agregar al carro.',
      oldPrice: 'Precio anterior: ', salePrice: 'Precio oferta: ', unavailable: 'No disponible: ', offer: 'Oferta', seeDetail: 'Ver detalle del producto',
      catShirt: 'Polera', catDisc: 'Disco', filterLabel: 'Filtrar por categoría', filterAll: 'Todos', filterShirts: 'Poleras', filterDiscs: 'Discos', breadcrumb: 'Ruta de navegación',
      sortLabel: 'Ordenar', sortRecent: 'Más recientes', sortLow: 'Precio: menor a mayor', sortHigh: 'Precio: mayor a menor', products: 'productos', product: 'producto',
      descShirt: '[Descripción breve: material, color de la prenda y técnica de impresión.]', descDisc: '[Descripción breve: formato, sello y año de edición.]', pricesNote: 'Precios en pesos chilenos, IVA incluido.',
      guideIntro: 'Medidas de la polera extendida sobre una superficie plana, en centímetros.', width: 'Ancho', length: 'Largo', howTo: 'Ancho: de axila a axila. Largo: desde el hombro hasta el borde inferior.',
      musicTitle: 'Música', albumMeta: 'Disco · [AÑO] · [N° DE CANCIONES]', playVideo: 'Reproducir video de Ngulutu', officialVideo: 'Video oficial', moreVideos: 'Más videos',
      bandTitle: 'La banda', bio: 'MAWIZA es metal indígena del Wallmapu, cantado solo en mapuzungun.', bioPlaceholder: '[Biografía breve: origen, año de formación y discos.]', wordKicker: 'Palabra en mapuzungun', wordMeaning: 'Canto', wordText: '[Explicación breve del significado y su relación con el disco.]',
      footerNav: 'Pie de página', termsLink: 'Términos y condiciones', shipReturns: 'Envíos y devoluciones', press: 'Prensa y booking', footerNote: 'Venta y despacho solo dentro de Chile · © 2026 MAWIZA',
      chileOnlyShort: 'Venta y despacho solo dentro de Chile.', close: 'Cerrar',
      yourCart: 'Tu carro', emptyCart: 'Tu carro está vacío.', goStore: 'Ir a la tienda', qty: 'Cantidad', decrease: 'Quitar una unidad', increase: 'Agregar una unidad', remove: 'Eliminar', each: 'c/u',
      shipNextStep: 'El despacho se calcula en el siguiente paso. Solo enviamos dentro de Chile.', checkout: 'Ir a pagar', keepShopping: 'Seguir comprando',
      secure: 'Pago seguro', backCart: 'Volver al carro', stepsLabel: 'Pasos de la compra', stepCart: 'Carro', stepData: 'Datos y pago', stepOk: 'Confirmación',
      backStore: 'Volver a la tienda', checkoutTitle: 'Finalizar compra', contact: 'Contacto', fName: 'Nombre y apellido', fPhone: 'Teléfono', shipping: 'Despacho', chileOnly: 'Por ahora solo despachamos dentro de Chile.', fCountry: 'País', fRegion: 'Región', fComuna: 'Comuna', fAddress: 'Dirección', payment: 'Pago', webpayNote: 'Débito o crédito', email: 'Correo',
      summary: 'Resumen', shippingCost: 'Despacho', acceptPre: 'Acepto los', acceptPost: ' de la tienda.', termsErr: 'Acepta los términos y condiciones para continuar con el pago.', pay: 'Pagar',
      okTitle: 'Pedido recibido', okText: 'Gracias por apoyar a la banda. Te enviamos el detalle de tu compra por correo.', orderNo: 'Pedido', disc: 'Disco', emptyCheckout: 'No hay productos en tu carro.'
    },
    en: {
      skip: 'Skip to content', shipBar: 'We only ship within Chile', navMusic: 'Music', navShows: 'Shows', navStore: 'Store', navBand: 'Band', langLabel: 'Language', cart: 'Cart',
      heroKicker: 'New album', heroSub: 'Indigenous metal from Wallmapu, sung only in Mapuzungun.', btnListen: 'Listen to ÜL', btnMerch: 'Visit the store', nextShow: 'Next show',
      coverAlt: 'ÜL album cover: black and white portrait of a person exhaling smoke, with the red branch logo',
      bandPhotoAlt: 'The four members of MAWIZA in an open field, with their instruments and the Wenufoye flag in the center',
      showsTitle: 'Upcoming shows', tickets: 'Tickets', soldOut: 'Sold out', lastTickets: 'Last tickets', allDates: 'All dates',
      storeTitle: 'Store', storeTagline: 'Official MAWIZA merch', storeNote: 'Prices in Chilean pesos, VAT included. We only sell and ship within Chile.', viewStore: 'See the full store',
      add: 'Add to cart', noStock: 'Out of stock', size: 'Size', chooseSize: 'Choose your size', sizeGuide: 'Size guide', sizeErr: 'Choose a size to add it to your cart.',
      oldPrice: 'Previous price: ', salePrice: 'Sale price: ', unavailable: 'Unavailable: ', offer: 'Sale', seeDetail: 'See product details',
      catShirt: 'T-shirt', catDisc: 'Album', filterLabel: 'Filter by category', filterAll: 'All', filterShirts: 'T-shirts', filterDiscs: 'Albums', breadcrumb: 'Breadcrumb',
      sortLabel: 'Sort', sortRecent: 'Newest', sortLow: 'Price: low to high', sortHigh: 'Price: high to low', products: 'products', product: 'product',
      descShirt: '[Short description: material, garment color and print technique.]', descDisc: '[Short description: format, label and release year.]', pricesNote: 'Prices in Chilean pesos, VAT included.',
      guideIntro: 'Measurements of the T-shirt laid flat, in centimeters.', width: 'Width', length: 'Length', howTo: 'Width: armpit to armpit. Length: from the shoulder to the bottom hem.',
      musicTitle: 'Music', albumMeta: 'Album · [YEAR] · [NUMBER OF TRACKS]', playVideo: 'Play the Ngulutu video', officialVideo: 'Official video', moreVideos: 'More videos',
      bandTitle: 'The band', bio: 'MAWIZA is Indigenous metal from Wallmapu, sung only in Mapuzungun.', bioPlaceholder: '[Short bio: origin, year formed and albums.]', wordKicker: 'A word in Mapuzungun', wordMeaning: 'Song', wordText: '[Short explanation of the meaning and how it relates to the album.]',
      footerNav: 'Footer', termsLink: 'Terms and conditions', shipReturns: 'Shipping and returns', press: 'Press and booking', footerNote: 'Sales and shipping within Chile only · © 2026 MAWIZA',
      chileOnlyShort: 'Sales and shipping within Chile only.', close: 'Close',
      yourCart: 'Your cart', emptyCart: 'Your cart is empty.', goStore: 'Go to the store', qty: 'Quantity', decrease: 'Remove one', increase: 'Add one', remove: 'Remove', each: 'each',
      shipNextStep: 'Shipping is calculated in the next step. We only ship within Chile.', checkout: 'Checkout', keepShopping: 'Keep shopping',
      secure: 'Secure payment', backCart: 'Back to cart', stepsLabel: 'Checkout steps', stepCart: 'Cart', stepData: 'Details and payment', stepOk: 'Confirmation',
      backStore: 'Back to the store', checkoutTitle: 'Checkout', contact: 'Contact', fName: 'Full name', fPhone: 'Phone', shipping: 'Shipping', chileOnly: 'For now we only ship within Chile.', fCountry: 'Country', fRegion: 'Region', fComuna: 'Commune', fAddress: 'Address', payment: 'Payment', webpayNote: 'Debit or credit', email: 'Email',
      summary: 'Summary', shippingCost: 'Shipping', acceptPre: 'I accept the store', acceptPost: '.', termsErr: 'Accept the terms and conditions to continue to payment.', pay: 'Pay',
      okTitle: 'Order received', okText: 'Thank you for supporting the band. We emailed you the details of your order.', orderNo: 'Order', disc: 'Album', emptyCheckout: 'There are no products in your cart.'
    }
  };

  /* ---------- Estado ---------- */
  function load(key, fallback) {
    try { var v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; }
  }
  function save(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* sin almacenamiento: el carro dura la visita */ }
  }

  var state = {
    lang: load('mz-lang', 'es'),
    cart: load('mz-cart', []),
    sel: {}, err: {},
    drawer: false, quick: null, guide: false,
    filter: 'todos', sort: 'recientes',
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

  /* ---------- Rutas ---------- */
  function route() {
    var h = location.hash.replace(/^#\/?/, '');
    var parts = h.split('/');
    if (parts[0] === 'tienda') return { screen: 'tienda' };
    if (parts[0] === 'producto' && byId(parts[1])) return { screen: 'producto', id: parts[1] };
    if (parts[0] === 'pago') return { screen: 'pago' };
    if (parts[0] === 'confirmacion') return { screen: 'ok' };
    return { screen: 'home', anchor: ['musica', 'conciertos', 'banda'].indexOf(parts[0]) >= 0 ? parts[0] : null };
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

  function priceBlock(p, big) {
    var L = t();
    var cls = big ? ' style="font-size:24px;line-height:32px"' : '';
    if (!p.stock) return '<span class="price price-off"' + cls + '>' + srOnly(L.unavailable) + esc(clp(p.price)) + '</span>';
    if (p.sale !== null) {
      return '<span class="price-row"><s class="price-old">' + srOnly(L.oldPrice) + esc(clp(p.price)) + '</s>' +
        '<span class="price"' + cls + '>' + srOnly(L.salePrice) + esc(clp(p.sale)) + '</span></span>';
    }
    return '<span class="price"' + cls + '>' + esc(clp(p.price)) + '</span>';
  }
  function imageTag(p) {
    var L = t();
    if (!p.stock) return '<span class="card-tag"><span class="mz-tag mz-tag-plata">' + esc(L.soldOut) + '</span></span>';
    if (p.sale !== null) {
      var pct = Math.round((1 - p.sale / p.price) * 100);
      return '<span class="card-tag"><span class="mz-tag">' + esc(L.offer + ' −' + pct + '%') + '</span></span>';
    }
    return '';
  }
  function sizeButtons(p, keyPrefix) {
    var chosen = state.sel[p.id];
    return SIZES.map(function (z) {
      return '<button type="button" data-action="size" data-id="' + p.id + '" data-size="' + z + '" data-key="' + keyPrefix + '-' + p.id + '-' + z + '" aria-pressed="' + (chosen === z) + '">' + z + '</button>';
    }).join('');
  }

  function card(p, headingTag) {
    var L = t();
    var href = '#/producto/' + p.id;
    var action = p.stock
      ? '<button type="button" class="mz-btn mz-btn-primary" data-action="add" data-id="' + p.id + '" data-key="add-' + p.id + '">' + esc(L.add) + '</button>'
      : '<span class="no-stock label">' + esc(L.noStock) + '</span>';
    return '<article class="mz-card">' +
      '<a class="mz-card-img" href="' + href + '" tabindex="-1" aria-hidden="true"><img src="' + p.image + '" alt="" loading="lazy">' + imageTag(p) + '</a>' +
      (headingTag === 'h2' ? '<span class="label tenue">' + esc(p.cat === 'poleras' ? L.catShirt : L.catDisc) + '</span>' : '') +
      '<' + headingTag + ' class="mz-card-name"><a href="' + href + '">' + esc(pname(p)) + '</a></' + headingTag + '>' +
      priceBlock(p, false) +
      '<div class="card-action">' + action + '</div>' +
      '</article>';
  }

  /* ---------- Pantallas ---------- */
  function header(screen) {
    var L = t();
    var storeCurrent = screen === 'tienda' || screen === 'producto';
    return (storeCurrent ? '<div class="shipbar label">' + esc(L.shipBar) + '</div>' : '') +
      '<header class="site-header"><div class="wrap">' +
      '<a href="#/" aria-label="MAWIZA, inicio"><img src="' + IMG + 'wordmark-blanco.png" alt="MAWIZA" style="height:28px;width:auto"></a>' +
      '<nav class="nav label" aria-label="Principal">' +
      '<a href="#/musica">' + esc(L.navMusic) + '</a>' +
      '<a href="#/conciertos">' + esc(L.navShows) + '</a>' +
      '<a href="#/tienda"' + (storeCurrent ? ' aria-current="page"' : '') + '>' + esc(L.navStore) + '</a>' +
      '<a href="#/banda">' + esc(L.navBand) + '</a>' +
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
      '<a href="#/tienda">' + esc(L.navStore) + '</a>' +
      '<button type="button" class="link-btn label" style="color:inherit;text-decoration:none;min-height:44px;font-size:12px;align-self:auto" data-action="guide" data-key="guide-footer">' + esc(L.sizeGuide) + '</button>' +
      '<a href="terminos.html">' + esc(L.termsLink) + '</a>' +
      '<a href="terminos.html#envios">' + esc(L.shipReturns) + '</a>' +
      '<a href="#/">' + esc(L.press) + '</a>' +
      '</nav>' +
      '<div class="footer-links small"><a class="tenue" href="#/">Instagram</a><a class="tenue" href="#/">YouTube</a><a class="tenue" href="#/">Bandcamp</a><a class="tenue" href="#/">Spotify</a></div>' +
      '<p class="small tenue" style="margin:0">' + esc(L.footerNote) + '</p>' +
      '</div></footer>';
  }

  function home() {
    var L = t();
    var shows = [
      { tag: L.lastTickets, tone: '', primary: true },
      { tag: null, tone: '', primary: false },
      { tag: L.soldOut, tone: ' mz-tag-plata', primary: false }
    ].map(function (s) {
      return '<li><span class="poster" style="white-space:nowrap">[DD MMM]</span><span class="leader" aria-hidden="true"></span>' +
        '<span class="poster">[RECINTO], [CIUDAD]</span>' +
        (s.tag ? '<span class="mz-tag' + s.tone + '">' + esc(s.tag) + '</span>' : '') +
        '<a class="mz-btn ' + (s.primary ? 'mz-btn-primary' : 'mz-btn-secondary') + '" href="#/conciertos">' + esc(L.tickets) + '</a></li>';
    }).join('');

    return '<main id="contenido">' +
      '<section class="hero" aria-labelledby="hero-titulo"><img src="' + IMG + 'banda-bn.jpg" alt="' + esc(L.bandPhotoAlt) + '">' +
      '<div class="hero-inner wrap">' +
      '<div class="stack center" style="gap:20px">' +
      '<div style="display:flex;align-items:center;gap:8px">' + wunelfe(18) + '<span class="label oro">' + esc(L.heroKicker) + '</span>' + wunelfe(18) + '</div>' +
      '<h1 id="hero-titulo" class="titulo-xl">ÜL</h1>' +
      '<p style="margin:0;font-size:18px;line-height:28px;max-width:520px;color:var(--tinta-papel)">' + esc(L.heroSub) + '</p>' +
      '<div class="btn-row"><a class="mz-btn mz-btn-primary" href="#/musica">' + esc(L.btnListen) + '</a><a class="mz-btn mz-btn-secondary" href="#/tienda">' + esc(L.btnMerch) + '</a></div>' +
      '</div>' +
      '<p class="hero-next poster"><span class="llamado">' + esc(L.nextShow) + '</span> · [DD MMM] · [RECINTO], [CIUDAD]</p>' +
      '</div></section>' +

      '<section id="conciertos" class="section" aria-labelledby="conciertos-titulo"><div class="wrap-sm stack" style="gap:24px">' +
      '<h2 id="conciertos-titulo" class="titulo-md" style="text-align:center">' + esc(L.showsTitle) + '</h2>' +
      '<ul class="shows">' + shows + '</ul>' +
      '<a class="label" href="#/conciertos" style="align-self:center;padding:14px 0">' + esc(L.allDates) + ' →</a>' +
      '</div></section>' +

      '<section id="tienda" class="section" aria-labelledby="tienda-titulo"><div class="wrap stack" style="gap:40px">' +
      '<div class="stack center" style="gap:12px"><h2 id="tienda-titulo" class="titulo-md">' + esc(L.storeTitle) + '</h2><p class="tenue" style="margin:0;font-size:14px;line-height:20px;max-width:560px">' + esc(L.storeNote) + '</p></div>' +
      '<div class="grid-cards">' + CATALOG.map(function (p) { return card(p, 'h3'); }).join('') + '</div>' +
      '<div style="display:flex;justify-content:center"><a class="mz-btn mz-btn-secondary" href="#/tienda">' + esc(L.viewStore) + ' →</a></div>' +
      '</div></section>' +

      '<section id="musica" class="section musica" aria-labelledby="musica-titulo"><div class="wrap stack" style="gap:40px">' +
      '<h2 id="musica-titulo" class="titulo-md" style="text-align:center">' + esc(L.musicTitle) + '</h2>' +
      '<div class="grid-2">' +
      '<div style="display:flex;gap:24px;align-items:flex-start;flex-wrap:wrap"><img src="' + IMG + 'portada-ul.jpg" alt="' + esc(L.coverAlt) + '" style="width:240px;height:240px;object-fit:cover">' +
      '<div class="stack" style="gap:16px;flex:1 1 200px"><h3 class="titulo-md" style="font-size:44px;text-transform:none">ÜL</h3><p class="tenue" style="margin:0">' + esc(L.albumMeta) + '</p>' +
      '<div class="stack" style="gap:8px;max-width:280px"><a class="mz-btn mz-btn-secondary" href="#/musica">Spotify</a><a class="mz-btn mz-btn-secondary" href="#/musica">Bandcamp</a><a class="mz-btn mz-btn-secondary" href="#/musica">YouTube</a></div></div></div>' +
      '<div class="stack" style="gap:12px"><a class="video" href="#/musica" aria-label="' + esc(L.playVideo) + '"><img src="' + IMG + 'logo-ramas-blanco.png" alt=""><span class="play"><svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" fill="#fff"/></svg></span></a>' +
      '<p class="poster" style="margin:0">Ngulutu <span class="label tenue" style="font-family:var(--font-texto)">· ' + esc(L.officialVideo) + '</span></p>' +
      '<a class="label" href="#/musica" style="align-self:flex-start;padding:14px 0">' + esc(L.moreVideos) + ' →</a></div>' +
      '</div></div></section>' +

      '<section id="banda" class="banda tema-cuero" aria-labelledby="banda-titulo"><span class="mz-guarda mz-guarda-wunelfe" aria-hidden="true"></span>' +
      '<div class="wrap grid-2" style="padding-top:64px;padding-bottom:64px;align-items:center">' +
      '<div class="stack" style="gap:24px"><h2 id="banda-titulo" class="titulo-md" style="color:var(--tinta-papel)">' + esc(L.bandTitle) + '</h2>' +
      '<p style="margin:0;font-size:18px;line-height:28px">' + esc(L.bio) + '</p><p class="tenue" style="margin:0">' + esc(L.bioPlaceholder) + '</p>' +
      '<ul class="members poster"><li>AWKA</li><li aria-hidden="true">·</li><li>KARÜ</li><li aria-hidden="true">·</li><li>ZEWÜ</li><li aria-hidden="true">·</li><li>TXALKAN</li></ul></div>' +
      '<div class="palabra">' + wunelfe(40) + '<span class="label">' + esc(L.wordKicker) + '</span><span style="font-family:var(--font-titulo);font-size:96px;line-height:1">ÜL</span>' +
      '<span class="subheading">' + esc(L.wordMeaning) + '</span><p style="margin:0;max-width:360px">' + esc(L.wordText) + '</p></div>' +
      '</div><span class="mz-guarda mz-guarda-wunelfe" aria-hidden="true"></span></section>' +
      '</main>';
  }

  function store() {
    var L = t();
    var list = CATALOG.filter(function (p) { return state.filter === 'todos' || p.cat === state.filter; });
    if (state.sort !== 'recientes') {
      var dir = state.sort === 'menor' ? 1 : -1;
      list = list.slice().sort(function (a, b) {
        var pa = a.stock ? eff(a) : null, pb = b.stock ? eff(b) : null;
        if (pa === null) return 1;
        if (pb === null) return -1;
        return (pa - pb) * dir;
      });
    }
    var filters = [['todos', L.filterAll], ['poleras', L.filterShirts], ['discos', L.filterDiscs]].map(function (f) {
      return '<button type="button" class="label" data-action="filter" data-filter="' + f[0] + '" data-key="filter-' + f[0] + '" aria-pressed="' + (state.filter === f[0]) + '">' + esc(f[1]) + '</button>';
    }).join('');
    var opts = [['recientes', L.sortRecent], ['menor', L.sortLow], ['mayor', L.sortHigh]].map(function (o) {
      return '<option value="' + o[0] + '"' + (state.sort === o[0] ? ' selected' : '') + '>' + esc(o[1]) + '</option>';
    }).join('');
    return '<main id="contenido">' +
      '<section aria-labelledby="tienda-pagina-titulo"><div class="wrap stack" style="gap:8px;padding-top:56px">' +
      '<h1 id="tienda-pagina-titulo" class="titulo-lg" style="color:var(--tinta-papel)">' + esc(L.storeTitle) + '</h1>' +
      '<p class="label" style="margin:0;font-size:14px;color:var(--tinta-papel)">' + esc(L.storeTagline) + '</p></div></section>' +
      '<div class="wrap stack" style="gap:32px;padding-top:32px;padding-bottom:64px">' +
      '<div class="toolbar"><div class="filters" role="group" aria-label="' + esc(L.filterLabel) + '">' + filters + '</div>' +
      '<div class="sort"><span class="small tenue" aria-live="polite">' + list.length + ' ' + esc(list.length === 1 ? L.product : L.products) + '</span>' +
      '<label class="label" for="orden">' + esc(L.sortLabel) + '</label><select id="orden" data-action="sort" data-key="sort">' + opts + '</select></div></div>' +
      '<p class="tenue" style="margin:0;font-size:14px;line-height:20px">' + esc(L.storeNote) + '</p>' +
      '<div class="grid-cards">' + list.map(function (p) { return card(p, 'h2'); }).join('') + '</div>' +
      '</div></main>';
  }

  function product(id) {
    var L = t();
    var p = byId(id);
    var catLabel = p.cat === 'poleras' ? L.filterShirts : L.filterDiscs;
    var buy = '';
    if (p.stock) {
      buy = (p.sized ? '<fieldset class="stack" style="gap:12px"><legend class="label">' + esc(L.size) + '</legend><div class="sizes">' + sizeButtons(p, 'pd') + '</div>' +
        '<button type="button" class="link-btn" data-action="guide" data-key="guide-pd">' + esc(L.sizeGuide) + '</button></fieldset>' : '') +
        (state.err[p.id] ? '<p class="error" role="alert">' + esc(L.sizeErr) + '</p>' : '') +
        '<button type="button" class="mz-btn mz-btn-primary" data-action="add-direct" data-id="' + p.id + '" data-key="pd-add">' + esc(L.add) + '</button>';
    } else {
      buy = '<span class="no-stock label">' + esc(L.noStock) + '</span>';
    }
    return '<main id="contenido" class="wrap stack" style="max-width:1180px;gap:24px;padding-top:24px;padding-bottom:64px">' +
      '<nav class="crumbs label" aria-label="' + esc(L.breadcrumb) + '"><ol>' +
      '<li><a href="#/tienda">' + esc(L.navStore) + '</a></li><li aria-hidden="true" class="tenue">/</li>' +
      '<li><a href="#/tienda" data-action="filter-link" data-filter="' + p.cat + '">' + esc(catLabel) + '</a></li><li aria-hidden="true" class="tenue">/</li>' +
      '<li aria-current="page" class="tenue">' + esc(pname(p)) + '</li></ol></nav>' +
      '<div class="grid-2">' +
      '<div class="detail-img"><img src="' + p.image + '" alt="' + esc(palt(p)) + '">' + imageTag(p) + '</div>' +
      '<div class="stack" style="gap:20px">' +
      '<span class="label tenue">' + esc(p.cat === 'poleras' ? L.catShirt : L.catDisc) + '</span>' +
      '<h1 class="titulo-md">' + esc(pname(p)) + '</h1>' +
      priceBlock(p, true) +
      '<p style="margin:0">' + esc(p.cat === 'poleras' ? L.descShirt : L.descDisc) + '</p>' +
      buy +
      '<ul class="notes"><li>' + esc(L.chileOnlyShort) + '</li><li>' + esc(L.pricesNote) + '</li><li><a href="terminos.html#envios" style="color:var(--tinta)">' + esc(L.shipReturns) + '</a></li></ul>' +
      '</div></div></main>';
  }

  function purchaseShell(inner) {
    var L = t();
    return '<div class="tema-papel" style="min-height:100vh;background:var(--fondo);color:var(--tinta)">' +
      '<header class="checkout-header"><div class="wrap" style="max-width:1180px">' +
      '<a href="#/" aria-label="MAWIZA, inicio"><img src="' + IMG + 'wordmark-negro.png" alt="MAWIZA" style="height:28px;width:auto"></a>' +
      '<span class="label" style="display:flex;align-items:center;gap:8px">' + ICON_LOCK + esc(L.secure) + '</span></div></header>' +
      inner +
      '<footer class="checkout-footer"><a href="terminos.html" style="color:var(--tinta);padding:12px 0">' + esc(L.termsLink) + '</a><span style="padding:12px 0">' + esc(L.chileOnlyShort) + '</span></footer>' +
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
      return purchaseShell('<main id="contenido" class="wrap stack center" style="max-width:720px;gap:24px;padding-top:96px;padding-bottom:96px"><p style="margin:0">' + esc(L.emptyCheckout) + '</p><a class="mz-btn mz-btn-primary" href="#/tienda">' + esc(L.goStore) + '</a></main>');
    }
    var sum = cartTotal();
    var regions = REGIONS.map(function (r) { return '<option>' + esc(r) + '</option>'; }).join('');
    var summary = lines.map(function (l) {
      return '<div class="sum-line"><img src="' + l.p.image + '" alt=""><span style="flex:1">' + l.qty + ' × ' + esc(pname(l.p)) + ' <span class="tenue">· ' + esc(l.size ? L.size + ' ' + l.size : L.disc) + '</span></span><span style="white-space:nowrap">' + esc(clp(eff(l.p) * l.qty)) + '</span></div>';
    }).join('');
    return purchaseShell('<main id="contenido" class="wrap stack" style="max-width:1180px;gap:32px;padding-top:32px;padding-bottom:64px">' +
      '<div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px"><a class="label" href="#/tienda" data-action="back-cart" style="padding:14px 0">← ' + esc(L.backCart) + '</a>' + steps(1) + '</div>' +
      '<h1 class="titulo-md">' + esc(L.checkoutTitle) + '</h1>' +
      '<div class="checkout-cols">' +
      '<form class="checkout-form" onsubmit="return false">' +
      '<fieldset class="fields"><legend class="subheading">1 · ' + esc(L.contact) + '</legend>' +
      field('co-nombre', L.fName, 'text', ' autocomplete="name"') + field('co-correo', L.email, 'email', ' autocomplete="email" placeholder="nombre@correo.cl"') +
      field('co-fono', L.fPhone, 'tel', ' autocomplete="tel" placeholder="+56 9 1234 5678"') + field('co-rut', 'RUT', 'text', ' placeholder="12.345.678-9"') + '</fieldset>' +
      '<fieldset class="fields"><legend class="subheading">2 · ' + esc(L.shipping) + '</legend><p class="notice">' + esc(L.chileOnly) + '</p>' +
      field('co-pais', L.fCountry, 'text', ' value="Chile" readonly style="background:var(--fondo-carbon);color:var(--tinta-tenue);border-color:var(--trama)"') +
      '<div class="field"><label class="label" for="co-region">' + esc(L.fRegion) + '</label><select id="co-region">' + regions + '</select></div>' +
      field('co-comuna', L.fComuna, 'text', '') + field('co-dir', L.fAddress, 'text', ' autocomplete="street-address"') + '</fieldset>' +
      '<fieldset class="stack" style="gap:12px"><legend class="subheading">3 · ' + esc(L.payment) + '</legend>' +
      '<label class="radio"><input type="radio" name="pago" value="webpay" checked><strong>Webpay</strong><span class="tenue" style="font-size:14px">' + esc(L.webpayNote) + '</span></label>' +
      '<label class="radio"><input type="radio" name="pago" value="mercadopago"><strong>Mercado Pago</strong></label></fieldset>' +
      '</form>' +
      '<aside class="summary" aria-labelledby="resumen-titulo"><h2 id="resumen-titulo" class="subheading" style="margin:0">' + esc(L.summary) + '</h2>' + summary +
      '<div style="display:flex;justify-content:space-between;font-size:14px;border-top:1px solid var(--trama);padding-top:12px" class="tenue"><span>' + esc(L.shippingCost) + '</span><span>[COSTO]</span></div>' +
      '<div style="display:flex;justify-content:space-between;align-items:baseline"><strong class="subheading" style="font-size:16px">Total</strong><span style="font-size:24px;font-weight:700">' + esc(clp(sum)) + '</span></div>' +
      '<label class="check"><input type="checkbox" data-action="terms" data-key="terms"' + (state.terms ? ' checked' : '') + '><span>' + esc(L.acceptPre) + ' <a href="terminos.html" style="color:var(--sangre)">' + esc(L.termsLink) + '</a>' + esc(L.acceptPost) + '</span></label>' +
      (state.termsErr ? '<p class="error" role="alert" style="font-weight:700">' + esc(L.termsErr) + '</p>' : '') +
      '<button type="button" class="mz-btn mz-btn-primary" data-action="pay" data-key="pay">' + esc(L.pay + ' ' + clp(sum)) + '</button>' +
      '</aside></div></main>');
  }

  function confirmation() {
    var L = t();
    return purchaseShell('<main id="contenido" class="wrap stack center" style="max-width:720px;gap:24px;padding-top:96px;padding-bottom:96px">' + steps(2) +
      '<h1 class="titulo-lg">' + esc(L.okTitle) + '</h1><p style="margin:0;font-size:18px;line-height:28px">' + esc(L.okText) + '</p>' +
      '<p class="subheading" style="margin:0">' + esc(L.orderNo) + ' [N° PEDIDO]</p>' +
      '<a class="mz-btn mz-btn-primary" href="#/tienda">' + esc(L.backStore) + '</a></main>');
  }

  /* ---------- Ventanas ---------- */
  function quickDialog() {
    var L = t();
    var p = byId(state.quick);
    if (!p) return '';
    return '<div class="overlay"><button type="button" class="overlay-bg" data-action="close-quick" aria-label="' + esc(L.close) + '" tabindex="-1"></button>' +
      '<div class="dialog" role="dialog" aria-modal="true" aria-labelledby="rapida-titulo">' +
      '<button type="button" class="close" data-action="close-quick" data-key="quick-close" aria-label="' + esc(L.close) + '">' + ICON_X + '</button>' +
      '<div style="display:flex;gap:16px;align-items:center;padding-right:48px"><img src="' + p.image + '" alt="" style="width:88px;height:88px;object-fit:cover;flex:none">' +
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
    var rows = SIZES.map(function (z) { return '<tr><th scope="row">' + z + '</th><td>[CM]</td><td>[CM]</td></tr>'; }).join('');
    return '<div class="overlay" style="z-index:50"><button type="button" class="overlay-bg" data-action="close-guide" aria-label="' + esc(L.close) + '" tabindex="-1"></button>' +
      '<div class="dialog" role="dialog" aria-modal="true" aria-labelledby="guia-titulo" style="gap:16px">' +
      '<button type="button" class="close" data-action="close-guide" data-key="guide-close" aria-label="' + esc(L.close) + '">' + ICON_X + '</button>' +
      '<h2 id="guia-titulo" class="titulo-md" style="font-size:32px">' + esc(L.sizeGuide) + '</h2>' +
      '<p class="tenue" style="margin:0;font-size:14px;line-height:20px">' + esc(L.guideIntro) + '</p>' +
      '<table><thead><tr><th scope="col">' + esc(L.size) + '</th><th scope="col">' + esc(L.width) + '</th><th scope="col">' + esc(L.length) + '</th></tr></thead><tbody>' + rows + '</tbody></table>' +
      '<p class="small tenue" style="margin:0">' + esc(L.howTo) + '</p></div></div>';
  }

  function drawer() {
    var L = t();
    var lines = cartLines();
    var body;
    if (!lines.length) {
      body = '<div class="stack" style="padding:40px 24px;gap:16px;align-items:flex-start"><p style="margin:0">' + esc(L.emptyCart) + '</p><a class="mz-btn mz-btn-secondary" href="#/tienda" data-action="close-drawer">' + esc(L.goStore) + '</a></div>';
    } else {
      body = '<ul class="lines">' + lines.map(function (l, i) {
        return '<li><img src="' + l.p.image + '" alt=""><div class="stack" style="flex:1;gap:8px;min-width:0">' +
          '<span class="mz-card-name" style="font-size:20px">' + esc(pname(l.p)) + '</span>' +
          '<span class="small tenue">' + esc(l.size ? L.size + ' ' + l.size : L.disc) + ' · ' + esc(clp(eff(l.p)) + ' ' + L.each) + '</span>' +
          '<div style="display:flex;justify-content:space-between;align-items:center;gap:8px">' +
          '<div class="qty" role="group" aria-label="' + esc(L.qty) + '"><button type="button" data-action="qty" data-i="' + i + '" data-d="-1" data-key="dec-' + i + '" aria-label="' + esc(L.decrease) + '">−</button><span aria-live="polite">' + l.qty + '</span><button type="button" data-action="qty" data-i="' + i + '" data-d="1" data-key="inc-' + i + '" aria-label="' + esc(L.increase) + '">+</button></div>' +
          '<span class="price" style="font-size:16px">' + esc(clp(eff(l.p) * l.qty)) + '</span></div>' +
          '<button type="button" class="remove label" data-action="remove" data-i="' + i + '">' + esc(L.remove) + '</button></div></li>';
      }).join('') + '</ul>' +
        '<div class="drawer-foot"><div style="display:flex;justify-content:space-between;align-items:baseline"><strong class="label" style="font-size:14px">Subtotal</strong><span class="price" style="font-size:22px">' + esc(clp(cartTotal())) + '</span></div>' +
        '<p class="small tenue" style="margin:0">' + esc(L.shipNextStep) + '</p>' +
        '<a class="mz-btn mz-btn-primary" href="#/pago" data-action="close-drawer">' + esc(L.checkout) + '</a>' +
        '<button type="button" class="mz-btn mz-btn-secondary" data-action="close-drawer">' + esc(L.keepShopping) + '</button></div>';
    }
    return '<div class="drawer-wrap"><button type="button" class="overlay-bg" data-action="close-drawer" aria-label="' + esc(L.close) + '" tabindex="-1"></button>' +
      '<aside class="drawer" role="dialog" aria-modal="true" aria-labelledby="carro-titulo">' +
      '<div class="drawer-head"><h2 id="carro-titulo" class="titulo-md" style="font-size:32px">' + esc(L.yourCart) + ' (' + cartCount() + ')</h2>' +
      '<button type="button" class="close" style="position:static" data-action="close-drawer" data-key="drawer-close" aria-label="' + esc(L.close) + '">' + ICON_X + '</button></div>' +
      body + '</aside></div>';
  }

  /* ---------- Carro ---------- */
  function cartLines() {
    return state.cart.map(function (l) { return { p: byId(l.id), size: l.size, qty: l.qty }; }).filter(function (l) { return l.p && l.p.stock; });
  }
  function cartCount() { return cartLines().reduce(function (a, l) { return a + l.qty; }, 0); }
  function cartTotal() { return cartLines().reduce(function (a, l) { return a + eff(l.p) * l.qty; }, 0); }
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
    save('mz-cart', state.cart);
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
      else if (r.screen === 'producto') html += product(r.id);
      else html += home();
      html += footer();
    }
    if (state.quick) html += quickDialog();
    if (state.guide) html += guideDialog();
    if (state.drawer && r.screen !== 'pago' && r.screen !== 'ok') html += drawer();
    app.innerHTML = html;
    document.body.style.overflow = state.quick || state.guide || state.drawer ? 'hidden' : '';

    var titles = { home: 'MAWIZA', tienda: L.storeTitle + ' · MAWIZA', producto: (r.id ? pname(byId(r.id)) : '') + ' · MAWIZA', pago: L.checkoutTitle + ' · MAWIZA', ok: L.okTitle + ' · MAWIZA' };
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
      case 'size':
        state.sel[id] = el.getAttribute('data-size'); delete state.err[id]; break;
      case 'add': {
        var p = byId(id);
        opener = 'add-' + id;
        if (p.sized) { state.quick = id; lastFocus = null; } else { addItem(id, null); lastFocus = null; }
        break;
      }
      case 'add-direct': {
        var q = byId(id);
        if (q.sized && !state.sel[id]) { state.err[id] = true; break; }
        if (!opener) opener = el.getAttribute('data-key');
        addItem(id, q.sized ? state.sel[id] : null); lastFocus = null;
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
        save('mz-cart', state.cart);
        break;
      }
      case 'remove': state.cart.splice(+el.getAttribute('data-i'), 1); save('mz-cart', state.cart); lastFocus = 'drawer-close'; break;
      case 'back-cart': state.drawer = true; return;
      case 'terms': return;
      case 'pay':
        if (!state.terms) { state.termsErr = true; break; }
        state.cart = []; state.terms = false; save('mz-cart', state.cart);
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
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (state.guide) { state.guide = false; lastFocus = state.quick ? 'guide-q' : null; render(); }
    else if (state.quick) { state.quick = null; lastFocus = opener; render(); }
    else if (state.drawer) { state.drawer = false; lastFocus = opener; render(); }
  });

  window.addEventListener('hashchange', function () {
    state.quick = null; state.guide = false;
    if (location.hash !== '#/tienda' || !state.drawer) state.drawer = location.hash === '#/tienda' && state.drawer;
    render();
  });

  render();
})();
