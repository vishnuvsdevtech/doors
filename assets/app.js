(() => {
  const portals = [...document.querySelectorAll('.portal')];
  const out = document.getElementById('m-open');
  portals.forEach((p) => {
    p.addEventListener('click', () => {
      const wasOpen = p.classList.contains('open');
      portals.forEach((o) => o.classList.remove('open'));
      if (!wasOpen) p.classList.add('open');
      out.textContent = wasOpen ? 'none' : p.querySelector('strong').textContent.toLowerCase();
    });
  });
  document.documentElement.dataset.ready = '1';
})();
