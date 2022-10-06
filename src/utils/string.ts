// from https://stackoverflow.com/questions/27194359/javascript-pluralize-an-english-string
export const pluralize = (count: number, noun: string, suffix = 's') =>
  `${count} ${noun}${count !== 1 ? suffix : ''}`

export const capitalize = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1)
