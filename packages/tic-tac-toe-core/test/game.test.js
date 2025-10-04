import { describe, it, expect } from 'vitest'
import { Game } from '../src/game.js'


describe('Game', () => {
it('validates moves', () => {
const g = new Game()
expect(g.isValidMove(0)).toBe(true)
g.makeMove(0)
expect(g.isValidMove(0)).toBe(false)
expect(() => g.makeMove(0)).toThrow()
})


it('detects a win (diagonal)', () => {
const g = new Game()
// X moves
g.makeMove(0) // X
g.makeMove(1) // O
g.makeMove(4) // X
g.makeMove(2) // O
g.makeMove(8) // X -> diagonal win 0-4-8
expect(g.getWinner()).toBe('X')
})


it('returns available moves', () => {
const g = new Game()
g.makeMove(0)
g.makeMove(1)
g.makeMove(2)
g.makeMove(3)
g.makeMove(4)
g.makeMove(5)
g.makeMove(6)
g.makeMove(7)
g.makeMove(8)
expect(g.getAvailableMoves()).toEqual([])
})
})