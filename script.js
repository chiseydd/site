const menuMobile = document.querySelector('.menu__mobile'),
      spansMenu = document.querySelectorAll('.menu__mobile-btn'),
      popupMenu = document.querySelector('.popup__menu'),
      popupItem = document.querySelectorAll('.popup__menu-item')[3],
      loginBtn = document.querySelector('.popup__menu-btn'),
      body = document.querySelector('body');

popupMenu.style.display = 'none';

menuMobile.addEventListener('click', () =>{
    popupMenu.style.display = 'block';
    menuMobile.classList.toggle('close__x');
    if(menuMobile.classList.contains('close__x') == false){
        popupMenu.style.display = 'none';
        spansMenu.forEach(item =>{
            item.classList.add('menu__mobile--close');
            item.classList.remove('menu__mobile--active');
            body.style.overflow = 'unset';
            menuOpen();
        });
    }else{
        spansMenu.forEach(i =>{
            i.classList.add('menu__mobile--active');
            i.classList.remove('menu__mobile--close');
            let answ = loginBtn.offsetTop - 260;
            popupItem.style.paddingBottom = `${answ}px`;
            popupItem.style.borderBottom = '1px solid #aaa';
            body.style.overflow = 'hidden';
            menuOpen();
        });
    }
});

function menuOpen(){
    let menuItems =  document.querySelectorAll('.popup__menu-item'),
        menuItemsMore = document.querySelectorAll('.popup__menu-more'),
        menuArrow = document.querySelectorAll('.arrow');
    console.log(menuItems);
    menuItems.forEach(item => {
        if(item.classList.contains('tee') || item.classList.contains('shop')){
            item.addEventListener('click', () =>{
                if(item.classList.contains('tee')){
                    menuItems.forEach(n =>{
                        if(!n.classList.contains('tee')){
                            n.classList.toggle('close');
                            menuArrow[0].classList.toggle('arrowUp');
                        }
                    });
                    menuItemsMore[0].classList.toggle('show');
                }else if(item.classList.contains('shop')){
                    menuItems.forEach(n =>{
                        if(!n.classList.contains('shop')){
                            n.classList.toggle('close');
                            menuArrow[1].classList.toggle('arrowUp');
                        }
                    });
                    menuItemsMore[1].classList.toggle('show');
                }
            });
        }
    });
}

const slides = document.querySelectorAll('.slider__item');
const dots = document.querySelectorAll('.dot');

function SetActive(i){
    for(slide of slides)
    slide.classList.remove('active');
    slides[i].classList.add('active');

    for(dot of dots)
    dot.classList.remove('active');
    dots[i].classList.add('active');
}

for(let j = 0; j < dots.length; j++){
    dots[j].addEventListener('click', () =>{
        SetActive(j);
    })
}

//reviews slider

let slideItems = document.querySelectorAll('.reviews__item'),
    reviewsDots = document.querySelectorAll('.reviews__dots-item'),
    windowInnerWidth = document.documentElement.clientWidth;

slideItems.forEach(item => {
    item.style.opacity = '0.5';
});

reviewsDots[1].style.backgroundColor = 'black';
slideItems[1].style.opacity = '1';

if(windowInnerWidth <= 1140){
    slideItems[0].style.visibility = 'hidden';
    slideItems[1].style.visibility = 'visible';
    slideItems[2].style.visibility = 'hidden';
}

const color = (itemCenter, first, second, thrid) =>{
    console.log('ffff');
    slideItems.forEach(item => {
        item.style.opacity = '0.5';
    });
    reviewsDots.forEach(dot => {
        dot.style.backgroundColor = '#fff';
    });
    slideItems[0].style.order = `${first}`;
    slideItems[1].style.order = `${second}`;
    slideItems[2].style.order = `${thrid}`;
    slideItems[itemCenter].style.opacity = '1';
    reviewsDots[itemCenter].style.backgroundColor = 'black';
};

const colorMin = (itemCenter, first, second, thrid) =>{
    console.log('bbb');
    slideItems.forEach(item => {
        item.style.opacity = '0.5';
    });
    reviewsDots.forEach(dot => {
        dot.style.backgroundColor = '#fff';
    });
    if(first == 2){
        slideItems[0].style.visibility = 'visible';
        slideItems[1].style.visibility = 'hidden';
        slideItems[2].style.visibility = 'hidden';
    }else if(second == 2){
        slideItems[0].style.visibility = 'hidden';
        slideItems[1].style.visibility = 'visible';
        slideItems[2].style.visibility = 'hidden';
    }else if(thrid == 2){
        slideItems[0].style.visibility = 'hidden';
        slideItems[1].style.visibility = 'hidden';
        slideItems[2].style.visibility = 'visible';
    }
    slideItems[0].style.order = `${first}`;
    slideItems[1].style.order = `${second}`;
    slideItems[2].style.order = `${thrid}`;
    slideItems[itemCenter].style.opacity = '1';
    reviewsDots[itemCenter].style.backgroundColor = 'black';
};

reviewsDots.forEach(dot => {
    dot.addEventListener('click', () =>{  
        if(windowInnerWidth <= 1140){
            let atr = dot.getAttribute('data-number');
            switch (atr){
                case '1':
                    colorMin(0, 2, 3, 1);
                    break;
                case '2':
                    colorMin(1, 1, 2, 3);
                    break;
                case '3':
                    colorMin(2, 3, 1, 2);
                    break;
            }
        }else{
            let atr = dot.getAttribute('data-number');
            switch (atr){
                case '1':
                    color(0, 2, 3, 1);
                    break;
                case '2':
                    color(1, 1, 2, 3);
                    break;
                case '3':
                    color(2, 3, 1, 2);
                    break;
            }
        }
    });
});

//search

const searchBtn = document.querySelector('.functions__search'),
      inputBlock = document.querySelector('.functions__search-input'),
      logo = document.querySelector('.logo'),
      parentFunctions = document.querySelector('.functions');

      
searchBtn.addEventListener('click', () =>{
    inputBlock.classList.toggle('show');
    logo.classList.toggle('close');
    searchBtn.classList.toggle('close');
    let inputClose = document.createElement('div');
    inputClose.classList.add('inputClose');
    parentFunctions.appendChild(inputClose);
    inputClose.addEventListener('click', () =>{
        inputBlock.classList.toggle('show'); 
        logo.classList.toggle('close');
        searchBtn.classList.toggle('close');
        inputClose.classList.add('close');
    });
});