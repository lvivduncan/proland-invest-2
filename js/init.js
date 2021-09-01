
// mobile phone
{
    const phone = document.getElementById('phone');
}


// mobile menu
{
    const nav = document.getElementById('nav');

    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');

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
}