// Hamburger menu toggle script
document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('hamburger');
    var nav = document.getElementById('primary-navigation');

    if (!btn || !nav) return;

    function openMenu() {
        btn.classList.add('is-active');
        nav.classList.add('open');
        // for mobile panel animation
        nav.classList.add('mobile-panel');
        btn.setAttribute('aria-expanded', 'true');
        // prevent background scrolling when menu open
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        btn.classList.remove('is-active');
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    btn.addEventListener('click', function (e) {
        var expanded = btn.classList.contains('is-active');
        if (expanded) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close when clicking outside the nav on small screens
    document.addEventListener('click', function (e) {
        if (window.innerWidth > 480) return;
        if (!nav.classList.contains('open')) return;
        var target = e.target;
        if (target === btn || btn.contains(target) || nav.contains(target)) return;
        closeMenu();
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' || e.key === 'Esc') {
            if (nav.classList.contains('open')) {
                closeMenu();
                btn.focus();
            }
        }
    });
});
