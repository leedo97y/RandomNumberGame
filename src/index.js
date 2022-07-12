const inputSetNumber = document.querySelector("#set-number input");

const guessForm = document.querySelector("#guess-number");
const guessInput = document.querySelector("#guess-number input");

function handleSetNumber(event) {
  //event.preventDefault();
  const value = event.target.value;
  console.log(value);
}

function handlePlayButton(event) {
  event.preventDefault();
  const guessValue = guessInput.value;
  console.log(guessValue);

  if (guessValue === inputSetNumber.value) {
    console.log("You won!");
  } else if (guessValue !== inputSetNumber.value) {
    console.log("you lost!");
  }
}

inputSetNumber.addEventListener("blur", handleSetNumber);
guessForm.addEventListener("submit", handlePlayButton);
