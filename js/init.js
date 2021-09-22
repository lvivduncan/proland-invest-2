// 1-09-2021


// small header
{
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {

        if(window.pageYOffset > 50){

            header.className = 'scroll';
        } else {

            header.className = '';
        }
    });
}

// menu, phones and modal-order
{
    const body = document.getElementsByTagName('body')[0];

    // create global element for phone and mobile menu and order-form
    const cover = document.createElement('div');
    cover.setAttribute('id', 'cover');

    // phone icon from nav
    const phone = document.getElementById('phone');

    // mobile phones
    const phoneUl = phone.getElementsByTagName('ul')[0];

    // check resize
    let flag = false;

    // check phone click
    let clickPhone = false;

    // check menu click
    let clickMenu = false;

        const order = document.getElementById('order');

        const form = document.getElementById('order-form');
        
        if(order !== null){

            // show/hide
            window.addEventListener('scroll', () => {
                if(window.pageYOffset < 50){
                    order.className = '';
                } else if(window.pageYOffset > 100) {
                    setTimeout( () => {
                        order.className = 'active';
                    }, 10);
                }
            });

            order.addEventListener('click', () => {

                // insert cover and wiev mobile menu
                body.append(cover);

                form.classList.add('active');
            });
        }       

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

        // close order form (if exists)
        form && form.classList.remove('active');
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

        // close order form (if exists)
        form && form.classList.remove('active');
    });

    document.addEventListener('click', e => {

        if(e.target.id === 'cover'){

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

        // hide order form
        form && form.classList.remove('active');
        
        // set null
        clickPhone = false;

        // set null
        clickMenu = false;
    }
}

// (auto) slider
{
    const slider = document.getElementById('slider');

    if(slider !== null){
        // slides includes img and title
        const slides = slider.querySelectorAll('article');

        // quantity
        const length = slides.length;

        let counter = 0;

        // get interval id
        let interval;

        // speed animation
        let speed = 6000;

        startSlides();

        for(let i = 0; i < length; i++){

            slides[i].addEventListener('mouseover', stopSlides);
            slides[i].addEventListener('mouseout', startSlides);
        }
    
        function startSlides(){

            interval = setInterval(() => {

                if(counter !== length-1){

                    counter++;
                    
                    for(let i = 0; i < length; i++){
            
                        for(let k = 0; k < length; k++){
                            slides[k].className = '';
                        }
            
                    }
                    slides[counter].className = 'active';

                } else {

                    counter = 0;
                    
                    for(let i = 0; i < length; i++){
            
                        for(let k = 0; k < length; k++){
                            slides[k].className = '';
                        }
            
                    }
                    slides[counter].className = 'active';

                }
            }, speed);
        }

        function stopSlides(){

            clearInterval(interval);
            // speed = 2000;
        }
    }
}

// (hot) swipe slider
{
    const hotSlider = document.querySelector('#hot-slider');

    if(hotSlider !== null){

        const slides = hotSlider.querySelectorAll('article');

        const left = document.createElement('div');
        left.className = 'left';

        // left arrow
        hotSlider.append(left);

        const right = document.createElement('div');
        right.className = 'right';

        // right arrow
        hotSlider.append(right);

        // arrows
        hotSlider.addEventListener('mouseover', () => {

            // show
            left.classList.add('active');
            right.classList.add('active');
        });

        // arrows
        hotSlider.addEventListener('mouseout', () => {

            // hide
            left.classList.remove('active');
            right.classList.remove('active');
        });

        for(let i = 0, length = slides.length; i < length; i++){

            // check drag
            let drag = false;

            // start drag pointer
            let start = 0;

            // finish drag pointer
            let finish = 0;

            // check shift
            let shift = 0;

            // check shift
            let flag = false;

            // create array shift translateX
            const translate = [];

            // fill array items
            for(let k = 0; k < slides.length; k++){
                translate.push(k * 100 - 100);
            }

            render();

            events();

            // to left
            left.addEventListener('click', () => {

                const first = translate.pop();
                translate.unshift(first);

                render();
            });
        
            // to right
            right.addEventListener('click', () => {
        
                const last = translate.shift();
                translate.push(last);

                render();
            });

            // keyboard
            document.addEventListener('keydown', event => {

                if(event.key === 'ArrowLeft' || event.code === 'ArrowLeft'){
                    
                    const first = translate.pop();
                    translate.unshift(first);
    
                    render();
                }
                
                if(event.key === 'ArrowRight' || event.code === 'ArrowRight'){
                    
                    const last = translate.shift();
                    translate.push(last);
    
                    render();
                }
            });

            function scrollStart(event){

                drag = true;
        
                this.classList.add('grabbing');
        
                // where they clicked
                start = event.pageX || event.touches[0].clientX;
            }
        
            function scrollMove(event){
        
                if(drag){
        
                    // where they dragged
                    finish = event.pageX || event.touches[0].clientX;
        
                    // if to left
                    if(finish - start < 0){
        
                        shift = finish - start;
        
                        if(flag === false){
        
                            flag = true;
                        }
                    } 
                    
                    // if to right
                    if(finish - start > 0) { 
        
                        shift = Math.abs(start - finish);
        
                        if(flag === false){
        
                            flag = true;
                        }
                    }
        
                    this.style.transform = `translateX(${shift}px)`;
                }
            }
        
            function scrollEnd(){
        
                if(drag){
                    
                    // to right
                    if(finish - start < 0){
                        
                        const first = translate.pop();
                        translate.unshift(first);
                    } 
            
                    // to left
                    if(finish - start > 0) {
                        
                        const last = translate.shift();
                        translate.push(last);
                    }
            
                    render();
            
                    // set null
                    drag = false;
            
                    // set null
                    flag = false;
            
                    this.classList.remove('grabbing');
                }
            }
            
            function render(){
                for(let i = 0; i < slides.length; i++){
        
                    if(translate[i] === 0){
                        slides[i].style.opacity = 1;
                    } else{
                        slides[i].style.opacity = 0;
                    }
                    
                    slides[i].style.transform = `translateX(${translate[i]}%)`;
                }
            }
        
            function events(){
                for(let i = 0; i < slides.length; i++){
                    slides[i].querySelector('img').addEventListener('dragstart', event => event.preventDefault());

                    slides[i].addEventListener('pointerdown', scrollStart);
                    slides[i].addEventListener('pointermove', scrollMove);
                    slides[i].addEventListener('pointerup', scrollEnd);
                    slides[i].addEventListener('pointercancel', scrollEnd);
                    slides[i].addEventListener('pointerleave', scrollEnd);

                }
            }
        }
    }

}

// parallax
{
    const wrapper = document.querySelector('.parallax-wrapper');

    if(wrapper !== null){

        const offsetTop = wrapper.offsetTop;

        const parallax = wrapper.querySelector('.parallax img');
            
        window.addEventListener('scroll', () => {
            
        const hightWindow = document.documentElement.clientHeight;

        const scroll = window.pageYOffset;

            if (hightWindow + scroll > offsetTop) {

                const offset = Math.round((hightWindow + scroll - offsetTop) / 3);

                parallax.style.transform = `translateY(-${offset}px)`;
            } else {

                parallax.removeAttribute('style');
            }
        });
    }        
    
}

// company
{
    // scroll
    const scroll = document.querySelectorAll('.levus-horizontal-scroll');

    scroll.forEach(item => {
        const ul = item.querySelector('ul');

        // elements
        let li = ul.querySelectorAll('li');

        // if less than 4, cloned 
        if (li.length <= 4) {

            // cloned and append elements
            li.forEach(element => ul.append(element.cloneNode(true)));

            // new nodelist
            li = item.querySelectorAll('li');
        }

        setInterval(() => {
            const ul = item.querySelector('ul');

            // move first element
            const first = ul.firstElementChild;
            ul.append(first);

            // destroy transition
            ul.style.transition = 'none';
            ul.classList.add('to-left');

            setTimeout(() => {
                ul.classList.remove('to-left');
                ul.style.transition = '.5s';
            }, 50);
         
        }, 3500);
        
    });
}

// flip
{
    const flip = document.querySelectorAll('.flip');
    const length = flip.length;

    for(let i = 0; i < length; i++){

        // mobile devices
        if(isTouchDevice()){

            flip[i].addEventListener('click', function(){

                const current = this;

                if(this.classList.contains('active')){

                    for(let k = 0; k < length; k++){
                        
                        flip[k].classList.remove('active');
                    }
                } else {

                    for(let k = 0; k < length; k++){
                        
                        flip[k].classList.remove('active');
                    }

                    current.classList.add('active');
                }
            });
        } else {

            flip[i].addEventListener('mouseover', function() {

                this.classList.add('active');
            });

            flip[i].addEventListener('mouseout', function(){

                this.classList.remove('active');
            });
        }
    }

    // check devices
    function isTouchDevice() {
        return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
    }
}

// 22-09-2021