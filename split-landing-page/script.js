const container = document.querySelector('.container');

const left = document.querySelector('.left');
const right = document.querySelector('.right');

left.addEventListener('mouseenter', a => {
    container.classList.add('hover-left');
});

left.addEventListener('mouseleave', a => {
    container.classList.remove('hover-left');
});

right.addEventListener('mouseenter', a => {
    container.classList.add('hover-right');
});

right.addEventListener('mouseleave', a => {
    container.classList.remove('hover-right');
});