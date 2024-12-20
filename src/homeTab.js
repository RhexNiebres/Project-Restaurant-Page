export default function loadHome(content) {
    const homeDiv = document.createElement('div');
    homeDiv.className = 'module';
    homeDiv.innerHTML = `
        <h2>About Us</h2>
        <p>We are a company that offers exceptional services to help you succeed. Our mission is to provide you with top-notch solutions tailored to meet your needs.</p>
    `;
    content.appendChild(aboutDiv);
}