function getCount(words) {
  const results = {
    vowels: 0,
    consonants: 0,
  };

  if (typeof words !== 'string') {
    return results;
  }

  for (const char of words) {
    if (!/[a-z]/i.test(char)) continue;
    if (!/[aeiou]/i.test(char)) {
      results.consonants++;
      continue;
    }
    results.vowels++;
  }

  return results;
}
