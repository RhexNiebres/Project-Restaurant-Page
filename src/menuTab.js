export default function loadMenu(content) {
    const menuDiv = document.createElement('div');
    menuDiv.className = 'menu';
    menuDiv.innerHTML= `
        <h2>Menu</h2>
        <p>We are a company that offers exceptional services to help you succeed. Our mission is to provide you with top-notch solutions tailored to meet your needs.</p>
    `;
    content.appendChild(menuDiv);
}