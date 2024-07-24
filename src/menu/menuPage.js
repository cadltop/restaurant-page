import './menuStyle.css';

const loadMenu = function(){
    const container = document.querySelector('#container');

    const menuTitle = document.createElement('h1');
    menuTitle.innerHTML = 'Menu';
    container.appendChild(menuTitle);

    const beverageSection = makeSection('Beverages');
    const entreeSection = makeSection('Entrees');
    const mainDishSection = makeSection('Main Dishes');

    const beverageItems = makeItems(2, beverageSection);
    const entreeItems = makeItems(3, entreeSection);
    const mainDishItems = makeItems(4, mainDishSection);

    beverageItems[0][0].innerHTML = 'Blueberry and Ginger Hot Toddy';
    beverageItems[0][1].innerHTML = '5$';
    beverageItems[0][2].src = '../images/beverages/Blueberry_and_Ginger_Hot_Toddy.webp';
    beverageItems[0][2].alt = 'Blueberry and Ginger Hot Toddy';

    beverageItems[1][0].innerHTML = 'Old Fashioned Cherry';
    beverageItems[1][1].innerHTML = '5$';
    beverageItems[1][2].src = '../images/beverages/Old-Fashioned-Cherry.webp';
    beverageItems[1][2].alt = 'Old Fashioned Cherry';


    entreeItems[0][0].innerHTML = 'Avocado Crostini';
    entreeItems[0][1].innerHTML = '10$';
    entreeItems[0][2].src = '../images/entrees/AvocadoCrostini.webp';
    entreeItems[0][2].alt = 'Avocado Crostini';
    
    entreeItems[1][0].innerHTML = 'French Toast Bake';
    entreeItems[1][1].innerHTML = '10$';
    entreeItems[1][2].src = '../images/entrees/french_toast_bake.webp';
    entreeItems[1][2].alt = 'French Toast Bake';

    entreeItems[2][0].innerHTML = 'Idaho Eggs Benedict';
    entreeItems[2][1].innerHTML = '10$';
    entreeItems[2][2].src = '../images/entrees/idaho-eggs-benedict.webp';
    entreeItems[2][2].alt = 'Idaho Eggs Benedict';


    mainDishItems[0][0].innerHTML = 'Ballpark Fries';
    mainDishItems[0][1].innerHTML = '15$';
    mainDishItems[0][2].src = '../images/main-dishes/ballpark-fries.webp';
    mainDishItems[0][2].alt = 'Ballpark Fries';

    mainDishItems[1][0].innerHTML = 'BBQ Chicken Pizza';
    mainDishItems[1][1].innerHTML = '15$';
    mainDishItems[1][2].src = '../images/main-dishes/BBQ_Chicken_Pizza.webp';
    mainDishItems[1][2].alt = 'BBQ Chicken Pizza';

    mainDishItems[2][0].innerHTML = 'Cuban Sofrito Chicken Bowl';
    mainDishItems[2][1].innerHTML = '15$';
    mainDishItems[2][2].src = '../images/main-dishes/Cuban_Sofrito_Chicken_Bowl.webp';
    mainDishItems[2][2].alt = 'Cuban Sofrito Chicken Bowl';

    mainDishItems[3][0].innerHTML = 'Mediterranean Cauliflower Taco';
    mainDishItems[3][1].innerHTML = '15$';
    mainDishItems[3][2].src = '../images/main-dishes/Mediterranean_Cauliflower_Tacos.webp';
    mainDishItems[3][2].alt = 'Mediterranean Cauliflower Taco';

    function makeSection(name){
        const menuSection = document.createElement('div');
        menuSection.classList.add('section');
        const sectionTitle = document.createElement('h2');
        sectionTitle.innerHTML = name;

        menuSection.appendChild(sectionTitle);
        container.appendChild(menuSection);
        return menuSection;
    }
    function makeItems(amount, section){
        let itemsList = [];
        for(let i = 0; i < amount; i++){
            const sectionItem = document.createElement('div');
            sectionItem.classList.add('item');

            const itemTitle = document.createElement('h3');
            sectionItem.appendChild(itemTitle);
            const itemPrice = document.createElement('p');
            sectionItem.appendChild(itemPrice);
            const itemImage = document.createElement('img');
            sectionItem.appendChild(itemImage);

            section.appendChild(sectionItem);
            itemsList[i] = sectionItem.children;
        }
        return itemsList;
    }

}

export {loadMenu};