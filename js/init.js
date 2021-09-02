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

// check resize
let flag = false;

    // // check click phone or menu (test)
    // let click = false;

// check phone click
let clickPhone = false;

// check menu click
let clickMenu = false;

phone.addEventListener('click', () => {

    if(clickPhone === false && clickMenu === false){

        // insert cover and wiev mobile menu
        body.append(cover);

        // show mobile phones
        phoneUl.classList.add('active');

        clickPhone = true;
    } else if(clickPhone === false && clickMenu === true) {

        // show mobile phones
        phoneUl.classList.add('active');

        // hide mobile nav if open
        navUl.classList.remove('active');

        clickMenu = false;
        clickPhone = true;
    } else {
        
        // hide mobile phones
        phoneUl.classList.remove('active');

        // delete cover
        cover.remove();

        // set null
        clickPhone = false;
    }
});

// menu
const nav = document.getElementById('nav');

// mobile menu
const navUl = nav.getElementsByTagName('ul')[0];

// menu icon
const menu = document.createElement('div');
menu.setAttribute('id', 'menu');

mobileMenu();

window.addEventListener('resize', mobileMenu);

menu.addEventListener('click', () => {

    if(clickMenu === false && clickPhone === false){

        // insert cover and wiev mobile menu
        body.append(cover);

        // show mobile phones
        navUl.classList.add('active');

        clickMenu = true;
    } else if(clickMenu === false && clickPhone === true){

        // show mobile nav
        navUl.classList.add('active');

        // hide moblile phones
        phoneUl.classList.remove('active');

        clickPhone = false;
        clickMenu = true;
    } else {

        // hide mobile phones
        navUl.classList.remove('active');

        // delete cover
        cover.remove();

        // set null
        clickMenu = false;
    }
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

function mobileMenu(){

    if(window.innerWidth < 996){

        nav.append(menu);

        flag = true;
    } else {

        menu.remove();
        flag = false;
    }
}

function closeAll(){

    // delete cover
    cover.remove();

    // hide mobile menu
    navUl.classList.remove('active');

    // hide mobile phones
    phoneUl.classList.remove('active');
    
    // set null
    clickPhone = false;

    // set null
    clickMenu = false;
}

// 2-09-2021