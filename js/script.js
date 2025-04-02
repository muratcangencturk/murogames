// Game data structure with the 50 selected games
const games = [
  {
    id: "sort-the-court",
    title: "Sort the Court!",
    description: "Give your decree in simple yes or no answers, and help the kingdom grow!",
    thumbnail: "images/games/sort-the-court.jpg",
    url: "https://graebor.itch.io/sort-the-court",
    genre: "Simulation"
  },
  {
    id: "polytrack",
    title: "PolyTrack",
    description: "A high speed low-poly racing game.",
    thumbnail: "images/games/polytrack.jpg",
    url: "https://kodub.itch.io/polytrack",
    genre: "Racing"
  },
  {
    id: "narrow-one",
    title: "Narrow One",
    description: "Capture The Flag Medieval Style",
    thumbnail: "images/games/narrow-one.jpg",
    url: "https://pelican-party.itch.io/narrow-one",
    genre: "Shooter"
  },
  {
    id: "we-become-what-we-behold",
    title: "We Become What We Behold",
    description: "A game about news cycles, vicious cycles, infinite cycles.",
    thumbnail: "images/games/we-become-what-we-behold.jpg",
    url: "https://ncase.itch.io/wbwwb",
    genre: "Simulation"
  },
  {
    id: "assessment-examination",
    title: "Assessment Examination",
    description: "Do YOU know what's real?",
    thumbnail: "images/games/assessment-examination.jpg",
    url: "https://wenderlygames.itch.io/assessment-examination",
    genre: "Interactive Fiction"
  },
  {
    id: "mr-magpies-harmless-card-game",
    title: "Mr. Magpie's Harmless Card Game",
    description: "Greed is Good.",
    thumbnail: "images/games/mr-magpies-harmless-card-game.jpg",
    url: "https://giant-light-studios.itch.io/mr-magpies-harmless-card-game",
    genre: "Card Game"
  },
  {
    id: "get-yoked",
    title: "GET YOKED: Extreme Bodybuilding",
    description: "Bodybuilding Roguelike Deckbuilder.",
    thumbnail: "images/games/get-yoked.jpg",
    url: "https://gregs-games.itch.io/get-yoked",
    genre: "Simulation"
  },
  {
    id: "incredibox-sprunki",
    title: "Incredibox - Sprunki",
    description: "A musical experience.",
    thumbnail: "images/games/incredibox-sprunki.jpg",
    url: "https://wolf-hal.itch.io/incredibox-sprunki",
    genre: "Rhythm"
  },
  {
    id: "die-in-the-dungeon",
    title: "Die in the Dungeon CLASSIC",
    description: "A turn-based, deck-building roguelike.",
    thumbnail: "images/games/die-in-the-dungeon.jpg",
    url: "https://alarts.itch.io/die-in-the-dungeon",
    genre: "Card Game"
  },
  {
    id: "myosotis",
    title: "Myosotis",
    description: "My life is not yours to take.",
    thumbnail: "images/games/myosotis.jpg",
    url: "https://frogcake.itch.io/myosotis",
    genre: "Visual Novel"
  },
  {
    id: "turbo-outrun-reimagined",
    title: "Turbo OutRun Reimagined",
    description: "A 3D cannonball rally racing game.",
    thumbnail: "images/games/turbo-outrun-reimagined.jpg",
    url: "https://sk1ds.itch.io/turbo-outrun-reimagined",
    genre: "Racing"
  },
  {
    id: "cupids-kiss",
    title: "Cupid's Kiss",
    description: "A short, romance comedy.",
    thumbnail: "images/games/cupids-kiss.jpg",
    url: "https://marysuegames.itch.io/cupids-kiss",
    genre: "Visual Novel"
  },
  {
    id: "requiems-echo",
    title: "Requiem's Echo",
    description: "In a nightmare town, you're the last defense.",
    thumbnail: "images/games/requiems-echo.jpg",
    url: "https://khywae.itch.io/requiems-echo",
    genre: "Visual Novel"
  },
  {
    id: "last-seen-online",
    title: "last seen online",
    description: "Look through a stranger's computer. A horror puzzle game.",
    thumbnail: "images/games/last-seen-online.jpg",
    url: "https://qwook.itch.io/last-seen-online",
    genre: "Puzzle"
  },
  {
    id: "handshakes",
    title: "Handshakes",
    description: "Achieve Connection Nirvana!",
    thumbnail: "images/games/handshakes.jpg",
    url: "https://pet-pumpkin.itch.io/handshakes",
    genre: "Puzzle"
  },
  {
    id: "how-to-date-an-entity",
    title: "How to Date an Entity",
    description: "How to Date an Entity (and stay alive).",
    thumbnail: "images/games/how-to-date-an-entity.jpg",
    url: "https://sfour.itch.io/how-to-date-an-entity",
    genre: "Visual Novel"
  },
  {
    id: "doma-days",
    title: "DOMA Days",
    description: "A perfectly normal day in the life of Agent ██████.",
    thumbnail: "images/games/doma-days.jpg",
    url: "https://agent-redacted.itch.io/doma-days",
    genre: "Visual Novel"
  },
  {
    id: "lookouts",
    title: "Lookouts",
    description: "A fateful meeting of queer outlaws in the desert.",
    thumbnail: "images/games/lookouts.jpg",
    url: "https://paranoidhawk.itch.io/lookouts",
    genre: "Visual Novel"
  },
  {
    id: "six-cats-under",
    title: "Six Cats Under",
    description: "You died. Your unfinished business? The fate of your many cats!",
    thumbnail: "images/games/six-cats-under.jpg",
    url: "https://team-bean-loop.itch.io/six-cats-under",
    genre: "Puzzle"
  },
  {
    id: "deepest-sword",
    title: "Deepest Sword",
    description: "Plunge your sword deep into the dragon's heart!",
    thumbnail: "images/games/deepest-sword.jpg",
    url: "https://cosmicadventuresquad.itch.io/deepest-sword",
    genre: "Puzzle"
  },
  {
    id: "intertwine",
    title: "intertwine",
    description: "A fated love: will you follow the string until it turns red?",
    thumbnail: "images/games/intertwine.jpg",
    url: "https://crescence.itch.io/intertwine",
    genre: "Visual Novel"
  },
  {
    id: "fatal-focus",
    title: "Fatal Focus",
    description: "This snapshot could be your last.",
    thumbnail: "images/games/fatal-focus.jpg",
    url: "https://catsket.itch.io/fatal-focus",
    genre: "Visual Novel"
  },
  {
    id: "little-chef",
    title: "Little Chef",
    description: "A fun and cute 2D physics-based cooking game.",
    thumbnail: "images/games/little-chef.jpg",
    url: "https://julien.itch.io/little-chef",
    genre: "Simulation"
  },
  {
    id: "cat-cafe",
    title: "an average day at the cat cafe",
    description: "Serve quirky customers as the days pass by.",
    thumbnail: "images/games/cat-cafe.jpg",
    url: "https://zephyo.itch.io/a-day-at-the-cat-cafe",
    genre: "Simulation"
  },
  {
    id: "trace",
    title: "TRACE: Definitive Edition DEMO",
    description: "The classic escape game is back.",
    thumbnail: "images/games/trace.jpg",
    url: "https://colorbomb.itch.io/trace-definitive-edition",
    genre: "Puzzle"
  },
  {
    id: "friday-night-funkin",
    title: "Friday Night Funkin'",
    description: "The coolest rhythm game.",
    thumbnail: "images/games/friday-night-funkin.jpg",
    url: "https://ninja-muffin24.itch.io/funkin",
    genre: "Rhythm"
  },
  {
    id: "chasing-control",
    title: "Chasing Control",
    description: "Tease, challenge, and push Sylus to his limits.",
    thumbnail: "images/games/chasing-control.jpg",
    url: "https://khywae.itch.io/chasing-control",
    genre: "Visual Novel"
  },
  {
    id: "cantata",
    title: "Cantata",
    description: "A low fantasy IF about song, strength, & finding your voice.",
    thumbnail: "images/games/cantata.jpg",
    url: "https://fir-and-fireweed.itch.io/cantata",
    genre: "Interactive Fiction"
  },
  {
    id: "trapped-with-jester",
    title: "Trapped with Jester",
    description: "You wake up in a carriage with an annoying stranger.",
    thumbnail: "images/games/trapped-with-jester.jpg",
    url: "https://anta.itch.io/trapped-with-jester",
    genre: "Visual Novel"
  },
  {
    id: "unleashed",
    title: "Unleashed",
    description: "I've always wanted to be someone's pet project.",
    thumbnail: "images/games/unleashed.jpg",
    url: "https://lunamakaio.itch.io/unleashed",
    genre: "Visual Novel"
  },
  {
    id: "soul-void",
    title: "Soul Void",
    description: "An atmospheric interactive fiction experience.",
    thumbnail: "images/games/soul-void.jpg",
    url: "https://kadabura.itch.io/soul-void",
    genre: "Interactive Fiction"
  },
  {
    id: "game-boy-homebrew",
    title: "Game Boy Homebrew",
    description: "Collection of Game Boy style mini-games.",
    thumbnail: "images/games/game-boy-homebrew.jpg",
    url: "https://ashe.itch.io/game-boy-homebrew",
    genre: "Retro"
  },
  {
    id: "cozy-games",
    title: "Cozy Games",
    description: "A collection of relaxing, cozy games.",
    thumbnail: "images/games/cozy-games.jpg",
    url: "https://daniducky42.itch.io/cozy-games",
    genre: "Collection"
  },
  {
    id: "play-on-web",
    title: "Play on web",
    description: "Various browser-based mini-games.",
    thumbnail: "images/games/play-on-web.jpg",
    url: "https://cl0wnc0rez.itch.io/play-on-web",
    genre: "Collection"
  },
  {
    id: "demonizer",
    title: "DEMONIZER",
    description: "A fast-paced bullet hell shooter.",
    thumbnail: "images/games/demonizer.jpg",
    url: "https://dps-games.itch.io/demonizer",
    genre: "Shooter"
  },
  {
    id: "bit-rat-singularity",
    title: "Bit Rat: Singularity",
    description: "Guide a rat through a high-tech facility.",
    thumbnail: "images/games/bit-rat-singularity.jpg",
    url: "https://bucket-drum-games.itch.io/bit-rat-singularity",
    genre: "Puzzle"
  },
  {
    id: "backspace-bouken",
    title: "Backspace Bouken",
    description: "Type to attack in this typing RPG.",
    thumbnail: "images/games/backspace-bouken.jpg",
    url: "https://rngpartygames.itch.io/backspace-bouken",
    genre: "RPG"
  },
  {
    id: "spooky-ghosts-dot-com",
    title: "Spooky Ghosts Dot Com",
    description: "A spooky platformer adventure.",
    thumbnail: "images/games/spooky-ghosts-dot-com.jpg",
    url: "https://neondeity.itch.io/spooky-ghosts-dot-com",
    genre: "Platformer"
  },
  {
    id: "hyperspace-dogfights",
    title: "Hyperspace Dogfights",
    description: "Jet-combat roguelike with a focus on mobility and improvisation.",
    thumbnail: "images/games/hyperspace-dogfights.jpg",
    url: "https://sleepycloud.itch.io/hyperspace-dogfights",
    genre: "Action"
  },
  {
    id: "roguelight",
    title: "Roguelight",
    description: "A roguelike platformer where light is your resource.",
    thumbnail: "images/games/roguelight.jpg",
    url: "https://managore.itch.io/roguelight",
    genre: "Platformer"
  },
  {
    id: "seedship",
    title: "Seedship",
    description: "A text-based game about finding a home for humanity.",
    thumbnail: "images/games/seedship.jpg",
    url: "https://john-ayliff.itch.io/seedship",
    genre: "Text Adventure"
  },
  {
    id: "a-dark-room",
    title: "A Dark Room",
    description: "A minimalist text adventure with a surprising depth.",
    thumbnail: "images/games/a-dark-room.jpg",
    url: "https://doublespeakgames.itch.io/a-dark-room",
    genre: "Text Adventure"
  },
  {
    id: "viridi",
    title: "Viridi",
    description: "A meditative potted plant growing simulator.",
    thumbnail: "images/games/viridi.jpg",
    url: "https://ice-water-games.itch.io/viridi",
    genre: "Simulation"
  },
  {
    id: "pixel-painter",
    title: "Pixel Painter",
    description: "A simple pixel art drawing application.",
    thumbnail: "images/games/pixel-painter.jpg",
    url: "https://lospec.itch.io/pixel-painter",
    genre: "Creative"
  },
  {
    id: "zen-puzzle-garden",
    title: "Zen Puzzle Garden",
    description: "Rake patterns in a zen garden.",
    thumbnail: "images/games/zen-puzzle-garden.jpg",
    url: "https://lexaloffle.itch.io/zen-puzzle-garden",
    genre: "Puzzle"
  },
  {
    id: "minesweeper-reverse",
    title: "Minesweeper: Reverse",
    description: "A reverse take on the classic Minesweeper.",
    thumbnail: "images/games/minesweeper-reverse.jpg",
    url: "https://scriptwelder.itch.io/minesweeper-reverse",
    genre: "Puzzle"
  },
  {
    id: "sokopp",
    title: "Soko++",
    description: "A modern take on Sokoban.",
    thumbnail: "images/games/sokopp.jpg",
    url: "https://krystman.itch.io/sokopp",
    genre: "Puzzle"
  },
  {
    id: "tetris-clone",
    title: "Tetris Clone",
    description: "A simple but addictive Tetris clone.",
    thumbnail: "images/games/tetris-clone.jpg",
    url: "https://literally-who.itch.io/tetris-clone",
    genre: "Puzzle"
  },
  {
    id: "2048",
    title: "2048",
    description: "Join the numbers and get to the 2048 tile!",
    thumbnail: "images/games/2048.jpg",
    url: "https://gabrielecirulli.itch.io/2048",
    genre: "Puzzle"
  },
  {
    id: "chess",
    title: "Chess",
    description: "Play chess online against the computer or other players.",
    thumbnail: "images/games/chess.jpg",
    url: "https://lichess.org",
    genre: "Strategy"
  }
];

