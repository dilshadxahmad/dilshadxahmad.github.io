'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9fa238c31e65c950d89f6ba69a2f6111",
".git/config": "41cf2f8244bebe7c72f55659477a08dd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "852f759ffd233ba1cb10fc16df1cf48c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "73786a4bccd8892ecd4191cecb1a78d9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d7945130cd88829d27fecec2aaeec1c8",
".git/logs/refs/heads/main": "d7945130cd88829d27fecec2aaeec1c8",
".git/logs/refs/remotes/origin/HEAD": "59cfac1e987a08ca8c77e7125ffe0f64",
".git/logs/refs/remotes/origin/main": "73d6feae19cdcca222dbb38cf64f9eb4",
".git/objects/04/eb02201a459b259a28ae9dbf54be077356fac1": "6d02c58f1f09bf65a9d08c8bfcebc1ac",
".git/objects/07/4bf31f74247c90a33b05341c493d0f48051764": "0f19b99e02c5682b2584e12d248dd7b2",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/1d/d83aea86d651088ed74261cda241afee05f47b": "009117e58e5076116793cb9cbeba5929",
".git/objects/3d/0f54b9e361ea60e2f2904ff807c053e9ac5b34": "04a40ccbd1a2068555aff1c4b2d56bf1",
".git/objects/43/c838eea8a269a8482e35cf36a56133d7199348": "ee74857ccdfde58063a99dfc3176aae5",
".git/objects/55/4b09f2a787e93456bc4909a5ff160b80c0a83e": "0fffdbf3b9d92f1cef7061ea0cb98032",
".git/objects/62/69a24c35f5b2501311e6c5e07d7f8a188795f0": "474caaca870976cca9e9ed34f378c24c",
".git/objects/9f/0c8632004a4cee6277df52a81c6f5151b59e2a": "3308203ed6d55237264a068c5563fcd4",
".git/objects/c6/5a5d86f52099dfb1f8dd671249058dd560b5f9": "8e1705d5feb4d88b59ddb8e86b630691",
".git/objects/cf/de07dddbe4541895e3406a6e2224e43667ba45": "619f28a49ce2294cc8345f81408aacdf",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/f4/2b2798111aa734ebe4eb7bcbeee0ecf9ab99ac": "a2b7d0c0f704ba91bcffa3226ab37e24",
".git/objects/fa/b35145d2a197e0259f4b279bc1fb0c975c366f": "e3ad032339e704e2935673b5803be040",
".git/objects/pack/pack-364e51fbaef9a984b61658e3cd26051df2dc8c7e.idx": "415d767e3fecbd1272e4f27f71f5b26f",
".git/objects/pack/pack-364e51fbaef9a984b61658e3cd26051df2dc8c7e.pack": "22fbc0f7df79805a3ca7d7cfd0abf5c2",
".git/packed-refs": "4cb6ef965355868a4258e4f37a850cf9",
".git/refs/heads/main": "7a4394f6cdbfbd4985c311c396f4df97",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "7a4394f6cdbfbd4985c311c396f4df97",
".git/sourcetreeconfig.json": "5a69e8ec4e989bfa628384f2c7e36361",
"assets/AssetManifest.bin": "a0ac476bf5895969c064c8962a76ff76",
"assets/AssetManifest.json": "13475ea3f4f3c0c1ba9b1e1774d3f707",
"assets/assets/audio/bg-music-1.mp3": "ab8ed378462d559ed2e3f3327bd2e32e",
"assets/assets/audio/button-push-sound-1.mp3": "b41e54522dba48c66ef1e0be7ec01d33",
"assets/assets/audio/racket-swing-sound-1.mp3": "cd809c94629eaba56837f63ff8ea186d",
"assets/assets/fonts/Outfit-Bold.ttf": "e28d1b405645dfd47f4ccbd97507413c",
"assets/assets/fonts/Outfit-ExtraBold.ttf": "d649fd9b3a7e7c6d809b53eede996d18",
"assets/assets/fonts/Outfit-Light.ttf": "905f109c79bd9683fc22eaffe4808ffe",
"assets/assets/fonts/Outfit-Regular.ttf": "9f444021dd670d995f9341982c396a1d",
"assets/assets/images/dilshadxahmad.png": "8a9fb39a55f887d7cf3b0c745df24305",
"assets/assets/images/home-view-bg.jpg": "9b60812a80ef522875bd1e5e93f755c2",
"assets/files/bg-music-1.mp3": "ab8ed378462d559ed2e3f3327bd2e32e",
"assets/files/button-push-sound-1.mp3": "b41e54522dba48c66ef1e0be7ec01d33",
"assets/files/Dilshad-Ahmad-Flutter-Dev.pdf": "e381ea700cf76bd0fc34d5deaf18ce25",
"assets/files/racket-swing-sound-1.mp3": "cd809c94629eaba56837f63ff8ea186d",
"assets/FontManifest.json": "8e285323886af59505bd954840551b9c",
"assets/fonts/MaterialIcons-Regular.otf": "1f33787bde4fbcd8908e00ac21df673f",
"assets/NOTICES": "b6ccbb369b5085ea923fceb63bffb076",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.ico": "ad05885c6e00ddb04b9bf9709097e192",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/android-icon-144x144.png": "e41eaade2b1ee5d88ac1e2a020a838e3",
"icons/android-icon-192x192.png": "548b7e7b96b0c37ff36ba3feae76126f",
"icons/android-icon-36x36.png": "2ff3375945e2f9b1f7280e541a40d11d",
"icons/android-icon-48x48.png": "07aefeef77f7a8419a236f831dab9c91",
"icons/android-icon-72x72.png": "82a4e61136ad48c14fa72dde7f94e759",
"icons/android-icon-96x96.png": "251627e254f054a1a8a53839bb6b2a82",
"icons/apple-icon-114x114.png": "808739211e7a6aeed6ca4940809f1ca1",
"icons/apple-icon-120x120.png": "69989fe667e21cfb5c2a10c104a89033",
"icons/apple-icon-144x144.png": "e41eaade2b1ee5d88ac1e2a020a838e3",
"icons/apple-icon-152x152.png": "5b3c27a86710ee157a1dd150d1a2ca3b",
"icons/apple-icon-180x180.png": "e204d70ceaa1869ea6ca9ed1356bb23e",
"icons/apple-icon-57x57.png": "253c41e11b08cfec1f9ff1ffdad89c6b",
"icons/apple-icon-60x60.png": "d9410cfb1bcf75e33e7935ab20518c73",
"icons/apple-icon-72x72.png": "82a4e61136ad48c14fa72dde7f94e759",
"icons/apple-icon-76x76.png": "5885686da16aa2bc32257ffd90b29528",
"icons/apple-icon-precomposed.png": "2496b9b9eb6d14f20b41ce1ffd50fd13",
"icons/apple-icon.png": "2496b9b9eb6d14f20b41ce1ffd50fd13",
"icons/browserconfig.xml": "97775b1fd3b6e6c13fc719c2c7dd0ffe",
"icons/favicon-16x16.png": "15a36e2bea3d234855cc3720e8f85b49",
"icons/favicon-32x32.png": "e5cefaf1b1acda9b02499d356e21bcc4",
"icons/favicon-96x96.png": "f3aff13f5e267787a340695d8b053822",
"icons/favicon.ico": "907a6eb1732333e6df42c4aa4a5a32aa",
"icons/manifest.json": "e50e6a1c9ed6452635d3211f39501e0d",
"icons/ms-icon-144x144.png": "6408ea8a2e7b81563126f31fd90e9fde",
"icons/ms-icon-150x150.png": "e065b507bfdcc5f93b247cfd202357bb",
"icons/ms-icon-310x310.png": "21e4fd35b74c746c681bc6d2bff5cd9b",
"icons/ms-icon-70x70.png": "19fa1e72215007eca7eacc05e5e276db",
"index.html": "b8c5f88bb1f1884b6eaad5eafa418803",
"/": "b8c5f88bb1f1884b6eaad5eafa418803",
"logo.png": "c5618441efd2678b503c0ac8874e3653",
"main.dart.js": "84df4f099f31954c850b7be808d41bd5",
"manifest.json": "4f1be9df1a63d9278cde82d656ddf701",
"version.json": "69fc5c4fa800af10c6fd1a3ce387efea"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
