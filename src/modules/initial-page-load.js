import logoImage from "../images/logo.png";
import showPanel from "../index";
// import showPanel from '../index';

const createHeader = function () {
    const header = document.createElement('header');
    header.classList.add('header');

    ///////////////////////////////////////////////////

    const logoElement = document.createElement('a');
    logoElement.href = ('#');
    logoElement.classList.add('logo')

    const logo = document.createElement('img')
    logo.src = logoImage;
    logoElement.appendChild(logo)

    ///////////////////////////////////////////////////

    const navElement = document.createElement('nav');
    navElement.classList.add('navbar');

    const home = document.createElement('a')
    home.href = ('#home');
    home.innerText = "home"
    home.onclick = function () {
        showPanel(0)
    }
    navElement.appendChild(home);

    const about = document.createElement('a')
    about.href = ('#about');
    about.innerText = "About"
    about.onclick = function () {
        showPanel(1)
    }
    navElement.appendChild(about);

    const menu = document.createElement('a')
    menu.href = ('#menu');
    menu.innerText = 'Menu'
    menu.onclick = function () {
        showPanel(2)
    }
    navElement.appendChild(menu);

    const contact = document.createElement('a')
    contact.href = ('#contact');
    contact.innerText = 'Contact'
    contact.onclick = function () {
        showPanel(3)
    }
    navElement.appendChild(contact);

    ///////////////////////////////////////////////////

    const icons = document.createElement('div');
    icons.classList.add('icons');

    const searchBtn = document.createElement('div');
    searchBtn.classList.add('fas', 'fa-search')
    searchBtn.setAttribute('id', 'search-btn')

    const shoppingCartBtn = document.createElement('div');
    shoppingCartBtn.classList.add('fas', 'fa-shopping-cart')
    shoppingCartBtn.setAttribute('id', 'cart-btn')

    const menuBtn = document.createElement('div');
    menuBtn.classList.add('fas', 'fa-bars')
    menuBtn.setAttribute('id', 'menu-btn')

    icons.append(searchBtn, shoppingCartBtn, menuBtn)

    ///////////////////////////////////////////////////

    header.append(logoElement, navElement, icons);

    return header;
}

function loadPage() {
    const content = document.getElementById('content');

    const header = createHeader();
    content.appendChild(header);
}

export default loadPage;