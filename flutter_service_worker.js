'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "69fc5c4fa800af10c6fd1a3ce387efea",
"favicon.ico": "ad05885c6e00ddb04b9bf9709097e192",
"index.html": "b18f338d570b822db4c560b1151cb63b",
"/": "b18f338d570b822db4c560b1151cb63b",
"main.dart.js": "beadc5b9f8686ba9e95297d94f035cd4",
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
".git/ORIG_HEAD": "c5bbe1634c9504742cd958bb6af9606e",
".git/config": "9e0b79cfd327884e5099fef1fa78bbd5",
".git/objects/0d/cb1432bee4bf918afdc55690e87fad46b7eb45": "2437c8f197db4c0ab22c7950642f48f7",
".git/objects/95/49da06fd977179380c52eba4f891e6945e3ee0": "174cb1389c95be06ce7e9ea88e71d9cb",
".git/objects/92/c3a16fed2bf030ef6c521a22917d34748967f8": "6fd01b5bab771a7789289ab883ba246f",
".git/objects/92/74f9934bd31465a9b8e6ff5c2f8044105aec09": "0e05dd7f0b68b51202cb23eef55c37bf",
".git/objects/57/167056cfe0252a51d8978c890ababfa64ca700": "047ac4af2274bb4cd1f642c4e6993550",
".git/objects/6f/e73c40518e12db298ce20502c99b47e4987380": "66ece34dfb562b18d6430cfef061486e",
".git/objects/9e/b92165fbe942e627b8cd375e2493cc00f43f7d": "40975d7515a338cf51e22abbb5e98e10",
".git/objects/35/6eebfc01f460add89c501a93a6b4d6b6d6e09b": "5a4a0576edea196e7541c73bb5a3848d",
".git/objects/35/f86ca070cc77abfda682bfa81dbd5dd4d73497": "f28ad80a5e1a2cb8d8cdcdf6f9628113",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3c/567c37c67a462667760c14ab18a1687d24ddef": "da4a01303f4100d67531d36340aeb19e",
".git/objects/56/3e8edd2913e3d294589a178b6548baf6c09dab": "4cc405df36687ed4df1442f043e83fba",
".git/objects/93/3212489fef6b85f36dc114c2a5c80e33b88c0a": "37a9f49478d35a4f6a5f25ed6e79fb0e",
".git/objects/93/e6828d995bb7746aa4fbd4df0b85b8337a9485": "6999ab4a71ac5e9b1b6fc032b81d4e04",
".git/objects/93/766dbb4e28cd6d0de59347511526c0a1b2c2fd": "53348c9b214d2d8c851feeb88c9a6bce",
".git/objects/94/38302b24d87f75fdf26ca6f00d76478e50f811": "ab07306d4cf532c8c7dbe135572f462e",
".git/objects/60/4ab28d2323136b88bb51e9d1484ce5540b40cc": "ff2ca190cbc3975c6217372f09162a0f",
".git/objects/5f/c46f67a398c5ed54f7ecf02e75517270c6a441": "a4be3c8ad9b11de876fff78bff2c51cd",
".git/objects/05/e3177c907a673fb6216dd214b0734128d1634e": "599e303561133f92a285b12e5ec05a76",
".git/objects/9c/9c1c33c4b6e0bb225ebd7bb97e5adb2596ba12": "026d398dfaf20a5a76dc4d4aa1c3f0a5",
".git/objects/a4/84ddd26cd5fd7e20235fb7b4a32aadcd3478eb": "c59e293d03b299ea59991cf821610dde",
".git/objects/a4/d124b3bdbf465c7a46cbece084bcfd62fcc7d1": "835e51c55be2528533d9f527dd397276",
".git/objects/b5/3b32ecfa693cb5297b125378098e117f513b05": "29624ce4030350ee923102f487d35a64",
".git/objects/ac/b546790aeb3e53342753ad97eef4e934429a15": "f5482f4bb6d9182d2d8cea8f957c4493",
".git/objects/ad/a949a5dacf243f2f548ae638e7c8a60e6e8dae": "16343b0874e2369cfe262b802d36d720",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/da6d6f60d4cd6db36ba9d792fa2c7aeb4bd843": "cd45d0749ed8c637ea35391c2ca29ada",
".git/objects/da/a2b19413b3085053d9addf1f3036e8b2f3900c": "b37a3e9021f691d65ffe815da0b1af91",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/33743c2f75a25851c1180cdb289c37896ca5ba": "d3192c652fa1b8357ce03f27fbbb31e3",
".git/objects/ae/8d1d610e83caf8f8df668759e864e06b4c0576": "686ef8abec08a45b95df87191c6ee348",
".git/objects/e5/238268510a789969022e5e1e49b751cbb8d8af": "8ddf7c771f265f6b13954b2d3d2eed50",
".git/objects/f4/f3a464a86f35f9241a628da59d57012c7ed7d1": "e8e52dda7db7977e17956c4c1f5bdd49",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/87278b8297eb1d63d5917893dc1a256e45c9b2": "8cd2cb99016cede1134efa8f4e18335e",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/f2/661f36f5a63e86f0f96dab62ec45e7a9b82fb0": "67db84fdcd5297407aa0755cab0585c0",
".git/objects/e3/1c2cc75d94d6991de030aa068964e01714e797": "65b8f53c26e67ad58af0afd75eb4354b",
".git/objects/cf/2ae21678e7747c0f17f725173ce413f24dd584": "b16afddd4b2c025d08b3a311447e27ee",
".git/objects/ca/75b6ae53865f401ecd76ca2715e94af84a9788": "a8a14df40987bebf3d1f54d09a679227",
".git/objects/e4/e3063f2232c47a917c7d4564770f26c4472b54": "4bd543bc0fbf147212f0ba4f19587351",
".git/objects/c1/8b0c18584950500a759baffb24a466781dac6f": "9c33e9e150cdb9b5c089b510e997c1ac",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/4e/2f4c8bfb1eebaf939a1bfea9a669a5125ba795": "ac4f24cfb1af72ee19857c4a8071b447",
".git/objects/20/c0059a47dc0af423969f0d41ef086ab29472fa": "9b0921227fb2f38a42c41bf49752cf41",
".git/objects/27/015ef48d53d915ef079cd84872318e85fa5867": "486b999197d23315fc155de380eea444",
".git/objects/27/d9ff78f281504a1f5322839c041f09c3ec6f3d": "41b7cb266cd57d6eceff5ace8041e412",
".git/objects/4b/d12157b8a44a05e9269ed0a7dd04664b956013": "503405f4cb12063f788961d78dc6ac35",
".git/objects/11/286bb3dd5beaaea95384b70f10f271416cc3ed": "c0dc8275dc8e70cf9bd62e6e76fddac4",
".git/objects/16/f2a15c6549fb41bf4d9bbe56cbcc419336bbcc": "c756c0f576e0f4a1c93ff5ef376ed158",
".git/objects/42/2f45911201cd654013cc75f8f4bf8a11db1987": "e437ef77b0984cd77d3980927eef53e8",
".git/objects/1f/d8f15f43ba503bed9206b04096ad212caebfdc": "76074c4757b5c51c0f97b5ed39015a0d",
".git/objects/1f/c9d488f074a6b4ea3e981932eccc4f3ee2fe57": "4a3d5c9e16cc7121efa27538ec6311d3",
".git/objects/73/e39d9aaa44d4ce3ffdca40903e4d1b0b04879a": "637f02b10a94954ff5e721c6b0078f2f",
".git/objects/80/9328761288ae914ed8bc5976e617fe9444820e": "46cab7f7aee20539b4a00116f5928a33",
".git/objects/28/5dbbb14317a865eac239ed7ec8a92283df6a96": "a05d4a8fc24271c363b4b3d6f2d0273c",
".git/objects/7b/cf44e44326e4ec52b3c72272f5751509c2f5a8": "90c992c74a5ade61e25f10a7ac05bea3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/6af40e39545830a4c489d789476b110253afc2": "eea87dcab893369a00ca58bac00e9f91",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/19/5ab1b229f7e3509eceb6b10ac44cd26f7e3c71": "e758c9073247e81628c289305c9756a0",
".git/objects/19/b2ceefa78475406a06eb3e43ade6d1aca2a74b": "bf955de3d464a9c882ff01d98b81e465",
".git/objects/4c/01231d8853098803760aace55ea71765646479": "2d766ef07144d6d4204fc4b12d12134b",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/2a/bbebaca61a319f67a2ff5f94637bed6e749f07": "877d9295a61d1e0eee0f2227b82fcd62",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/54bdbd165f7cc7d935f7e4c5e3b37fc37546f6": "87880ea72a6148836bd86211492ed797",
".git/objects/6e/72500f803809398da299907bc9301ee1ed2bd6": "b1d80ec7e4805167e27ff1e8d31de4da",
".git/objects/9a/3c7d2ac2b051d7f4d0d1b0d614ce3833f89ab2": "9a7d29f6a58bdce699cee689e62af634",
".git/objects/36/8cdc238e68e00cb3f3fde9e94e853e773ac091": "93b1a7960fa51b9128db1c8ebd2b1388",
".git/objects/5c/d6ad5b784b6c72b13c3b090d803ae818370dd8": "eb821dd9998b2f4567f5e5709d420811",
".git/objects/09/77ed52aab468b0da0c644aa982d1568f615a76": "11dea26f419d4f3f20784b865b02471c",
".git/objects/09/6b090dd5f3e0ea0ccc5937c888183c32dc8f83": "3ce8450a3d177b9705a34508bac07514",
".git/objects/91/e06b9d0e00961bc2703c09ef1a52f3afc63902": "cb2f1ee743d20c4c305c53cf65cb2bc9",
".git/objects/62/67cd1d6534852f104e9f634a13d73651f1eaf7": "c61bb6727cf05c05eb00dc09d15cedf1",
".git/objects/96/a55087f5819765f37d779405150f68c9aa694f": "21d9255b2a3f52489ddbcbeda47e9ef2",
".git/objects/53/f3e6b1259a4860cf1b05ed0e78522f01c917cf": "834265a8458641c8d9f3bec1731c8587",
".git/objects/37/e47aea42403b2454d27937c0bcbedf264edddd": "04dfd76d3c06f5596bf7ccee8f5379d8",
".git/objects/08/2c8a76089f737cb6943964be5ba9106c090a52": "31ed2981df301b18e3671f5ff79a2a4a",
".git/objects/08/eb21c444ebd864803f5d1e75b07b502f0d29d1": "e036cc24cb9024fdeb2081cf9c6f2727",
".git/objects/6d/6a7540e9d7eeccfd07b934c8a50c7bb5eab131": "3b9c7ed4526940e4b1434c5e2fa7caad",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/01/d4498962d80db9141053e9902860dc92ed604c": "63628f6159554ddc9dfc985489a3c392",
".git/objects/01/3d4a6a53334fae827a32824eaf51a889396514": "1035270d429ce7cb68c5f0febf0fc0f9",
".git/objects/39/ce5cf99a8a175ed2f74d2ff5bfbd26c22b99ca": "650d813444d6834d6f0ecaf37fd52b95",
".git/objects/39/cd9505d74476bbaeb7ef6407ec99123ec9647d": "63c138acaa71124c09f205ca20b0b216",
".git/objects/99/c49d83a06eb0da0ae5381595db076269b8af06": "400f96826cc27497932a58e81f3fd7bc",
".git/objects/52/9eb05ceba6609ae857fee1a37f09288c9e96f2": "c34c4840bd82cdea9a4022336ce0de3e",
".git/objects/0a/081bc940c69bae6d7279f2ef823e6024cda622": "a5da94e20f6beff6e5be3d2599e8ec8d",
".git/objects/bf/f474f151a2bac40c0afda821e96b321c73a4d2": "dede80d420a7945bd44a2427a4bcd192",
".git/objects/d3/f5a12faa99758192ecc4ed3fc22c9249232e86": "83c38e3523ed81ec7e1208f4f48810ee",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/b8/17d8488893600aeefd9bf55926a33fc76ec65e": "b4cc3a19a75373bbcda514ff9507eace",
".git/objects/b8/1aaf8f0e62d47d9ae85abc494c417dac9d4495": "d5dca173251769b1e2a640e3e936f1c6",
".git/objects/d5/e361e8311814daa937aee05f4c5435613b567d": "68574f04db8ec8290d73e3a0cd879cf6",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/f748904c26cdc6eec14d5cf104a8cc665a0d86": "36caef474872c34f3d2fda8b6ecad43f",
".git/objects/a8/56ab3aa8a1466ec46228571c265293779182f5": "e39da4bade846b4eab4866bca1e2b62f",
".git/objects/a8/f0ed94d2af7e7e8ab8001165ee0658a0ca8736": "067c71ce2727e47fab17e014d31f097f",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/de/0446cdc87c73e1406772dbc9d3eaaf10f36ed8": "b9a772d2237e96f9430273fbfa93fb4b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/047531940d75291a2eebdbd99f92839a74abb0": "e6eec4b995be7ff4582eaec15a77da27",
".git/objects/a1/489783c67efea1bd998d048fcbf09248db03ee": "91bc3e6f5967ae8f5d580fb7edc1e288",
".git/objects/c3/8e803f31e0c779093585ddf0fbced27595836e": "90e04e5da5e48a04397c6944ec5a442e",
".git/objects/cd/4204f750bc94954d50681c62a4d745d93bbc76": "038fd44570d83ded85951e778b0c2270",
".git/objects/e6/19cd9536c970323787fa2b55e3771bb1fe8dc3": "ae4a8221b34df137b2a8cbd7d3a7ff22",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/c5/cea614dbd049d64e5ec4ea52e873ea95944bad": "b61f36850ac103f47efaa612cb81f1ca",
".git/objects/e9/0d38c19f70aba05835837286fefcffa3fe47c7": "4e7ab88567042410495819ea3871845c",
".git/objects/cb/231f7ea1c98bcfed33b5c27fb54d6df4c07253": "04d9f991de9ad74bb87ba7f597a77b8b",
".git/objects/f8/ce17713f6318e1dadf932250689c4639acbbee": "44808ac50f0e90580f2bd2d5995f2c12",
".git/objects/e0/1d88d9eaef3c143c6a395129e06abf26a645d0": "5aaf885dea2b3016c7b577dff88ddb33",
".git/objects/46/20da0b6e61472f5e253101866d4d8d7f09be55": "06ea3ab32d905279c33e28cb2f13667c",
".git/objects/46/c9f9123ffeb5d1d5298bd8b928572983e5e3a9": "6803ecc99c7e8e36ca72224477936943",
".git/objects/2c/1b10312438967216f3f1477ec5cc42bb801993": "54bde2329d1029dfda9277eb53e05b8b",
".git/objects/2c/6934bbb3dbf97f9020a9b1286392e19e0b46cc": "766b0f2afced2848e780aeb53e2e8384",
".git/objects/79/db778d0d45f74e6c55aa163b8c2030da096aad": "03e89f27480de585d5fba274170f538b",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/77/8eb8120d64bb3edec73f7a72d03ed42275b71a": "fa2e29d72eeb50be978ffef6e20b02df",
".git/objects/70/45e6f53d965fc4891b7657653b0deb8c0516ee": "9db87b4d6f4edcab1e4c13879734b9b9",
".git/objects/1e/b8eff82a4253c15ac576f36f4171d45292b9f4": "15f011705ba604f7b063853b86b48f05",
".git/objects/84/a905317f7fd40a7045680b3334baf7004c1fda": "790b159cd9c92a1211b8b2a3581ae626",
".git/objects/4a/b6d8e9424cda8bb33a427ee49aca41fd30fcdf": "75423da302c8e62fd0c8453ab65223d3",
".git/objects/15/f0336b049227faef1b2187651f4d57185b2dda": "1bb5651ed193d7880591a7158c42f35e",
".git/objects/15/adaa95fc62caeceaaf8385b7003804076ff0d6": "53734ff966da7aa898111a176719c363",
".git/objects/12/f8e487d1b84aaf925382435597ff974e04df7c": "334a5e841829fac9c969153ec2a7e81a",
".git/objects/82/6899cfe6a1109ab450ce9a9c9ae6dcbb206447": "f4cd5a1624342ecab9bc8cb560928cb4",
".git/objects/49/831cac05a63e81223e6b7661d508bee13f6894": "976368252860c56409b0bc0994469e0d",
".git/objects/40/e1d1dc4aab3043393c7abcd0669dfd40c313ed": "7e80753e94c282981003a30bc247edb7",
".git/objects/40/2ddf831eb2605c313470344d9e318d470ad177": "a8c51a0fc76773a1a9d73df27f99f839",
".git/objects/2e/b4533f0f401e9f6e486ce19b5760c52448bf9b": "61829787d265d032c22909e8f3345b41",
".git/objects/47/668fbe1dd9e2047ef505328b13be8c8f3ba546": "2bbd59c5d0f463f4b160d7ae9b612c20",
".git/objects/47/8780fcbc6c38c77687312ca0315aff0c307af1": "aebd9398dd2c0d6a013b5adafaa97135",
".git/objects/47/00583e300759c575980301b1758566b61643d3": "2dab47b27006f05af06402d0abd4ab43",
".git/objects/78/df43e58124862ab856106a70dfad8dfc1dfdee": "ccb0265bce68522f37481d05e354acdf",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/objects/25/544088c53f1d45f3236e590b2b6fc5f04a304a": "e026271c95f55d870b43802c88bce26e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cdced2d012102911ec404605d374d982",
".git/logs/refs/heads/main": "92180fd711631bf0506a47e4f2852663",
".git/logs/refs/remotes/origin/main": "022b1507f41bb8f1e26344c1d4d6416b",
".git/logs/refs/stash": "89ca9651d5598181b0b6256bf738ee90",
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
".git/refs/heads/main": "5ed9cae8be7e819c5a53f55aad1a793c",
".git/refs/remotes/origin/main": "5ed9cae8be7e819c5a53f55aad1a793c",
".git/refs/stash": "72832fcfd1fef4aab09c3296566f8c27",
".git/index": "e866f9ebeb155635752b4060632e1b94",
".git/COMMIT_EDITMSG": "e5094a9e0a9183ff429f7be22cd21f82",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/sourcetreeconfig": "063ee89ebd66046258ba1a9773f9e299",
"assets/AssetManifest.json": "292c7df8d8ad5b684a9047ee3154e2b3",
"assets/NOTICES": "d631ed971cdaa3f08ade5181566b3863",
"assets/FontManifest.json": "8e285323886af59505bd954840551b9c",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/files/bg-music-1.mp3": "ab8ed378462d559ed2e3f3327bd2e32e",
"assets/files/button-push-sound-1.mp3": "b41e54522dba48c66ef1e0be7ec01d33",
"assets/files/Dilshad-Ahmad-Flutter-Dev.pdf": "e381ea700cf76bd0fc34d5deaf18ce25",
"assets/files/racket-swing-sound-1.mp3": "cd809c94629eaba56837f63ff8ea186d",
"assets/AssetManifest.bin": "28e8e5385e94047f3676a7d9edee6d37",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/images/dilshadxahmad.png": "8a9fb39a55f887d7cf3b0c745df24305",
"assets/assets/images/home-view-bg.jpg": "9b60812a80ef522875bd1e5e93f755c2",
"assets/assets/audio/bg-music-1.mp3": "ab8ed378462d559ed2e3f3327bd2e32e",
"assets/assets/audio/button-push-sound-1.mp3": "b41e54522dba48c66ef1e0be7ec01d33",
"assets/assets/audio/racket-swing-sound-1.mp3": "cd809c94629eaba56837f63ff8ea186d",
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
