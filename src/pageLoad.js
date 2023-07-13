import './styles.css';

function pageLoad() {
    //Get Master Div
    const page = document.getElementById('page');

    //Create Header Div + 2 Children
    const header = document.createElement('div');
    header.classList.add('header');

    const logo = document.createElement('h1');
    logo.textContent = 'Le Pizz';
    logo.classList.add('logo');

    const tabs = document.createElement('div');
    tabs.classList.add('tabs');

    //Buttons for each tab
    const homeTab = document.createElement('button');
    homeTab.classList.add('tab');
    homeTab.id = 'home';
    homeTab.textContent = 'Home';

    const menuTab = document.createElement('button');
    menuTab.classList.add('tab');
    menuTab.id = 'menu';
    menuTab.textContent = 'Menu';

    const contactTab = document.createElement('button');
    contactTab.classList.add('tab');
    contactTab.id = 'contact';
    contactTab.textContent = 'Contact';

    //Create Content div for tab loading
    const content = document.createElement('div');
    content.classList.add('content');

    //Append all Elements in order
    tabs.appendChild(homeTab);
    tabs.appendChild(menuTab);
    tabs.appendChild(contactTab);

    header.appendChild(logo);
    header.appendChild(tabs);

    page.appendChild(header);
    page.appendChild(content);
}

export default pageLoad;