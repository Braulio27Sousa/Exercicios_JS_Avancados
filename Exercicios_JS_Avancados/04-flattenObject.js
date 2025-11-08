const obj = { user: { name: "Ana", age: 20 } }

function flattenObject(obj, prefix = '', res = {}) {
  for (const key of Object.keys(obj)) {
    const val = obj[key];
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (val && typeof val === 'object' && !Array.isArray(val)) {
      flattenObject(val, newKey, res);
    } else {
      res[newKey] = val;
    }
  }
  return res;
}

console.log(flattenObject(obj))