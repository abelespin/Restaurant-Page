import loadHome from './modules/home';
import loadAbout from './modules/about';
import loadMenu from './modules/menu';
import loadContact from './modules/contact';
import loadFooter from './modules/footer';
import loadPage from './modules/initial-page-load';
import './style.css';

init();

const tabPanels = document.querySelectorAll(".tabPanel")

function showPanel(panelIndex) {
    tabPanels.forEach(function (node) {
        node.style.display = "none";
    });
    tabPanels[panelIndex].style.display = "";
};

showPanel(0)

function init() {
    loadPage();
    loadHome();
    loadAbout();
    loadMenu()
    loadContact()
    loadFooter()
};

export default showPanel;