const $ = e => document.querySelector(e);
const $$ = es => document.querySelectorAll(es);

var slider = $('.slider');
var step = 0;
setInterval(() => {
    if(step >= 100){
        step = 0;
    }
    slider.style.transform = 'translateX(-'+step+'%)'
    step+=0.1;
}, 5);

var down = $('.navDown');
var ul = $('nav > ul');
down.addEventListener('click', (e) => {
    if(down.querySelector('i').classList.contains('fa-chevron-down')){
        down.querySelector('i').classList.remove('fa-chevron-down');
        down.querySelector('i').classList.add('fa-chevron-up');
        ul.style.transform = 'translateY(0  )';
    }else{
        down.querySelector('i').classList.add('fa-chevron-down');
        down.querySelector('i').classList.remove('fa-chevron-up');
        ul.style.transform = 'translateY(-105%)';
    }
})