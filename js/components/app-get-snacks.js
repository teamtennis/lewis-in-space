import html from '../html.js';
import api from '../services/api.js';

let template = function(resultText) {
    return html`   
        <img src="img/poker.jpg">
        <div class="poker-text">
            <h1>Dog Playing Poker</h1>
            <p>Lewis's space ship runs on snack fuel and he no longer has enough snacks to continue on his journey. He is a dog shark at the poker table, so he seeks out a nearby game, but no dog can win all the time. He bets the only thing he has, his ship. Click the button below to find out if Lewis wins enough snacks to continue his journey. </p>
            <button class="results-button grow">Shouldn't there be a choice here?</button>
        </div>
        <div class="game-results">
            <h2>You played your best and...</h2>
            <h4>${resultText}</h4>
            <a class="game-continue-button grow" href="direction.html"></a>
            <a class="start-over-button grow" href="choose-ship.html"></a>
            <a class="ending-button grow" href="ending.html"></a>
        </div>
    `;
};

export default class GetSnacksApp {
    constructor() {
        this.user = api.getUser();
    }

    render() {
        let user = this.user;
        let choiceNumber = user.choices.length;

        let randomNum = Math.random() * 10;

        let resultText;

        if(randomNum <= 8) {
            resultText = 'You won big! You have enough snack fuel to continue.';
        } else {
            resultText = 'You gambled your ship and lost. You will have to start the game again.';
        }

        let dom = template(resultText);
        let resultsButton = dom.querySelector('.results-button');
        let continueButton = dom.querySelector('.game-continue-button');
        let endingButton = dom.querySelector('.ending-button');
        let startOverButton = dom.querySelector('.start-over-button');
        let gameResults = dom.querySelector('.game-results');

        resultsButton.addEventListener('click', () => {
            
            if(randomNum <= 8) {
                if(choiceNumber < 3) {
                    continueButton.style.display = 'block';
                    gameResults.style.display = 'block';
                    endingButton.style.display = 'none';
                    startOverButton.style.display = 'none';
                    resultsButton.style.display = 'none';
                } 
                else {
                    endingButton.style.display = 'block';
                    gameResults.style.display = 'block';
                    continueButton.style.display = 'none';
                    startOverButton.style.display = 'none';
                    resultsButton.style.display = 'none';
                }
            } else {
                startOverButton.style.display = 'block';
                gameResults.style.display = 'block';
                continueButton.style.display = 'none';
                resultsButton.style.display = 'none';
            }

        });

        return dom;
    }
}