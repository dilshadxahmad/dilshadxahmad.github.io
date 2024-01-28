'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "69fc5c4fa800af10c6fd1a3ce387efea",
"favicon.ico": "ad05885c6e00ddb04b9bf9709097e192",
"index.html": "65fca69ea976e35c07125ea54cd31644",
"/": "65fca69ea976e35c07125ea54cd31644",
"main.dart.js": "c9343e747f7b0c54d5cc2eb3d2e50c84",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"logo.png": "c5618441efd2678b503c0ac8874e3653",
"icons/favicon-16x16.png": "15a36e2bea3d234855cc3720e8f85b49",
"icons/favicon.ico": "907a6eb1732333e6df42c4aa4a5a32aa",
"icons/apple-icon.png": "2496b9b9eb6d14f20b41ce1ffd50fd13",
"icons/apple-icon-144x144.png": "e41eaade2b1ee5d88ac1e2a020a838e3",
"icons/android-icon-192x192.png": "548b7e7b96b0c37ff36ba3feae76126f",
"icons/apple-icon-precomposed.png": "2496b9b9eb6d14f20b41ce1ffd50fd13",
"icons/apple-icon-114x114.png": "808739211e7a6aeed6ca4940809f1ca1",
"icons/ms-icon-310x310.png": "21e4fd35b74c746c681bc6d2bff5cd9b",
"icons/ms-icon-144x144.png": "6408ea8a2e7b81563126f31fd90e9fde",
"icons/apple-icon-57x57.png": "253c41e11b08cfec1f9ff1ffdad89c6b",
"icons/apple-icon-152x152.png": "5b3c27a86710ee157a1dd150d1a2ca3b",
"icons/ms-icon-150x150.png": "e065b507bfdcc5f93b247cfd202357bb",
"icons/android-icon-72x72.png": "82a4e61136ad48c14fa72dde7f94e759",
"icons/android-icon-96x96.png": "251627e254f054a1a8a53839bb6b2a82",
"icons/android-icon-36x36.png": "2ff3375945e2f9b1f7280e541a40d11d",
"icons/apple-icon-180x180.png": "e204d70ceaa1869ea6ca9ed1356bb23e",
"icons/favicon-96x96.png": "f3aff13f5e267787a340695d8b053822",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/android-icon-48x48.png": "07aefeef77f7a8419a236f831dab9c91",
"icons/apple-icon-76x76.png": "5885686da16aa2bc32257ffd90b29528",
"icons/apple-icon-60x60.png": "d9410cfb1bcf75e33e7935ab20518c73",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/android-icon-144x144.png": "e41eaade2b1ee5d88ac1e2a020a838e3",
"icons/apple-icon-72x72.png": "82a4e61136ad48c14fa72dde7f94e759",
"icons/apple-icon-120x120.png": "69989fe667e21cfb5c2a10c104a89033",
"icons/favicon-32x32.png": "e5cefaf1b1acda9b02499d356e21bcc4",
"icons/ms-icon-70x70.png": "19fa1e72215007eca7eacc05e5e276db",
"manifest.json": "aaa957f8b12e2fb137209683151436ba",
".git/config": "9e0b79cfd327884e5099fef1fa78bbd5",
".git/objects/0d/cb1432bee4bf918afdc55690e87fad46b7eb45": "2437c8f197db4c0ab22c7950642f48f7",
".git/objects/95/49da06fd977179380c52eba4f891e6945e3ee0": "174cb1389c95be06ce7e9ea88e71d9cb",
".git/objects/92/c3a16fed2bf030ef6c521a22917d34748967f8": "6fd01b5bab771a7789289ab883ba246f",
".git/objects/35/6eebfc01f460add89c501a93a6b4d6b6d6e09b": "5a4a0576edea196e7541c73bb5a3848d",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/93/766dbb4e28cd6d0de59347511526c0a1b2c2fd": "53348c9b214d2d8c851feeb88c9a6bce",
".git/objects/94/38302b24d87f75fdf26ca6f00d76478e50f811": "ab07306d4cf532c8c7dbe135572f462e",
".git/objects/5f/c46f67a398c5ed54f7ecf02e75517270c6a441": "a4be3c8ad9b11de876fff78bff2c51cd",
".git/objects/05/e3177c907a673fb6216dd214b0734128d1634e": "599e303561133f92a285b12e5ec05a76",
".git/objects/9c/9c1c33c4b6e0bb225ebd7bb97e5adb2596ba12": "026d398dfaf20a5a76dc4d4aa1c3f0a5",
".git/objects/a4/84ddd26cd5fd7e20235fb7b4a32aadcd3478eb": "c59e293d03b299ea59991cf821610dde",
".git/objects/a4/d124b3bdbf465c7a46cbece084bcfd62fcc7d1": "835e51c55be2528533d9f527dd397276",
".git/objects/b5/3b32ecfa693cb5297b125378098e117f513b05": "29624ce4030350ee923102f487d35a64",
".git/objects/ac/b546790aeb3e53342753ad97eef4e934429a15": "f5482f4bb6d9182d2d8cea8f957c4493",
".git/objects/ad/a949a5dacf243f2f548ae638e7c8a60e6e8dae": "16343b0874e2369cfe262b802d36d720",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/da/a2b19413b3085053d9addf1f3036e8b2f3900c": "b37a3e9021f691d65ffe815da0b1af91",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/238268510a789969022e5e1e49b751cbb8d8af": "8ddf7c771f265f6b13954b2d3d2eed50",
".git/objects/f4/f3a464a86f35f9241a628da59d57012c7ed7d1": "e8e52dda7db7977e17956c4c1f5bdd49",
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
".git/objects/1f/c9d488f074a6b4ea3e981932eccc4f3ee2fe57": "4a3d5c9e16cc7121efa27538ec6311d3",
".git/objects/28/5dbbb14317a865eac239ed7ec8a92283df6a96": "a05d4a8fc24271c363b4b3d6f2d0273c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/6af40e39545830a4c489d789476b110253afc2": "eea87dcab893369a00ca58bac00e9f91",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/19/b2ceefa78475406a06eb3e43ade6d1aca2a74b": "bf955de3d464a9c882ff01d98b81e465",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/54bdbd165f7cc7d935f7e4c5e3b37fc37546f6": "87880ea72a6148836bd86211492ed797",
".git/objects/6e/72500f803809398da299907bc9301ee1ed2bd6": "b1d80ec7e4805167e27ff1e8d31de4da",
".git/objects/09/77ed52aab468b0da0c644aa982d1568f615a76": "11dea26f419d4f3f20784b865b02471c",
".git/objects/09/6b090dd5f3e0ea0ccc5937c888183c32dc8f83": "3ce8450a3d177b9705a34508bac07514",
".git/objects/96/a55087f5819765f37d779405150f68c9aa694f": "21d9255b2a3f52489ddbcbeda47e9ef2",
".git/objects/53/f3e6b1259a4860cf1b05ed0e78522f01c917cf": "834265a8458641c8d9f3bec1731c8587",
".git/objects/37/e47aea42403b2454d27937c0bcbedf264edddd": "04dfd76d3c06f5596bf7ccee8f5379d8",
".git/objects/6d/6a7540e9d7eeccfd07b934c8a50c7bb5eab131": "3b9c7ed4526940e4b1434c5e2fa7caad",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/39/ce5cf99a8a175ed2f74d2ff5bfbd26c22b99ca": "650d813444d6834d6f0ecaf37fd52b95",
".git/objects/39/cd9505d74476bbaeb7ef6407ec99123ec9647d": "63c138acaa71124c09f205ca20b0b216",
".git/objects/52/9eb05ceba6609ae857fee1a37f09288c9e96f2": "c34c4840bd82cdea9a4022336ce0de3e",
".git/objects/0a/081bc940c69bae6d7279f2ef823e6024cda622": "a5da94e20f6beff6e5be3d2599e8ec8d",
".git/objects/bf/f474f151a2bac40c0afda821e96b321c73a4d2": "dede80d420a7945bd44a2427a4bcd192",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/b8/17d8488893600aeefd9bf55926a33fc76ec65e": "b4cc3a19a75373bbcda514ff9507eace",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/f748904c26cdc6eec14d5cf104a8cc665a0d86": "36caef474872c34f3d2fda8b6ecad43f",
".git/objects/a8/56ab3aa8a1466ec46228571c265293779182f5": "e39da4bade846b4eab4866bca1e2b62f",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/de/0446cdc87c73e1406772dbc9d3eaaf10f36ed8": "b9a772d2237e96f9430273fbfa93fb4b",
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
".git/objects/84/a905317f7fd40a7045680b3334baf7004c1fda": "790b159cd9c92a1211b8b2a3581ae626",
".git/objects/4a/b6d8e9424cda8bb33a427ee49aca41fd30fcdf": "75423da302c8e62fd0c8453ab65223d3",
".git/objects/15/adaa95fc62caeceaaf8385b7003804076ff0d6": "53734ff966da7aa898111a176719c363",
".git/objects/82/6899cfe6a1109ab450ce9a9c9ae6dcbb206447": "f4cd5a1624342ecab9bc8cb560928cb4",
".git/objects/49/831cac05a63e81223e6b7661d508bee13f6894": "976368252860c56409b0bc0994469e0d",
".git/objects/2e/b4533f0f401e9f6e486ce19b5760c52448bf9b": "61829787d265d032c22909e8f3345b41",
".git/objects/47/8780fcbc6c38c77687312ca0315aff0c307af1": "aebd9398dd2c0d6a013b5adafaa97135",
".git/objects/47/00583e300759c575980301b1758566b61643d3": "2dab47b27006f05af06402d0abd4ab43",
".git/objects/78/df43e58124862ab856106a70dfad8dfc1dfdee": "ccb0265bce68522f37481d05e354acdf",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/objects/25/544088c53f1d45f3236e590b2b6fc5f04a304a": "e026271c95f55d870b43802c88bce26e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ebdff671f2c62d733702b8092966a335",
".git/logs/refs/heads/main": "8147f028646e9426e8d389482057ef55",
".git/logs/refs/remotes/origin/main": "1acf4eeb09dfc5cbad57dcc20c19ca40",
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
".git/refs/heads/main": "beb1278cee9fc4f39dd9f4f58f8afd4d",
".git/refs/remotes/origin/main": "beb1278cee9fc4f39dd9f4f58f8afd4d",
".git/index": "2e4faabf8d894425f02e256a377bcc21",
".git/COMMIT_EDITMSG": "e052b74601e872b5c2be3aba0074ba85",
".git/FETCH_HEAD": "ade6279426eb7bd0a35830bd40313ef8",
".git/sourcetreeconfig": "55e80f1a8afb0d3f1a5a3f8abcf6eaae",
"assets/AssetManifest.json": "9fcf38f040ddbac597fc1b54f4669b65",
"assets/NOTICES": "d631ed971cdaa3f08ade5181566b3863",
"assets/FontManifest.json": "8e285323886af59505bd954840551b9c",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/files/Dilshad-Ahmad-Flutter-Dev.pdf": "e381ea700cf76bd0fc34d5deaf18ce25",
"assets/files/floating-cat-michael-grubb-main-version-24551-01-53.mp3": "ab8ed378462d559ed2e3f3327bd2e32e",
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
