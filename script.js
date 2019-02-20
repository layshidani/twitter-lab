let tweetText = document.getElementById('tweet-text');
let feed = document.getElementById('feed');
let tweetbtn = document.getElementById('tweet-btn');
let showCounter = document.getElementById('counter');
let maxTextLength = 140;


function publishTweet() {
  let newP = document.createElement('p');
  newP.setAttribute('class', 'feed-post light-blue');
  newP.setAttribute('id', 'post-text');
  
  let textToPost = document.createTextNode(tweetText.value);

  newP.appendChild(textToPost);

  feed.insertBefore(newP, feed.childNodes[0]);

  eraseForm();
  tweetbtn.disabled = true;
}


function eraseForm() {
  document.getElementById("tweet-text").value = "";
  showCounter.textContent = maxTextLength;
}


function counterInit() {
  let charCounter = (maxTextLength - tweetText.value.length);

  showCounter.textContent = charCounter;

  if (charCounter === maxTextLength || charCounter < 0) {
    tweetbtn.disabled = true;
  } else {
    tweetbtn.disabled = false;
  }

  changeCounterColor();
}

function changeCounterColor() {
  if (tweetText.value.length > 130) {
    showCounter.setAttribute('class', 'counter red-counter');
  } else if (tweetText.value.length > 120 && tweetText.value.length <= 130) {
    showCounter.setAttribute('class', 'counter yellow-counter');
  } else {
    showCounter.setAttribute('class', 'counter blue-counter');
  }
}


tweetbtn.addEventListener('click', publishTweet, false);
tweetText.addEventListener('keyup', counterInit, false);