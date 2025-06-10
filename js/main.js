// DOM Elements
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('.site-nav');
const sections = document.querySelectorAll('.content-section');
const categoriesContainer = document.getElementById('category-buttons');
let categoryFilters;
const backButton = document.getElementById('back-button');
const likeButton = document.getElementById('like-button');
const shareButton = document.getElementById('share-button');
const fullscreenButton = document.getElementById('fullscreen-button');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const privacyLink = document.getElementById('privacy-link');
const termsLink = document.getElementById('terms-link');
const privacyModal = document.getElementById('privacy-modal');
const termsModal = document.getElementById('terms-modal');
const closePrivacy = document.getElementById('close-privacy');
const closeTerms = document.getElementById('close-terms');
const loadingScreen = document.getElementById('loading');

// Game containers
const featuredGamesContainer = document.getElementById('featured-games');
const allGamesContainer = document.getElementById('all-games');
const popularGamesContainer = document.getElementById('popular-games');
const newGamesContainer = document.getElementById('new-games');
const similarGamesContainer = document.getElementById('similar-games');

// Game detail elements
const gameTitle = document.getElementById('game-title');
const gameCategory = document.getElementById('game-category');
const gameFrame = document.getElementById('game-frame');
const gameDescription = document.getElementById('game-description');
const likeCount = document.getElementById('like-count');

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Load games
    loadGames();
    // Build category buttons
    renderCategoryButtons();
    
    // Show loading screen for 1 second to simulate loading
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 1000);
});

// Mobile menu toggle
mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
});

// Navigation
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = this.getAttribute('data-section');
        
        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Show target section
        document.getElementById(`${targetSection}-section`).classList.add('active');
        
        // Close mobile menu if open
        mobileMenu.classList.add('hidden');
        
        // Update URL hash
        window.location.hash = targetSection;
    });
});

// Attach click events to category buttons
function setupCategoryFilterListeners() {
    categoryFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            // Update active state
            categoryFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');

            // Filter games
            const category = this.getAttribute('data-category');
            filterGamesByCategory(category);
        });
    });
}

// Back button
backButton.addEventListener('click', function() {
    // Go back to home section
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById('home-section').classList.add('active');
});

// Like button
likeButton.addEventListener('click', function() {
    const currentLikes = parseInt(likeCount.textContent);
    likeCount.textContent = currentLikes + 1;
    
    // Toggle heart icon
    const heartIcon = likeButton.querySelector('i');
    heartIcon.classList.toggle('far');
    heartIcon.classList.toggle('fas');
    heartIcon.classList.toggle('text-red-500');
});

// Share button
shareButton.addEventListener('click', function() {
    // In a real implementation, this would open a share dialog
    alert('Share functionality would be implemented here!');
});

