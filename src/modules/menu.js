import menuItem1 from "../images/menu-1.png";
import menuItem2 from "../images/menu-2.png";
import menuItem3 from "../images/menu-3.png";
import menuItem4 from "../images/menu-4.png";
import menuItem5 from "../images/menu-5.png";
import menuItem6 from "../images/menu-6.png";

const createMenuSection = function () {
    const menu = document.createElement('section');
    menu.classList.add('menu', 'tabPanel')
    menu.setAttribute('id', 'menu')

    const heading = document.createElement('h1');
    heading.classList.add('heading');
    heading.innerHTML = `our <span>menu</span>`

    ///////////////////////////////////////////////////

    const boxContainer = document.createElement('div');
    boxContainer.classList.add('box-container');

    ///////////////////////////////////////////////////

    const box1 = document.createElement('div');
    box1.classList.add('box');

    const img1 = document.createElement('img');
    img1.src = menuItem1;

    const header1 = document.createElement('h3');
    header1.innerText = 'tasty and healthy';

    const price1 = document.createElement('div');
    price1.classList.add('price');
    price1.innerHTML = `$15.99 <span>20.99</span>`;

    const button1 = document.createElement('a');
    button1.href = '#';
    button1.classList.add('btn');
    button1.innerText = 'add to cart';

    box1.append(img1, header1, price1, button1)

    ///////////////////

    const box2 = document.createElement('div');
    box2.classList.add('box');

    const img2 = document.createElement('img');
    img2.src = menuItem2;

    const header2 = document.createElement('h3');
    header2.innerText = 'tasty and healthy';

    const price2 = document.createElement('div');
    price2.classList.add('price');
    price2.innerHTML = `$15.99 <span>20.99</span>`;

    const button2 = document.createElement('a');
    button2.href = '#';
    button2.classList.add('btn');
    button2.innerText = 'add to cart';

    box2.append(img2, header2, price2, button2)

    ///////////////////

    const box3 = document.createElement('div');
    box3.classList.add('box');

    const img3 = document.createElement('img');
    img3.src = menuItem3;

    const header3 = document.createElement('h3');
    header3.innerText = 'tasty and healthy';

    const price3 = document.createElement('div');
    price3.classList.add('price');
    price3.innerHTML = `$15.99 <span>20.99</span>`;

    const button3 = document.createElement('a');
    button3.href = '#';
    button3.classList.add('btn');
    button3.innerText = 'add to cart';

    box3.append(img3, header3, price3, button3)

    ///////////////////

    const box4 = document.createElement('div');
    box4.classList.add('box');

    const img4 = document.createElement('img');
    img4.src = menuItem4;

    const header4 = document.createElement('h3');
    header4.innerText = 'tasty and healthy';

    const price4 = document.createElement('div');
    price4.classList.add('price');
    price4.innerHTML = `$15.99 <span>20.99</span>`;

    const button4 = document.createElement('a');
    button4.href = '#';
    button4.classList.add('btn');
    button4.innerText = 'add to cart';

    box4.append(img4, header4, price4, button4)

    ///////////////////

    const box5 = document.createElement('div');
    box5.classList.add('box');

    const img5 = document.createElement('img');
    img5.src = menuItem5;

    const header5 = document.createElement('h3');
    header5.innerText = 'tasty and healthy';

    const price5 = document.createElement('div');
    price5.classList.add('price');
    price5.innerHTML = `$15.99 <span>20.99</span>`;

    const button5 = document.createElement('a');
    button5.href = '#';
    button5.classList.add('btn');
    button5.innerText = 'add to cart';

    box5.append(img5, header5, price5, button5)

    ///////////////////

    const box6 = document.createElement('div');
    box6.classList.add('box');

    const img6 = document.createElement('img');
    img6.src = menuItem6;

    const header6 = document.createElement('h3');
    header6.innerText = 'tasty and healthy';

    const price6 = document.createElement('div');
    price6.classList.add('price');
    price6.innerHTML = `$15.99 <span>20.99</span>`;

    const button6 = document.createElement('a');
    button6.href = '#';
    button6.classList.add('btn');
    button6.innerText = 'add to cart';

    ///////////////////

    box6.append(img6, header6, price6, button6)
    boxContainer.append(box1, box2, box3, box4, box5, box6)

    ///////////////////////////////////////////////////

    menu.append(heading, boxContainer)

    return menu;
}

function loadHome() {
    const content = document.getElementById('content');
    const menuSection = createMenuSection();

    content.appendChild(menuSection);
}

export default loadHome;