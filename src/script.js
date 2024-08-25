import optimalMove from './optimalMove.js';

// export function audio() {
//     const audioManager = {
//         backgroundMusic: new Audio('./mario_forever.mp3'),
//         moveSound: new Audio('./mario_coin.mp3'),
//         endGameSound: new Audio('./mario_bros_die.mp3'),
//     };
//     function Initialize() {
//         audioManager.backgroundMusic.loop = true;
//         audioManager.backgroundMusic.play().catch(error => console.log('Background music error:', error));
//     }

//     function MoveSound() {
//         audioManager.moveSound.play().catch(error => console.log('Move sound error:', error));
//     }

//     function EndGame() {
//         audioManager.endGameSound.play().catch(error => console.log('End game sound error:', error));
//     }

//     function stopAll() {
//         Object.values(audioManager).forEach(audio => {
//             if (audio instanceof Audio) {
//                 audio.pause();
//                 audio.currentTime = 0;
//             }
//         });
//     }
//     return { Initialize, MoveSound, EndGame, stopAll };
// }

export function opening() {
    const name = 'Player 1';
    const getname = () => name;

    function assignment(cubes) {
        let k = 0;
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                cubes[k].dataset.row = row;
                cubes[k++].dataset.col = col;
            }
        }
    }

    return { getname, assignment };
}

export function gameboard() {
    const board = [];
    for (let i = 0; i < 3; i++) {
        board.push(new Array(3).fill(''));
    }

    const getBoard = () => board;

    return { getBoard };
}

// function optimalMove(activeSign, computerSign) {
//     function isFull(board) {
//         for (let i = 0; i < 3; i++) {
//             for (let j = 0; j < 3; j++) {
//                 if (board[i][j] === '') return false;
//             }
//         }
//         return true;
//     }

//     function evaluate(board) {
//         for (let i = 0; i < 3; i++) {
//             if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '') return board[i][0] === computerSign ? 10 : -10;
//             if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== '') return board[0][i] === computerSign ? 10 : -10;
//         }

//         if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[1][1] !== '') return board[1][1] === computerSign ? 10 : -10;
//         if (board[2][0] === board[1][1] && board[1][1] === board[0][2] && board[1][1] !== '') return board[1][1] === computerSign ? 10 : -10;

//         return 0;
//     }

//     function minmax(board, isMax, depth) {
//         const score = evaluate(board);

//         if (Math.abs(score) === 10) return score;

//         if (isFull(board)) return 0;

//         if (isMax) {
//             let bestscore = -Infinity;
//             for (let i = 0; i < 3; i++) {
//                 for (let j = 0; j < 3; j++) {
//                     if (board[i][j] === '') {
//                         board[i][j] = computerSign;
//                         bestscore = Math.max(bestscore, minmax(board, !isMax, depth + 1) - depth);
//                         board[i][j] = '';
//                     }
//                 }
//             }
//             return bestscore;
//         } else {
//             let bestscore = Infinity;
//             for (let i = 0; i < 3; i++) {
//                 for (let j = 0; j < 3; j++) {
//                     if (board[i][j] === '') {
//                         board[i][j] = activeSign;
//                         bestscore = Math.min(bestscore, minmax(board, !isMax, depth + 1) + depth);
//                         board[i][j] = '';
//                     }
//                 }
//             }
//             return bestscore;
//         }
//     }

//     function giveBest(board) {
//         let bestmove = { row: -1, col: -1 };
//         let bestscore = -Infinity;
//         for (let i = 0; i < 3; i++) {
//             for (let j = 0; j < 3; j++) {
//                 if (board[i][j] === '') {
//                     board[i][j] = computerSign;
//                     let val = minmax(board, false, 0);
//                     if (val > bestscore) {
//                         bestscore = val;
//                         bestmove.row = i;
//                         bestmove.col = j;
//                     }
//                     board[i][j] = '';
//                 }
//             }
//         }
//         return bestmove;
//     }

