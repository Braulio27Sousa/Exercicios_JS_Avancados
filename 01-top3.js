function top3MaisRepetidos(arr) {
  const freq = new Map();
  for (const v of arr) freq.set(v, (freq.get(v) || 0) + 1);
  const sorted = Array.from(freq.entries())
    .sort((a,b) => b[1] - a[1] || a[0] - b[0])
    .slice(0, 3)
    .map(([numero, vezes]) => ({ numero, vezes }));
  return sorted;
}