export class Game {
    constructor() {
        // board is an array of 9 cells: null | 'X' | 'O'
        this.board = Array(9).fill(null)
        this.current = 'X'
        this.history = []
    }


    makeMove(pos) {
        if (!this.isValidMove(pos)) throw new Error('Invalid move')
        this.board[pos] = this.current
        this.history.push(pos)
        this.current = this.current === 'X' ? 'O' : 'X'
    }


    isValidMove(pos) {
        return Number.isInteger(pos) && pos >= 0 && pos < 9 && this.board[pos] === null
    }


    getWinner() {
        const lines = [
            [0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]
        ]
        
        for (const [a,b,c] of lines) {
            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                return this.board[a]
            }
        }
        if (this.board.every(Boolean)) return 'draw'

        return null
    }


    getAvailableMoves() {
        return this.board.map((v, i) => v === null ? i : -1).filter(i => i !== -1)
    }
}