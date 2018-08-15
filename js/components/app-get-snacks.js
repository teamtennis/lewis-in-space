import html from '../html.js';
// import api from '../services/api.js';

let template = function(resultText) {
    return html`   
        <p>Lewis's space ship runs on snack fuel and he no longer has enough snacks to continue on his journey. He is a dog shark at the poker table, so he seeks out a nearby game, but no dog can win all the time. He bets the only thing he has, his ship. Click the button below to find out if Lewis wins enough snacks to continue his journey. </p>
        <img src="../../img/dog-poker-placeholder.png">
        <button class="results-button" type="submit">Get game results</button>
        <p class="game-results">${resultText}</p>
        <a class="game-continue-button" href="../../html/direction.html">Continue</a>
        <a class="start-over-button" href="../../html/choose-ship.html">Start Over</a>
        `;
};

export default class GetSnacksApp {

    render() {
        function randomNumber() {
            return (Math.random() * 10);
        }
        let randomNum = randomNumber();

        let resultText;

        if(randomNum <= 5) {
            resultText = 'You won big and now have enough snack fuel to continue your journey';
        } else {
            resultText = 'You gambled your ship and lost. You will have to start again from the beginning.';
        }

        let dom = template(resultText);
        let resultsButton = dom.querySelector('.results-button');
        let continueButton = dom.querySelector('.game-continue-button');
        let startOverButton = dom.querySelector('.start-over-button');
        let gameResults = dom.querySelector('.game-results');

        console.log('random', randomNum);

        resultsButton.addEventListener('click', () => {
            
            if(randomNum <= 5) {
                continueButton.style.display = 'inline-block';
                startOverButton.style.display = 'none';
                gameResults.style.display = 'block';
                resultsButton.style.display = 'none';
            } else {
                continueButton.style.display = 'none';
                startOverButton.style.display = 'inline-block';
                gameResults.style.display = 'block';
                resultsButton.style.display = 'none';
            }

        });

        return dom;
    }
}