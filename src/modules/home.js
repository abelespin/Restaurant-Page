const createHomeSection = function () {
    const home = document.createElement('section');
    home.classList.add('home', 'tabPanel')
    home.setAttribute('id', 'home')

    const content = document.createElement('div');
    content.classList.add('content');
    home.appendChild(content);

    const header = document.createElement('h3');
    header.innerText = 'fresh coffee in the morning';

    const paragraph = document.createElement('p');
    paragraph.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt corrupti quo officia debitis aliquid doloribus.'

    const actionBtn = document.createElement('a');
    actionBtn.classList.add('btn');
    actionBtn.href = ('#');
    actionBtn.innerText = "get your's now";

    content.append(header, paragraph, actionBtn);
    return home;
}

function loadHome() {
    const content = document.getElementById('content');
    const homeSection = createHomeSection();

    content.appendChild(homeSection);
}

export default loadHome;