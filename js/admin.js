// Admin panel functionality
document.addEventListener('DOMContentLoaded', function() {
  // Check if we're on the admin dashboard page
  const isDashboard = window.location.pathname.includes('dashboard.html');
  
  if (isDashboard) {
    // Load games into the admin panel
    loadGamesIntoAdminPanel();
    
    // Set up event listeners for admin actions
    setupAdminEventListeners();
  }
});

// Function to load games into the admin panel
function loadGamesIntoAdminPanel() {
  const tableBody = document.getElementById('games-table-body');
  if (!tableBody) return;
  
  // Get games from localStorage or use the default games array
  const storedGames = localStorage.getItem('murogames_games');
  const adminGames = storedGames ? JSON.parse(storedGames) : games;
  
  if (adminGames.length === 0) {
    tableBody.innerHTML = '<tr><td colspan="3">No games available yet.</td></tr>';
    return;
  }
  
  let html = '';
  adminGames.forEach(game => {
    html += `
      <tr data-id="${game.id}">
        <td>${game.title}</td>
        <td>${game.description.substring(0, 50)}${game.description.length > 50 ? '...' : ''}</td>
        <td>
          <button class="action-button edit-button" data-id="${game.id}">Edit</button>
          <button class="action-button delete-button" data-id="${game.id}">Delete</button>
        </td>
      </tr>
    `;
  });
  
  tableBody.innerHTML = html;
}

// Function to set up event listeners for admin actions
function setupAdminEventListeners() {
  // Add game form submission
  const addGameForm = document.getElementById('add-game-form');
  if (addGameForm) {
    addGameForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const gameId = document.getElementById('game-title').value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      
      const gameData = {
        id: gameId,
        title: document.getElementById('game-title').value,
        description: document.getElementById('game-description').value,
        url: document.getElementById('game-url').value,
        thumbnail: document.getElementById('game-thumbnail').value,
        genre: document.getElementById('game-genre').value || 'Other'
      };
      
      // Get existing games from localStorage or use the default games array
      const storedGames = localStorage.getItem('murogames_games');
      const adminGames = storedGames ? JSON.parse(storedGames) : games;
      
      // Add the new game
      adminGames.push(gameData);
      
      // Save back to localStorage
      localStorage.setItem('murogames_games', JSON.stringify(adminGames));
      
      alert('Game added successfully!');
      addGameForm.reset();
      
      // Refresh the games table
      loadGamesIntoAdminPanel();
    });
  }
  
  // Settings form submission
  const settingsForm = document.getElementById('settings-form');
  if (settingsForm) {
    settingsForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const settings = {
        title: document.getElementById('site-title').value,
        description: document.getElementById('meta-description').value,
        keywords: document.getElementById('meta-keywords').value
      };
      
      localStorage.setItem('murogames_settings', JSON.stringify(settings));
      
      alert('Settings saved successfully!');
    });
  }
  
  // Delete game buttons
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-button')) {
      const gameId = e.target.getAttribute('data-id');
      
      if (confirm('Are you sure you want to delete this game?')) {
        deleteGame(gameId);
      }
    }
  });
  
  // Edit game buttons
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('edit-button')) {
      const gameId = e.target.getAttribute('data-id');
      editGame(gameId);
    }
  });
  
  // Tab switching
  const tabButtons = document.querySelectorAll('.tab-button');
  if (tabButtons.length > 0) {
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const tabName = button.getAttribute('data-tab');
        
        // Deactivate all tabs
        tabButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        
        // Activate selected tab
        button.classList.add('active');
        document.getElementById(`${tabName}-tab`).classList.add('active');
      });
    });
  }
  
  // Logout functionality
  const logoutButton = document.getElementById('logout-button');
  if (logoutButton) {
    logoutButton.addEventListener('click', function() {
      localStorage.removeItem('adminLoggedIn');
      window.location.href = 'login.html';
    });
  }
}

// Function to delete a game
function deleteGame(gameId) {
  // Get existing games from localStorage or use the default games array
  const storedGames = localStorage.getItem('murogames_games');
  let adminGames = storedGames ? JSON.parse(storedGames) : games;
  
  // Filter out the game to delete
  adminGames = adminGames.filter(game => game.id !== gameId);
  
  // Save back to localStorage
  localStorage.setItem('murogames_games', JSON.stringify(adminGames));
  
  // Refresh the games table
  loadGamesIntoAdminPanel();
}

// Function to edit a game
function editGame(gameId) {
  // Get existing games from localStorage or use the default games array
  const storedGames = localStorage.getItem('murogames_games');
  const adminGames = storedGames ? JSON.parse(storedGames) : games;
  
  // Find the game to edit
  const game = adminGames.find(g => g.id === gameId);
  
  if (!game) {
    alert('Game not found!');
    return;
  }
  
  // Switch to the add game tab
  document.querySelector('[data-tab="add-game"]').click();
  
  // Fill the form with the game data
  document.getElementById('game-title').value = game.title;
  document.getElementById('game-description').value = game.description;
  document.getElementById('game-url').value = game.url;
  document.getElementById('game-thumbnail').value = game.thumbnail;
  if (document.getElementById('game-genre')) {
    document.getElementById('game-genre').value = game.genre;
  }
  
  // Change the form submission to update instead of add
  const addGameForm = document.getElementById('add-game-form');
  const submitButton = addGameForm.querySelector('button[type="submit"]');
  
  submitButton.textContent = 'Update Game';
  addGameForm.setAttribute('data-edit-id', gameId);
  
  // Override the form submission
  const originalSubmitHandler = addGameForm.onsubmit;
  addGameForm.onsubmit = function(e) {
    e.preventDefault();
    
    // Get the game ID being edited
    const editId = addGameForm.getAttribute('data-edit-id');
    
    // Get existing games from localStorage or use the default games array
    const storedGames = localStorage.getItem('murogames_games');
    const adminGames = storedGames ? JSON.parse(storedGames) : games;
    
    // Find the index of the game to update
    const gameIndex = adminGames.findIndex(g => g.id === editId);
    
    if (gameIndex === -1) {
      alert('Game not found!');
      return;
    }
    
    // Update the game data
    adminGames[gameIndex] = {
      id: editId,
      title: document.getElementById('game-title').value,
      description: document.getElementById('game-description').value,
      url: document.getElementById('game-url').value,
      thumbnail: document.getElementById('game-thumbnail').value,
      genre: document.getElementById('game-genre') ? document.getElementById('game-genre').value : 'Other'
    };
    
    // Save back to localStorage
    localStorage.setItem('murogames_games', JSON.stringify(adminGames));
    
    alert('Game updated successfully!');
    
    // Reset the form
    addGameForm.reset();
    submitButton.textContent = 'Add Game';
    addGameForm.removeAttribute('data-edit-id');
    addGameForm.onsubmit = originalSubmitHandler;
    
    // Refresh the games table
    loadGamesIntoAdminPanel();
    
    // Switch back to the games tab
    document.querySelector('[data-tab="games"]').click();
  };
}

// Apply site settings if available
function applySiteSettings() {
  const storedSettings = localStorage.getItem('murogames_settings');
  if (!storedSettings) return;
  
  const settings = JSON.parse(storedSettings);
  
  // Update document title
  if (settings.title) {
    document.title = settings.title;
  }
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && settings.description) {
    metaDescription.setAttribute('content', settings.description);
  }
  
  // Update meta keywords
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords && settings.keywords) {
    metaKeywords.setAttribute('content', settings.keywords);
  }
}

// Initialize site settings
document.addEventListener('DOMContentLoaded', function() {
  applySiteSettings();
});
