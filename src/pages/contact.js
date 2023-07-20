function contactLoad() {
    const content = document.getElementById('content');

    const container = document.createElement('div');
    container.id = 'container';
    container.classList.add('container');
    container.classList.add('column');

    const title = document.createElement('h1');
    title.textContent = "Contact";

    const blurb = document.createElement('p');
    blurb.textContent = "Tel: 450-420-6969";

    const map = document.createElement('iframe');
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1399.702439607747!2d-73.44075162453375!3d45.44149670684065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc90f488fd1a23d%3A0x47cc8e81c213f46c!2sBrossard%2C%20QC%20J4Y%200E7!5e0!3m2!1sen!2sca!4v1689867348354!5m2!1sen!2sca";
    map.width = "400";
    map.height = "300";
    map.style.border = "0";
    map.allowFullscreen = true;
    map.loading = "lazy";
    map.referrerPolicy = "no-referrer-when-downgrade";

    container.appendChild(title);
    container.appendChild(blurb);
    container.appendChild(map);

    content.appendChild(container);
}

export default contactLoad;

