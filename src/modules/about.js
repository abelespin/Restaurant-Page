import aboutImg from "../images/about-img.jpeg";

const createAboutSection = function () {
    const about = document.createElement('section');
    about.classList.add('about', 'tabPanel')
    about.setAttribute('id', 'about')

    ///////////////////////////////////////////////////

    const header = document.createElement('h1');
    header.classList.add('heading');

    header.innerHTML = `<span>about</span> us`

    ///////////////////////////////////////////////////

    const row = document.createElement('div');
    row.classList.add('row');

    const imageDiv = document.createElement('div');
    imageDiv.classList.add('image')

    const img = document.createElement('img');
    img.src = aboutImg;

    imageDiv.appendChild(img);

    const content = document.createElement('div');
    content.classList.add('content');

    const h3 = document.createElement('h3');
    h3.innerText = 'what makes our coffee special?';

    const paragraph = document.createElement('p');
    paragraph.innerHTML = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa facere veniam perferendis reiciendis
    asperiores quibusdam non harum? Minima impedit sint eaque, non animi alias voluptate tempore hic
    labore, iste fuga.`

    const paragraph2 = document.createElement('p');
    paragraph2.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius, culpa voluptatum deserunt
    similique ipsa ratione pariatur sit nulla unde!`

    const button = document.createElement('a')
    button.href = '#';
    button.classList.add('btn');
    button.innerText = 'learn more';

    content.append(h3, paragraph, paragraph2, button);

    row.append(imageDiv, content);

    ///////////////////////////////////////////////////

    about.append(header, row);

    return about;
}

function loadAbout() {
    const content = document.getElementById('content');
    const aboutSection = createAboutSection();

    content.appendChild(aboutSection);
}

export default loadAbout; 