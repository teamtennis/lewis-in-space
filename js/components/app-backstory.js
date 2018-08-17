import html from '../html.js';

let template = function() {
    return html`   
        <section>           
            <a href="choose-ship.html" class="begin-button">
            <img src="img/beginbutton.png" width="20%"/> </a>
            <audio id="star-wars-theme" src="music/starwars.mp3" loop="loop"></audio>
        </section>
    `;
};

export default class BackstoryApp {
 
    render() {
        let dom = template();
        let audio = dom.querySelector('audio');

        window.onload = function() {
            audio.play();
        };

        
        return dom;
    }
}