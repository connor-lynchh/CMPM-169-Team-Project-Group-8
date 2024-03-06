document.addEventListener('DOMContentLoaded', function() {
    const waifuIcon = document.getElementById('waifuIcon');
    const audioElement = document.getElementById('bgMusic');
    const pauseBtn = document.getElementById('pauseBtn');

    const switchBtn = document.getElementById('switchBtn');
    var imageDisplay = document.getElementById('imageDisplay');

    var images = [
        "./assets/forest1.png",
        "./assets/forest2.jpeg",
        "./assets/forest3.jpeg",
        "./assets/forest4.jpeg",
        "./assets/skinwalker.jpg"
    ];
    
    var currentIndex = 0;

    switchBtn.addEventListener('click', function(){
        //cycle through array when click
        currentIndex = (currentIndex + 1) % images.length;
        imageDisplay.src = images[currentIndex];
    });

    waifuIcon.addEventListener('click', function(){
        audioElement.pause();
        audioElement.src = './assets/memory.ogg';
        audioElement.load();
        audioElement.play();
    });
    
    audioElement.load();
    audioElement.play();

    pauseBtn.addEventListener('click', function(){
        if(!audioElement.paused){
            audioElement.pause();
        } else {
            audioElement.play();
        }
    });
    //circumvent the broswer mute policy
    function playAudioOnMouseMove(){
        if(audioElement.paused){
            audioElement.play()
            .then(() => { })
            .catch(error => {
                console.error("Audio Playback failed:", error);
            });
            document.removeEventListener('mousemove', playAudioOnMouseMove);
        }
    }

    document.addEventListener('mousemove', playAudioOnMouseMove);

    

});