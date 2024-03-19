document.addEventListener('DOMContentLoaded', function() {
    const waifuIcon = document.getElementById('waifuIcon');
    const waifuIcon2 = document.getElementById('waifuIcon2');
    const waifuIcon3 = document.getElementById('waifuIcon3');
    const waifuIcon4 = document.getElementById('waifuIcon4');
    const waifuIcon5 = document.getElementById('waifuIcon5');
    const kikyo = document.getElementById('kikyoSama');
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

    // Function to play click sound
    function playClickSound() {
        var audio = new Audio('click.mp3');
        audio.play();
    }

    // Attach click sound event listener to body
    document.body.addEventListener('mousedown', playClickSound);
    
    waifuIcon.addEventListener('click', function(){
        audioElement.pause();
        audioElement.src = '../Blog 6/assets/audio/aStepAway.ogg';
        audioElement.load();
        audioElement.play();
    });

    waifuIcon2.addEventListener('click', function(){
        audioElement.pause();
        audioElement.src = './assets/memory.ogg';
        audioElement.load();
        audioElement.play();
    });

    waifuIcon3.addEventListener('click', function(){
        audioElement.pause();
        audioElement.src = '../Blog 6/assets/audio/forRiver.ogg';
        audioElement.load();
        audioElement.play();
    });

    waifuIcon4.addEventListener('click', function(){
        audioElement.pause();
        audioElement.src = '../Blog 6/assets/audio/yanling.ogg';
        audioElement.load();
        audioElement.play();
    });

    waifuIcon5.addEventListener('click', function(){
        audioElement.pause();
        audioElement.src = '../Blog 6/assets/audio/jiuyuansi.ogg';
        audioElement.load();
        audioElement.play();
    });

    kikyoSama.addEventListener('click', function(){
        audioElement.pause();
        audioElement.src = '../Blog 6/assets/audio/dearest.ogg';
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