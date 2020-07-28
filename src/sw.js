importScripts('assets/js/sw-utils.js');

const STATIC_CACHE = 'static-v5';
const DYNAMIC_CACHE = 'dynamic-v4';
const INMUTABLE_CACHE = 'inmutable-v4';


const APP_SHELL = [
    // '/',

    '/assets/assets/ico/apple-touch-icon-114-precomposed.png',
    '/assets/assets/ico/apple-touch-icon-144-precomposed.png',
    '/assets/assets/ico/apple-touch-icon-57-precomposed.png',
    '/assets/assets/ico/apple-touch-icon-72-precomposed.png',
    '/assets/assets/ico/favicon.png',
    '/assets/assets/img/AjaxLoader.gif',
    '/assets/assets/img/demo-slides/controls.png',
    '/assets/assets/img/demo-slides/css3.png',
    '/assets/assets/img/demo-slides/feather.png',
    '/assets/assets/img/demo-slides/grab.png',
    '/assets/assets/img/demo-slides/modern.png',
    '/assets/assets/img/demo-slides/multi.png',
    '/assets/assets/img/demo-slides/responsive.png',
    '/assets/assets/img/demo-slides/tons.png',
    '/assets/assets/img/demo-slides/touch.png',
    '/assets/assets/img/demo-slides/zombie.png',
    '/assets/assets/img/glyphicons-halflings-green.png',
    '/assets/assets/img/glyphicons-halflings-white.png',
    '/assets/assets/img/glyphicons-halflings.png',
    '/assets/assets/img/owl-logo.png',
    '/assets/css/FulltechnologyStyle.css',
    '/assets/css/carousel.css',
    '/assets/css/fonts.css',
    '/assets/css/main.css',
    '/assets/fonts/FontAwesome.otf',
    '/assets/fonts/HelveticaNeueLTPro-Md.eot',
    '/assets/fonts/HelveticaNeueLTPro-Md.svg',
    '/assets/fonts/HelveticaNeueLTPro-Md.ttf',
    '/assets/fonts/HelveticaNeueLTPro-Md.woff',
    '/assets/fonts/HelveticaNeueLTPro-Th.eot',
    '/assets/fonts/HelveticaNeueLTPro-Th.svg',
    '/assets/fonts/HelveticaNeueLTPro-Th.ttf',
    '/assets/fonts/HelveticaNeueLTPro-Th.woff',
    '/assets/fonts/HelveticaNeueLTStd-Bd.eot',
    '/assets/fonts/HelveticaNeueLTStd-Bd.svg',
    '/assets/fonts/HelveticaNeueLTStd-Bd.ttf',
    '/assets/fonts/HelveticaNeueLTStd-Bd.woff',
    '/assets/fonts/HelveticaNeueLTStd-Lt.eot',
    '/assets/fonts/HelveticaNeueLTStd-Lt.svg',
    '/assets/fonts/HelveticaNeueLTStd-Lt.ttf',
    '/assets/fonts/HelveticaNeueLTStd-Lt.woff',
    '/assets/fonts/HelveticaNeueLTStd-Roman.eot',
    '/assets/fonts/HelveticaNeueLTStd-Roman.svg',
    '/assets/fonts/HelveticaNeueLTStd-Roman.ttf',
    '/assets/fonts/HelveticaNeueLTStd-Roman.woff',
    '/assets/fonts/fontawesome-webfont.eot',
    '/assets/fonts/fontawesome-webfont.svg',
    '/assets/fonts/fontawesome-webfont.ttf',
    '/assets/fonts/fontawesome-webfont.woff',
    '/assets/fonts/fontawesome-webfont.woff2',
    '/assets/fonts/glyphicons-halflings-regular.eot',
    '/assets/fonts/glyphicons-halflings-regular.svg',
    '/assets/fonts/glyphicons-halflings-regular.ttf',
    '/assets/fonts/glyphicons-halflings-regular.woff',
    '/assets/fonts/ionicons.eot',
    '/assets/fonts/ionicons.ttf',
    '/assets/fonts/ionicons.woff',
    '/assets/icons/icon-1024x1024.png',
    '/assets/icons/icon-114x114.png',
    '/assets/icons/icon-120x120.png',
    '/assets/icons/icon-128x128.png',
    '/assets/icons/icon-144x144.png',
    '/assets/icons/icon-152x152.png',
    '/assets/icons/icon-180x180.png',
    '/assets/icons/icon-192x192.png',
    '/assets/icons/icon-256x256.png',
    '/assets/icons/icon-32x32.png',
    '/assets/icons/icon-384x384.png',
    '/assets/icons/icon-512x512.png',
    '/assets/icons/icon-57x57.png',
    '/assets/icons/icon-60x60.png',
    '/assets/icons/icon-72x72.png',
    '/assets/icons/icon-76x76.png',
    '/assets/icons/icon-96x96.png',
    '/assets/img/CuadradoInstagramProductos.jpg',
    '/assets/img/CuadradoInstagramServTecnico.jpg',
    '/assets/img/FOG.png',
    '/assets/img/art-cobweb-connection-276223.jpg',
    '/assets/img/casual-cellphone-contemporary-1471752.jpg',
    '/assets/img/fondo.jpg',
    '/assets/img/homeFullTechnology.jpg',
    '/assets/img/icons-ios/apple-launch-1125x2436.png',
    '/assets/img/icons-ios/apple-launch-1242x2208.png',
    '/assets/img/icons-ios/apple-launch-640x1136.png',
    '/assets/img/icons-ios/apple-launch-750x1334.png',
    '/assets/img/logo.png',
    '/assets/img/logoBlanco.png',
    '/assets/img/serv-tec.jpg',
    '/assets/img/nosotros.jpg',
    '/assets/img/solucionesfulltechnology.jpg',
    '/assets/owl-carousel/AjaxLoader.gif',
    '/assets/owl-carousel/grabbing.png',
    '/es2015-polyfills.8324bb31dd8aa5f2460c.js',
    '/favicon.ico',
    '/manifest.json',
    '/assets/js/app.js'
];

