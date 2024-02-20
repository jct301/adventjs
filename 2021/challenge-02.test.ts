import { expect, test } from "vitest"
import { carta, listGifts } from "./challenge-02"

const result = {
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}

test('challenge 02 2021', () => {
  expect(listGifts(carta)).toEqual(result)
})

/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/