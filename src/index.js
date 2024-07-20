import 'normalize.css';
import './index.css';

import {loadHome} from './home/homePage.js';
import {loadAbout} from './about/aboutPage.js';

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