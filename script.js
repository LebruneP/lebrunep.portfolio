// Mode sombre : le choix est mémorisé d'une page à l'autre
(function () {
  const toggle = document.getElementById('themeToggle');
  const track = document.getElementById('toggleTrack');
  const label = document.getElementById('toggleLabel');

  function apply(dark) {
    document.body.classList.toggle('dark-mode', dark);
    track.classList.toggle('on', dark);
    label.textContent = dark ? 'Light' : 'Dark';
  }

  let dark = false;
  try { dark = localStorage.getItem('theme') === 'dark'; } catch (e) {}
  apply(dark);

  toggle.addEventListener('click', () => {
    dark = !dark;
    apply(dark);
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
  });
})();
