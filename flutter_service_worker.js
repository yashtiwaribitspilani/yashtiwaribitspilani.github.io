'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"android-chrome-512x512.png": "30b32106ee16d5844889a213cbc65758",
"assets/AssetManifest.bin": "2171c34dea413cccf5ea980f1cbedd6b",
"assets/AssetManifest.bin.json": "4cb1904488323b255798a4ecd74f7e51",
"assets/AssetManifest.json": "acdd7a9af9cde9f6957981296de671b6",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/images/43730.jpg": "de1ce9377fe082fb90915ca546930e07",
"assets/assets/images/7265607-removebg-preview.png": "b350f62dc933e8b3856a04d5f46232c4",
"assets/assets/images/app_launcher_icon.jpg": "eba832ae92dfcf613a5c96a5dafdf4ed",
"assets/assets/images/crown.png": "58b55267a5fff60c96b88053a7bd9030",
"assets/assets/images/elite_(1).png": "d2106c3933a7968b5b8cad210abe0e52",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/icons8-linkedin.gif": "3e99875ec0305f3b3d8a5550688eb73f",
"assets/assets/images/Journey_New_28.png": "263dcf24f9bce080da3790d4d99dfa6d",
"assets/assets/images/Journey_New_29.png": "0c53723f88cf4a11fa99a10ca7d057f9",
"assets/assets/images/Journey_New_30.png": "aa9697daa5f34344e0f48b9c117a29ee",
"assets/assets/images/Journey_New_31.png": "dd9f98a47e81fc81996483dc7d9e4a83",
"assets/assets/images/Journey_New_32.png": "fba3111d8726ee7b6caf0b504f8b26be",
"assets/assets/images/left-arrow.png": "d83e4edc688e7470769c3abffdae7aa5",
"assets/assets/images/letter_X_blue-512.webp": "5a5cb5ddae9114b90e2bf9a8a79301bc",
"assets/assets/images/loading.gif": "ac7503d8215fa3d18d7f8cae4f0bef02",
"assets/assets/images/money-bag.png": "1d912ca8d56236606e9c325e23b1cc9e",
"assets/assets/images/Open_source_Loading_GIF_Icons_Vol-1.gif": "440a52bafb9dc49488228b2307f244db",
"assets/assets/images/payment-method.png": "aa63182f62ab528c7180ff0cbe9a519e",
"assets/assets/images/profits.png": "63458998ca4976901cf4e736f2a4fde3",
"assets/assets/images/right-arrow.png": "ef0219b7efb9b24b383ba2c7da8bafd4",
"assets/assets/images/rocket.png": "148fdf73a4169e12942a18a86cce782f",
"assets/assets/images/step_1.jpg": "dd8f64327f2fdf5da52368f4a0fbf808",
"assets/assets/images/step_2.jpg": "0b748e101f3d3f5bb7b0cfc604461131",
"assets/assets/images/step_3.jpg": "49513f81dd38e36624b7cbd61fa352f0",
"assets/assets/lottie_animations/Animation_-_1713436989813_(2).json": "1aec326ceff55daf40c52d9cb215b734",
"assets/assets/lottie_animations/Animation_-_1715462049505.json": "58fc9597ca3a82cb7f7e62da4dc5dd17",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "201227bd6884184b9b2be01c3ebe3b73",
"assets/NOTICES": "a3f5e6c3c17af1b6b5014274af5e1e72",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "e2f57c93bbfee537dc36b0f5ccd96835",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "ee693f038efe89f90de519d242502a94",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9bbfc6e4a0a337f19444b856ad44b912",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "5b0aa623acb088c1e531076746b58f2a",
"icons/app_launcher_icon.jpg": "eba832ae92dfcf613a5c96a5dafdf4ed",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "8e440f72d3107e479eaf31c8eece2645",
"/": "8e440f72d3107e479eaf31c8eece2645",
"letter_X_blue-512.webp": "5a5cb5ddae9114b90e2bf9a8a79301bc",
"main.dart.js": "a7878049a43c3a5ff12a1e7c08625a2c",
"version.json": "1762c72fe59e19d1e12c5a8c928ddcf5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
