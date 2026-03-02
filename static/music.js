const audio = document.getElementById('audio-element');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const trackName = document.getElementById('track-name');

const playlist = [
    { name: "sewerslvt - ecifircas", src: "../assets/music/Sewerslvt _ Cynthoni - Ecifircas.flac" },
];

let currentTrack = 0;
let fadeInterval;

// CONFIGURACIÓN DE AUDIO
const MAX_VOLUME = 0.1; 
const FADE_STEP = 0.01;
const FADE_SPEED = 1000; 


function startFadeIn() {
    clearInterval(fadeInterval); 
    audio.volume = 0;
    
    fadeInterval = setInterval(() => {
        if (audio.volume < MAX_VOLUME) {
            // Incrementa el volumen sin pasarse del máximo
            audio.volume = Math.min(audio.volume + FADE_STEP, MAX_VOLUME);
        } else {
            clearInterval(fadeInterval);
        }
    }, FADE_SPEED);
}

// Función para cargar y actualizar el estado
function loadTrack(index) {
    currentTrack = index;
    audio.src = playlist[currentTrack].src;
    trackName.innerText = `now_playing: ${playlist[currentTrack].name}.exe`;
    // Reiniciamos volumen para el siguiente fade-in si ya estaba sonando
    if (!audio.paused) audio.volume = 0; 
}

// Play / Pause con control de Fade
playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.innerText = "pause";
        if (audio.volume === 0) startFadeIn();
    } else {
        audio.pause();
        playBtn.innerText = "play";
    }
});

// Siguiente canción
nextBtn.addEventListener('click', () => {
    currentTrack = (currentTrack + 1) % playlist.length;
    loadTrack(currentTrack);
    audio.play();
    playBtn.innerText = "pause";
    startFadeIn();
});

// Canción anterior
prevBtn.addEventListener('click', () => {
    currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrack);
    audio.play();
    playBtn.innerText = "pause";
    startFadeIn();
});

// Reproducción automática al terminar
audio.addEventListener('ended', () => {
    nextBtn.click();
});

// INICIO AUTOMÁTICO (Sujeto a políticas del navegador)
window.addEventListener('load', () => {
    loadTrack(currentTrack);
    // Intentar reproducir con fade-in al cargar
    audio.play().then(() => {
        playBtn.innerText = "pause";
        startFadeIn();
    }).catch(() => {
        console.log("Autoplay bloqueado: El usuario debe interactuar primero.");
    });
});

// Respaldo para navegadores que bloquean autoplay: Iniciar al primer clic
document.body.addEventListener('click', () => {
    if (audio.paused && audio.volume === 0) {
        audio.play();
        playBtn.innerText = "pause";
        startFadeIn();
    }
}, { once: true });