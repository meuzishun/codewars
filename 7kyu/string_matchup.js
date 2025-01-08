function solve(a, b) {
  const dict = a.reduce((obj, elem) => {
    if (!obj[elem]) {
      obj[elem] = 1;
    } else {
      obj[elem] += 1;
    }

    return obj;
  }, {});

  return b.map((str) => dict[str] || 0);
}
