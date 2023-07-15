import pageLoad from "./pageLoad";
import homeLoad from "./pages/home";
import menuLoad from "./pages/menu";
import contactLoad from "./pages/contact";

pageLoad();

function wipeContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
};

const menuTab = document.getElementById('menu');
menuTab.addEventListener('click', () => {
    wipeContent();
    menuLoad();
});

const homeTab = document.getElementById('home');
homeTab.addEventListener('click', () => {
    wipeContent();
    homeLoad();
});

const contactTab = document.getElementById('contact');
contactTab.addEventListener('click', () => {
    wipeContent();
    contactLoad();
});

homeTab.click();