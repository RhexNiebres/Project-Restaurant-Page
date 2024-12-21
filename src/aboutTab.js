export default function loadAbout(content) {
    const aboutDiv = document.createElement('div');
    aboutDiv.className = 'about';
    const section1 = document.createElement('div');
    section1.className = 'aboutSection';
    section1.innerHTML =`
    <h1>About Us</h1>`;

    const section2 = document.createElement('div');
    section2.className = 'aboutSection';
    section2.innerHTML =`
    <h1>Welcome to Ciri's Restaurant</h1>
    <p>we invite you to embark on a flavorful journey through the rich culinary heritage of the Philippines. 
    Established in 2024, our restaurant is a celebration of authentic Filipino cuisine, crafted with love and passion.</p>`;
    
    const section3 = document.createElement('div');
    section3.className = 'aboutSection';
    section3.innerHTML =`
    <h1>A Taste of Tradition</h1>
    <p>Our menu is a reflection of the diverse and vibrant food culture found in the Philippines. 
    From the savory delights of Adobo and the comforting warmth of Sinigang, to the abundant flavors of Pancit, 
    every dish is prepared using time-honored recipes and the finest ingredients.</p>`;
    
    const section4 = document.createElement('div');
    section4.className = 'aboutSection';
    section4.innerHTML =`
    <h1>Cultural Celebration</h1>
    <p>We are more than just a restaurant; we are a hub for cultural exchange. 
    Through our dishes, we aim to showcase the unique flavors and influences found in Filipino cooking—infused 
    with traditional spices, fresh ingredients, and a touch of creativity.</p>`;


    aboutDiv.appendChild(section1);
    aboutDiv.appendChild(section2);
    aboutDiv.appendChild(section3);
    aboutDiv.appendChild(section4);

    content.appendChild(aboutDiv);
}