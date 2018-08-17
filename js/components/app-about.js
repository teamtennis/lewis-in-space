import html from '../html.js';

let template = function() {
    return html` 
    <section class="about-crew">
        <div id="sarah" class="crew">
                <img src="img/sarah-about.png" alt="sarah-image">
                <p>Favorite Dog: Goldendoodle <br>
                    Favorite Sci Fi Series: Battlestar Galactica <br>
                    Fun Fact: Tone Deaf Whistler.
                </p>
            </div>
            
            <div id="mike" class="crew">
                <img src="img/mike-about.png" alt="mike-image">
                <p>Favorite Dog: Dachshund <br>
                    Favorite Sci Fi Series: Futurama <br>
                    Fun Fact: Can Whistle.<br>
                </p>
            </div>
            
            <div id="sophie" class="crew">
                <img src="img/sophie-about.png" alt="sophie-image">
                <p>Favorite Dog: Air Bud <br>
                    Favorite Sci Fi Series: Star Trek Next Gen <br>
                    Fun Fact: Can't whistle. <br>
                </p>
            </div>

            <div id="alex" class="crew">
                <img src="img/alex-about.png" alt="alex-image">
                <p>Favorite Dog: His boxer, Maude<br>
                    Favorite Sci Fi Series: Star Wars <br>
                    Fun Fact: Once traveled to Whistler, BC.
                </p>
            </div>
        </section> 

        <section>                    
            <a href="choose-ship.html" class="play-again">
            <img src="img/play-again.png" width="20%"/> 
        </section>
    `;
};

export default class AboutApp {

    render() {
        let dom = template();
        return dom;
    }
}