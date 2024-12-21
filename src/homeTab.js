export default function loadHome(content) {
    const homeDiv = document.createElement('div');
    homeDiv.className = 'home';

    const section1 = document.createElement('div');
    section1.className = 'homeSection';
    section1.innerHTML =`
    <h1>Ciri's Resto</h1>
    <p>Welcome to Ciri's Resto</p>
    <p>At Ciri's Resto, we believe that great food brings people together. Whether you’re here for a family gathering, a romantic dinner, or a quick bite with friends, we aim to create an unforgettable dining experience for everyone. </p>`;

    const section2 = document.createElement('div');
    section2.className = 'homeSection';
    section2.innerHTML =`
    <h2>OPEN HOURS</h2>
    <ul>
        <li>monday to sunday</li>
        <li>9AM - 11PM</li>
    </ul>`;
    
    const section3 = document.createElement('div');
    section3.className = 'homeSection';
    section3.innerHTML =`
    <h2>Location</h2>
    <p>123 Maine drive, ForestVille </p>`;
    
    homeDiv.appendChild(section1);
    homeDiv.appendChild(section2);
    homeDiv.appendChild(section3);

    content.appendChild(homeDiv);
}