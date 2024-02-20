import { expect, test } from "vitest"
import { contarOvejas, ovejas } from "./challenge-01"


const result = [
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' }
]

test('challenge 01 2021', () => {
  expect(contarOvejas(ovejas)).toEqual(result)
})

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]