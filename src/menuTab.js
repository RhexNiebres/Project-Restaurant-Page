export default function loadMenu(content) {
    const menuDiv = document.createElement('div');
    menuDiv.className = 'menu';

    const section1 = document.createElement('div');
    section1.className = 'menuSection';
    section1.innerHTML =`
    <h1>MENU</h1>`;

    const section2 = document.createElement('div');
    section2.className = 'menuSection';
    section2.innerHTML =`
    <h1>Chicken Adobo</h1>
    <img src="images/adobo.webp" alt="A Chicken Adobo photo"/>
    <p>Adobo is a beloved Filipino dish known for its rich, savory flavors and tender meat.</p>
    <p>comes with 2pcs of rice</p>
    <p>Price: ₱250 </p>`;
    
    const section3 = document.createElement('div');
    section3.className = 'menuSection';
    section3.innerHTML =`
    <h1>Sinigang</h1>
    <img src="images/sinigang.webp" alt="A Sinigang photo"/>
    <p>Sinigang is a traditional Filipino sour soup that is beloved for its refreshing, tangy flavor.</p>
    <p>comes with 2pcs of rice</p>
    <p>Price: ₱300 </p>`;
    
    const section4 = document.createElement('div');
    section4.className = 'menuSection';
    section4.innerHTML =`
    <h1>Pancit</h1>
    <img src="images/Pancit.webp" alt="A Pancit photo">
    <p>a popular Filipino noodle dish that represents celebration and communal gatherings.</p>
    <p>comes with 3pcs of lumpia shanghai</p>
    <p>Price: ₱350 </p>`;


    menuDiv.appendChild(section1);
    menuDiv.appendChild(section2);
    menuDiv.appendChild(section3);
    menuDiv.appendChild(section4);

    content.appendChild(menuDiv);
}