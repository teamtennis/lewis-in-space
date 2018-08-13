let userScore = 0;

let ships = [{ 
    name: 'rocket',
    img: '../../img/rocket-placeholder.jpg'    
    
}, {
    name: 'ufo',
    img: '../../img/ufo-placeholder.png'    
}];

let storyEvents = [{
    title: 'Space Pirates',
    text: 'story text',
    img: '../../img/event1-placeholder.jpg',  
    choice1: 'this is your first choice',
    choice2: 'this is your second choice',
    buttonText1: 'Pick me',
    buttonText2: 'No, pick me'
}];

let backstory = [{
    gameName: 'Lewis in Space',
    episode: 'IV',
    text: 'insert text here'
}];

let storyEndings = [{
    status: 'you are home',
    text: 'this is the story of your ending',
}];

export default{
    getEvents: function() {
        return storyEvents;
    }
};