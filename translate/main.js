const outputDiv = document.querySelector("#output");
const recordButton = document.querySelector(".record");

function displayData(data) {
  const [translation] = data.text;
  outputDiv.innerHTML = `<p>${translation}</p>`;

  const synth = window.speechSynthesis;
  const utterThis = new SpeechSynthesisUtterance(translation);
  utterThis.lang = "fr";
  synth.speak(utterThis);
}

function translate(words) {
  const BASE_URL = "https://translate.yandex.net/api/v1.5/tr.json/translate";
  const API_KEY =
    "trnsl.1.1.20180423T104000Z.92de8d60387621be.caaca061cc50ab7a5e1ed325c018e437dc26eef6";
  const PARAMS = `?key=${API_KEY}&text=${words}&lang=en-fr`;
  const URL = BASE_URL + PARAMS;
  return fetch(URL).then(res => res.json());
}

recordButton.addEventListener("click", function() {
  const recog = new webkitSpeechRecognition();
  recog.onresult = function(data) {
    const words = data.results[0][0].transcript;
    translate(words).then(displayData);
  };
  recog.start();
});