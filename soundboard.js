function play(sound){
    var audio = document.getElementById("audio");
    audio.setAttribute('src', sound);
    audio.play();
}

window.addEventListener('keydown', function (event) {
    if (event.key == 'd') {
        document.getElementById("audio").play('sounds/blockhit.wav');
        audio.play();
    }
  });