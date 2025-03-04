const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click',activeLink));



document.addEventListener('DOMContentLoaded', function() {
    const navigationLinks = document.querySelectorAll('.navigation ul li');

    navigationLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove 'active' class from all links
            navigationLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });
            // Add 'active' class to the clicked link
            this.classList.add('active');

            // Hide all sections
            const allSections = document.querySelectorAll('#home, #profile, #Minecraft, #settings,#settings #register,#settings #login');
            allSections.forEach(section => {
                section.style.display = 'none';
            });

            
            // Show the corresponding section
            const targetId = this.querySelector('a').getAttribute('href').substring(1);
            document.getElementById(targetId).style.display = 'block';
        });
    });
});

//minecraft ------------------------
const apiUrl = 'https://api.mcstatus.io/v2/status/java/play.rosewoodplace.ca';
function fetchServerData() {
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);

        // Update server info
        document.getElementById('onlineStatus').textContent = data.online ? 'Online 🟢' : 'Offline 🔴';
        document.getElementById('serverHost').textContent = data.host;

        // Update server version
        document.getElementById('versionName').textContent = data.version.name_raw;

        // Update server players
        document.getElementById('playersOnline').textContent = data.players.online;
        document.getElementById('playersMax').textContent = data.players.max;
               // Update players list - use <li> for each player
        const playersListElement = document.getElementById('playersList');
        playersListElement.innerHTML = '';  // Clear any existing list items
        
        if(data.mods && data.mods.lenght > 0 ) {
            const li = document.createElement('li');
            const modName = document.createElement('span');
            modName.textContent = mod;
             li.appendChild(modName);
                playersListElement.appendChild(li);
            });
          } else {
            const li = document.createElement('li');
            li.textContent = 'No active Mod';
            modListElement.appendChild(li);
        }

        if (data.players.list && data.players.list.length > 0) {
            data.players.list.forEach(player => {
                const li = document.createElement('li');
                const avatarUrl = `https://mc-heads.net/avatar/${player.name_clean}/100/nohelm.png`;

                // Create an img element for the player's avatar
                const img = document.createElement('img');
                img.src = avatarUrl;
                img.alt = `${player.name_clean}'s Avatar`;
                img.style.width = '30px';  // Set the avatar size
                img.style.height = '30px';
                img.style.marginRight = '10px';  // Space between avatar and name

                // Create a span for the player's name
                const playerName = document.createElement('span');
                playerName.textContent = player.name_clean;

                // Append the avatar image and name to the list item
                li.appendChild(img);
                li.appendChild(playerName);
                playersListElement.appendChild(li);
            });
        } else {
            const li = document.createElement('li');
            li.textContent = 'No players online';
            playersListElement.appendChild(li);
        }

        // Update server MOTD
        document.getElementById('motdRaw').textContent = data.motd.raw;

        // Update server icon (if available)
        const iconImage = document.getElementById('serverIconImage');
        if (data.icon) {
            iconImage.src = data.icon;
            const favicon = document.getElementById('favicon');
            favicon.href = data.icon;
        } else {
            iconImage.style.display = 'none'; // Hide the image element if no icon available
        }



    })
}
// Fetch data immediately when the page loads
fetchServerData();

// Set interval to fetch and refresh data every 10 seconds (10000 milliseconds)
setInterval(fetchServerData, 10000);
    


//Profile ------

// Assuming you have references to your elements
const creations = document.getElementById("creations");
const about = document.getElementById("about");
const showAbout = document.getElementById("showAbout");
const showCreations = document.getElementById("showCreations");

// Example profile data
const profileData = {
    displayName: 'N/A',
    username: 'N/A',
    profilePictureUrl: 'N/A',
    followersCount: 0,
    followingCount: 0,
  };
  
  // Function to update profile data
  function updateProfileData(data) {
    document.getElementById('title').textContent = data.displayName;
    document.getElementById('profile-picture').src = data.profilePictureUrl;
    document.getElementById('display-name').textContent = data.displayName;
    document.getElementById('username').textContent = `@${data.username}`;
    document.getElementById('followers-count').textContent = `Followers: ${data.followersCount}`;
    document.getElementById('following-count').textContent = `Following: ${data.followingCount}`;
  }
  
  // Initial update
  updateProfileData(profileData);
  


showAbout.addEventListener("click", () => {
    if (creations.style.display === "block") {
        creations.style.display = "none";
    }
    about.style.display = "block";
});

showCreations.addEventListener("click", () => {
    if (about.style.display === "block") {
        about.style.display = "none";
    }
    creations.style.display = "block";
});
