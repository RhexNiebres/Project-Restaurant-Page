
import loadHome from './homeTab.js';
import loadAbout from './aboutTab.js';
import loadMenu from './menuTab.js';

const content = document.getElementById('content');

const homeTab = document.getElementById('homeTab');
homeTab.addEventListener('click',()=>{
    content.textContent='';
    loadHome(content)
});

const aboutTab = document.getElementById('aboutTab');
aboutTab.addEventListener('click',()=>{
    content.textContent='';
    loadAbout(content)
});

const menuTab = document.getElementById('menuTab');
menuTab.addEventListener('click',()=>{
    content.textContent='';
    loadMenu(content)
});


document.addEventListener('DOMContentLoaded', () => { 
loadHome(content);
});
//load home content by defualt