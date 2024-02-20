export function contarOvejas(param: { name: string, color: string }[]): { name: string, color: string }[] {

  return param.filter(({ color, name }) => color === "rojo" && name.trim().toLowerCase().includes('a') && name.trim().toLowerCase().includes('n'))
}

export const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo' }
]

console.log(contarOvejas(ovejas))