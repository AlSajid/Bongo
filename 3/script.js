var player = document.getElementById("video");


function play() {
    player.play();
    document.getElementById("play").disabled = true;
    document.getElementById("pause").disabled = false;
}

function pause() {
    player.pause();
    document.getElementById("play").disabled = false;
    document.getElementById("pause").disabled = true;
}

function forward () {
    player.currentTime =player.currentTime+5;
}

function rewind () {
    player.currentTime =player.currentTime-5;
}