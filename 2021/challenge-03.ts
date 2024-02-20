export function isValid(letter: string) {
  return /^[^\{\[\(\)]*\([^\{\[\(\)]+\)+.*/g.test(letter);
}

export const letter1 = "bici coche (balón) bici coche peluche"
export const letter2 = "(muñeca) consola bici"
export const letter3 = "bici coche (balón bici coche"
export const letter4 = "peluche (bici [coche) bici coche balón"
export const letter5 = "(peluche {) bici"
export const letter6 = "() bici"
export const letter7 = "(a() bici (a)"

console.log(isValid(letter1))
console.log(isValid(letter2))
console.log(isValid(letter3))
console.log(isValid(letter4))
console.log(isValid(letter5))
console.log(isValid(letter6))
console.log(isValid(letter7))