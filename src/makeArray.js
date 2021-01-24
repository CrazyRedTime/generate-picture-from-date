const makeArray = (seed) => {
  const x = 5;
  const y = 10;
  const arr = [];
  const values = parseInt(seed.slice(0, 13), 16).toString(2);
  for (let i = 0; i < y; i++) {
    arr.push([]);
    for (let j = 0; j < x; j++) {
      arr[i].push(Number(values[j+(i*5)]));
    }
  }
  for (let i = 0; i < y; i++) {
    arr[i] = [...arr[i], ...arr[i].reverse()];
  }
  return arr;
}

export default makeArray;