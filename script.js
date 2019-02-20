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
  // newP.textContent = tweetText.value;

  newP.appendChild(textToPost);

  feed.insertBefore(newP, feed.childNodes[0])

  
  eraseForm();
}

function eraseForm() {
  document.getElementById("tweet-text").value = "";
}


tweetbtn.addEventListener('click', publishTweet, false);