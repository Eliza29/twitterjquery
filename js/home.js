$(document).ready(function() {
  moment.locale('es');

  var time = moment().format('HH:mm');
  var tweetButton = $('#tweet-button');
  var twitterArea = $('textarea#twitter-area');
  var counterSpan = $('#counter-span');

  // añadiendo un parrafo y un texto
  tweetButton.on('click', addText);
  function addText() {
    var info = $.trim($('textarea#twitter-area').val()),
      contentTweet = $('textarea#twitter-area').val();
    if (info !== '') {
      $('#parentDiv').append(`<div class="bg-white p-2 mb-2"><p>${contentTweet}</p>
      <p class="times">${time}</p></div>`);
      $('textarea#twitter-area').val('');
      $(counterSpan).html(140);
    } 
  }
  twitterArea.on('keyup', counter);
  function counter() {
    var areaLength = twitterArea.val().length;
    var count = 140 - areaLength;
    counterSpan.html(count);
    
    if (areaLength > 110 && areaLength <= 120) {
      counterSpan.removeClass().addClass('color1');
    } else if (areaLength > 120 && areaLength <= 140) {
      counterSpan.removeClass().addClass('color2');
    } else {
      counterSpan.removeClass().addClass('color3');
    }
  }
});
