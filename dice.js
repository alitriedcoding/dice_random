const eventE = document.getElementById("buttonEl");
const diceElement = document.getElementById("diceEl");
const ulEl = document.getElementById("roll_history");

eventE.addEventListener("click", () => {
  diceElement.classList.add("roll_animation");
  setTimeout(() => {
    diceElement.classList.remove("roll_animation");
    rollresult();
  }, 1000);
});
const arr = [];
function rollresult() {
  const rand = Math.floor(Math.random() * 6 + 1);
  const func = change(rand);
  diceElement.innerHTML = func;
  arr.push(rand);
  upddatehistory();
}
function upddatehistory() {
  ulEl.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    const allement = document.createElement("li");
    allement.innerHTML = `Roll ${i + 1} <span>${change(arr[i])}</span>`;
    ulEl.appendChild(allement);
  }
}
function change(rand) {
  switch (rand) {
    case 1:
      return "&#9856;";
      break;
    case 2:
      return "&#9857;";
      break;
    case 3:
      return "&#9858;";
      break;
    case 4:
      return "&#9859;";
      break;
    case 5:
      return "&#9860;";
      break;
    case 6:
      "&#9861;";
      break;
    default:
      "invalid";
  }
}

