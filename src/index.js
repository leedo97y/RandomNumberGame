const inputSetNumber = document.querySelector("#set-number input");

function handleSetNumber(event) {
  console.log(event);
  console.log(event.target.value);
}

inputSetNumber.addEventListener("blur", handleSetNumber);
