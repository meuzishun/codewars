function bloodAlcoholContent(drinks, weight, sex, time) {
  const { ounces, abv } = drinks;
  const alcohol = ounces * abv;
  const ratio = sex === 'male' ? 0.73 : 0.66;
  const rawNum = ((alcohol * 5.14) / weight) * ratio - 0.015 * time;
  return Math.round(rawNum * 10000) / 10000;
}
