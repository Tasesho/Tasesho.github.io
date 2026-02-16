const gamesData = [
    {
        title: "Hollow Knight / Silksong",
        theme: "theme-hk",
        img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/0daf3933d392d7bb7c5a890917e20c917fcc458e/library_hero.jpg",
        category: "Casual games",
        desc: "These games are absolute masterpieces of the VideoGames in general. imo the bests Metroidvanias in the market, 100% recommended."
    },
    {
        title: "Persona 3R/4G/5R",
        theme: "theme-persona",
        img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1687950/library_hero.jpg",
        category: "Casual games",
        desc: "What a trilogy! An incredible experience where I developed deep empathy for the characters. Every minute of these 80hr journeys is worth it."
    },
    {
        title: "Satisfactory",
        theme: "theme-satisfactory",
        img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/526870/library_hero.jpg",
        category: "Casual games",
        desc: "Addicted? n-no... It's the definition of dopamine. Solving electricity or resource optimization issues rewards you with pure SATISFACTION."
    },
    {
        title: "Alan Wake",
        theme: "theme-alanwake",
        img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/108710/library_hero.jpg?t=1769717716",
        category: "Casual games",
        desc: "The Champion of the Light! An incredible character and story design that feels like a modern AA masterpiece."
    },
    {
        title: "League of Legends",
        theme: "theme-lol",
        img: "../assets/games/lol.jpg",
        category: "Competitive games",
        desc: "Retired now, but it stayed with me when I most needed. Master Yi [1.3M] and Kayn [990k] OTP. A strange, deep history."
    },
    {
        title: "Counter-Strike 2",
        theme: "theme-cs",
        img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/library_hero.jpg",
        category: "Competitive games",
        desc: "Currently playing CS2. I've loved shooters since my potato PC days. #bringbackCSGO"
    },
    {
        title: "Dead by Daylight",
        theme: "theme-dbd",
        img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/381210/64a90a166f4185f4ed4c3916a3ded08f5f6322f0/library_hero.jpg",
        category: "Competitive games",
        desc: "Kaneki main. I really love playing Kaneki, you can hate all you want, but nothing will change that."
    }
];

let currentIndex = 0;

function updateViewer(index) {
    const game = gamesData[index];
    const card = document.getElementById('games');
    
    card.className = `games-card ${game.theme}`;

    card.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${game.img}')`;

    document.getElementById('displayTitle').innerText = game.title;
    document.getElementById('displayDesc').innerText = game.desc;
    document.getElementById('displayCategory').innerText = game.category;
    document.getElementById('gameCounter').innerText = `${index + 1} / ${gamesData.length}`;
}

document.getElementById('nextGame').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % gamesData.length; 
    updateViewer(currentIndex);
});

document.getElementById('prevGame').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + gamesData.length) % gamesData.length;
    updateViewer(currentIndex);
});

document.addEventListener('DOMContentLoaded', () => updateViewer(0));

