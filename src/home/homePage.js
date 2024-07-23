const loadHome = function() {
    const container = document.querySelector('#container');;
    
    const content = document.createElement('div');
    content.classList.add('content');
    
    const restaurantTitle = document.createElement('h1');
    restaurantTitle.innerHTML = 'Restaurant Page';
    
    const restaurantInfo = document.createElement('p');
    restaurantInfo.innerHTML = 'When friends share a meal together, the atmosphere becomes electric, <br> ' +
                'and the conversation flows as easily as the wine we recommend. <br>' +
                'The aromas of our freshly baked bread and slow-cooked sauces <br>mingle with ' +
                'the laughter and chatter, creating an unforgettable <br>experience that leaves a lasting impression.';
    
    const scheduleTitle = document.createElement('h2');
    scheduleTitle.innerHTML = 'Schedule';
    
    const scheduleInfo = document.createElement('p');
    scheduleInfo.innerHTML = 'Monday to Saturday, 8AM - 9PM';

    content.appendChild(restaurantTitle);
    content.appendChild(restaurantInfo);
    content.appendChild(scheduleTitle);
    content.appendChild(scheduleInfo);

    container.appendChild(content);
};

export {loadHome};