import html from '../html.js';

let template = function() {
    return html` 
        <section class="about-crew">
            <div id="sarah" class="crew">
                <img src="img/sarah-about.png" alt="sarah-image">
                <div class="crew-text">
                    <p><em>Favorite Dog:</em> Goldendoodle</p>
                    <p><em>Favorite Sci Fi Series:</em> Battlestar Galactica</p>
                    <p><em>Fun Fact:</em> Tone Deaf Whistler</p>
                </div>
            </div>
                
            <div id="mike" class="crew">
                <img src="img/mike-about.png" alt="mike-image">
                <div class="crew-text">
                    <p><em>Favorite Dog:</em> Dachshund</p>
                    <p><em>Favorite Sci Fi Series:</em> Futurama</p>
                    <p><em>Fun Fact:</em> Can Whistle</p>
                </div>
            </div>
                
            <div id="sophie" class="crew">
                <img src="img/sophie-about.png" alt="sophie-image">
                <div class="crew-text">
                    <p><em>Favorite Dog:</em> Air Bud</p>
                    <p><em>Favorite Sci Fi Series:</em> Star Trek Next Gen</p>
                    <p><em>Fun Fact:</em> Can't whistle</p>
                </div>
            </div>

            <div id="alex" class="crew">
                <img src="img/alex-about.png" alt="alex-image">
                <div class="crew-text">
                    <p><em>Favorite Dog:</em> His boxer, Maude</p>
                    <p><em>Favorite Sci Fi Series:</em> Star Wars</p>
                    <p><em>Fun Fact:</em> Once traveled to Whistler, BC</p>
                </div>
            </div>
        </section> 

        <section>                    
            <a href="choose-ship.html" class="play-again">
            <img class="play-again-button grow" src="img/play-again.png" width="30%"/> 
        </section>
    `;
};

export default class AboutApp {

    render() {
        let dom = template();
        return dom;
    }
}