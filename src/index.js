import 'normalize.css';
import './index.css';

import {loadHome} from './home/homePage.js';
import {loadAbout} from './about/aboutPage.js';
import {loadMenu} from './menu/menuPage.js';

const container = document.querySelector('#container');
function emptyContainer() {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
const homeButton = document.querySelector('button#home');
const aboutButton = document.querySelector('button#about');
const menuButton = document.querySelector('button#menu');

homeButton.addEventListener('click', () => {
    homeButton.style = 'background-color: #9e5b1c;';
    aboutButton.style = 'background-color: #523519ea;';
    menuButton.style = 'background-color: #523519ea;';
    emptyContainer();
    loadHome();
});
aboutButton.addEventListener('click', () => {
    aboutButton.style = 'background-color: #9e5b1c;';
    homeButton.style = 'background-color: #523519ea;';
    menuButton.style = 'background-color: #523519ea;';
    emptyContainer();
    loadAbout();
});
menuButton.addEventListener('click', () => {
    menuButton.style = 'background-color: #9e5b1c;';
    homeButton.style = 'background-color: #523519ea;';
    aboutButton.style = 'background-color: #523519ea;';
    emptyContainer();
    loadMenu();
});

loadHome();
homeButton.style = 'background-color: #9e5b1c;';