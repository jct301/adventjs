import { expect, test } from "vitest";
import {
  isValid, letter1, letter2, letter3, letter4, letter5, letter6, letter7
} from "./challenge-03";


test('challenge 03 2021 lette 1', () => {
  expect(isValid(letter1)).toEqual(true)
})
test('challenge 03 2021 lette 2', () => {
  expect(isValid(letter2)).toEqual(true)
})
test('challenge 03 2021 lette 3', () => {
  expect(isValid(letter3)).toEqual(false)
})
test('challenge 03 2021 lette 4', () => {
  expect(isValid(letter4)).toEqual(false)
})
test('challenge 03 2021 lette 5', () => {
  expect(isValid(letter5)).toEqual(false)
})
test('challenge 03 2021 lette 6', () => {
  expect(isValid(letter6)).toEqual(false)
})
test('challenge 03 2021 lette 7', () => {
  expect(isValid(letter7)).toEqual(false)
})

/**
 * "bici coche (balón) bici coche peluche" // -> ✅
 * "(muñeca) consola bici" // ✅
 * "bici coche (balón bici coche" // -> ❌
 * "peluche (bici [coche) bici coche balón" // -> ❌
 * "(peluche {) bici" // -> ❌
 * "() bici" // ❌
 * "(a() bici (a)" ❌
 */