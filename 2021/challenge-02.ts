export function listGifts(carta: string) {

  let repetids: { [x: string]: number } = {}

  carta.trim().split(/\s/g).filter(g => !g.startsWith('_')).forEach(gift => {

    repetids[gift] = (repetids[gift] || 0) + 1

  })
  return repetids
}

export const carta = 'bici coche balón _playstation bici coche peluche'

console.log(listGifts(carta))