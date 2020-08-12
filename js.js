window.onbeforeunload = () => window.scrollTo(0, 0);

const section = document.querySelectorAll('section');
const span = document.querySelectorAll('span');
const prev_btn = document.querySelectorAll('button')[0];
const next_btn = document.querySelectorAll('button')[1];

let last_animation = 0;
let duration = 1000;
let index = 0;
span[0].classList.add('show');

document.addEventListener('mousewheel', (e) => {
    let delta = e.wheelDelta;
    let realtime = new Date().getTime();

    if( realtime - last_animation < duration ) return;

    if( delta < 0 ) move_next();
    else move_prev();

    last_animation = realtime;
});

function move_next(){
    if( index > section.length - 2 ) return;
    span[index].classList.remove('show');
    index++;
    section[index].scrollIntoView({behavior:'smooth'});
    span[index].classList.add('show');
}

function move_prev(){
    if( index < 1 ) return;
    span[index].classList.remove('show');
    index--;
    section[index].scrollIntoView({behavior:'smooth'});
    span[index].classList.add('show');
}

prev_btn.addEventListener('click', () => {
    move_prev();
});
next_btn.addEventListener('click', () => {
    move_next();
});