function homeLoad() {
    const content = document.getElementById('content');

    const homeContent = document.createElement('div');
    homeContent.classList = 'homeContent';

    const title = document.createElement('h1');
    title.textContent = "Le Pizz";

    const blurb = document.createElement('p');
    blurb.textContent = "This is the best Restaurant";

    homeContent.appendChild(title);
    homeContent.appendChild(blurb);

    content.appendChild(homeContent);
}

export default homeLoad;