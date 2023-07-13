import pageLoad from "./pageLoad";
import homeLoad from "./pages/home";
import menuLoad from "./pages/menu";

function wipeContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
};

const menuTab = document.querySelector('button');

menuTab.addEventListener('click', () => {
    wipeContent();
    menuLoad();
});

pageLoad();
homeLoad();