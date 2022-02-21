const createFooterSection = function () {
    const footer = document.createElement('section');
    footer.classList.add('footer')
    footer.setAttribute('id', 'footer')

    const share = document.createElement('div');
    share.classList.add('share');

    const fb = document.createElement('a')
    fb.href = '#';
    fb.classList.add('fab', 'fa-facebook-f')

    const twitter = document.createElement('a')
    twitter.href = '#';
    twitter.classList.add('fab', 'fa-twitter')

    const instagram = document.createElement('a')
    instagram.href = '#';
    instagram.classList.add('fab', 'fa-instagram')

    const linkedin = document.createElement('a')
    linkedin.href = '#';
    linkedin.classList.add('fab', 'fa-linkedin')

    const pinterest = document.createElement('a')
    pinterest.href = '#';
    pinterest.classList.add('fab', 'fa-pinterest')

    share.append(fb, twitter, instagram, linkedin, pinterest);

    ///////////////////////////////////////////////////

    const links = document.createElement('div');
    links.classList.add('links');

    const home = document.createElement('a');
    home.href = '#';
    home.innerText = 'home';

    const about = document.createElement('a');
    about.href = '#';
    about.innerText = 'about';

    const menu = document.createElement('a');
    menu.href = '#';
    menu.innerText = 'menu';

    const products = document.createElement('a');
    products.href = '#';
    products.innerText = 'products';

    const review = document.createElement('a');
    review.href = '#';
    review.innerText = 'review';

    const contacts = document.createElement('a');
    contacts.href = '#';
    contacts.innerText = 'contacts';

    const blogs = document.createElement('a');
    blogs.href = '#';
    blogs.innerText = 'blogs';

    links.append(home, about, menu, products, review, contacts, blogs);

    ///////////////////////////////////////////////////

    const credits = document.createElement('div');
    credits.classList.add('credit')
    credits.innerHTML = `created by <span>abel espin</span> | all rights reserved`

    ///////////////////////////////////////////////////

    footer.append(share, links, credits);
    return footer;
}

function loadFooter() {
    const content = document.getElementById('content');
    const footerSection = createFooterSection();

    content.appendChild(footerSection);
}

export default loadFooter;