//     function isEmpty(board) {
//         for (let i = 0; i < 3; i++) {
//             for (let j = 0; j < 3; j++) {
//                 if (board[i][j] !== '') {
//                     return false;
//                 }
//             }
//         }
//         return true;
//     }

//     return { giveBest, isFull, evaluate, isEmpty };
// }

export function toggler(players, board) {
    function swap() {
        let sign = players[0].Sign;
        players[0].Sign = players[1].Sign;
        players[1].Sign = sign;
        console.log(players);
    }

    function firstChance() {
        if (players[1].Sign == 'X') {
            const move = optimalMove('O', 'X');
            console.log('insid');
            const computerMove = move.giveBest(board);
            board[computerMove.row][computerMove.col] = 'X';
            document.querySelector(
                `.cube[data-row="${computerMove.row}"][data-col="${computerMove.col}"]`
            ).textContent = 'X';
        }
    }

    function toggle(e) {
        if (!e.target.classList.contains('selected')) {
            document.querySelector('.selected').classList.remove('selected');
            e.target.classList.add('selected');
            swap();
            console.log(players[1].Sign);
            firstChance();
        }
    }

    return { toggle };
}

export function checker(board) {
    function isAllowed(row, col) {
        if (board[row][col] === '') return true;
        alert("Can't use a filled square");
        return false;
    }

    function stopTheGame(computerMove, getmove) {
        return (
            computerMove.row === -1 ||
            computerMove.col === -1 ||
            getmove.evaluate(board) !== 0
        );
    }

    return { isAllowed, stopTheGame };
}

// function gameController() {

//     const cross = document.querySelector('.cross');
//     const zero = document.querySelector('.zero');
//     const cubes = document.querySelectorAll('.cube');
//     const heading = document.querySelector('h1');
//     const audioManage = audio();
//     document.addEventListener('click', () => {
//         audioManage.Initialize();
//     }, { once: true });

//     cross.classList.add('selected');

//     const open = opening();
//     let playerName = open.getname() !== null ? open.getname() : "Player 1";
//     open.assignment(cubes);

//     heading.textContent += ` ${playerName}`;

//     const players = [
//         { player: playerName, Sign: 'X' },
//         { player: "Computer", Sign: 'O' }
//     ];

//     const change = toggler(players);
//     const board = gameboard().getBoard();
//     let getmove = optimalMove(players[0].Sign, players[1].Sign);

//     cross.addEventListener('click', (e) => {
//         if (getmove.isEmpty(board)) {
//             change.toggle(e);
//         } else {
//             alert('Can\'t change mid game');
//         }
//     });

//     zero.addEventListener('click', (e) => {
//         if (getmove.isEmpty(board)) {
//             change.toggle(e);
//         } else {
//             alert('Can\'t change mid game');
//         }
//     });

//     cubes.forEach(cube => {
//         cube.addEventListener('click', (e) => {
//             if (getmove.evaluate(board) !== 0) {
//                 audioManage.stopAll();
//                 audioManage.EndGame();
//                 return;
//             }
//             getmove = optimalMove(players[0].Sign, players[1].Sign);
//             const row = e.target.dataset.row;
//             const col = e.target.dataset.col;

//             const check = checker(board);

//             if (check.isAllowed(row, col)) {
//                 board[row][col] = players[0].Sign;
//                 audioManage.MoveSound();
//                 e.target.textContent = players[0].Sign;
//                 const computerMove = getmove.giveBest(board);
//                 console.log(`Computer move: row ${computerMove.row}, col ${computerMove.col}`);

//                 if (check.stopTheGame(computerMove, getmove)) {
//                     audioManage.stopAll();
//                     audioManage.EndGame();
//                     return;
//                 }

//                 board[computerMove.row][computerMove.col] = players[1].Sign;
//                 document.querySelector(`.cube[data-row="${computerMove.row}"][data-col="${computerMove.col}"]`).textContent = players[1].Sign;

//                 if (check.stopTheGame(computerMove, getmove)) {
//                     audioManage.stopAll();
//                     audioManage.EndGame();
//                     return;
//                 }

//             }
//         });
//     });
// }

// gameController();
