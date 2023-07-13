function pageLoad() {
    const content = document.getElementById('content');

    const title = document.createElement('h1');
    title.textContent = "Le Pizz";

    const blurb = document.createElement('p');
    blurb.textContent = "This is the best Restaurant";

    const backImage = document.createElement('img');
    backImage.src = '/assets/pizza.jpg';

    content.appendChild(title);
    content.appendChild(blurb);
    content.appendChild(backImage);
}

export default pageLoad;