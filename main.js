// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let hidden = document.querySelector('#modal')
let errorMessage = document.getElementById('modal-message');

hidden.className= "hidden";

document.addEventListener('DOMContentLoaded',()=>{
  let heart = document.querySelectorAll('.like-glyph');
  heart.forEach(item => item.addEventListener('click', (e) => {
    e.preventDefault();
    mimicServerCall() 








//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
        item.classList.remove('activated-heart')
        alert('remove')

      } else {
        resolve("Pretend remote server notified of action!");
        
        item.classList.add('activated-heart')
        alert('add')
        
      }
    }, 300);
  });
}
}))
})
