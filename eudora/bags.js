
document.addEventListener("DOMContentLoaded", function() {
    var lastScrollTop = 0;

    window.addEventListener("scroll", function() {
        var st = window.pageYOffset || document.documentElement.scrollTop;

        if (st > lastScrollTop) {
            // Scroll down
            document.querySelector('footer').style.transform = 'translateY(100%)';
        } else {
            // Scroll up
            document.querySelector('footer').style.transform = 'translateY(0)';
        }

        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    });
});