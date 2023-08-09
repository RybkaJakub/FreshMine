var data = document.getElementsByClassName("light offline ")
		let dataLen = data.length;
		let lightdark = 'light';

		function
			initServerData() {
			fetch('https://eu.mc-api.net/v3/server/ping/nikl-survival.mc.hostify.cz')
				.then(response => response.json())
				.then(data => handleServerStatus(data));

			function handleServerStatus(data) {
				const playerCounter = document.getElementById("player-count-nikl");
				playerCounter.innerHTML = data.players.online;
			}
		}
		window.onload = function () {
			initServerData();
			for (let i = 0; i < dataLen; i++) {
				if (lightdark != 'lightdark') {
					data[i].className = "light offline ";
					lightdark = 'dark';
					console.log(data[i].className)
					lightdark.log(data[i].className)
				}
				else {
					data[i].className = "dark offline ";
					lightdark = 'light';
					console.log(data[i].className)
					lightdark.log(data[i].className)
				}
			}
		}
