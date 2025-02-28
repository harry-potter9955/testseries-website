let menu=document.getElementById('menu-btn');
let box=document.querySelector('.box');
let btn=document.querySelector('.btn');
let theme=document.getElementById('theme');
let main =document.querySelector('.main');
const anchor=document.querySelectorAll('.myanchor');
let about=document.getElementById('about');
let main2=document.querySelector('.mysection1');
let main3=document.querySelector('.mysection2');
let main4=document.querySelector('.mysection3');
menu.onclick = () => {
    // box.style.display='flex';
    box.style.top='-1px';
    box.paddingBottom='10px';
}  
main.onclick = () => {
    box.style.top='-185px'; 
    menu.style.display='block'
}
for (let i = 0; i < anchor.length; i++) {
    anchor[i].onclick = () => {
        box.style.top='-185px';
        menu.style.display='block'
    }
    }
about.addEventListener('click', toggleTheme)
// }
main2.onclick = () => {
    box.style.top='-185px';
    menu.style.display='block' 
}
main3.onclick = () => {
    box.style.top='-185px'; 
    menu.style.display='block'
}
main4.onclick = () => {
    box.style.top='-185px'; 
    menu.style.display='block'
}
function toggleTheme() {
    let theme = document.getElementById('theme');
    if (theme.getAttribute('href') == 'style.css') {
        theme.setAttribute('href', 'dark.css');
        document.querySelector('#night').className='fa-regular fa-sun';
    } else {
        theme.setAttribute('href', 'style.css');
        document.querySelector('#night').className='fas fa-moon';
    }
}
