function menuLoad() {
    const content = document.getElementById('content');

    const container = document.createElement('div');
    container.id = 'container';

    const title = document.createElement('h1');
    title.textContent = "Food";

    const blurb = document.createElement('p');
    blurb.textContent = "THis is made with tomatoes";

    container.appendChild(title);
    container.appendChild(blurb);

    content.appendChild(container);
}

export default menuLoad;