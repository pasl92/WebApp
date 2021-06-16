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
var channel1 = [];
var channel2 = [];
var channel3 = [];
var recordPlace = document.querySelector('#recordPlace');
var recordButton0 = document.querySelector('#record0');
var recordButton1 = document.querySelector('#record1');
var recordButton2 = document.querySelector('#record2');
var recordButton3 = document.querySelector('#record3');
var playChannelsButton = document.querySelector("#play");
var chceckBoxesChannels = [
    document.querySelector('#play0'),
    document.querySelector('#play1'),
    document.querySelector('#play2'),
    document.querySelector('#play3')
];
appStart();
//pobranie dzwieków i wyłapanie eventu kliku
function appStart() {
    getSounds();
    recordPlace.addEventListener('click', saveClickRecordButtonChannelTime);
    window.addEventListener('keypress', onKeyDown);
    playChannelsButton.addEventListener('click', playChcekedChannel);
    recordButton0.addEventListener('click', setCurrentTime);
    setCurrentTime();
}
var startTime = 0;
function setCurrentTime() {
    startTime = Date.now();
}
//graj wybrany kanał?
function playChcekedChannel() {
    if (chceckBoxesChannels[0].checked) {
        onPlayChannel0();
    }
    if (chceckBoxesChannels[1].checked) {
        onPlayChannel1();
    }
    if (chceckBoxesChannels[2].checked) {
        onPlayChannel2();
    }
    if (chceckBoxesChannels[3].checked) {
        onPlayChannel3();
    }
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
    recordChannel(ev);
}
function clickRecordButtonChannel(ev) {
    saveClickRecordButtonChannelTime(ev);
}
var startRecordingTime = 0;
function saveClickRecordButtonChannelTime(ev) {
    startRecordingTime = ev.timeStamp;
}
function recordChannel(ev) {
    var key = ev.key;
    var time = ev.timeStamp - startRecordingTime;
    playSound(key);
    if (recordButton0.checked) {
        channel0.push({ key: key, time: time });
        console.log(channel0);
    }
    else if (recordButton1.checked) {
        channel1.push({ key: key, time: time });
        console.log(channel1);
    }
    else if (recordButton2.checked) {
        channel2.push({ key: key, time: time });
        console.log(channel2);
    }
    else if (recordButton3.checked) {
        channel3.push({ key: key, time: time });
        console.log(channel3);
    }
}
function onPlayChannel0() {
    channel0.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
}
function onPlayChannel1() {
    channel1.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
}
function onPlayChannel2() {
    channel2.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
}
function onPlayChannel3() {
    channel3.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
}
function playSound(key) {
    switch (key) {
        case '1':
            boomSound.currentTime = 0;
            boomSound.play();
    }
    switch (key) {
        case '2':
            clapSound.currentTime = 0;
            clapSound.play();
    }
    switch (key) {
        case '3':
            hihatSound.currentTime = 0;
            hihatSound.play();
    }
    switch (key) {
        case '4':
            kickSound.currentTime = 0;
            kickSound.play();
    }
    switch (key) {
        case 'q':
            openhatSound.currentTime = 0;
            openhatSound.play();
    }
    switch (key) {
        case 'w':
            rideSound.currentTime = 0;
            rideSound.play();
    }
    switch (key) {
        case 'e':
            sample1Sound.currentTime = 0;
            sample1Sound.play();
    }
    switch (key) {
        case 'r':
            sample2Sound.currentTime = 0;
            sample2Sound.play();
    }
    switch (key) {
        case 'a':
            sample3Sound.currentTime = 0;
            sample3Sound.play();
    }
    switch (key) {
        case 's':
            sample4Sound.currentTime = 0;
            sample4Sound.play();
    }
    switch (key) {
        case 'd':
            sample5Sound.currentTime = 0;
            sample5Sound.play();
    }
    switch (key) {
        case 'f':
            sample6Sound.currentTime = 0;
            sample6Sound.play();
    }
    switch (key) {
        case 'z':
            sample7Sound.currentTime = 0;
            sample7Sound.play();
    }
    switch (key) {
        case 'x':
            snareSound.currentTime = 0;
            snareSound.play();
    }
    switch (key) {
        case 'c':
            tinkSound.currentTime = 0;
            tinkSound.play();
    }
    switch (key) {
        case 'v':
            tomSound.currentTime = 0;
            tomSound.play();
    }
}
