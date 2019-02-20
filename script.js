let tweetText = document.getElementById('tweet-text');
let feed = document.getElementById('feed');
let tweetbtn = document.getElementById('tweet-btn');
let showCounter = document.getElementById('show-counter');
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


tweetbtn.addEventListener('click', publishTweet, false);
tweetText.addEventListener('keyup', counterInit, false);


function counterInit() {
  let charCounter = (maxTextLength - tweetText.value.length);

  showCounter.textContent = charCounter;

  if (charCounter === maxTextLength) {
    console.log('entrou nif');
    tweetbtn.disabled = true;
  } else {
    tweetbtn.disabled = false;
    console.log('entrou nelse');
  }
}
