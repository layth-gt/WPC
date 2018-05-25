const output = document.querySelector("#output");
const btn = document.querySelector("button");
const resetBtn = document.querySelector("#reset");
const timeList = document.querySelector("ul");
let i = null;
let stopWatch = [];
let repeat;
function counter() {
  i += 1;
  output.innerHTML = i;
}
btn.addEventListener("click", startCounter);
function startCounter() {
  if (btn.value === "Start") {
    btn.innerText = "Pause";
    btn.value = "Pause";
    repeat = setInterval(counter, 100);
    // debugger;
  } else {
    stopWatch.push(i);
    timeList.innerHTML += `<li>${i}</li>`;
    console.log(stopWatch);
    btn.innerText = "Start";
    btn.value = "Start";
    clearInterval(repeat);
  }
}

function resetWatch() {
  i = 0;
  timeList.innerHTML = "";
  output.innerHTML = "0";
}
resetBtn.addEventListener("click", resetWatch);
