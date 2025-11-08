function simulateDownload(progressElementId, textElementId, speed = 50) {
  const bar = document.getElementById(progressElementId);
  const text = document.getElementById(textElementId);
  let percent = 0;
  const interval = setInterval(() => {
    percent += Math.random() * 5 + 1;
    if (percent >= 100) percent = 100;
    bar.style.width = percent + '%';
    text.textContent = Math.round(percent) + '%';
    if (percent >= 100) {
      clearInterval(interval);
      text.textContent = 'Download completo';
    }
  }, speed);
}

simulateDownload('progress-bar', 'progress-text');