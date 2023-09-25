burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
rightNav = document.querySelector('.right-Nav');

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav-resp');
    navList.classList.toggle('nav-d-resp');
    rightNav.classList.toggle('nav-d-resp');
});