const APP_SHELL_INMUTABLE = [
    'https://cdn.ckeditor.com/4.12.1/standard/ckeditor.js',
    'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
    '/assets/owl-carousel/owl.carousel.min.js',
    '/assets/owl-carousel/owl.theme.css',
    '/assets/owl-carousel/owl.transitions.css',
    '/assets/css/anim.css',
    '/assets/css/animate.min.css',
    '/assets/assets/css/responsive.css',
    '/assets/css/bootstrap.min.css',
    '/assets/assets/css/bootstrapTheme.css',
    '/assets/assets/css/custom.css',
    '/assets/assets/css/preloader.css',
    '/assets/assets/js/application.js',
    '/assets/assets/js/bootstrap-collapse.js',
    '/assets/assets/js/bootstrap-tab.js',
    '/assets/assets/js/bootstrap-transition.js',
    '/assets/assets/js/google-code-prettify/prettify.css',
    '/assets/assets/js/google-code-prettify/prettify.js',
    '/assets/assets/js/google-code-prettify/run_prettify.js',
    '/assets/assets/js/jquery-1.9.1.min.js',
    '/assets/js/bootstrap.min.js',
    '/assets/js/jquery.easing.min.js',
    '/assets/js/jquery.min.js',
    '/assets/js/scripts.js',
    '/assets/js/wow.js',
    '/assets/owl-carousel/owl.carousel.css',
    '/assets/owl-carousel/owl.carousel.js',
    '/assets/css/styles.css',
    '/assets/css/tabs.css',
    '/assets/css/ionicons.min.css',
    '/assets/js/libs/jquery.js',
    '/assets/js/libs/plugins/mdtoast.min.css',
    '/assets/js/libs/plugins/mdtoast.min.js',
    '/main.2b2d0e42d1e0e384135e.js',
    '/polyfills.8bbb231b43165d65d357.js',
    '/runtime.26209474bfa8dc87a77c.js',
    '/styles.3ff695c00d717f2d2a11.css',
];



self.addEventListener('install', e => {

    console.log('SW: Instalando Sw');

    const cacheStatic = caches.open(STATIC_CACHE).then(cache =>
        cache.addAll(APP_SHELL));

    const cacheInmutable = caches.open(INMUTABLE_CACHE).then(cache =>
        cache.addAll(APP_SHELL_INMUTABLE));



    e.waitUntil(Promise.all([cacheStatic, cacheInmutable]));

});



self.addEventListener('activate', e => {

    // borrar cache viejo
    console.log('SW1: Activo y listo para controlar la app');

    const respuesta = caches.keys().then(keys => {

        keys.forEach(key => {

            if (key !== STATIC_CACHE && key.includes('static')) {
                return caches.delete(key);
            }

            if (key !== DYNAMIC_CACHE && key.includes('dynamic')) {
                return caches.delete(key);
            }

        });

    });

    e.waitUntil(respuesta);

});




self.addEventListener('fetch', e => {


    const respuesta = caches.match(e.request).then(res => {

        if (res) {
            return res;
        } else {

            return fetch(e.request).then(newRes => {

                return actualizaCacheDinamico(DYNAMIC_CACHE, e.request, newRes);

            });

        }

    });



    e.respondWith(respuesta);

});

// evento Sync: recuperamos la conexion a internet
self.addEventListener('sync', event => {

    //console.log('Tenemos Conexión');
    //console.log(event);
    //console.log(event.tag);

});