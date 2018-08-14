let userScore = 0;
let userChoices = [];


let ships = [{ 
    name: 'rocket',
    img: '../../img/rocket-placeholder.jpg'    
    
}, {
    name: 'ufo',
    img: '../../img/ufo-placeholder.png'    
}];

let arrows = [{
    name: 'left',
    img: '../../img/left-arrow.png'
}, {
    name: 'right',
    img: '../../img/right-arrow.png'
}, {
    name: 'up',
    img: '../../img/up-arrow.png'
}];

let storyEvents = [{
    title: 'Space Pirates',
    text: 'story text',
    img: '../../img/event1-placeholder.jpg',  
    choice0a: 'this is your first choice',
    choice0b: 'this is your second choice',
    buttonText0a: 'Pick me',
    buttonText0b: 'No, pick me',
    choice0aResult: 'this is what happens when you choose choice 1',
    choice0bResult: 'this is what happens when you choose choice 2'
}];

let backstory = [{
    gameName: 'Lewis in Space',
    episode: 'IV',
    text: 'insert text here'
}];

let storyEndings = [{
    img: '../../img/good-planet-placeholder',
    status: 'you are home',
    text: 'this is the story of your ending'
}];

export default{
    getEvents: function() {
        return storyEvents;
    },
    
    userScore: function() {
        return userScore;
    },

    userChoices: function() {
        return userChoices;
    }
};