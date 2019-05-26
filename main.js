'use strict';

const square = document.getElementById('square');
const ball = document.getElementById('ball');

square.addEventListener('click', function(event) {
  
  const minLeft = square.offsetWidth - square.clientWidth + ball.clientWidth / 2;
  const minTop = square.offsetHeight - square.clientHeight + ball.clientHeight / 2;
  const maxLeft = square.offsetWidth - square.clientLeft - ball.clientWidth / 2;
  const maxTop = square.offsetHeight - square.clientTop -ball.clientHeight / 2;

  let left = event.clientX - ball.clientWidth / 2;
  let top = event.clientY - ball.clientHeight / 2;

  if(event.clientX < minLeft) {
    left = ball.clientWidth / 2;
  }

  else if(event.clientX > maxLeft) {
    left = square.clientWidth - ball.clientWidth / 2;
  }

  if(event.clientY < minTop) {
    top = ball.clientHeight / 2;
  }

  else if(event.clientY > maxTop) {
    top = square.clientHeight - ball.clientHeight / 2;
  }

  ball.style.left = `${left}px`;
  ball.style.top = `${top}px`;
    
  ball.classList.add('move');
})
