const obj = { nome: "Ana", endereco: { cidade: "Luanda" } }

function deepClone(value, map = new WeakMap()) {
  if (value === null || typeof value !== 'object') return value;
  if (map.has(value)) return map.get(value);
  if (value instanceof Date) return new Date(value.getTime());
  if (value instanceof RegExp) return new RegExp(value.source, value.flags);
  if (Array.isArray(value)) {
    const arr = [];
    map.set(value, arr);
    for (let i = 0; i < value.length; i++) arr[i] = deepClone(value[i], map);
    return arr;
  }
  const obj = Object.create(Object.getPrototypeOf(value));
  map.set(value, obj);
  for (const key of Reflect.ownKeys(value)) {
    obj[key] = deepClone(value[key], map);
  }
  return obj;
}

console.log({
  original: obj,
  copy: deepClone(obj)
})