function publish() {
  let tweetText = document.getElementById('tweet-text').value;
  document.getElementById('post-text').innerHTML = tweetText;
  
  let postIt = document.getElementById('post-it');
  postIt.style.visibility = 'visible';

  eraseForm();
}

function eraseForm() {
  document.getElementById("tweet-text").value = "";
}

let tweetbtn = document.getElementById('tweet-btn');

tweetbtn.addEventListener('click', publish, false);

