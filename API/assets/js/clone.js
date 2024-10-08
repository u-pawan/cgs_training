const clientId = '6fd10723c0454286ae22cb8f0a3cc140'; // Replace with your Spotify Client ID
const clientSecret = '6f02823d8b13471a9bc4fc2ba3d01e1b'; // Replace with your Spotify Client Secret

let token;

// Event listener for the search button
document.getElementById('search-button').addEventListener('click', async () => {
  const query = document.getElementById('search-query').value;
  if (!token) {
    await getAccessToken(); // Get access token if it's not already available
  }
  searchSongs(query); // Search for songs based on user input
});

// Function to get access token from Spotify API
async function getAccessToken() {
  const result = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
    },
    body: 'grant_type=client_credentials'
  });

  const data = await result.json();
  token = data.access_token;
}

// Function to search for songs
async function searchSongs(query) {
  const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=10`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  const data = await response.json();
  const tracks = data.tracks.items;
  const searchResults = document.getElementById('search-results');

  // Clear previous search results
  searchResults.innerHTML = '';

  if (tracks.length > 0) {
    // Create a card for each track
    tracks.forEach(track => {
      const card = document.createElement('div');
      card.classList.add('col');

      card.innerHTML = `
        <div class="card h-100">
          <img src="${track.album.images[0].url}" class="card-img-top" alt="Album cover">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${track.name}</h5>
            <p class="card-text">${track.artists.map(artist => artist.name).join(', ')}</p>
            <button class="btn btn-success mt-auto" onclick="playTrack('${track.preview_url}', '${track.name}', '${track.artists.map(artist => artist.name).join(', ')}', '${track.album.images[0].url}')">Play</button>
          </div>
        </div>
      `;

      searchResults.appendChild(card);
    });
  } else {
    searchResults.innerHTML = '<p class="text-center text-light">No tracks found. Try again.</p>';
  }
}

// Function to fetch random songs (e.g., from a popular or viral category)
async function fetchRandomSongs() {
  if (!token) {
    await getAccessToken(); // Get access token if it's not already available
  }

  // Fetch tracks from a popular Spotify category, such as 'Viral 50'
  const response = await fetch('https://api.spotify.com/v1/browse/categories/toplists/playlists?country=US', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  const data = await response.json();
  const playlist = data.playlists.items[0]; // Get the first popular playlist

  // Fetch tracks from that playlist
  const tracksResponse = await fetch(`https://api.spotify.com/v1/playlists/${playlist.id}/tracks`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  const tracksData = await tracksResponse.json();
  const tracks = tracksData.items;
  const searchResults = document.getElementById('search-results');

  // Clear previous search results
  searchResults.innerHTML = '';

  // Loop through tracks and display them as playable cards
  tracks.forEach(trackItem => {
    const track = trackItem.track; // Get the track details
    if (track.preview_url) { // Only display if the track has a preview URL
      const card = document.createElement('div');
      card.classList.add('col');

      card.innerHTML = `
        <div class="card h-100">
          <img src="${track.album.images[0].url}" class="card-img-top" alt="Album cover">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${track.name}</h5>
            <p class="card-text">${track.artists.map(artist => artist.name).join(', ')}</p>
            <button class="btn btn-success mt-auto" onclick="playTrack('${track.preview_url}', '${track.name}', '${track.artists.map(artist => artist.name).join(', ')}', '${track.album.images[0].url}')">Play</button>
          </div>
        </div>
      `;

      searchResults.appendChild(card);
    }
  });
}

// Function to play a selected track
function playTrack(previewUrl, trackName, artistName, albumCoverUrl) {
  document.getElementById('track-title').textContent = trackName;
  document.getElementById('artist-name').textContent = artistName;
  document.getElementById('album-cover').src = albumCoverUrl;
  document.getElementById('audio-player').src = previewUrl; // Play the song preview
  document.getElementById('audio-player').play();
}

// Call fetchRandomSongs when the page loads
document.addEventListener('DOMContentLoaded', () => {
  fetchRandomSongs(); // Fetch random songs when the page loads
});
