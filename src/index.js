const inputSetNumber = document.querySelector("#set-number input");

function handleSetNumber(event) {
  event.preventDefault();
  const value = event.target.value;
  console.log(value);
}

inputSetNumber.addEventListener("blur", handleSetNumber);
