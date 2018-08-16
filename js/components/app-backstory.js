import html from '../html.js';
// import api from '../services/api.js';

let template = function() {
    return html`   
        <section>           
            <a href="choose-ship.html" class="begin-button">
                <img src="img/beginbutton.png" width="20%"/> 
                
            <audio src="music/starwars.mp3" autoplay>
               
            </audio>

        </section>
    `;
};

export default class BackstoryApp {
 
    render() {
        let dom = template();
        let audio = dom.querySelector('.star-wars-theme');
        // audio.autoplay = true;
        audio.onMouseMove = function() {
            audio.play();
        };
        return dom;
    }
}