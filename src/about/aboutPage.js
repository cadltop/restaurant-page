import './aboutStyle.css';

const loadAbout = function() {
    const container = document.querySelector('#container');
    
    const contactTitle = document.createElement('h1');
    contactTitle.innerHTML = 'Contact Us';
    
    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');

    (function phoneNumber() {
        const phoneLine = document.createElement('p');
        phoneLine.classList.add('phone');

        const phoneIcon = document.createElement('img');
        phoneIcon.src = '../images/icons/cellphone.svg';
        phoneIcon.alt = 'Cellphone Icon';
        phoneLine.appendChild(phoneIcon);

        const phoneLineSpan = document.createElement('span');
        phoneLineSpan.innerHTML = 'Phone: ';
        phoneLine.appendChild(phoneLineSpan);
        
        phoneLine.append('6666-6666');
        contactInfo.appendChild(phoneLine);
    })();

    (function emailAdress() {
        const emailLine = document.createElement('p');
        emailLine.classList.add('email');

        const emailIcon = document.createElement('img');
        emailIcon.src = '../images/icons/email.svg';
        emailIcon.alt = 'Email Icon';
        emailLine.appendChild(emailIcon);

        const emailLineSpan = document.createElement('span');
        emailLineSpan.innerHTML = 'Email: ';
        emailLine.appendChild(emailLineSpan);

        emailLine.append('restaurant.page@email.com');
        contactInfo.appendChild(emailLine);
    })();

    const locationTitle = document.createElement('h2');
    locationTitle.innerHTML = 'Location';
    
    const locationInfo = document.createElement('p');
    locationInfo.classList.add('location');

    const locationIcon = document.createElement('img');
    locationIcon.src = '../images/icons/map-marker.svg';
    locationIcon.alt = 'Location Icon';
    locationInfo.appendChild(locationIcon);
    
    locationInfo.append('Panama, Panama');

    container.appendChild(contactTitle);
    container.appendChild(contactInfo);
    container.appendChild(locationTitle);
    container.appendChild(locationInfo);
}

export {loadAbout};