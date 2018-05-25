var button = document.querySelector("button");
var output = document.querySelector("#output");
button.addEventListener("click", counter);


var count = 0;



function counter() {
    count +=1;
    if (count < 0) {
        return;
    };
    output.innerHTML = count;
    setTimeout(counter, 100);
    console.log("works");
}


