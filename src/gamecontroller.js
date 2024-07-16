import { opening, gameboard, toggler, checker } from './script.js';
import audio from './sound.js';
import optimalMove from './optimalMove.js';
import './style.css';



function gameController() {

    const cross = document.querySelector('.cross');
    const zero = document.querySelector('.zero');
    const cubes = document.querySelectorAll('.cube');
    const heading = document.querySelector('h1');
    const audioManage = audio();
    document.addEventListener('click', () => {
        audioManage.Initialize();
    }, { once: true });


    cross.classList.add('selected');

    const open = opening();
    let playerName = open.getname() !== null ? open.getname() : "Player 1";
    open.assignment(cubes);

    heading.textContent += ` ${playerName}`;

    const players = [
        { player: playerName, Sign: 'X' },
        { player: "Computer", Sign: 'O' }
    ];

    const change = toggler(players);
    const board = gameboard().getBoard();
    let getmove = optimalMove(players[0].Sign, players[1].Sign);

    cross.addEventListener('click', (e) => {
        if (getmove.isEmpty(board)) {
            change.toggle(e);
        } else {
            alert('Can\'t change mid game');
        }
    });

    zero.addEventListener('click', (e) => {
        if (getmove.isEmpty(board)) {
            change.toggle(e);
        } else {
            alert('Can\'t change mid game');
        }
    });


    cubes.forEach(cube => {
        cube.addEventListener('click', (e) => {
            if (getmove.evaluate(board) !== 0) {
                audioManage.stopAll();
                audioManage.EndGame();
                return;
            }
            getmove = optimalMove(players[0].Sign, players[1].Sign);
            const row = e.target.dataset.row;
            const col = e.target.dataset.col;

            const check = checker(board);


            if (check.isAllowed(row, col)) {
                board[row][col] = players[0].Sign;
                audioManage.MoveSound();
                e.target.textContent = players[0].Sign;
                const computerMove = getmove.giveBest(board);
                console.log(`Computer move: row ${computerMove.row}, col ${computerMove.col}`);

                if (check.stopTheGame(computerMove, getmove)) {
                    audioManage.stopAll();
                    audioManage.EndGame();
                    return;
                }

                board[computerMove.row][computerMove.col] = players[1].Sign;
                document.querySelector(`.cube[data-row="${computerMove.row}"][data-col="${computerMove.col}"]`).textContent = players[1].Sign;

                if (check.stopTheGame(computerMove, getmove)) {
                    audioManage.stopAll();
                    audioManage.EndGame();
                    return;
                }

            }
        });
    });
}

gameController();
