import { describe, it, expect } from 'vitest'
import { flatten } from '../src/array/flatten.js'


describe('flatten', () => {
it('flattens one level by default', () => {
expect(flatten([1, [2, 3], 4])).toEqual([1, 2, 3, 4])
})


it('respects depth', () => {
expect(flatten([1, [2, [3]]], 2)).toEqual([1, 2, 3])
})


it('handles depth Infinity', () => {
expect(flatten([1, [2, [3]]], Infinity)).toEqual([1, 2, 3])
})


it('throws for non-array', () => {
expect(() => flatten(123)).toThrow()
})
})