// Fullscreen button
fullscreenButton.addEventListener('click', function() {
    const gameContainer = gameFrame.parentElement;
    
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        gameContainer.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable fullscreen: ${err.message}`);
        });
    }
});

// Search functionality
searchButton.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// Modal functionality
privacyLink.addEventListener('click', function(e) {
    e.preventDefault();
    privacyModal.classList.remove('hidden');
});

termsLink.addEventListener('click', function(e) {
    e.preventDefault();
    termsModal.classList.remove('hidden');
});

closePrivacy.addEventListener('click', function() {
    privacyModal.classList.add('hidden');
});

closeTerms.addEventListener('click', function() {
    termsModal.classList.add('hidden');
});

// Close modals when clicking outside
window.addEventListener('click', function(e) {
    if (e.target === privacyModal) {
        privacyModal.classList.add('hidden');
    }
    if (e.target === termsModal) {
        termsModal.classList.add('hidden');
    }
});

// Load games function
function loadGames() {
    // Clear containers
    featuredGamesContainer.innerHTML = '';
    allGamesContainer.innerHTML = '';
    popularGamesContainer.innerHTML = '';
    newGamesContainer.innerHTML = '';
    
    // Load featured games
    games.filter(game => game.featured).forEach(game => {
        featuredGamesContainer.appendChild(createGameCard(game));
    });
    
    // Load all games
    games.forEach(game => {
        allGamesContainer.appendChild(createGameCard(game));
    });
    
    // Load popular games
    games.filter(game => game.popular).forEach(game => {
        popularGamesContainer.appendChild(createGameCard(game));
    });
    
    // Load new games
    games.filter(game => game.new).forEach(game => {
        newGamesContainer.appendChild(createGameCard(game));
    });
}

// Create game card
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card bg-gray-800 rounded-xl overflow-hidden shadow-lg transition';
    card.innerHTML = `
        <div class="relative overflow-hidden group">
            <img src="${game.image}" alt="${game.title}" loading="lazy" class="w-full h-48 object-cover transform group-hover:scale-110 transition duration-300">
            <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4">
                <span class="bg-blue-600 text-xs text-white px-2 py-1 rounded-full">${game.category}</span>
            </div>
        </div>
        <div class="p-4">
            <h3 class="text-lg font-bold mb-2">${game.title}</h3>
            <p class="text-gray-400 text-sm h-12 overflow-hidden">${game.description.substring(0, 60)}...</p>
            <div class="flex justify-between items-center mt-4">
                <span class="text-gray-400 text-sm"><i class="far fa-heart"></i> ${game.likes}</span>
                <button class="play-button bg-blue-600 hover:bg-blue-500 text-white px-4 py-1 rounded-lg text-sm" data-id="${game.id}">
                    Play Now
                </button>
            </div>
        </div>
    `;
    
    // Add event listener to play button
    card.querySelector('.play-button').addEventListener('click', function() {
        loadGame(game.id);
    });
    
    return card;
}

// Build category buttons based on game data
function renderCategoryButtons() {
    const categories = Array.from(new Set(games.map(g => g.category))).sort();
    categoriesContainer.innerHTML = '';

    const allBtn = document.createElement('button');
    allBtn.textContent = 'All Games';
    allBtn.dataset.category = 'all';
    allBtn.className = 'category-filter active px-4 py-2 rounded-full bg-gray-700 hover:bg-blue-500 transition';
    categoriesContainer.appendChild(allBtn);

    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.textContent = cat;
        btn.dataset.category = cat;
        btn.className = 'category-filter px-4 py-2 rounded-full bg-gray-700 hover:bg-blue-500 transition';
        categoriesContainer.appendChild(btn);
    });

    categoryFilters = document.querySelectorAll('.category-filter');
    setupCategoryFilterListeners();
}

// Filter games by category
function filterGamesByCategory(category) {
    // Clear all games container
    allGamesContainer.innerHTML = '';

    const selected = category.toLowerCase();

    // Filter and load games
    if (selected === 'all') {
        games.forEach(game => {
            allGamesContainer.appendChild(createGameCard(game));
        });
    } else {
        games
            .filter(game => game.category.toLowerCase() === selected)
            .forEach(game => {
                allGamesContainer.appendChild(createGameCard(game));
            });
    }
}

// Load specific game
function loadGame(gameId) {
    const game = games.find(g => g.id === gameId);
    
    if (!game) return;
    
    // Load game details
    gameTitle.textContent = game.title;
    gameCategory.textContent = game.category;
    gameFrame.src = game.url;
    gameDescription.textContent = game.description;
    likeCount.textContent = game.likes;
    
    // Load similar games (games in the same category)
    similarGamesContainer.innerHTML = '';
    games
        .filter(
            g =>
                g.category.toLowerCase() === game.category.toLowerCase() &&
                g.id !== game.id
        )
        .slice(0, 4)
        .forEach(similarGame => {
            similarGamesContainer.appendChild(createGameCard(similarGame));
        });
    
    // Show game section
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById('game-section').classList.add('active');
}

// Search functionality
function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (!searchTerm) return;
    
    // Clear all games container
    allGamesContainer.innerHTML = '';
    
    // Filter and load games that match search term
    const filteredGames = games.filter(game => 
        game.title.toLowerCase().includes(searchTerm) || 
        game.description.toLowerCase().includes(searchTerm) ||
        game.category.toLowerCase().includes(searchTerm)
    );
    
    if (filteredGames.length > 0) {
        filteredGames.forEach(game => {
            allGamesContainer.appendChild(createGameCard(game));
        });
    } else {
        allGamesContainer.innerHTML = `
            <div class="col-span-full text-center py-12">
                <p class="text-gray-400 text-lg mb-4">No games found matching "${searchTerm}"</p>
                <button id="reset-search" class="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg">
                    View All Games
                </button>
            </div>
        `;
        
        document.getElementById('reset-search').addEventListener('click', function() {
            // Reset category filters
            categoryFilters.forEach(f => f.classList.remove('active'));
            document.querySelector('[data-category="all"]').classList.add('active');
            
            // Reset search
            searchInput.value = '';
            loadGames();
        });
    }
    
    // Show home section
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById('home-section').classList.add('active');
}

// Check URL hash on page load
window.addEventListener('load', function() {
    const hash = window.location.hash.substr(1);
    if (hash) {
        const targetSection = document.getElementById(`${hash}-section`);
        if (targetSection) {
            sections.forEach(section => {
                section.classList.remove('active');
            });
            targetSection.classList.add('active');
        }
    }
});
