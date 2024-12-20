export default function loadHome(content) {
    const homeDiv = document.createElement('div');
    homeDiv.className = 'home';

    const section1 = document.createElement('div');
    section1.className = 'section';
    section1.innerHTML =`
    <h1>ciri's resto</h1>
    <p>Here to serve you the best filipino food cuisine's</p>`;

    const section2 = document.createElement('div');
    section2.className = 'section';
    section2.innerHTML =`
    <h2>OPEN HOURS</h2>
    <ul>
        <li>monday to sunday</li>
        <li>9AM - 11PM</li>
    </ul>`;
    
    const section3 = document.createElement('div');
    section3.className = 'section';
    section3.innerHTML =`
    <h2>Location</h2>
    <p>123 Maine drive, ForestVille </p>`;
    
    homeDiv.appendChild(section1);
    homeDiv.appendChild(section2);
    homeDiv.appendChild(section3);

    content.appendChild(homeDiv);
}