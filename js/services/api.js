import data from './data.js';

let user = data.user;

if(!user) {
    data.user = createUser();
    user = data.user;
}

function createUser() {
    let data = [{
        score: 0,
        choices: [],
        path: []
    }];
    return data;
}
console.log('data', data);

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
    text: 'space pirate story text',
    img: '../../img/event1-placeholder.jpg',  
    choice0a: 'this is your first pirate choice',
    choice0b: 'this is your second pirate choice',
    buttonText0a: 'Pick me',
    buttonText0b: 'No, pick me',
    choice0aResult: 'choice 0a results text',
    choice0bResult: 'choice 0b results text'
}, {
    title: 'Asteroid',
    text: 'asteroid story text',
    img: '../../img/event2-placeholder.jpg',  
    choice1a: 'this is your first asteroid choice',
    choice1b: 'this is your second asteroid choice',
    buttonText1a: 'I am the one',
    buttonText1b: 'But I am the two',
    choice1aResult: 'choice 1a results text',
    choice1bResult: 'choice 1b results text'
}, {
    title: 'Some Other Story',
    text: 'some other story text',
    img: '../../img/event3-placeholder.jpg',  
    choice2a: 'this is your first other choice',
    choice2b: 'this is your second other choice',
    buttonText2a: 'Do not press this button',
    buttonText2b: 'Danger',
    choice2aResult: 'choice 2a results text',
    choice2bResult: 'choice 2b results text'
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

export default {
    getEvents: function() {
        return storyEvents;
    },
    
    getUser: function() {
        return user;
    },

};