// DOM elements
const gamesContainer = document.getElementById('games-container');

// Function to load games from the array
function loadGames() {
  try {
    renderGames();
  } catch (error) {
    console.error('Error loading games:', error);
    gamesContainer.innerHTML = '<div class="error">Failed to load games. Please try again later.</div>';
  }
}

// Function to render games in the grid
function renderGames() {
  if (games.length === 0) {
    gamesContainer.innerHTML = '<div class="loading">No games available yet. Check back soon!</div>';
    return;
  }

  let html = '';
  games.forEach(game => {
    html += `
      <div class="game-card">
        <img src="${game.thumbnail}" alt="${game.title}" class="game-thumbnail">
        <div class="game-info">
          <h3 class="game-title">${game.title}</h3>
          <p class="game-description">${game.description}</p>
          <a href="games/${game.id}.html" class="play-button">Play Now</a>
        </div>
      </div>
    `;
  });

  gamesContainer.innerHTML = html;
}

// Function to create a game page
function createGamePage(game) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${game.title} - MuroGames</title>
      <link rel="stylesheet" href="../css/style.css">
      <link rel="icon" href="../images/favicon.ico" type="image/x-icon">
    </head>
    <body>
      <header>
        <div class="container">
          <div class="logo">
            <a href="../index.html">
              <img src="../images/logo.png" alt="MuroGames Logo">
            </a>
          </div>
        </div>
      </header>

      <main>
        <div class="container">
          <a href="../index.html" class="back-button">← Back to Games</a>
          <div class="game-container">
            <iframe src="${game.url}" class="game-frame" allowfullscreen></iframe>
            <div class="game-details">
              <h1>${game.title}</h1>
              <p>${game.description}</p>
              <p>Genre: ${game.genre}</p>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div class="container">
          <p>&copy; 2025 MuroGames. All rights reserved.</p>
          <div class="footer-links">
            <a href="#">About Us</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="../admin/login.html">Admin</a>
          </div>
        </div>
      </footer>
    </body>
    </html>
  `;
}

// Function to add a new game
function addGame(game) {
  games.push(game);
  renderGames();
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  loadGames();
});
