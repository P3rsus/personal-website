if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.toggle('dark');
}

document.querySelectorAll('.nightmode').forEach( n => n.addEventListener('click', () => {
    document.body.classList.toggle('dark');
}));

document.querySelectorAll('.daymode').forEach( n => n.addEventListener('click', () => {
    document.body.classList.toggle('dark');
}));