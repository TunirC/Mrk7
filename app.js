var btnClick = document.querySelector("#btn-click");
var inputText = document.querySelector("#input-Text");
var outputText = document.querySelector("#output-Text");

var urlName = "https://api.funtranslations.com/translate/sith.json";

function exceptionHandler() {
    console.log("ERROR: ", error);
}

function onClickEvent(){
    var responseURL = urlName + "?" + "text=" + inputText.value;

    fetch(responseURL)
    .then(Response => Response.json())
    .then(json => outputText.innerText = json.contents.translated)
    .catch(exceptionHandler)

}

btnClick.addEventListener("click", onClickEvent)

