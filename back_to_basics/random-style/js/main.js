const allStyles = [
  {
    bg: "#ff0000",
    text: "#ffffff",
    font: "Franklin Gothic Medium"
  },
  {
    bg: "#ffff00",
    text: "#000000",
    font: "Gill Sans"
  },
  {
    bg: "#000",
    text: "#ffffff",
    font: "Calibri"
  },
  {
    bg: "#0000ff",
    text: "ffffff",
    font: "Arial"
  }
];

const containerDiv = document.querySelector(".container");
containerDiv.addEventListener("click", getRandomNum);
let colorNum = 0;

function setColor(i) {
  containerDiv.style.background = allStyles[i].bg;
  containerDiv.style.color = allStyles[i].text;
  containerDiv.style.fontFamily = allStyles[i].font;
}

//Get a Random Num
function getRandomNum() {
  let randomNum = Math.floor(Math.random() * allStyles.length);
  //Check the random Number so it's not dublicated
  checkRandomNum(randomNum);
  return randomNum;
}

function checkRandomNum(i) {
  if (i === colorNum) {
    getRandomNum();
  } else {
    colorNum = i;
    setColor(colorNum);
  }
}

getRandomNum();
