(function() {
    var currentUrl = window.location.href;

    // Check if the URL ends with '/index.html' and remove the 'index.html' part
    if (currentUrl.endsWith('/index.html')) {
        var newUrl = currentUrl.slice(0, -10);  // Remove the '/index.html' part
        window.location.replace(newUrl); // Redirect to the new URL without '/index.html'
    }
})();
