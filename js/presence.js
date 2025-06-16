async function getPresence() {
    try {
      const res = await fetch("https://api.astarri.space/user/193099922436784129"); // Use public URL if hosted
      const data = await res.json();
      const status = data.status;

      const avatar = document.getElementById("user-avatar");
      avatar.src = data.avatar_url;
      avatar.alt = `${data.username}#${data.discriminator}`;

      const username = document.getElementById("user-name");
      username.textContent = data.username;

      const displayname = document.getElementById("user-displayname");
      displayname.textContent = `${data.username}#${data.discriminator}`;
  
      const icon = document.getElementsByClassName("status")[0];
  
      switch (status) {
        case "online":
          icon.src = "img/statuses/online.png";
          break;
        case "idle":
          icon.src = "img/statuses/idle.png";
          break;
        case "dnd":
          icon.src = "img/statuses/dnd.png";
          break;
        default:
          icon.src = "img/statuses/offline.png";
      }
    } catch (error) {
      console.error("Error fetching presence:", error);
    }
  }
  
  getPresence();
  setInterval(getPresence, 60000); // Refresh every 30 sec
