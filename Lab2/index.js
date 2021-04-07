var boomSound;
var clapSound;
var hihatSound;
var kickSound;
var openhatSound;
var rideSound;
var sample1Sound;
var sample2Sound;
var sample3Sound;
var sample4Sound;
var sample5Sound;
var sample6Sound;
var sample7Sound;
var snareSound;
var tinkSound;
var tomSound;
var channel0 = [];
var channel2 = [];
var channel3 = [];
var channel4 = [];
appStart();
function appStart() {
    getSounds();
    window.addEventListener('keypress', onKeyDown);
    var btnPlayChannel0 = document.querySelector('#play0');
    btnPlayChannel0.addEventListener('click', onPlayChannel0);
}
function getSounds() {
    boomSound = document.querySelector('[data-sound="boom"]');
    clapSound = document.querySelector('[data-sound="clap"]');
    hihatSound = document.querySelector('[data-sound="hihat"]');
    kickSound = document.querySelector('[data-sound="kick"]');
    openhatSound = document.querySelector('[data-sound="openhat"]');
    rideSound = document.querySelector('[data-sound="ride"]');
    sample1Sound = document.querySelector('[data-sound="sample1"]');
    sample2Sound = document.querySelector('[data-sound="sample2"]');
    sample3Sound = document.querySelector('[data-sound="sample3"]');
    sample4Sound = document.querySelector('[data-sound="sample4"]');
    sample5Sound = document.querySelector('[data-sound="sample5"]');
    sample6Sound = document.querySelector('[data-sound="sample6"]');
    sample7Sound = document.querySelector('[data-sound="sample7"]');
    snareSound = document.querySelector('[data-sound="snare"]');
    tinkSound = document.querySelector('[data-sound="tink"]');
    tomSound = document.querySelector('[data-sound="tom"]');
}
function onKeyDown(ev) {
    console.log(ev);
    var key = ev.key;
    var time = ev.timeStamp;
    channel0.push({ key: key, time: time });
    playSound(key);
    console.log(channel0);
}
function onPlayChannel0() {
    channel0.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
}
function playSound(key) {
    switch (key) {
        case '1':
            boomSound.play();
    }
    switch (key) {
        case '2':
            clapSound.play();
    }
    switch (key) {
        case '3':
            hihatSound.play();
    }
    switch (key) {
        case '4':
            kickSound.play();
    }
    switch (key) {
        case 'q':
            openhatSound.play();
    }
    switch (key) {
        case 'w':
            rideSound.play();
    }
    switch (key) {
        case 'e':
            sample1Sound.play();
    }
    switch (key) {
        case 'r':
            sample2Sound.play();
    }
    switch (key) {
        case 'a':
            sample3Sound.play();
    }
    switch (key) {
        case 's':
            sample4Sound.play();
    }
    switch (key) {
        case 'd':
            sample5Sound.play();
    }
    switch (key) {
        case 'f':
            sample6Sound.play();
    }
    switch (key) {
        case 'z':
            sample7Sound.play();
    }
    switch (key) {
        case 'x':
            snareSound.play();
    }
    switch (key) {
        case 'c':
            tinkSound.play();
    }
    switch (key) {
        case 'v':
            tomSound.play();
    }
}
