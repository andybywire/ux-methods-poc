// When the browser requests a file ...
addEventListener('fetch', fetchEvent => {
  const request = fetchEvent.request;
  fetchEvent.respondWith( 
    // First, look in the cache
    caches.match(request, {cacheName:staticCacheUXM,ignoreVary:true})
    .then( responseFromCache => {
      if (responseFromCache) {
        return responseFromCache;
      } // end if
      // otherwise, fetch from network
      return fetch(request)
      .catch( error => {
        // show the offline page
        return caches.match('/index.html'); // update to proper offline page
      }); // end fetch catch and return
    }) // end match then 
  ); // end respondWith
}); // end addEventListener

const version = 'v0.1'; // set up a way to increment this automatically
const staticCacheUXM = version + 'staticfiles';

addEventListener('install', installEvent => {
  skipWaiting();
  installEvent.waitUntil(
    caches.open(staticCacheUXM)
    .then( staticCache => {
      staticCache.addAll([  // nice to have
        '/js/app.js'
        ]); // end nice to have
      return staticCache.addAll([ // must have — be sure to add offline page to this list
        '/css/style.css',
        '/index.html',
        '/manifest.json'
        ]); // end return addAll / must have
      }) // end open caches / then
  ); // end waitUntil
}); // end addEventListener

addEventListener('activate', activateEvent => {
  activateEvent.waitUntil(
    caches.keys()
    .then( cacheNames => {
      return Promise.all(
        cacheNames.map( cacheName => {
          if (cacheName != staticCacheUXM) {
            return caches.delete(cacheName);
          } // end if 
        }) // end map
      ); // end return Promise.all
    }) // end keys then
    .then( () => {
      return clients.claim();
    }) // end then
  ); // end waitUntil
}); // end addEventListener