let boomSound: HTMLAudioElement
let clapSound: HTMLAudioElement
let hihatSound: HTMLAudioElement
let kickSound: HTMLAudioElement
let openhatSound: HTMLAudioElement
let rideSound: HTMLAudioElement
let sample1Sound: HTMLAudioElement
let sample2Sound: HTMLAudioElement
let sample3Sound: HTMLAudioElement
let sample4Sound: HTMLAudioElement
let sample5Sound: HTMLAudioElement
let sample6Sound: HTMLAudioElement
let sample7Sound: HTMLAudioElement
let snareSound: HTMLAudioElement
let tinkSound: HTMLAudioElement
let tomSound: HTMLAudioElement


const channel0: any[] = [];
const channel1: any[] = [];
const channel2: any[] = [];
const channel3: any[] = [];

const recordPlace: HTMLDivElement =  document.querySelector('#recordPlace');
const recordButton0: HTMLInputElement =  document.querySelector('#record0');
const recordButton1: HTMLInputElement =  document.querySelector('#record1');
const recordButton2: HTMLInputElement =  document.querySelector('#record2');
const recordButton3: HTMLInputElement =  document.querySelector('#record3');

const playChannelsButton: HTMLButtonElement = document.querySelector("#play");

  const chceckBoxesChannels: HTMLInputElement[] = [
    document.querySelector('#play0'),
    document.querySelector('#play1'),
    document.querySelector('#play2'),
    document.querySelector('#play3')
  ];



appStart();
//pobranie dzwieków i wyłapanie eventu kliku
function appStart(): void {
    getSounds();
    recordPlace.addEventListener('click', saveClickRecordButtonChannelTime);
    window.addEventListener('keypress', onKeyDown);
    playChannelsButton.addEventListener('click', playChcekedChannel);
    recordButton0.addEventListener('click', setCurrentTime);
    setCurrentTime();
}

let startTime = 0;

function setCurrentTime(){
    startTime = Date.now();
}


//graj wybrany kanał?
function playChcekedChannel()
{
    if (chceckBoxesChannels[0].checked) {
        onPlayChannel0();}

       if (chceckBoxesChannels[1].checked) {
        onPlayChannel1();}

       if (chceckBoxesChannels[2].checked) {
        onPlayChannel2();}

       if (chceckBoxesChannels[3].checked) {
        onPlayChannel3();
       }
}



function getSounds(): void{
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


function onKeyDown(ev: KeyboardEvent): void {
    recordChannel(ev);
}

function clickRecordButtonChannel(ev: MouseEvent): void {
    saveClickRecordButtonChannelTime(ev);
}

let startRecordingTime = 0;

function saveClickRecordButtonChannelTime(ev: MouseEvent): void {
    startRecordingTime = ev.timeStamp;
}

function recordChannel(ev: KeyboardEvent): void{
    
    const key = ev.key;
    const time = ev.timeStamp - startRecordingTime;
    playSound(key);


    if (recordButton0.checked) {
        channel0.push({key, time});
        console.log(channel0);
        
       } else if (recordButton1.checked) {
        channel1.push({key, time});
        console.log(channel1);

       } else if (recordButton2.checked) {
        channel2.push({key, time});
        console.log(channel2);

       } else if (recordButton3.checked) {
        channel3.push({key, time});
        console.log(channel3);
       }
}



function onPlayChannel0(): void{
    channel0.forEach(sound => {
        setTimeout(() => playSound(sound.key), sound.time)
    })
}

function onPlayChannel1(): void{
    channel1.forEach(sound => {
        setTimeout(() => playSound(sound.key), sound.time)
    })
}

function onPlayChannel2(): void{
    channel2.forEach(sound => {
        setTimeout(() => playSound(sound.key), sound.time)
    })
}

function onPlayChannel3(): void{
    channel3.forEach(sound => {
        setTimeout(() => playSound(sound.key), sound.time)
    })
}


function playSound(key: string){

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
        case 'a':sample3Sound.currentTime = 0;
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