"use strict";var precacheConfig=[["/index.html","2dbbce7b77301217e5144590fc51bcc3"],["/static/css/main.072ab5b5.css","cfa0f26e1387095dec81f5bf93d9ba23"],["/static/js/main.ffe685a5.js","24075390ce3f698800969cb7948fe8e8"],["/static/media/CSS3.b48ee73d.png","b48ee73df94d525e3688fc748abddbd4"],["/static/media/angular.2791c7c1.png","2791c7c1353ea7f555b34d9119e4fc7a"],["/static/media/bootstrap.6d0275c2.png","6d0275c246ffee920e51f6b50d7bf0bc"],["/static/media/casey2.49f32ad4.jpeg","49f32ad4ff8f0c11900ae1cda3edd257"],["/static/media/costumes.3955b444.png","3955b44442e0aecf8017bdff2389fe98"],["/static/media/image1.1b473fae.jpeg","1b473fae9c49db69e6ecabe38dbc3165"],["/static/media/jquery.7aa49d56.png","7aa49d568cb8b5bafb08dd34aee922f1"],["/static/media/mongodb.6370e2da.png","6370e2da83bd03568872aac9b604a2fe"],["/static/media/node.871cb7fb.png","871cb7fbfe7b676baf1ebe657d52f69c"],["/static/media/postgresql.9c9d44d2.png","9c9d44d2d2675d923f17160c712ad656"],["/static/media/react.4d9a7b60.png","4d9a7b60f391422ceef118cbb16bb58e"],["/static/media/redux.df617aa6.png","df617aa6c424ca34f78e7715bdd185f8"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});