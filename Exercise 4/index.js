// Hide a given element
function hide(element) {
    element.style.display = "none";
  }
  
  // Display a given element
  function show(element) {
    element.style.display = "block";
  }
  
  let valueInput = document.getElementById("passwordInput");
  const password = "1234";
  const wonView = document.getElementById("wonView");
  const lostView = document.getElementById("lostView");
  const passwordView = document.getElementById("passwordView");
  const tryAgain = document.getElementById("tryAgainButton");
  tryAgain.style.color = "white";
  tryAgain.style.fontSize = "1.5rem";
  tryAgain.style.fontWeight = "bold"
  let incorrectCount = 3;
  
  function checkPass() {
    if (valueInput.value == password) {
      // win
      show(wonView);
      hide(passwordView);
      hide(lostView);
    } else {
      hide(passwordView);
      show(lostView);
      incorrectCount -= 1; 
      console.log(incorrectCount);
      tryAgain.innerHTML = `Try again ! (${incorrectCount} chances left)`;
      if (incorrectCount == 0) {    
        tryAgain.remove();
        hide(tryAgain);
      }
    }
  }
  
  function backToInput() {
    show(passwordView);
    hide(lostView); 
  }