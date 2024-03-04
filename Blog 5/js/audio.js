document.addEventListener('DOMContentLoaded', function() {
    const waifuIcon = document.getElementById('waifuIcon');
    const audioElement = document.getElementById('bgMusic');
    const pauseBtn = document.getElementById('pauseBtn');

    waifuIcon.addEventListener('click', function(){
        audioElement.pause();
        audioElement.src = './assets/memory.ogg';
        audioElement.load();
        audioElement.play();
    })

    pauseBtn.addEventListener('click', function(){
        if(!audioElement.paused){
            audioElement.pause();
        } else {
            audioElement.play();
        }
    })

})