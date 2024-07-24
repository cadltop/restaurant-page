import 'normalize.css';
import './index.css';

import {loadHome} from './home/homePage.js';
import {loadAbout} from './about/aboutPage.js';
import {loadMenu} from './menu/menuPage.js';

loadHome();

const container = document.querySelector('#container');
function emptyContainer() {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

document.querySelector('button#home').addEventListener('click', () => {
    emptyContainer();
    loadHome();
});
document.querySelector('button#about').addEventListener('click', () => {
    emptyContainer();
    loadAbout();
});
document.querySelector('button#menu').addEventListener('click', () => {
    emptyContainer();
    loadMenu();
});