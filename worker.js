addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    const country = request.headers.get('cf-ipcountry')
    const url = new URL(request.url)

    // Check if the user is from France and the requested domain is stage.shinywilds.com
    if (country === 'FR' && url.hostname === 'stage.shinywilds.com') {
        url.hostname = 'stage1.shinywilds.com'
        return Response.redirect(url.toString(), 302)
    }

    return fetch(request)
}
