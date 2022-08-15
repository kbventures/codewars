function removeUrlAnchor(url) {
    // TODO: complete
    let result;
    let counter = false;
    url.split('').forEach((e, i) => {
        if (e === "#") {
            counter = true;
            result = url.slice(0, i)
        }
    })
    if (!counter) return url;
    return result
}