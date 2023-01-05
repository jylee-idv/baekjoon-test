const a = [1000, 1, -3000, 9, 0, -10, -1, 2, 4, 10000, -12345];

const solution = (array) => {
    let result = 1;
    new Set(array.filter(value => value > 0).sort((a, b) => a - b)).forEach(value => { if(result !== value) return; result++; })
    return result;
};

const solution2 = (array) => {
  let result = 1;
  let temp;
  do {
    temp = result;
    for (let i = 0; i < array.length; i++) {
      if (result === array[i]) {
        result++;
        break;
      }
    }
  } while (result !== temp);
  return result;
};