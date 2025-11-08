function setupDarkMode(toggleId, storageKey = 'prefTheme') {
  const btn = document.getElementById(toggleId);
  const apply = (mode) => {
    if (mode === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem(storageKey, mode);
  };
  const saved = localStorage.getItem(storageKey) || 'light';
  apply(saved);
  btn.addEventListener('click', () => {
    const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    apply(current === 'dark' ? 'light' : 'dark');
  });
}


setupDarkMode("toggle");