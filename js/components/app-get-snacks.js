import html from '../html.js';
import api from '../services/api.js';

let template = function(resultText) {
    return html`   
        <p>Lewis's space ship runs on snack fuel and he no longer has enough snacks to continue on his journey. He is a dog shark at the poker table, so he seeks out a nearby game, but no dog can win all the time. He bets the only thing he has, his ship. Click the button below to find out if Lewis wins enough snacks to continue his journey. </p>
        <img src="img/dog-poker-placeholder.png">
        <button class="results-button" type="submit">Get game results</button>
        <p class="game-results">${resultText}</p>
        <a class="game-continue-button" href="direction.html">Continue</a>
        <a class="start-over-button" href="choose-ship.html">Start Over</a>
        <a class="ending-button" href="ending.html">Continue</a>
        `;
};

export default class GetSnacksApp {
    constructor() {
        this.user = api.getUser();
    }

    render() {
        let user = this.user[0];
        let choiceNumber = user.choices.length;

        function randomNumber() {
            return (Math.random() * 10);
        }
        let randomNum = randomNumber();

        let resultText;

        if(randomNum <= 8) {
            resultText = 'You won big and now have enough snack fuel to continue your journey';
        } else {
            resultText = 'You gambled your ship and lost. You will have to start again from the beginning.';
        }

        let dom = template(resultText);
        let resultsButton = dom.querySelector('.results-button');
        let continueButton = dom.querySelector('.game-continue-button');
        let endingButton = dom.querySelector('.ending-button');
        let startOverButton = dom.querySelector('.start-over-button');
        let gameResults = dom.querySelector('.game-results');

        console.log('choice number', choiceNumber);



        console.log('random', randomNum);

        resultsButton.addEventListener('click', () => {
            
            if(randomNum <= 8) {
                if(choiceNumber < 3) {
                    continueButton.style.display = 'block';
                    endingButton.style.display = 'none';
                    startOverButton.style.display = 'none';
                    gameResults.style.display = 'block';
                    resultsButton.style.display = 'none';
                } 
                else {
                    continueButton.style.display = 'none';
                    endingButton.style.display = 'block';
                    startOverButton.style.display = 'none';
                    gameResults.style.display = 'block';
                    resultsButton.style.display = 'none';
                }
            } else {
                continueButton.style.display = 'none';
                startOverButton.style.display = '';
                gameResults.style.display = 'block';
                resultsButton.style.display = 'none';
            }

        });

        return dom;
    }
}