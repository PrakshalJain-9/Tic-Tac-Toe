export default function optimalMove(activeSign, computerSign) {
    function isFull(board) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === '') return false;
            }
        }
        return true;
    }

    function evaluate(board) {
        for (let i = 0; i < 3; i++) {
            if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '') return board[i][0] === computerSign ? 10 : -10;
            if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== '') return board[0][i] === computerSign ? 10 : -10;
        }

        if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[1][1] !== '') return board[1][1] === computerSign ? 10 : -10;
        if (board[2][0] === board[1][1] && board[1][1] === board[0][2] && board[1][1] !== '') return board[1][1] === computerSign ? 10 : -10;

        return 0;
    }

    function minmax(board, isMax, depth) {
        const score = evaluate(board);

        if (Math.abs(score) === 10) return score;

        if (isFull(board)) return 0;

        if (isMax) {
            let bestscore = -Infinity;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (board[i][j] === '') {
                        board[i][j] = computerSign;
                        bestscore = Math.max(bestscore, minmax(board, !isMax, depth + 1) - depth);
                        board[i][j] = '';
                    }
                }
            }
            return bestscore;
        } else {
            let bestscore = Infinity;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (board[i][j] === '') {
                        board[i][j] = activeSign;
                        bestscore = Math.min(bestscore, minmax(board, !isMax, depth + 1) + depth);
                        board[i][j] = '';
                    }
                }
            }
            return bestscore;
        }
    }

    function giveBest(board) {
        let bestmove = { row: -1, col: -1 };
        let bestscore = -Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === '') {
                    board[i][j] = computerSign;
                    let val = minmax(board, false, 0);
                    if (val > bestscore) {
                        bestscore = val;
                        bestmove.row = i;
                        bestmove.col = j;
                    }
                    board[i][j] = '';
                }
            }
        }
        return bestmove;
    }

    function isEmpty(board) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] !== '') {
                    return false;
                }
            }
        }
        return true;
    }

    return { giveBest, isFull, evaluate, isEmpty };
}