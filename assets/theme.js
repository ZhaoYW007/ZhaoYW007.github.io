// Day/night mode: applied immediately (no flash), remembered in localStorage,
// defaults to the visitor's system preference.
(function () {
  var root = document.documentElement;
  var stored = null;
  try { stored = localStorage.getItem('theme'); } catch (e) {}
  var dark = stored ? stored === 'dark'
    : window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  root.setAttribute('data-theme', dark ? 'dark' : 'light');

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    function render() {
      var isDark = root.getAttribute('data-theme') === 'dark';
      btn.innerHTML = '<i class="fas ' + (isDark ? 'fa-sun' : 'fa-moon') + '" aria-hidden="true"></i>';
      btn.setAttribute('aria-label', isDark ? 'Switch to day mode' : 'Switch to night mode');
      btn.setAttribute('title', isDark ? 'Day mode' : 'Night mode');
    }
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      render();
    });
    render();
  });
})();
