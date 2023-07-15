function contactLoad() {
    const content = document.getElementById('content');

    const container = document.createElement('div');
    container.id = 'container';

    const title = document.createElement('h1');
    title.textContent = "Contact";

    const blurb = document.createElement('p');
    blurb.textContent = "This is the phone number";

    container.appendChild(title);
    container.appendChild(blurb);

    content.appendChild(container);
}

export default contactLoad;