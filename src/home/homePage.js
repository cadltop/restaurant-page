import './homeStyle.css';

const loadHome = function() {
    const container = document.querySelector('#container');;
    
    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');
    
    const headline = document.createElement('h1');
    headline.innerHTML = 'Restaurant Page';
    
    const description = document.createElement('p');
    description.innerHTML = 'When friends share a meal together, the atmosphere becomes electric, <br> ' +
                'and the conversation flows as easily as the wine we recommend. <br>' +
                'The aromas of our freshly baked bread and slow-cooked sauces <br>mingle with ' +
                'the laughter and chatter, creating an unforgettable <br>experience that leaves a lasting impression.';
    
    const scheduleTitle = document.createElement('h2');
    scheduleTitle.innerHTML = 'Schedule';
    
    const scheduleInfo = document.createElement('p');
    scheduleInfo.innerHTML = 'Monday to Saturday, 8AM - 9PM';

    textContainer.appendChild(headline);
    textContainer.appendChild(description);
    textContainer.appendChild(scheduleTitle);
    textContainer.appendChild(scheduleInfo);

    container.appendChild(textContainer);
};

export {loadHome};