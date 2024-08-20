'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".dart_tool/dartpad/web_plugin_registrant.dart": "7ed35bc85b7658d113371ffc24d07117",
".dart_tool/package_config.json": "e2d74f0666f97b86959d2c373c169c18",
".dart_tool/package_config_subset": "4e7b9747a38b7d7eaaeff64dedb432c8",
".dart_tool/version": "2bcf1db5d9781d93292743eac8c96769",
".idea/libraries/Dart_SDK.xml": "d37c2c3963b64506cef733662a3abc8f",
".idea/libraries/KotlinJavaRuntime.xml": "de38cfadca3106f8aff5ab15dd81692f",
".idea/modules.xml": "3867275a5e85f3eb0ad5db7870554b38",
".idea/runConfigurations/main_dart.xml": "0ecf958af289efc3fc1927aa27a8442f",
".idea/workspace.xml": "25155dfb2368a7e35e1ebbecd505a418",
"analysis_options.yaml": "9e65f4b9beebb674c0dc252f70a5c177",
"android/app/build.gradle": "7290a8fe7f9104db1405569d021afee2",
"android/app/src/debug/AndroidManifest.xml": "820c45a25b424dd5b7388330f7548d1f",
"android/app/src/main/AndroidManifest.xml": "5a546c174391d91cf3cdca6ef76032bc",
"android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java": "5b3b418ce50367c33bded3c0df06d47f",
"android/app/src/main/kotlin/com/example/web/MainActivity.kt": "241b3ca1811f3a1b84c36180a865ea3c",
"android/app/src/main/res/drawable/launch_background.xml": "12c379b886cbd7e72cfee6060a0947d4",
"android/app/src/main/res/drawable-v21/launch_background.xml": "bff4b9cd8e98754261159601bd94abd3",
"android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"android/app/src/main/res/values/styles.xml": "f8b8cfbf977690d117f4dade5d27a789",
"android/app/src/main/res/values-night/styles.xml": "c22fb29c307f2a6ae4317b3a5e577688",
"android/app/src/profile/AndroidManifest.xml": "820c45a25b424dd5b7388330f7548d1f",
"android/build.gradle": "df058a90e5cd11493c2ea557f598e5a4",
"android/gradle/wrapper/gradle-wrapper.jar": "3ef954ed0adb79a5bd8a5303165fae05",
"android/gradle/wrapper/gradle-wrapper.properties": "f8be866fbb3300929bca97dce5ce7759",
"android/gradle.properties": "28e835ab42cf53277edaa9d08ba87c7d",
"android/gradlew": "7f1cd7eb3f75a1dc85cd37753972a6e2",
"android/gradlew.bat": "375ddea382b6c56a7be2a967a20e0ab5",
"android/local.properties": "a91ea740d3d9ab0541f489a47874f03e",
"android/settings.gradle": "d5a9ee71df121905698d5054a1f2e075",
"android/web_android.iml": "273d851cbe25579b8e6ee48886fa4d6a",
"assets/AssetManifest.bin": "0fafbd848058d4cd3d8f88d491a5823e",
"assets/AssetManifest.bin.json": "be8f7bc6955c67ac1148157af71d1c93",
"assets/AssetManifest.json": "9ccf5e3ea2d642dd48132795c69f3462",
"assets/assets/fonts/Barlow-Bold.ttf": "72871854aabdd7a79c4fc5038cb4faaf",
"assets/assets/fonts/Barlow-Italic.ttf": "ed7d4bb9c5638c38a28ccd3149b334fb",
"assets/assets/fonts/Barlow-Regular.ttf": "9373fb661b5c2954ab84d1b7f42774fe",
"assets/assets/fonts/BebasNeue-Regular.ttf": "b2b293064f557c41411aac04d6f6710d",
"assets/assets/fonts/Caveat-Regular.ttf": "7c66865f58afc98e72e69633ba374178",
"assets/assets/fonts/Cinzel-Bold.ttf": "227ba336c7ec6f74bb6a18b79a160698",
"assets/assets/fonts/Cinzel-Regular.ttf": "36e3287473aad3878156ae4983ffb79a",
"assets/assets/fonts/Montserrat-Italic.ttf": "cc53ad8bb1c801746c831bb7ce493f74",
"assets/assets/fonts/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/assets/fonts/Oswald-Regular.ttf": "b299a657c45aa257f1458b327f491bfb",
"assets/assets/fonts/Raleway-Italic.ttf": "5579b5fda3005b7d349336b3425b9f89",
"assets/assets/fonts/Raleway-Regular.ttf": "d95649da7dfb965a289ac29105ce8771",
"assets/assets/fonts/Roboto-Italic.ttf": "cebd892d1acfcc455f5e52d4104f2719",
"assets/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/images/Element_2.jpg": "883e552cf27c0d228ff956992445e3fc",
"assets/assets/images/Free01.jpg": "286d817a0030ce90a0787aff10d6e923",
"assets/assets/images/Gra_Fiszki.jpg": "51df5792d0fca41932139e05e04e4a62",
"assets/assets/images/Gra_mendelgame.jpg": "2ba0ff078fe12a2b25fed9bdf7373d89",
"assets/assets/images/Gry_10_Czarny_Piotrus.jpg": "559254278ca941914ca7c85924aa64c5",
"assets/assets/images/Gry_11_Gry_planszowe.jpg": "7bb87b22f62c3ffec85df39c5b0698e1",
"assets/assets/images/Gry_12_Gry_online.jpg": "8c8b668a787bbaf2ed0bf046ae0017c9",
"assets/assets/images/Gry_1_Stacja_RYWALIZACJA.jpg": "422b5baf710d255160cdc5a8b37c3ba6",
"assets/assets/images/Gry_2_EkoPolis.jpg": "b37401cb4c35394694ae8a22e024d589",
"assets/assets/images/Gry_3_5_sekund.jpg": "29af5ee5027122a9152a8884e58b6670",
"assets/assets/images/Gry_4_Podroz.jpg": "870a68131765d3c749dc28c78e06d139",
"assets/assets/images/Gry_5_Znajdz_to.jpg": "04b71b6aeabd89079829d5d2604957f8",
"assets/assets/images/Gry_6_Domino.jpg": "05429b1334166c4d347bb2e0bdb21cd3",
"assets/assets/images/Gry_7_Kocham_Cie.jpg": "3070b6f935fd37e131050672437831a6",
"assets/assets/images/Gry_8_Muchy.jpg": "4069a1c90d748f96b9682ae9e182421c",
"assets/assets/images/Gry_9_Ja_mam.jpg": "a8fdccc69b5e1bb9a44e655755c93f6c",
"assets/assets/images/icon_fb.png": "24e13b7143e8511febccb72f1fd48c44",
"assets/assets/images/icon_gm.png": "abdd12d714d678620766f076640a9c3a",
"assets/assets/images/icon_i.png": "d9b458f9863d0c73e739b635c596edca",
"assets/assets/images/icon_tt.png": "b1b12e018850b4c2a7af8775a619ab93",
"assets/assets/images/Karty_pracy_1_Kolorowanki.jpg": "41a27094c9ff4c744dfd52342e2e5964",
"assets/assets/images/Karty_pracy_2_Nonogram_XXL.jpg": "ac40a4d5e8f347bc1e4f9e16c6d05812",
"assets/assets/images/Karty_pracy_3_Sketchnotki.jpg": "5900d9c42d25db222886f47e05d8ea11",
"assets/assets/images/Karty_pracy_4_Ukladanki.jpg": "5ccca95310aaa371979231b0d6523448",
"assets/assets/images/Karty_pracy_5_Wykreslanki.jpg": "b493fbb34c4e012083e212328236c2e7",
"assets/assets/images/Karty_pracy_6_Lapbooki.jpg": "fd476b285502b074db41f77f0d5cf4d7",
"assets/assets/images/Karty_pracy_7_Szyfry.jpg": "2b7a044e88038491b3cfb0a589341a84",
"assets/assets/images/Karty_pracy_8_Zabawy.jpg": "e43e0453c95f9fd683381f7dc50d6d0f",
"assets/assets/images/Karty_pracy_9_Inne.jpg": "bb943d65ab5a581e6a31ba6505d61081",
"assets/assets/images/Logo_reka.png": "11f6febca61324d8c542dd8d824ef6bf",
"assets/assets/images/Okladka_1.jpg": "29af5ee5027122a9152a8884e58b6670",
"assets/assets/images/Okladka_2.jpg": "e9048cab1a18bdba4a49b68e632f5aac",
"assets/assets/images/Okladka_3.jpg": "51df5792d0fca41932139e05e04e4a62",
"assets/assets/images/Podpis_fioletowy.png": "b767194f98097e370cd79cc9141e1c04",
"assets/assets/images/Podpis_zielony.png": "98ddf9f3f048d5a7b8de2d26ea4cad4c",
"assets/assets/images/STRONA.png": "178f1a2c1b3db89b2cc5b7b86ca5f0e9",
"assets/FontManifest.json": "0495e2075a055257e612a1e19d9ea13a",
"assets/fonts/MaterialIcons-Regular.otf": "9e13897b8bf3cad0775bc8e5a42813d7",
"assets/NOTICES": "53c9fc658f7638f51c544c65da7f6844",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "d0040a61735b3d9f827d536831220ade",
"canvaskit/canvaskit.wasm": "18aa8ee495c1c514125d6b7016999599",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "3980feb4254d15387507f9a9a3770478",
"canvaskit/chromium/canvaskit.wasm": "a4732d41a9080efceacf0dabe3517e10",
"canvaskit/skwasm.js": "e95d3c5713624a52bf0509ccb24a6124",
"canvaskit/skwasm.js.symbols": "7fd07e2ef6fbbb976384e63316dae5f1",
"canvaskit/skwasm.wasm": "e4f869b44f05fe3f5d498d7ba260aace",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "c47cad71db74f741deea10cccbba9f69",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9faf09055e320b358b4ded59dfba496c",
"/": "9faf09055e320b358b4ded59dfba496c",
"ios/Flutter/AppFrameworkInfo.plist": "09ece6f06f706864eb9c343ad93b57c8",
"ios/Flutter/Debug.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"ios/Flutter/flutter_export_environment.sh": "fc012f24fce81efedae6ea84b595dd02",
"ios/Flutter/Generated.xcconfig": "b8abce585114f8b19cf91f7609f77a91",
"ios/Flutter/Release.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"ios/Runner/AppDelegate.swift": "e277c49e98c9f80e9e71c0524a5cb60f",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "31a08e429403e265cabfb31b3d65f049",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "a2f8558fb1d42514111fbbb19fb67314",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "2247a840b6ee72b8a069208af170e5b1",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "1b3b1538136316263c7092951e923e9d",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "be8887071dd7ec39cb754d236aa9584f",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "043119ef4faa026ff82bd03f241e5338",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "2b1452c4c1bda6177b4fbbb832df217f",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "2247a840b6ee72b8a069208af170e5b1",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "8245359312aea1b0d2412f79a07b0ca5",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "e419d22a37bc40ba185aca1acb6d4ac6",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "36c0d7a7132bdde18898ffdfcfcdc4d2",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "643842917530acf4c5159ae851b0baf2",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "665cb5e3c5729da6d639d26eff47a503",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "b9e927ac17345f2d5f052fe68a3487f9",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "f7ee1b402881509d197f34963e569927",
"ios/Runner/Base.lproj/LaunchScreen.storyboard": "b428258a72232cdd2cc04136ec23e656",
"ios/Runner/Base.lproj/Main.storyboard": "2b4e6b099f6729340a5ecc272c06cff7",
"ios/Runner/GeneratedPluginRegistrant.h": "decb9041b5e91a07e66f4664e5dac408",
"ios/Runner/GeneratedPluginRegistrant.m": "f6079b630997f8fd4ae1ac639162419a",
"ios/Runner/Info.plist": "89fe97591c65fb6906af8ac5653fb487",
"ios/Runner/Runner-Bridging-Header.h": "7ad7b5cea096132de13ba526b2b9efbe",
"ios/Runner.xcodeproj/project.pbxproj": "6a51430d37beb2168d1880ad0a14ee40",
"ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "77d69f353bbf342ad71a24f69ec331ff",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "1eb71d2100e7a36f63a33aa15dbfe6f1",
"ios/Runner.xcworkspace/contents.xcworkspacedata": "ac9a90958f80f9cc1d0d5301144fb629",
"ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"ios/RunnerTests/RunnerTests.swift": "24e5d095048eb86c30423f4e04b6e57b",
"lib/main.dart": "d8621d84413b0f1b1eeb5df51af935a1",
"linux/CMakeLists.txt": "950285b6053c6cbd99ce35764e23e71e",
"linux/flutter/CMakeLists.txt": "2195470ce31675d31db5a37590d011f6",
"linux/flutter/generated_plugins.cmake": "e973b0a9c4bf1b7cba923da57b4fbf45",
"linux/flutter/generated_plugin_registrant.cc": "d07afe003d5837167bdd357d593f20a0",
"linux/flutter/generated_plugin_registrant.h": "d295462c9da9f7fef22dc86c34492318",
"linux/main.cc": "539395bcd63dba20afed0838d136189f",
"linux/my_application.cc": "19ab4ea910ecba7eb391d2f79ed94643",
"linux/my_application.h": "f6b37d58752c8671078b6f660e33e8c1",
"macos/Flutter/ephemeral/Flutter-Generated.xcconfig": "c4436a14a0506621f32ac7a9b1e0f339",
"macos/Flutter/ephemeral/flutter_export_environment.sh": "02d799b33a43dd2bc6a10f70b0e8e1c7",
"macos/Flutter/Flutter-Debug.xcconfig": "f6991d7432e1664af118cc9531127016",
"macos/Flutter/Flutter-Release.xcconfig": "f6991d7432e1664af118cc9531127016",
"macos/Flutter/GeneratedPluginRegistrant.swift": "c840bc53b61279c2fb631741134c2ed7",
"macos/Runner/AppDelegate.swift": "4b52e0b89ebfef9baf45b04548c463d6",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_1024.png": "c9becc9105f8cabce934d20c7bfb6aac",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_128.png": "3ded30823804caaa5ccc944067c54a36",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_16.png": "8bf511604bc6ed0a6aeb380c5113fdcf",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_256.png": "dfe2c93d1536ae02f085cc63faa3430e",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_32.png": "8e0ae58e362a6636bdfccbc04da2c58c",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_512.png": "0ad44039155424738917502c69667699",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_64.png": "04e7b6ef05346c70b663ca1d97de3ad5",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "1d48e925145d4b573a3b5d7960a1c585",
"macos/Runner/Base.lproj/MainMenu.xib": "85bdf02ea39336686f2e0ff5f52137cc",
"macos/Runner/Configs/AppInfo.xcconfig": "ebe99d791079541f297df5b876ad737a",
"macos/Runner/Configs/Debug.xcconfig": "783e2b0e2aa72d8bc215462bb8d1569d",
"macos/Runner/Configs/Release.xcconfig": "709485d8ea7b78479bf23eb64281287d",
"macos/Runner/Configs/Warnings.xcconfig": "bbde97fb62099b5b9879fb2ffeb1a0a0",
"macos/Runner/DebugProfile.entitlements": "4ad77e84621dc5735c16180a0934fcde",
"macos/Runner/Info.plist": "9ffcbec0a18fdad9d3d606656fd46f9a",
"macos/Runner/MainFlutterWindow.swift": "93c22dae2d93f3dc1402e121901f582b",
"macos/Runner/Release.entitlements": "fc4ad575c1efec3d097fb9d40a0f702f",
"macos/Runner.xcodeproj/project.pbxproj": "53b1329769afd4856d6873793d970a71",
"macos/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"macos/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "f1898ad02510b9ebd2823f73fbb7e67c",
"macos/Runner.xcworkspace/contents.xcworkspacedata": "ac9a90958f80f9cc1d0d5301144fb629",
"macos/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"macos/RunnerTests/RunnerTests.swift": "8059f5d27a19c556eeafb49b3f9b7bdd",
"main.dart.js": "d2f7882cbf9c071731d78cd99613cee7",
"manifest.json": "8a937b1206d9b348bc2d218aec9bc321",
"pubspec.lock": "55b59dc30e543e3584f8f3951683c37d",
"pubspec.yaml": "e0456e2cb8a32ef1126c3831cecd61bc",
"README.md": "f62eeaa7616cee091b7df40146427806",
"test/widget_test.dart": "32cade57813a89c74d8d3a269232f36e",
"version.json": "6df0c8bc33d6ac8ac42f7afcee181fc6",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web/index.html": "d3fe4b84691ca7d14d2c5d69ce9eaba5",
"web/manifest.json": "4734db19b089f1a4d7b37fdc9824bcd2",
"web.iml": "f9bf5c490675c84d098e6772a6f2a796",
"windows/CMakeLists.txt": "1ab2c7fa4021ddd68d915bb0085dd341",
"windows/flutter/CMakeLists.txt": "bbf66fed5180bd9ae8198b8d7c4a0001",
"windows/flutter/generated_plugins.cmake": "620906318e8c8297f3bc95b445ce4c47",
"windows/flutter/generated_plugin_registrant.cc": "a8f91348d8d9090f22ec69d597c41e1f",
"windows/flutter/generated_plugin_registrant.h": "0ea33875f9f8e118f9c2ded03e2e2835",
"windows/runner/CMakeLists.txt": "028602ab9754bffe716659ada7590d29",
"windows/runner/flutter_window.cpp": "2f463f9b7da67a2d692a012f9ea85e0c",
"windows/runner/flutter_window.h": "7defcc89d4a26d56e801241d624d48fb",
"windows/runner/main.cpp": "01bb7d9acfab1af72f17ad947706bf4f",
"windows/runner/resource.h": "1ade5dd15e613479a15e8832ed276f2b",
"windows/runner/resources/app_icon.ico": "6ea04d80ca2a3fa92c7717c3c44ccc19",
"windows/runner/runner.exe.manifest": "298a0260a755c3959d2c3c8904298803",
"windows/runner/Runner.rc": "3bbf60f37dde0fe558c0735ced6ed85e",
"windows/runner/utils.cpp": "432461b09d862a2f8dadf380ff0e34e5",
"windows/runner/utils.h": "fd81e143f5614eb6fd75efe539002853",
"windows/runner/win32_window.cpp": "571eb8234dbc2661be03aa5f2a4d2fca",
"windows/runner/win32_window.h": "7569387d58711ab975940f4df3b4bcda"};
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
