import BackgroundMusic from './mario_forever.mp3';
import CoinSound from './mario_coin.mp3';
import EndGameSound from './mario_bros_die.mp3';

export default function audio() {
    const audioManager = {
        backgroundMusic: new Audio(BackgroundMusic),
        moveSound: new Audio(CoinSound),
        endGameSound: new Audio(EndGameSound),
    };
    function Initialize() {
        audioManager.backgroundMusic.loop = true;
        audioManager.backgroundMusic.play().catch(error => console.log('Background music error:', error));
    }

    function MoveSound() {
        audioManager.moveSound.play().catch(error => console.log('Move sound error:', error));
    }

    function EndGame() {
        audioManager.endGameSound.play().catch(error => console.log('End game sound error:', error));
    }

    function stopAll() {
        Object.values(audioManager).forEach(audio => {
            if (audio instanceof Audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        });
    }
    return { Initialize, MoveSound, EndGame, stopAll };
}