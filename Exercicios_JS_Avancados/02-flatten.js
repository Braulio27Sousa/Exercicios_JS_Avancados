const array = [1, [2, [3, [4]]]];

function flatten(array) {
  const result = [];
  (function _flat(arr){
    for (const el of arr) {
      if (Array.isArray(el)) _flat(el);
      else result.push(el);
    }
  })(array);
  return result;
}

console.log(flatten(array))