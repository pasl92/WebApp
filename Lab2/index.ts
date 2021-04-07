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
const channel2: any[] = [];
const channel3: any[] = [];
const channel4: any[] = [];

appStart();


function appStart(): void {
    getSounds();
    window.addEventListener('keypress', onKeyDown);
    const btnPlayChannel0: any = document.querySelector('#play0');
    btnPlayChannel0.addEventListener('click', onPlayChannel0);
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
    console.log(ev);
    const key = ev.key;
    const time = ev.timeStamp;
    channel0.push({key, time});
    playSound(key);
    console.log(channel0);

}

function onPlayChannel0(): void{
    channel0.forEach(sound => {
        setTimeout(() => playSound(sound.key), sound.time)
    })
}

function playSound(key: string){

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