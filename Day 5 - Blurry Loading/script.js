const bg = document.querySelector('.bg');
const loadText = document.querySelector('.loading-text');

let load = 100;
let int = setInterval(blurring, 30);

function blurring() {
    load--

    if (load < 1){
        clearInterval(int)
    }

    loadText.innerText = `${load}%`;
    loadText.style.opacity = load * 0.01;
    bg.style.filter = `blur(${load}px)`;
}
