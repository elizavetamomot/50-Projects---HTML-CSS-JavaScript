const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const progress = document.querySelector('#progress');
const circles = document.querySelectorAll('.circle');

let currentStep = 1;

next.addEventListener('click', function() {
    currentStep++
    if (currentStep > circles.length){
        currentStep = circles.length
    }
    update()
})

prev.addEventListener('click', function() {
    currentStep--
    if (currentStep < 1){
        currentStep = 1
    }
    update()
})

function update() {
    circles.forEach(function(circle, idx)  {
        if (idx < currentStep){
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        } 
    })

    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length - 1)/(circles.length - 1) * 100 + '%';

    if (currentStep === circles.length){
        next.disabled = true
    }else if (currentStep === 1) {
        prev.disabled = true
    } else {
        next.disabled = false
        prev.disabled = false
    }
}