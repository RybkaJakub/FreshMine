async function sendContact(ev) {
    ev.preventDefault();
    const senderMessage = document
        .getElementById('hl1Input').value;
    const senderMessage1 = document
        .getElementById('hl2Input').value;
    const senderMessage2 = document
        .getElementById('hl3Input').value;
    const senderMessage3 = document
        .getElementById('hl4Input').value;
    const senderMessage4 = document
        .getElementById('hl5Input').value;
    const senderMessage5 = document
        .getElementById('hl6Input').value;
    const senderMessage6 = document
        .getElementById('hl7Input').value;
    const senderMessage7 = document
        .getElementById('hl8Input').value;
    const senderMessage8 = document
        .getElementById('hl9Input').value;
    const senderMessage9 = document
        .getElementById('hl10Input').value;
    const senderMessage10 = document
        .getElementById('hl11Input').value;
    const senderMessage11 = document
        .getElementById('hl12Input').value;
    const senderMessage12 = document
        .getElementById('hl13Input').value;
    const senderMessage13 = document
        .getElementById('hl14Input').value;

    const webhookBody = {
        embeds: [{
            title: 'Vanilla Whitelist',
            color: 16759552,
            fields: [{
                    name: '1) Tvůj herní nick (Pepa_z_Depa13)',
                    value: senderMessage
                },
                {
                    name: '2) Tvůj skutečný věk (14 let)',
                    value: senderMessage1
                },
                {
                    name: '3) Tvůj nick na discordu (Marco#3365) + Je povinnost být připojen na našem discordu [disc.freshmine.cz]',
                    value: senderMessage2
                },
                {
                    name: '4) Kdy jsi začal/a hrát Minecraft (verze postačí) a jak často hraješ?',
                    value: senderMessage3
                },
                {
                    name: '5) Odkud jsi se o nás dozvěděl/a? popř. od koho?',
                    value: senderMessage4
                },
                {
                    name: '6) Napiš něco málo o sobě např. své koníčky, jak trávíš volný čas, co tě baví apod. (alespoň 50 slov)',
                    value: senderMessage5
                },
                {
                    name: '7) Hrál/a už jsi na nějakém vanilla serveru? Pokud ano, jak dlouho?',
                    value: senderMessage6
                },
                {
                    name: '8) Jak plánuješ na serveru hrát? (např.: "Plánuji udělat redstone farmy a prodávat věci")',
                    value: senderMessage7
                },
                {
                    name: '9) Co uděláš, když umřeš a přijdeš o své věci?',
                    value: senderMessage8
                },
                {
                    name: '10) Jak se zachováš, když ti začne někdo nadávat?',
                    value: senderMessage9
                },
                {
                    name: '11) Co uděláš, když ti někdo vleze na pozemek, začne griefovat (ničit stavby) a krást tvoje věci?',
                    value: senderMessage10
                },
                {
                    name: '12) Dostal/a už jsi na nějakém serveru ban? Pokud ano tak za co?',
                    value: senderMessage11
                },
                {
                    name: '13) Napiš pár důvodů proč by jsi měl/a být přidán/a na whitelist',
                    value: senderMessage12
                },
                {
                    name: '14) Poznámky',
                    value: senderMessage13
                }
            ]
        }],
    };

    const webhookUrl = 'https://discord.com/api/webhooks/1069776277961183354/gJSruTrmYXOe5wZPzPVxaGAoBdwiMqMaYOpRu3y2oxIvmUTCKBdAbcWhPwyTLV2plr09';

    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookBody),
    });

    if (response.ok) {
        window.createNotification({
			closeOnClick: "true",
			displayCloseButton: "displayClose",
			positionClass: "nfc-top-right",
			showDuration: "3000",
			theme: "success"
		})({
			title: "Úspěch",
			message: "Přihláška byla odeslána"
		});
        playAudio()
        setTimeout(function() {
            window.open('./index.html',"_self");
        }, 3500);
          
    } else {
        window.createNotification({
			closeOnClick: "true",
			displayCloseButton: "displayClose",
			positionClass: "nfc-top-right",
			showDuration: "3000",
			theme: "error"
		})({
			title: "Chyba",
			message: "Nastala chyba. Kontaktuj nás pomocí ticketu na discordu."
		});
        playAudio()
    }
}

document.querySelector("form").addEventListener("submit", function(event) {
    var questions = document.querySelectorAll("input[type=text]");
    var errorMessage = document.getElementById("error");
    for (var i = 0; i < questions.length; i++) {
      if (!questions[i].value) {
        event.preventDefault();
        errorMessage.style.display = "block";
        return;
      }
    }
    errorMessage.style.display = "none";
    sendContact(event);
});

function pravidla() {
    var x = document.getElementById("pravidla");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 
