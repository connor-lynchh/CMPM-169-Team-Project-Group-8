document.addEventListener('DOMContentLoaded', function() {
    // const waifuIcon = document.getElementById('waifuIcon');
    const waifuIcon2 = document.getElementById('waifuIcon2');
    const waifuIcon3 = document.getElementById('waifuIcon3');
    const waifuIcon4 = document.getElementById('waifuIcon4');
    const waifuIcon5 = document.getElementById('waifuIcon5');
    const waifuIcon6 = document.getElementById('waifuIcon6');
    const audioElement = document.getElementById('bgMusic');
    const pauseBtn = document.getElementById('pauseBtn');

    const switchBtn = document.getElementById('switchBtn');
    var imageDisplay = document.getElementById('imageDisplay');

    var images = [
        "./assets/forest1.png",
        "./assets/forest2.jpeg",
        "./assets/forest3.jpeg",
        "./assets/forest4.jpeg",
        "./assets/nightTree.jpeg"
    ];
    
    var currentIndex = 0;

    switchBtn.addEventListener('click', function(){
        //cycle through array when click, very clever way
        currentIndex = (currentIndex + 1) % images.length;
        imageDisplay.src = images[currentIndex];
    });

    // waifuIcon.addEventListener('click', function(){
    //     audioElement.pause();
    //     audioElement.src = './assets/memory.ogg';
    //     audioElement.load();
    //     audioElement.play();//
    // })

    waifuIcon2.addEventListener('click', function(){
        audioElement.pause();
        audioElement.src = 'assets/audio/aStepAway.ogg';
        audioElement.load();
        audioElement.play();
    });
    waifuIcon3.addEventListener('click', function(){
        audioElement.pause();
        audioElement.src = 'assets/audio/forRiver.ogg';
        audioElement.load();
        audioElement.play();
    });
    waifuIcon4.addEventListener('click', function(){
        audioElement.pause();
        audioElement.src = 'assets/audio/dearest.ogg';
        audioElement.load();
        audioElement.play();
    });
    waifuIcon5.addEventListener('click', function(){
        audioElement.pause();
        audioElement.src = 'assets/audio/shenhua.ogg';
        audioElement.load();
        audioElement.play();
    });
    waifuIcon6.addEventListener('click', function(){
        audioElement.pause();
        audioElement.src = 'assets/audio/jiuyuansi.ogg';
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
    })
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

})