/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["10MLAttar.html","09ea85e876df91dc2ab542daf98e32c3"],["2.5&3MLAttar.html","18469ba1ef977760041c8a1eb9ac817b"],["25MLAttar.html","54bdf17c16a25307218cabf83961c31d"],["6MLAttar.html","820484d14240fb1a523b3e2f1d6a12d9"],["8MLAttar.html","87a21fc0e0b53dd301f5732af69680c7"],["9MLAttar.html","0a3e415c757b8c6cd41dbde8a6dcfa43"],["ACO.html","c910f5eaf8cdb1c908a15277210005ce"],["AL-NUAIM.html","76bd52d4478c73ea95cf5bc436949a0b"],["About.html","d8ce4708f08e1cbd6643f10fb0b53c7c"],["AllAttar.html","ad59c3e603cab1658097fc2988aaa8aa"],["AllFragranceAttar.html","05b8af5ee4eae4e02582fea4fa10c486"],["Arochem.html","cc3d6268bdf1640640a4a179cd06d4c2"],["Jannat-E-Firdus.html","ae3d84f19224a0583a2a6565084d40e5"],["Madni.html","ebb4502a030b6e6062a11e43f297d944"],["MuskAttar.html","c4f2ba98d035d23d5fae8e90413b0862"],["OudhAttar.html","ff387c22c9d0230aee321bc74fa855bd"],["README.md","011c08ff874e3c58abc39b2241321c45"],["RoseAttar.html","3ec289b332a800a33f244b58ad52648b"],["Size/10MLAttar.html","eedf86b07d313bb46b5b67966800cb9c"],["Size/2.5&3MLAttar.html","7b4120e5188d63aed9bd2bb47824a7c7"],["Size/25MLAttar.html","cb5df5f66d8a3c04beee6363dc5a93c0"],["Size/6MLAttar.html","34325126bf4422b913dc55f92497f966"],["Size/8MLAttar.html","c445c59df3452cfd640503feb0697953"],["Size/9MLAttar.html","1e726850d9a2f1ce66b36efde76e13b5"],["StJohn.html","d48e2fe47e439492cd3fbf0167d9b168"],["Viwa.html","6d6e8e0fa75371c3f767c8238db9583e"],["ZIA.html","f05752a6c5093838efca3a6912455c23"],["blog.html","a816e7af7c926e5a9c0a0ed9984a117f"],["contact.html","db85838bb7b9ebf37806836655867a94"],["css/main.css","0ad2f8143481051f8358e37e0ee6b5c0"],["css/main.min.css","ac9df5bfdaf6ada0227a4f6a48aa0161"],["css/util.css","5775a9b6be827f5d552d970c880b8c2e"],["css/util.min.css","89e2c9c0a138a9ac1e8784835e622f5d"],["fonts/Linearicons-Free-v1.0.0/WebFont/Linearicons-Free.eot","b9b7f23cb61b1f503e1249b63d980448"],["fonts/Linearicons-Free-v1.0.0/WebFont/Linearicons-Free.svg","2781bf543c08d394dc78dec86989e3fd"],["fonts/Linearicons-Free-v1.0.0/WebFont/Linearicons-Free.ttf","2f3e9f80fff7d699dd3de6904d7d1647"],["fonts/Linearicons-Free-v1.0.0/WebFont/Linearicons-Free.woff","65060723fe964f85afa0a82d0bb78cf9"],["fonts/Linearicons-Free-v1.0.0/WebFont/Linearicons-Free.woff2","03e91f122aa5fd425abbe23c85546eb0"],["fonts/Linearicons-Free-v1.0.0/icon-font.min.css","ec26292e52e5bc20624b029974bd0adf"],["fonts/elegant-font.zip","9c3e6882111a9b36832ca402c7da8dd8"],["fonts/font-awesome-4.7.0.zip","64915167d37a4e9a8f692a1364b018d3"],["fonts/montserrat/Montserrat-Black.ttf","6d1796a9f798ced8961baf3c79f894b6"],["fonts/montserrat/Montserrat-BlackItalic.ttf","b5331c5f5aae974d18747a94659ed002"],["fonts/montserrat/Montserrat-Bold.ttf","88932dadc42e1bba93b21a76de60ef7a"],["fonts/montserrat/Montserrat-BoldItalic.ttf","781190aecb862fffe858d42b124658cc"],["fonts/montserrat/Montserrat-ExtraBold.ttf","9bc77c3bca968c7490de95d1532d0e87"],["fonts/montserrat/Montserrat-ExtraBoldItalic.ttf","09a2d2564ea85d25a3b3a7903159927b"],["fonts/montserrat/Montserrat-ExtraLight.ttf","38bc5e073a0692a4eddd8e61c821d57a"],["fonts/montserrat/Montserrat-ExtraLightItalic.ttf","6885cd4955ecc64975a122c3718976c1"],["fonts/montserrat/Montserrat-Italic.ttf","6786546363c0261228fd66d68bbf27e9"],["fonts/montserrat/Montserrat-Light.ttf","100b38fa184634fc89bd07a84453992c"],["fonts/montserrat/Montserrat-LightItalic.ttf","428b2306e9c7444556058c70822d7d7c"],["fonts/montserrat/Montserrat-Medium.ttf","a98626e1aef6ceba5dfc1ee7112e235a"],["fonts/montserrat/Montserrat-MediumItalic.ttf","287208c81e03eaf08da630e1b04d80e8"],["fonts/montserrat/Montserrat-Regular.ttf","9c46095118380d38f12e67c916b427f9"],["fonts/montserrat/Montserrat-SemiBold.ttf","c88cecbffad6d8e731fd95de49561ebd"],["fonts/montserrat/Montserrat-SemiBoldItalic.ttf","2d3cef91fbb6377e40398891b90d29bf"],["fonts/montserrat/Montserrat-Thin.ttf","0052573bbf05658a18ba557303123533"],["fonts/montserrat/Montserrat-ThinItalic.ttf","3cb621135b5f6fe15d7c2eba68f0ee37"],["fonts/montserrat/OFL.txt","5da468cc0e208e63aa009460017f214a"],["fonts/poppins/Poppins-Black.ttf","8971d1710cbf4c91bca1b460aec154d7"],["fonts/poppins/Poppins-BlackItalic.ttf","ad021f07d5d9269d7a7c005e2ad19eae"],["fonts/poppins/Poppins-Bold.ttf","7940efc40d8e3b477e16cc41b0287139"],["fonts/poppins/Poppins-BoldItalic.ttf","0952866304f326356a552d9b60a8f06e"],["fonts/poppins/Poppins-ExtraBold.ttf","0e6906b2b7be194f68b8f7b7252c4f6c"],["fonts/poppins/Poppins-ExtraBoldItalic.ttf","8f1e4e0b5a883ba1035b10f6bd09f19f"],["fonts/poppins/Poppins-ExtraLight.ttf","f99f9d50a569dbcf72e3084ef1a43208"],["fonts/poppins/Poppins-ExtraLightItalic.ttf","682c805ca8e4f6d0f66b4f9fbbb83fac"],["fonts/poppins/Poppins-Italic.ttf","b7e7ed9f2fd6236ad791a8987d8f478f"],["fonts/poppins/Poppins-Light.ttf","3352653dedd571bbc490c8be132b38cd"],["fonts/poppins/Poppins-LightItalic.ttf","f86967072b9e0d95ccd5587decb10180"],["fonts/poppins/Poppins-Medium.ttf","a4e11dda40531debd374e4c8b1dcc7f4"],["fonts/poppins/Poppins-MediumItalic.ttf","049c11dc561dad0fdd4627417030386b"],["fonts/poppins/Poppins-Regular.ttf","731a28a413d642522667a2de8681ff35"],["fonts/poppins/Poppins-SemiBold.ttf","e63b93dfac2600782654e2b87910d681"],["fonts/poppins/Poppins-SemiBoldItalic.ttf","e650e72170e79b589af1fbdf46b03676"],["fonts/poppins/Poppins-Thin.ttf","735aa7d8e35b63068b9113ea2545f0c3"],["fonts/poppins/Poppins-ThinItalic.ttf","cffb0ae21d03a32e81d5f2193c4a711d"],["fonts/themify.zip","54bec04c9f11a1f46d18158a7b9fa000"],["images/1.jpg","f462c34060fb57e34ac10fea0256ca5f"],["images/2.jpg","8a736be658f4eb7f8008ff697ac674f5"],["images/3.jpg","5bc9fcb3eb5c3188011d25882c2d8053"],["images/4.jpg","aa8a4c4ef1abe9c9d3b22eaa32074273"],["images/5.jpg","097b57b4c5f7b7c5dd32eac7d28348ba"],["images/6.jpg","328a1e53f148e18dd98a6e4794f01dfa"],["images/AllFrag.jpg","b607d1b29499254d796a019d5e396176"],["images/BGLS_New.png","15f11e89be3caebca120e9fe489df67f"],["images/JannatFrag.jpg","243447ea6de3173f5f9ade9d4ad46065"],["images/MuskNotes.jpg","c8ca0ae56959e989917219c8a81414da"],["images/Oud.jpg","6bd1d968bef406fbb3e26bc489509463"],["images/Oudh.jpg","bc25e1aaa9a67e57798e1d35f93433ce"],["images/RoseNote.jpg","2caf40b67fd590ab930d07e4825e6c3a"],["images/blog-01.jpg","b967dc191c7a01c6bf70215bec7e80f4"],["images/blog-02.jpg","b967dc191c7a01c6bf70215bec7e80f4"],["images/blog-03.jpg","b967dc191c7a01c6bf70215bec7e80f4"],["images/blog-04.jpg","83a34bbe01c15022059a375ba1beef6a"],["images/blog-05.jpg","eec8f5e997b9f064a00659be2a04356f"],["images/blog-06.jpg","eec8f5e997b9f064a00659be2a04356f"],["images/blog-07.jpg","eec8f5e997b9f064a00659be2a04356f"],["images/blog-08.jpg","eec8f5e997b9f064a00659be2a04356f"],["images/blog-09.jpg","eec8f5e997b9f064a00659be2a04356f"],["images/blog-10.jpg","eec8f5e997b9f064a00659be2a04356f"],["images/gift.jpg","8d3eb11296a9dde17d9dcff253f35ac4"],["images/heading-pages-02.jpg","c0d79b32518bbdca784b8344ad8f68da"],["images/heading-pages-06.jpg","08b4f1dc686edc7df1534903be59ac62"],["images/icons/AttarSouk.png","a7d8ec231890eeff6d22f470432340ec"],["images/icons/bg-01.jpg","b3b570e920d86e99277ec0cca646db57"],["images/icons/discover.png","ca14a6fc071ca37676c5c598a7ce1ab0"],["images/icons/express.png","c5968dda3ceeae8065078dd58b3ae8c4"],["images/icons/favicon.png","c304a3188306bd7d41898fe3dd80d616"],["images/icons/mastercard.png","19ce01177b1ad322ab2205946b83128b"],["images/icons/paypal.png","96ef340efd3f289783b4ae4b231c4ea0"],["images/icons/video-16-9.jpg","e9c55c068b0eee2f8865875c435cd5c1"],["images/icons/visa.png","fb3dce76617051d2595edef51765f18a"],["images/master-slide-01.jpg","e14cb652c769872a13ab710d55177bb2"],["images/master-slide-02.jpg","9fa5544e0b92ac18eb9801baf6d8a17e"],["images/master-slide-03.jpg","9063f6e7d93a84e9f3134eea7ca14688"],["images/musk.jpg","8266911ef0160bb2b0134765ab0cfa78"],["images/product-detail-01.jpg","7810b60dd7c1f61a0afc99f296e1e9f0"],["includes/config.json","3f11f034c06f8bf9d2b59faad9370816"],["includes/contact-form.php","1e20a3ec01c86002d0d016ed4f6f6d7d"],["index.html","e2d3b0cfe03ca4e9d9dbdab3b5b26237"],["js/main.js","33655d2bc2620431d61cb6f9ce63c16f"],["js/main.min.js","608a0d5ca4c4c9e5d77501f7c80cb701"],["js/map-custom.js","7a63a9e96fcd68641218fefaa0fac8c9"],["js/map-custom.min.js","61d3e65fa45128f8c89ad45eeef11bde"],["js/slick-custom.js","310ed9b59caf18e8ffc62e8f3bcd666a"],["js/slick-custom.min.js","860be1139bb96eab3d80ea2731940865"],["manifest.json","cc5279bdb1b011000b64417c329f8d47"],["vendor/animate/animate.css","57db4a2811f951ff841fb4f77220d95b"],["vendor/animsition/css/animsition.css","bcdc8e7a8737d1509f8aff8d770dff49"],["vendor/animsition/css/animsition.min.css","312fbe26010f14f41068f8969c11d86e"],["vendor/animsition/js/animsition.js","1ee319899bc4087fe98e47bf6f8bedfe"],["vendor/animsition/js/animsition.min.js","72d24e37ce242ffdad389c26d6b9de57"],["vendor/bootstrap/css/bootstrap-grid.css","68dba5af0b67aa3883774411b3618c39"],["vendor/bootstrap/css/bootstrap-grid.css.map","fc60e0b490ec432d37a0577b78aa87a4"],["vendor/bootstrap/css/bootstrap-grid.min.css","81ac95ea7a4acdd9b0127da751669753"],["vendor/bootstrap/css/bootstrap-grid.min.css.map","94ffff228ac3ccec50b33355f0319bd8"],["vendor/bootstrap/css/bootstrap-reboot.css","300fc510017f6189e0c1b85eb439501e"],["vendor/bootstrap/css/bootstrap-reboot.css.map","2d191e244cc62e75a19f9eb71ee4e60d"],["vendor/bootstrap/css/bootstrap-reboot.min.css","28ed2bcac51850865268529c73c20e6b"],["vendor/bootstrap/css/bootstrap-reboot.min.css.map","f6c26739b46618e17935caabd55120fd"],["vendor/bootstrap/css/bootstrap.css","afee1b42daf24661c41bba459186987c"],["vendor/bootstrap/css/bootstrap.css.map","0df0f86ed6e6f696a3eb8d73e3e288ac"],["vendor/bootstrap/css/bootstrap.min.css","3ffbab350748e841d3768b5d1ca48933"],["vendor/bootstrap/css/bootstrap.min.css.map","7b85d321f58595292748a2224b28c030"],["vendor/bootstrap/js/bootstrap.js","23a49d81e87ad811700e6db0ac345242"],["vendor/bootstrap/js/bootstrap.min.js","baaadea4492b059f284187d75af46063"],["vendor/bootstrap/js/popper.js","426ce17eeabd071e85b0bb50e5a18c6c"],["vendor/bootstrap/js/popper.min.js","6383a57baa1479e8490a42f4184b7f0b"],["vendor/bootstrap/js/tooltip.js","640e14f2de0e6051dfd1304dd6855028"],["vendor/countdowntime/countdowntime.js","e30566d5bb8194d51278ca32d88d0706"],["vendor/css-hamburgers/hamburgers.css","522e344ceeb78b372844874d52437159"],["vendor/css-hamburgers/hamburgers.min.css","f4e16dee11e867f501b9aed5878fe1f3"],["vendor/daterangepicker/daterangepicker.css","2fba2a36f4a0188d6ac539e97ac788c4"],["vendor/daterangepicker/daterangepicker.js","17410722717c1e9395f02d0dd74c2590"],["vendor/daterangepicker/moment.js","a04210d73e4259b9728735b9bc3d2bb2"],["vendor/daterangepicker/moment.min.js","03c1d3ad0acf482f87368e3ea7af14c2"],["vendor/isotope/isotope.pkgd.min.js","39258d5d7a1a2c1df44cb3a40e494e9a"],["vendor/jquery/jquery-3.2.1.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["vendor/jqueryui/external/jquery/jquery.js","fb2d334dabf4902825df4fe6c2298b4b"],["vendor/jqueryui/images/ui-icons_444444_256x240.png","d10bc07005bb2d604f4905183690ac04"],["vendor/jqueryui/images/ui-icons_555555_256x240.png","00dd0ec0a16a1085e714c7906ff8fb06"],["vendor/jqueryui/images/ui-icons_777620_256x240.png","4e7e3e142f3939883cd0a7e00cabdaef"],["vendor/jqueryui/images/ui-icons_777777_256x240.png","40bf25799e4fec8079c7775083de09df"],["vendor/jqueryui/images/ui-icons_cc0000_256x240.png","093a819138276b446611d1d2a45b98a2"],["vendor/jqueryui/images/ui-icons_ffffff_256x240.png","ea4ebe072be75fbbea002631916836de"],["vendor/jqueryui/index.html","11f31c348968868d4ada89d6162c640e"],["vendor/jqueryui/jquery-ui.css","6fd5a6e8197041971d02cf62d06f4b14"],["vendor/jqueryui/jquery-ui.js","ab5284de5e3d221e53647fd348e5644b"],["vendor/jqueryui/jquery-ui.min.css","0b5729a931d113be34b6fac13bcf5b29"],["vendor/jqueryui/jquery-ui.min.js","c15b1008dec3c8967ea657a7bb4baaec"],["vendor/jqueryui/jquery-ui.structure.css","b75d9919ded1b610c51a4727dd4b9720"],["vendor/jqueryui/jquery-ui.structure.min.css","5581d20aa5062ed5c0b6048f68e76055"],["vendor/jqueryui/jquery-ui.theme.css","c4679db4adb3f9b8089213c6c396e2ee"],["vendor/jqueryui/jquery-ui.theme.min.css","c12cac44216cf877fd0c6903f3794407"],["vendor/lightbox2/css/lightbox.css","7ea2b72b8601aac4cb9200ac3c97b84d"],["vendor/lightbox2/css/lightbox.min.css","838852199f1fa47c065cb371dcc89ae9"],["vendor/lightbox2/images/close.png","d9d2d0b1308cb694aa8116915592e2a9"],["vendor/lightbox2/images/loading.gif","2299ad0b3f63413f026dfec20c205b8f"],["vendor/lightbox2/images/next.png","31f15875975aab69085470aabbfec802"],["vendor/lightbox2/images/prev.png","84b76dee6b27b795e89e3649078a11c2"],["vendor/lightbox2/js/lightbox-plus-jquery.js","153aee90c7a185d67db9b02991172015"],["vendor/lightbox2/js/lightbox-plus-jquery.min.js","4f6b57b5b0970ad5f0c37404311e518d"],["vendor/lightbox2/js/lightbox-plus-jquery.min.map","784f11433c53556552b7c2f6515f20a6"],["vendor/lightbox2/js/lightbox.js","b2321d3677fbf5bf42fd5325ca739c46"],["vendor/lightbox2/js/lightbox.min.js","d1b2d54f5f160c52d406faf162c46d94"],["vendor/lightbox2/js/lightbox.min.map","f53014008f46e8a7999d8c3d5e07f46b"],["vendor/noui/nouislider.css","aecf5df9cb62436d400bcd612035acd3"],["vendor/noui/nouislider.js","68e4d5a79e1d0d5dc82e4d8f3f4a7559"],["vendor/noui/nouislider.min.css","0beb51f7aadcbf3f788e4e8a3ad3d11a"],["vendor/noui/nouislider.min.js","a8235ed6e351cf319645fc4815ff94b4"],["vendor/parallax100/parallax100.js","72e78400245038804e007d882ef7d477"],["vendor/perfect-scrollbar/perfect-scrollbar.css","31498c7baf7a43644eb4de24f1215a0d"],["vendor/perfect-scrollbar/perfect-scrollbar.min.js","d6395960abdc131438c4879bb296b2ac"],["vendor/select2/select2.css","475b9ecdf92d2f48642665a34c563048"],["vendor/select2/select2.js","5a192f8c7d95cefb13504e0d27c351e6"],["vendor/select2/select2.min.css","d44571114a90b9226cd654d3c7d9442c"],["vendor/select2/select2.min.js","e87ca4c3554f7b9e693605ce12d3a234"],["vendor/slick/ajax-loader.gif","c5cd7f5300576ab4c88202b42f6ded62"],["vendor/slick/config.rb","c47857bcaf2a4cf98b1bce99c48d4cd9"],["vendor/slick/fonts/slick.eot","ced611daf7709cc778da928fec876475"],["vendor/slick/fonts/slick.svg","f97e3bbf73254b0112091d0192f17aec"],["vendor/slick/fonts/slick.ttf","d41f55a78e6f49a5512878df1737e58a"],["vendor/slick/fonts/slick.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["vendor/slick/slick-theme.css","f9faba678c4d6dcfdde69e5b11b37a2e"],["vendor/slick/slick-theme.less","c7c46d5960843c56fdfc63a789349434"],["vendor/slick/slick-theme.scss","e97dc549d5450ebd34fe128eefc69cd6"],["vendor/slick/slick.css","f38b2db10e01b1572732a3191d538707"],["vendor/slick/slick.js","da910267cd968a7d269efaed738025bd"],["vendor/slick/slick.less","f5309cf6905194850b44fb78b8028b95"],["vendor/slick/slick.min.js","d5a61c749e44e47159af8a6579dda121"],["vendor/slick/slick.scss","f5309cf6905194850b44fb78b8028b95"],["vendor/sweetalert/sweetalert.min.js","03d846cf1a557194cd1d386455d93c1a"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







