const inputSetNumber = document.querySelector("#set-number input");

const guessForm = document.querySelector("#guess-number");
const guessInput = document.querySelector("#guess-number input");

const resultText = document.querySelector("#result-text");
const valueText = document.querySelector("#value-text");
const lost = document.querySelector("#lost");
const won = document.querySelector("#won");

function handlePlayButton(event) {
  event.preventDefault();
  resultText.classList.add("hidden");
  lost.classList.add("lost-won");
  won.classList.add("lost-won");

  const guessValue = parseInt(guessInput.value);

  const settedValue = inputSetNumber.value;
  const randomValue = Math.ceil(Math.random() * settedValue);

  valueText.innerText = `You chose: ${guessValue}, the machine chose: ${randomValue}`;

  if (guessValue === randomValue) {
    resultText.classList.remove("hidden");
    won.classList.remove("lost-won");
    won.innerText = "You won!";
  } else if (guessValue !== randomValue) {
    resultText.classList.remove("hidden");
    won.classList.add("lost-won");
    lost.classList.remove("lost-won");
    lost.innerText = "You lost!";
  }
}

guessForm.addEventListener("submit", handlePlayButton);
