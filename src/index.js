import 'normalize.css';
import './style.css';

import {loadHome} from './homePage.js';
import {loadAbout} from './aboutPage.js';

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