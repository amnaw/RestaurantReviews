//var myCache;
self.addEventListener('install', function(event) {
    //open a cache, if there is no one it'll create one
    event.waitUntil( //do the following things during the installing,do not finish the event until we finish
        caches.open('myCache')
            .then(cache => 
                //cache all the files
                cache.addAll(
                    [
                        '/',
                        '/css',
                        '/data',
                        '/img',
                        '/js',
                   ]

                ))

    )
})

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(response => {
            if (response) { return response; } //if the value of response not null meaning that we found it and return it
            return fetch(event.request) //if not, then the value of response will be null(falsy value) so we'll fetch it from network
        })                                    
    );
});