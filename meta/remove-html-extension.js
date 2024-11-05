(function() {
    var currentUrl = window.location.href;
    if (currentUrl.endsWith('.html')) {
        var newUrl = currentUrl.slice(0, -5);  // Remove the '.html' part
        window.location.replace(newUrl); // Redirect to the new URL without '.html'
    }
})();
