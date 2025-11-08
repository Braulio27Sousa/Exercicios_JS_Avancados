function createMemoryGame(containerId, pairs = 4, maxAttempts = 12) {
  const container = document.getElementById(containerId);
  if (!container) throw new Error('Container não encontrado');

  const values = [];
  for (let i = 1; i <= pairs; i++) { values.push(i); values.push(i); }
  for (let i = values.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [values[i], values[j]] = [values[j], values[i]];
  }

  container.innerHTML = '';
  let first = null, second = null, attempts = 0, matches = 0;

  values.forEach((v) => {
    const btn = document.createElement('button');
    btn.className = 'card';
    btn.dataset.value = v;
    btn.addEventListener('click', () => {
      if (btn.classList.contains('flipped') || second || attempts >= maxAttempts) return;
      btn.classList.add('flipped');
      btn.textContent = v;
      if (!first) first = btn;
      else {
        second = btn;
        attempts++;
        if (first.dataset.value === second.dataset.value) {
          matches++;
          first = null; second = null;
          if (matches === pairs) alert('VENCESTE!');
        } else {
          setTimeout(() => {
            first.textContent = '';
            second.textContent = '';
            first.classList.remove('flipped');
            second.classList.remove('flipped');
            first = null; second = null;
          }, 1000);
        }
      }
    });
    container.appendChild(btn);
  });
}

createMemoryGame('board', 4, 12);
document.getElementById('restart').addEventListener('click', () => location.reload());