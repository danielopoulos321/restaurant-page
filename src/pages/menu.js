function menuLoad() {
    const content = document.getElementById('content');

    const menuContent = document.createElement('div');
    menuContent.classList = 'menuContent';

    const title = document.createElement('h1');
    title.textContent = "Food";

    const blurb = document.createElement('p');
    blurb.textContent = "THis is made with tomatoes";

    menuContent.appendChild(title);
    menuContent.appendChild(blurb);

    content.appendChild(menuContent);
}

export default menuLoad;