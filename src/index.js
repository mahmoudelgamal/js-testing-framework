import { sum, subtract } from "./math.js";
import { expect, test } from "./testing-lib.js";

test("test add two numbers", ()=> {
    const result =  sum(3, 7)
    const expected = 10
    expect(result).toBe(expected)
})

test("subtract two numbers", ()=> {
    const result =  subtract(7, 3)
    const expected = 10
    expect(result).toBe(expected)
})
