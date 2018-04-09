/*
Versión 0.0.4
Al presionar enter(/n) que crezca el textarea 
de acuerdo al tamaño del texto.
*/

window.addEventListener('load', function() {
  moment.locale('es');
  /* creando variables */
  var twitterArea = document.getElementById('twitter-area');
  var tweetButton = document.getElementById('tweet-button');
  tweetButton.disabled = true;
  
  /* Añadiendo un parrafo y un texto */
  tweetButton.addEventListener('click', addText); 
  function addText() {    
    if (twitterArea) {
      var parentDiv = document.getElementsByTagName('section')[0];
      var newDiv = document.createElement('div');
      var saveText = document.createElement('p');
      // añadiendo hora
      var time = document.createElement('div');
      
      newDiv.classList.add('styleDiv');
      saveText.classList.add('save');
      time.classList.add('time');

      parentDiv.appendChild(newDiv);
      newDiv.appendChild(saveText); 
      newDiv.appendChild(time);
      time.textContent = moment().format('HH:mm');; 
      saveText.txtContent = twitterArea.value;  
      
      twitterArea.value = '';
    }
  }
  /* Añadiendo el contador de caracteres */
  twitterArea.addEventListener('keyup', counter);
  
  function counter() {
    var counterBox = document.getElementsByTagName('span')[0];
    var count = 140;
    count = 140 - twitterArea.value.length; 
    counterBox.textContent = count;   
    /* habilitando el boton */
    if (twitterArea.value.length >= 1) {
      tweetButton.disabled = false;
    } 
    if (twitterArea.value.length > 120 && twitterArea.value.length <= 130) {
      counterBox.className = 'styleCount';   
    } else if (twitterArea.value.length > 130) {
      counterBox.className = 'styleCount2';
    } else {
      counterBox.className = 'styleCount3';
    }
  } 
  /* Desabilitando boton tweet */
  twitterArea.addEventListener('keyup', disableButton);
  function disableButton() {
    var textLength = twitterArea.value.length;
    if (textLength > 140) {
      tweetButton.disabled = true;
      tweetButton.classList.add('buttonDisable');
    } else if (textLength >= 1 && textLength <= 140) {
      tweetButton.className = 'tweet';
    }
  }
  /* haciendo crecer el box */
  twitterArea.addEventListener('keyup', changeSize);

  function changeSize() {
    var textLength = twitterArea.value.length;
    var enterSpace = /\n/;
    if (textLength >= 350) {
      twitterArea.classList.add('big-box'); 
    } else if (textLength < 350) {
      twitterArea.className = 'normal-box';
    } else if (twitterArea.value = enterSpace) {
      twitterArea.classList.add('big-box'); 
    }
  }
});    
