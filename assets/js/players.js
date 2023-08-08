function initServerData(){
    fetch('https://eu.mc-api.net/v3/server/ping/nikl-survival.mc.hostify.cz')
      .then(response => response.json())
      .then(data => handleServerStatus(data));
  
      function handleServerStatus(data){
        const playerCounter = document.getElementById("player-count-nikl");
        playerCounter.innerHTML = data.players.online;
      }
  }
  window.onload = function () {
    initServerData();
  }
