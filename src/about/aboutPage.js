import './aboutStyle.css';

const loadAbout = function() {
    const container = document.querySelector('#container');

    const content = document.createElement('div');
    content.classList.add('content');
    
    const headline = document.createElement('h1');
    headline.innerHTML = 'Contact Us';
    

    const textWrap = document.createElement('div');
    textWrap.classList.add('text-wrap');

    (function phoneNumber() {
        const phoneLine = document.createElement('p');
        phoneLine.classList.add('phone');

        const phoneIcon = document.createElement('img');
        phoneIcon.src = '../images/cellphone.svg';
        phoneIcon.alt = 'Cellphone Icon';
        phoneLine.appendChild(phoneIcon);

        const phoneLineSpan = document.createElement('span');
        phoneLineSpan.innerHTML = 'Phone: ';
        phoneLine.appendChild(phoneLineSpan);
        
        phoneLine.append('6666-6666');
        textWrap.appendChild(phoneLine);
    })();

    (function emailAdress() {
        const emailLine = document.createElement('p');
        emailLine.classList.add('email');

        const emailIcon = document.createElement('img');
        emailIcon.src = '../images/email.svg';
        emailIcon.alt = 'Email Icon';
        emailLine.appendChild(emailIcon);

        const emailLineSpan = document.createElement('span');
        emailLineSpan.innerHTML = 'Email: ';
        emailLine.appendChild(emailLineSpan);

        emailLine.append('restaurant.page@email.com');
        textWrap.appendChild(emailLine);
    })();

    const locationTitle = document.createElement('h2');
    locationTitle.innerHTML = 'Location';
    
    const locationInfo = document.createElement('p');
    locationInfo.classList.add('location');

    const locationIcon = document.createElement('img');
    locationIcon.src = '../images/map-marker.svg';
    locationIcon.alt = 'Location Icon';
    locationInfo.appendChild(locationIcon);
    
    locationInfo.append('Panama, Panama');

    content.appendChild(headline);
    content.appendChild(textWrap);
    content.appendChild(locationTitle);
    content.appendChild(locationInfo);
    container.appendChild(content);
}

export {loadAbout};