// 1-09-2021

const body = document.getElementsByTagName('body')[0];

// create element for phone and mobile menu
const cover = document.createElement('div');
cover.setAttribute('id', 'cover');

// add additional wrapper for click to cover
const header = document.getElementById('header');

// phone icon from nav
const phone = document.getElementById('phone');

// mobile phones
const phoneUl = phone.getElementsByTagName('ul')[0];

phone.addEventListener('click', () => {

    // insert cover and wiev mobile menu
    body.append(cover);

    // show mobile phones
    phoneUl.classList.add('active');

    // add class to #header
    header.classList.add('active');
});

// menu
const nav = document.getElementById('nav');

// mobile menu
const navUl = nav.getElementsByTagName('ul')[0];

// menu icon
const menu = document.createElement('div');
menu.setAttribute('id', 'menu');

// check resize
let flag = false;

mobileMenu();

window.addEventListener('resize', mobileMenu);

function mobileMenu(){
    if(window.innerWidth < 996){

        nav.append(menu);

        flag = true;
    } else {

        menu.remove();
        flag = false;
    }

}

menu.addEventListener('click', () => {

    // insert cover
    body.append(cover);

    // show mobile menu
    navUl.classList.add('active');

    // add class to #header
    header.classList.add('active');
});

document.addEventListener('click', e => {

    if(e.target.id === 'cover' || e.target.id === 'header'){

        closeAll();
    }
});

document.addEventListener('keydown', e => {

    if(e.code === 'Escape' || e.key === 'Escape'){

        closeAll();
    }
});

function closeAll(){

    // delete cover
    cover.remove();

    // hide mobile menu
    navUl.classList.remove('active');

    // hide mobile phones
    phoneUl.classList.remove('active');
    
    //
    header.classList.remove('active');
}

// 2-09-2021