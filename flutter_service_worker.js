'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "af161893c5c2c283cb795a02c39b816b",
"version.json": "2c8cc841e73c7a3566a69424b41274d7",
"index.html": "0745f6a539fc5c52e447ba3bf664be0e",
"/": "0745f6a539fc5c52e447ba3bf664be0e",
"main.dart.js": "9ee0d4abc9a06837fb06341e90cc2641",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "0bf8a69d691eba0bb2a73437851684fb",
"icons/Icon-192.png": "b821d1af6f079427fc215dda99c4c8b6",
"icons/Icon-maskable-192.png": "b821d1af6f079427fc215dda99c4c8b6",
"icons/Icon-maskable-512.png": "511d93e3bd091bec803e07438f7e3c20",
"icons/Icon-512.png": "511d93e3bd091bec803e07438f7e3c20",
"manifest.json": "43b998c60972ae99b10ae5f7a8e53506",
"assets/AssetManifest.json": "5966a0a8e10bf75a8c6c181730ff6cdd",
"assets/NOTICES": "79b334deab2e4e5dd9d29ad6c8f536e7",
"assets/FontManifest.json": "6c9cae9dbf6dd32192433a6f741ed103",
"assets/AssetManifest.bin.json": "ebf5f1e66ca3e5af199866d8a0798bc9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "bf3c1ce20eb6e028ba0e2e19af9bf965",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/location/location%25202.jpg": "4453ebcc1af3eb08e8307f1f2e83955b",
"assets/assets/location/location%25203.jpg": "b1edf772157c7147094d170387c19796",
"assets/assets/location/location%25201.jpg": "9dc9b19d12bca6051608a6315e663b5c",
"assets/assets/location/location%25201.jpeg": "9583454f2d3386a292e27944599294f7",
"assets/assets/location/location%25202.jpeg": "44cdbe369fe32b1ab75293f12594367d",
"assets/assets/location/location%25203.jpeg": "4453ebcc1af3eb08e8307f1f2e83955b",
"assets/assets/carousel/web/A1.jpg": "5d9efaa6fd309325db45a36e4cbd0b19",
"assets/assets/carousel/web/A3.jpg": "8609e4d59c378969d6f2cfdef04c48fd",
"assets/assets/carousel/web/A2.jpg": "ba736fbee553cee2ed1dea30173e6f17",
"assets/assets/carousel/web/A5.jpg": "0be4f4b037eb30de061d6466057a51fc",
"assets/assets/carousel/web/A4.jpg": "616a471f1611ff3901698557acdef13e",
"assets/assets/carousel/mobile/A1.jpg": "5d9efaa6fd309325db45a36e4cbd0b19",
"assets/assets/carousel/mobile/A3.jpg": "8609e4d59c378969d6f2cfdef04c48fd",
"assets/assets/carousel/mobile/A2.jpg": "ba736fbee553cee2ed1dea30173e6f17",
"assets/assets/carousel/mobile/A5.jpg": "0be4f4b037eb30de061d6466057a51fc",
"assets/assets/carousel/mobile/A4.jpg": "aee9f2dbe7cac765ed999f0ddae43ac4",
"assets/assets/divider/C1.jpg": "3c1e5eaa350fb99fc6faced3727eed12",
"assets/assets/divider/B1.jpg": "2a2f36b27eb366ef3a1cffa01f6e6ddd",
"assets/assets/main/F1.jpg": "6ab6748008184c25aa39ae693d12e7f4",
"assets/assets/main/palacio-hierro.png": "65d4dd8110dab699dec35058a5fbb02d",
"assets/assets/main/F2.jpg": "0c87d69d53752501c94b8b544edfb505",
"assets/assets/main/D5%2520cortar.jpg": "c966dc7834fc080eb6e2b2828ecff946",
"assets/assets/main/F3.jpg": "e57cdbff2a2883f12bc7d40a4a500b91",
"assets/assets/main/D6.jpg": "8aa6be0a01033584be7d7a94a2297c4d",
"assets/assets/main/D4.jpg": "4c419463ded24a0baf8463be0a75d46e",
"assets/assets/main/D1.jpg": "3bb00e4a75a5528594900166a04f253e",
"assets/assets/main/D3.jpg": "6c6ec19492e61a34d8a17da8bffdfbca",
"assets/assets/main/D2.jpg": "80b7ca22396f90eb67d25ac8500d9bde",
"assets/assets/fonts/Sophia%2520Martini.otf": "d314992f40c1617f6bba5f9a18f74251",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
