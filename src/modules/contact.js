const createContactSection = function () {
    const contact = document.createElement('section');
    contact.classList.add('contact', 'tabPanel')
    contact.setAttribute('id', 'contact')

    const header = document.createElement('h1');
    header.classList.add('heading');
    header.innerHTML = `<span>contact</span> us`

    ///////////////////////////////////////////////////

    const row = document.createElement('div');
    row.classList.add('row');

    const map = document.createElement('iframe');
    map.classList.add('map');
    map.src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4854.788703251148!2d-79.48971222969561!3d43.65493730759945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b368c27e73377%3A0x7547a3ca2a1c7dc2!2sGolden%20Gecko%20Coffee!5e0!3m2!1sen!2sca!4v1645114579306!5m2!1sen!2sca`
    map.setAttribute('allowFullScreen', '')
    map.setAttribute('loading', 'lazy')

    ///////////////////

    const form = document.createElement('form');
    const h3 = document.createElement('h3');
    h3.innerText = 'get in touch';

    const inputBox1 = document.createElement('div');
    inputBox1.classList.add('inputBox')
    const input1 = document.createElement('input');
    input1.type = 'text'
    input1.placeholder = 'Name'
    const userIcon1 = document.createElement('span');
    userIcon1.classList.add('fas', 'fa-user');
    inputBox1.append(userIcon1, input1)

    const inputBox2 = document.createElement('div');
    inputBox2.classList.add('inputBox')
    const input2 = document.createElement('input');
    input2.type = 'email'
    input2.placeholder = 'Email'
    const userIcon2 = document.createElement('span');
    userIcon2.classList.add('fas', 'fa-envelope');
    inputBox2.append(userIcon2, input2)

    const inputBox3 = document.createElement('div');
    inputBox3.classList.add('inputBox')
    const input3 = document.createElement('input');
    input3.type = 'number'
    input3.placeholder = 'Number'
    const userIcon3 = document.createElement('span');
    userIcon3.classList.add('fas', 'fa-phone');
    inputBox3.append(userIcon3, input3)

    const inputBox4 = document.createElement('input');
    inputBox4.classList.add('btn');
    inputBox4.type = 'submit';
    inputBox4.value = 'contact now';

    form.append(h3, inputBox1, inputBox2, inputBox3, inputBox4);

    ///////////////////

    row.append(map, form);

    ///////////////////////////////////////////////////

    contact.append(header, row)

    return contact;
}

function loadContact() {
    const content = document.getElementById('content');
    const contactSection = createContactSection();

    content.appendChild(contactSection);
}

export default loadContact;