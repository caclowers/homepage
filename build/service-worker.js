"use strict";var precacheConfig=[["/index.html","c0f8653502fe56551cc8da5a85e2cf43"],["/static/css/main.cfb921c9.css","ebe3bb6545d7efd61f7b79798b49b4e9"],["/static/js/main.95895e2b.js","18b9e9f5fb7556ec645810926927d4bd"],["/static/media/CSS3.b48ee73d.png","b48ee73df94d525e3688fc748abddbd4"],["/static/media/angular.2791c7c1.png","2791c7c1353ea7f555b34d9119e4fc7a"],["/static/media/armguard.7c7c4415.png","7c7c4415988aac49774cd43439372f87"],["/static/media/banner.349b8dfe.png","349b8dfe8329a5fa3be34c9f19fa6c6c"],["/static/media/blanket.b4ecd7eb.png","b4ecd7eba5a7ccc890eae856ea12b450"],["/static/media/bootstrap.6d0275c2.png","6d0275c246ffee920e51f6b50d7bf0bc"],["/static/media/bottles.4bc73920.png","4bc73920fcdf6a94e8aeb82701a83be5"],["/static/media/brasspins.5133c2f8.png","5133c2f8e9080d1527e342007f5450c2"],["/static/media/casey2.1e4ade70.jpeg","1e4ade70e4c4d6c9537667fffbb22ecd"],["/static/media/coinring.4932a1f1.png","4932a1f11d34da155aee10a746947346"],["/static/media/costumes.50977a40.png","50977a4036bed1f93ee7eac3dab66d8b"],["/static/media/framebolsters.360b0ef9.png","360b0ef962e2983f606b6885b8cbd40c"],["/static/media/image1.1b473fae.jpeg","1b473fae9c49db69e6ecabe38dbc3165"],["/static/media/jquery.7aa49d56.png","7aa49d568cb8b5bafb08dd34aee922f1"],["/static/media/mongodb.6370e2da.png","6370e2da83bd03568872aac9b604a2fe"],["/static/media/node.871cb7fb.png","871cb7fbfe7b676baf1ebe657d52f69c"],["/static/media/postgresql.9c9d44d2.png","9c9d44d2d2675d923f17160c712ad656"],["/static/media/react.4d9a7b60.png","4d9a7b60f391422ceef118cbb16bb58e"],["/static/media/redux.df617aa6.png","df617aa6c424ca34f78e7715bdd185f8"],["/static/media/wink.37af5ac7.png","37af5ac763d960d6e0ac0af3d41b1fcd"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});