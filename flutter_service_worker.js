'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "69fc5c4fa800af10c6fd1a3ce387efea",
"index.html": "8d73de50e2f7a87d24dd52e26541efa2",
"/": "8d73de50e2f7a87d24dd52e26541efa2",
"main.dart.js": "e0abbf709da2b2019e6ab2b108f64e79",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ad4cfd5c1430cef3131915d3b92d118c",
".git/config": "9e0b79cfd327884e5099fef1fa78bbd5",
".git/objects/0d/cb1432bee4bf918afdc55690e87fad46b7eb45": "2437c8f197db4c0ab22c7950642f48f7",
".git/objects/95/49da06fd977179380c52eba4f891e6945e3ee0": "174cb1389c95be06ce7e9ea88e71d9cb",
".git/objects/92/c3a16fed2bf030ef6c521a22917d34748967f8": "6fd01b5bab771a7789289ab883ba246f",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/93/766dbb4e28cd6d0de59347511526c0a1b2c2fd": "53348c9b214d2d8c851feeb88c9a6bce",
".git/objects/5f/c46f67a398c5ed54f7ecf02e75517270c6a441": "a4be3c8ad9b11de876fff78bff2c51cd",
".git/objects/9c/9c1c33c4b6e0bb225ebd7bb97e5adb2596ba12": "026d398dfaf20a5a76dc4d4aa1c3f0a5",
".git/objects/b5/3b32ecfa693cb5297b125378098e117f513b05": "29624ce4030350ee923102f487d35a64",
".git/objects/ac/b546790aeb3e53342753ad97eef4e934429a15": "f5482f4bb6d9182d2d8cea8f957c4493",
".git/objects/ad/a949a5dacf243f2f548ae638e7c8a60e6e8dae": "16343b0874e2369cfe262b802d36d720",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/da/a2b19413b3085053d9addf1f3036e8b2f3900c": "b37a3e9021f691d65ffe815da0b1af91",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/238268510a789969022e5e1e49b751cbb8d8af": "8ddf7c771f265f6b13954b2d3d2eed50",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/cf/2ae21678e7747c0f17f725173ce413f24dd584": "b16afddd4b2c025d08b3a311447e27ee",
".git/objects/ca/75b6ae53865f401ecd76ca2715e94af84a9788": "a8a14df40987bebf3d1f54d09a679227",
".git/objects/c1/8b0c18584950500a759baffb24a466781dac6f": "9c33e9e150cdb9b5c089b510e997c1ac",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/4e/2f4c8bfb1eebaf939a1bfea9a669a5125ba795": "ac4f24cfb1af72ee19857c4a8071b447",
".git/objects/27/d9ff78f281504a1f5322839c041f09c3ec6f3d": "41b7cb266cd57d6eceff5ace8041e412",
".git/objects/16/f2a15c6549fb41bf4d9bbe56cbcc419336bbcc": "c756c0f576e0f4a1c93ff5ef376ed158",
".git/objects/42/2f45911201cd654013cc75f8f4bf8a11db1987": "e437ef77b0984cd77d3980927eef53e8",
".git/objects/1f/d8f15f43ba503bed9206b04096ad212caebfdc": "76074c4757b5c51c0f97b5ed39015a0d",
".git/objects/28/5dbbb14317a865eac239ed7ec8a92283df6a96": "a05d4a8fc24271c363b4b3d6f2d0273c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/54bdbd165f7cc7d935f7e4c5e3b37fc37546f6": "87880ea72a6148836bd86211492ed797",
".git/objects/6e/72500f803809398da299907bc9301ee1ed2bd6": "b1d80ec7e4805167e27ff1e8d31de4da",
".git/objects/09/77ed52aab468b0da0c644aa982d1568f615a76": "11dea26f419d4f3f20784b865b02471c",
".git/objects/09/6b090dd5f3e0ea0ccc5937c888183c32dc8f83": "3ce8450a3d177b9705a34508bac07514",
".git/objects/53/f3e6b1259a4860cf1b05ed0e78522f01c917cf": "834265a8458641c8d9f3bec1731c8587",
".git/objects/37/e47aea42403b2454d27937c0bcbedf264edddd": "04dfd76d3c06f5596bf7ccee8f5379d8",
".git/objects/6d/6a7540e9d7eeccfd07b934c8a50c7bb5eab131": "3b9c7ed4526940e4b1434c5e2fa7caad",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/39/cd9505d74476bbaeb7ef6407ec99123ec9647d": "63c138acaa71124c09f205ca20b0b216",
".git/objects/52/9eb05ceba6609ae857fee1a37f09288c9e96f2": "c34c4840bd82cdea9a4022336ce0de3e",
".git/objects/0a/081bc940c69bae6d7279f2ef823e6024cda622": "a5da94e20f6beff6e5be3d2599e8ec8d",
".git/objects/bf/f474f151a2bac40c0afda821e96b321c73a4d2": "dede80d420a7945bd44a2427a4bcd192",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/f748904c26cdc6eec14d5cf104a8cc665a0d86": "36caef474872c34f3d2fda8b6ecad43f",
".git/objects/a8/56ab3aa8a1466ec46228571c265293779182f5": "e39da4bade846b4eab4866bca1e2b62f",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/047531940d75291a2eebdbd99f92839a74abb0": "e6eec4b995be7ff4582eaec15a77da27",
".git/objects/c3/8e803f31e0c779093585ddf0fbced27595836e": "90e04e5da5e48a04397c6944ec5a442e",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/c5/cea614dbd049d64e5ec4ea52e873ea95944bad": "b61f36850ac103f47efaa612cb81f1ca",
".git/objects/f8/ce17713f6318e1dadf932250689c4639acbbee": "44808ac50f0e90580f2bd2d5995f2c12",
".git/objects/e0/1d88d9eaef3c143c6a395129e06abf26a645d0": "5aaf885dea2b3016c7b577dff88ddb33",
".git/objects/2c/6934bbb3dbf97f9020a9b1286392e19e0b46cc": "766b0f2afced2848e780aeb53e2e8384",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/77/8eb8120d64bb3edec73f7a72d03ed42275b71a": "fa2e29d72eeb50be978ffef6e20b02df",
".git/objects/1e/b8eff82a4253c15ac576f36f4171d45292b9f4": "15f011705ba604f7b063853b86b48f05",
".git/objects/4a/b6d8e9424cda8bb33a427ee49aca41fd30fcdf": "75423da302c8e62fd0c8453ab65223d3",
".git/objects/82/6899cfe6a1109ab450ce9a9c9ae6dcbb206447": "f4cd5a1624342ecab9bc8cb560928cb4",
".git/objects/49/831cac05a63e81223e6b7661d508bee13f6894": "976368252860c56409b0bc0994469e0d",
".git/objects/47/00583e300759c575980301b1758566b61643d3": "2dab47b27006f05af06402d0abd4ab43",
".git/objects/78/df43e58124862ab856106a70dfad8dfc1dfdee": "ccb0265bce68522f37481d05e354acdf",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/objects/25/544088c53f1d45f3236e590b2b6fc5f04a304a": "e026271c95f55d870b43802c88bce26e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d41ec4ec7589935c851098d355f179bb",
".git/logs/refs/heads/main": "23dfedacfc0e8ece3a6583982b156f7c",
".git/logs/refs/remotes/origin/main": "f6d368269fc16de43e446c99d201b34e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "1fcaa7b9b65041082b4bfa419c68dc1e",
".git/refs/remotes/origin/main": "1fcaa7b9b65041082b4bfa419c68dc1e",
".git/index": "fcf44d1c88ce1bbd6ab90e73598b9161",
".git/COMMIT_EDITMSG": "879fbe298c0e68b8ce42f66d54a4e09f",
".git/FETCH_HEAD": "5a598a9e05f5fc296dd3885c6176b3b3",
".git/sourcetreeconfig": "1216210c2dd38c6bf71a382a9b1ef6df",
"assets/AssetManifest.json": "9fcf38f040ddbac597fc1b54f4669b65",
"assets/NOTICES": "9aacf47bae31386a15f05479aab4283c",
"assets/FontManifest.json": "8e285323886af59505bd954840551b9c",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/files/Dilshad-Ahmad-Flutter-Dev.pdf": "e381ea700cf76bd0fc34d5deaf18ce25",
"assets/AssetManifest.bin": "0a3035ac97a29c2c27ff8eb2df28e5a6",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/images/dilshadxahmad.png": "8a9fb39a55f887d7cf3b0c745df24305",
"assets/assets/images/home-view-bg.jpg": "9b60812a80ef522875bd1e5e93f755c2",
"assets/assets/fonts/Outfit-Bold.ttf": "e28d1b405645dfd47f4ccbd97507413c",
"assets/assets/fonts/Outfit-Regular.ttf": "9f444021dd670d995f9341982c396a1d",
"assets/assets/fonts/Outfit-ExtraBold.ttf": "d649fd9b3a7e7c6d809b53eede996d18",
"assets/assets/fonts/Outfit-Light.ttf": "905f109c79bd9683fc22eaffe4808ffe",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
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
