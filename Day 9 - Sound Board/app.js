const sounds = ['x1', 'x2', 'x3', 'x4','x5', 'x6'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', function(){
        stopSounds();

        document.getElementById(sound).play()
    })

    document.querySelector('#buttons').appendChild(btn)
})

function stopSounds(){
    sounds.forEach(sound =>{
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;

    })
}