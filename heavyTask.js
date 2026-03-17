function heavyComputation(num) {
  let result = 0;

  for (let i = 0; i < 10e9; i++) {
    result += Math.sqrt(i + num);
  }

  return result;
}

module.exports = { heavyComputation };
