function searchNames(logins) {
  return logins.filter((login) => login[0].endsWith('_'));
}
