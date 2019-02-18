let tweet = document.getElementById('tweet').value
let tweetbtn = document.getElementById('tweet-btn')


let clearBox = document.getElementById('tweet').value



function publishTweet() {
  const author = 'Laboratoria'
  const postAuthor = document.createElement('h2')
  postAuthor.textContent = author
  
  const authorUsername = '@laboratoria'
  const postAuthorUsername = document.createElement('p')
  postAuthorUsername.textContent = authorUsername
  
  const tweetDate = Date().split(' ')[4]
  const postDate = document.createElement('p')
  postDate.textContent = tweetDate
  
  let hour = document.getElementsByClassName('hour')
  hour.textContent = tweetDate
  
  let tweetText = document.getElementById('newpost-text')
  let postTweet = document.createElement('p')
  postTweet.textContent = tweet
  
  newpost.appendChild(postAuthor)
  newpost.appendChild(postAuthorUsername)
  newpost.appendChild(postDate)
  newpost.appendChild(postTweet)
}

tweetbtn.addEventListener('click', publishTweet)





