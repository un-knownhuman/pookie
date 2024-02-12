async function sendMessageToDiscord() {
  try {
    const webhookURL = 'https://discord.com/api/webhooks/1206678283027222548/lJWl23BabL9GH7uvhlbmUChWOZ8rgdOHk_4qDKAcR9Nk3UY8RFEZsuACO0TBk7VJxjst';
    await sendMessage(webhookURL);
    alert('Message sent to Discord server!');
  } catch (error) {
    console.error('Error sending message:', error);
    alert('An error occurred while sending the message.');
  }
}

async function sendMessage(webhookURL) {
  const message = "He said yes";

  const payload = {
    content: message
  };

  const response = await fetch(webhookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error('Failed to send message to Discord');
  }
  changeImg()
}

async function sendMessageToDiscordno() {
  try {
    const webhookURL = 'https://discord.com/api/webhooks/1206678283027222548/lJWl23BabL9GH7uvhlbmUChWOZ8rgdOHk_4qDKAcR9Nk3UY8RFEZsuACO0TBk7VJxjst';
    await sendMessageno(webhookURL);
    alert('Message sent to Discord server!');
  } catch (error) {
    console.error('Error sending message:', error);
    alert('An error occurred while sending the message.');
  }
}

async function sendMessageno(webhookURL) {
  const message = "He tried saying no";

  const payload = {
    content: message
  };

  const response = await fetch(webhookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error('Failed to send message to Discord');
  }
  changeImg()
}



var imgInitial ="bear-heart.jpeg";
var imgFinal = "bear-dance.gif";
var textImgInitial="question.png";
var textImgFinal= "finally.png";
var noSparkle = "";
var sparkle = "sparkle.gif"

function moveButton() {
    var buttonNo = document.querySelector('.moving-button');
    var randomX = Math.floor(Math.random() *400);
    var randomY = Math.floor(Math.random() * 280);
    buttonNo.style.transform = `translate(${randomX}%, ${randomY}%)`;
    sendMessageToDiscordno()
}

function changeImg(){

    var imageElement1 = document.querySelector('.changeable-image');
    var imageElement2 = document.querySelector('.text-img')
    var buttons = document.querySelectorAll('.yes-button, .moving-button');
    
    buttons.forEach(function(button) {
        button.style.display = 'none';
    });
    
    imageElement1.src = imgFinal;
    imageElement2.src = textImgFinal;
    triggerConfetti();
}

window.onload = function(){
    imageElement1.src = imgInitial;
    imageElement2.src = textImgInitial;
    button.style.display= 'block'
}

