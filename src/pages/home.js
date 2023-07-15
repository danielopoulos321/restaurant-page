import Chef from '/src/assets/chef.jpeg';

function homeLoad() {
    const content = document.getElementById('content');

    const container = document.createElement('div');
    container.classList.add('container');
    container.classList.add('column');

    const title = document.createElement('h1');
    title.textContent = "Welcome to Le Pizz Pizzeria";

    const chef = new Image();
    chef.src = Chef;
    chef.id = 'chef';

    const blurb = document.createElement('h2');
    blurb.textContent = "Voted the best Pizza in Montreal, 10 years in a row";

    container.appendChild(title);
    container.appendChild(chef);
    container.appendChild(blurb);
    content.appendChild(container);
}

export default homeLoad;