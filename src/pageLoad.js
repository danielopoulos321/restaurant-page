import './styles.css';

function pageLoad() {
    const content = document.getElementById('content');

    const backImage = document.createElement('img');
    backImage.src = '/assets/pizza.jpg';

    content.appendChild(backImage);
}

export default pageLoad;