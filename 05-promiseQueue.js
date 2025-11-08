async function promiseQueue(funcs) {
  const results = [];
  for (const f of funcs) {
    const r = await f();
    results.push(r);
  }
  return results;
}


async function teste() {

  const f1 = () => new Promise(r => setTimeout(() => r("Primeira"), 1000));
  const f2 = () => new Promise(r => setTimeout(() => r("Segunda"), 500));

  const resultados = await promiseQueue([f1, f2])

  console.log(resultados)

}


teste();
